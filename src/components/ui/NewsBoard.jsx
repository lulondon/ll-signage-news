import React, { Component } from 'react'

import NewsItem from './NewsItem'

class NewsBoard extends Component {
  render() {
    const { articles, error, loading } = this.props

    return (
      <div>
        {
          error
          ? <div className='error'>{ error }</div>
          : null
        }
        {
          loading
          ? <div className='loading'>{ loading }</div>
          : null
        }
        {
          articles.map(article =>
            <NewsItem key={article.title} article={article} />)
        }
      </div>
    )
  }
}

export default NewsBoard
