import React, { Component } from 'react'

import NewsItem from './NewsItem'

class NewsBoard extends Component {
  render() {
    const { articles, error, loading } = this.props

    return (
      <div className='m-4'>
        <h3 className='board-page-header my-3'>In the news</h3>
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
        <div className='container-fluid my-2 board'>
            {
              articles.map(article =>
                <NewsItem key={article.title} article={article} />)
            }
        </div>
        <p className='board-attribution'>Powered by NewsAPI.org</p>
      </div>
    )
  }
}

export default NewsBoard
