import React, { Component } from 'react'

const zeroPad = n => (n < 10 ? `0${n}` : n)
const formatDate = (rawDate) => {
  const date = new Date(rawDate)
  return `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())} on ${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}`
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
              <p className='newsitem-info'>{author}, </p>
              <p className='newsitem-info'>Last updated at {formatDate(publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
