import React, { Component } from 'react'

class NewsItem extends Component {
  render() {
    const {
      title,
      author,
      description,
      urlToImage,
      publishedAt 
    } = this.props.article

    console.log(this.props.article)

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3 mr-2'>
            <img src={urlToImage} alt={title} />
          </div>
          <div className='col-sm-9'>
            <h5 className='title'>{title}</h5>
            <p className='description'>{description}</p>
            <p className='author'>{author}</p>
            <p className='date'>{publishedAt}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
