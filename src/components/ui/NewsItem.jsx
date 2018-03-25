import React, { Component } from 'react'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const zeroPad = n => (n < 10 ? `0${n}` : n)
const formatDate = (rawDate) => {
  const date = new Date(rawDate)
  return `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())} on ${days[date.getDay()]} ${zeroPad(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()}`
}

class NewsItem extends Component {
  render() {
    const {
      title,
      author,
      description,
      urlToImage,
      publishedAt
    } = this.props.article

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <img src={urlToImage} className='newsitem-thumbnail' alt={title} />
          </div>
          <div className='col-sm-8 d-flex flex-column align-items-start'>
            <h5 className='newsitem-headline'>{title}</h5>
            <p className='newsitem-description'>{description}</p>
            <div className='mt-auto'>
              <p className='newsitem-info'>{author}</p>
              <p className='newsitem-info'>&nbsp;|&nbsp;</p>
              <p className='newsitem-info'>{formatDate(publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
