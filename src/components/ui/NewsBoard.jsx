import React, { Component } from 'react'

import NewsItem from './NewsItem'

class NewsBoard extends Component {
  render() {
    const { articles, error, loading } = this.props

    return (
      <div className='m-4'>
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

        <h3>In the news</h3>
        <div className='container-fluid board my-2'>
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
