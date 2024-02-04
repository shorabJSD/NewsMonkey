import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1 className='my-3'>NewsMonkey - Top Headline</h1>
        <div className="row">
             <div className="col-md-3">
              <NewsItem title="Headline" description="about cricket world"/>
             </div>
             <div className="col-md-3">
              <NewsItem title="Headline" description="about cricket world"/>
             </div>
             <div className="col-md-3">
              <NewsItem title="Headline" description="about cricket world"/>
             </div>
        </div>
      </div>
    )
  }
}



