import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';








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

capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props){
    super(props);
    this.state = {
       articles:[],
       loading:false,
       page:1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} -NewsMonkey`
  }

 updateUrl = async()=>{
  this.props.setProgress(0);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  this.props.setProgress(10);
  let data = await fetch(url);
   this.props.setProgress(50);
  let parsedData = await data.json();
  this.props.setProgress(80);

  this.setState({
    articles:parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false,
  });
  this.props.setProgress(100);

}



async componentDidMount(){
  this.updateUrl();
}


 fetchMoreData =async()=>{
  
  this.setState({
    page:this.state.page + 1,
  });
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles:this.state.articles.concat(parsedData.articles),
    totalResults:parsedData.totalResults,
  });

  }


  render() {
    return (
      <>
        <h1 className='my-3 text-center'>NewsMonkey - Top Heading {this.props.category} </h1>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row ">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-3 " key={element.url}>
                        <NewsItem myTitle={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl ={element.url} source={element.source.name} author={element.author} timeUpdate={element.publishedAt}/>
                     </div>
            })}
          </div>
          </div>
          </InfiniteScroll>
      </>
    )
  }
}

// Insta-amanphulia0



