import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
   let {myTitle, description, imageUrl} = this.props;
    return (
      <div>
         <div className="card" style={{width: '18rem'}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{myTitle}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetails" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
