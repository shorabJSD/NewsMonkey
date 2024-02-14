import './App.css';


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  //  apiKey = process.env.REACT_APP_SECRET_NAME;
  apiKey ='7951a08615844d53809ae2f940d92a3a';
  state={
    progress:0,
  }
 setProgress=(progress)=>{
  this.setState({
    progress:progress,
  });
 };

  render() {
   
    return (
      <div>
        <BrowserRouter>
        <NavBar/>

        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
          <Routes>
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'business'} pageSize={8} country="us" category="business"/>}/>
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'entertainment'} pageSize={8} country="us" category="entertainment"/>}/>
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'general'} pageSize={8} country="us" category="general"/>}/>
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'health'} pageSize={8} country="us" category="health"/>}/>
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'science'} pageSize={8} country="us" category="science"/>}/>
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'sports'} pageSize={8} country="us" category="sports"/>}/>
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'technology'} pageSize={8} country="us" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
        {/* <NavBar/>
        <News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={8} country="us" category="home"/> */}
      </div>
    )
  }
}












