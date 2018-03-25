import React, { Component } from 'react'

import axios from 'axios'

import { news } from '../../../../config/config.json'

import NewsBoard from '../../ui/news/NewsBoard'

class NewsBoardContainer extends Component {
  constructor() {
    super()

    this.state = {
      articles: [],
      error: null,
      loading: false
    }

    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    this.setState({ loading: true })

    const { apiKey } = news

    axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        sources: 'bbc-news,reuters',
        pageSize: 10,
        apiKey
      }
    })
      .then(response => this.setState({
        articles: response.data.articles,
        loading: false
      }))
      .catch(error => this.setState({
        error,
        loading: false
      }))
  }

  componentDidMount() {
    const { refreshInterval } = news
    this.loadData()

    const timer = setInterval(() => this.loadData(), refreshInterval || 480000)
    this.setState({ timer })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render() {
    const { articles, error, loading } = this.state

    return (
      <NewsBoard articles={articles} error={error} loading={loading} />
    )
  }
}

export default NewsBoardContainer
