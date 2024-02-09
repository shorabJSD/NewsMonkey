import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
   let {myTitle, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
         <div className="card">
          <img src={!imageUrl?"https://w0.peakpx.com/wallpaper/205/620/HD-wallpaper-messi-cute-messi-cute-argentina-messi-2021-messi-argentina-messi-2018-messi-argentina-thumbnail.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{myTitle}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
    </div>
    )
  }
}
