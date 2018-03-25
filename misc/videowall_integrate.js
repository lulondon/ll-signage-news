#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs-extra')

const { moduleName, sassImports } = require('../config/config.json')

const videowall = process.env.VIDEOWALL

const targetSass = `${videowall}/src/styles/main.scss`
const componentsUi = `src/components/ui/${moduleName}`
const componentsContainers = `src/components/containers/${moduleName}`
const styles = `src/styles/${moduleName}`


if (!videowall) {
  throw Error('$VIDEOWALL isn\'t set. Set this before proceeding.')
}

if (!fs.existsSync(videowall)) {
  throw Error(`${videowall} does not exist.`)
}

const videowallStats = fs.statSync(videowall)
if (!videowallStats.isDirectory()) {
  throw Error(`${videowall} is not a directory.`)
}

// Copy src
console.log(`[copy] ./${componentsUi} -> ${videowall}/${componentsUi}`)
fs.copy(`./${componentsUi}`, `${videowall}/${componentsUi}`, (err) => {
  if (err) throw Error(err)
})

console.log(`[copy] ./${componentsContainers} -> ${videowall}/${componentsContainers}`)
fs.copy(`./${componentsContainers}`, `${videowall}/${componentsContainers}`, (err) => {
  if (err) throw Error(err)
})

// copy styles
console.log(`[copy] ./${styles} -> ${videowall}/${styles}`)
fs.copy(`./${styles}`, `${videowall}/${styles}`, (err) => {
  if (err) throw Error(err)
})

// add to main.scss if not present
fs.readFile(targetSass, 'utf8', (readErr, data) => {
  if (readErr) throw Error(readErr)

  if (data.match(sassImports)) {
    console.log('[append] Sass @import statements...')
  } else {
    fs.appendFile(targetSass, sassImports, (appendErr) => {
      if (appendErr) throw Error(appendErr)
    })
  }
})
