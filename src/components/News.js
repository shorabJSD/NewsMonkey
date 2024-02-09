import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';







export default class News extends Component{
articles = [
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
]



static defaultProps = {
  country: 'us',
  pageSize:8,
  category:"general"
}
static proptTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
  constructor(){
    super();
    this.state = {
       articles:[],
       loading:false,
       page:1
    }
  }

async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67b3952f470f43efbf6ac2362f47ef85&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles:parsedData.articles, 
    totalResults:parsedData.totalResults,
    loading:false,
  });
}

handlePrevClick = async()=>{
  console.log("previous");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67b3952f470f43efbf6ac2362f47ef85&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});  
  let data = await fetch(url);
  let parsedData = await data.json();


  this.setState({
    page:this.state.page - 1,
    articles:parsedData.articles,
    loading:false,
  })

}
handleNextClick = async ()=>{
  console.log("next");
  if((!this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize))){
    this.setState({loading:true})
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=67b3952f470f43efbf6ac2362f47ef85&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();

   this.setState({
    page:this.state.page + 1,
    articles:parsedData.articles,
    loading:false,
  })
  }
}

  render() {
    return (
      <div className='container my-3'>
        <h1 className='my-3 text-center'>NewsMonkey - Top Heading </h1>
        {this.state.loading && <Spinner/>}
          <div className="row ">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4 my-3 " key={element.url}>
                        <NewsItem myTitle={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl ={element.url}/>
                     </div>
            })}
          </div> 
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button"  onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
            <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
          </div>
      </div>
    )
  }
}

// Insta-amanphulia0



