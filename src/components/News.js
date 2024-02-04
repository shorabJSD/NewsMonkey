import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component{

  constructor(){
    super();
    console.log("this contructor function");
  }


  render() {
    return (
      <div className='container my-3'>
        <h1 className='my-3'>NewsMonkey - Top </h1>
        <div className="row">
             <div className="col-md-4">
              <NewsItem myTitle="Headline" description="my description" imageUrl="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F75f52690-83bc-411d-88f5-9b8c8ce8bf87%2FSean_Abbott_Cricket_Australia__1_.jpg?rect=0%2C0%2C683%2C384&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"/>
             </div>
             <div className="col-md-4">
              <NewsItem myTitle="Headline" description="my description"/>
             </div>
             <div className="col-md-4">
              <NewsItem myTitle="Headline" description="my description"/>
             </div>
        </div>
      </div>
    )
  }
}



