import './App.css';


import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
  //  apiKey = process.env.REACT_APP_SECRET_NAME;
  const apiKey ='7951a08615844d53809ae2f940d92a3a';
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <BrowserRouter>
        <NavBar/>

        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
          <Routes>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={'business'} pageSize={8} country="us" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={'entertainment'} pageSize={8} country="us" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={'general'} pageSize={8} country="us" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={'health'} pageSize={8} country="us" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={'science'} pageSize={8} country="us" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={'sports'} pageSize={8} country="us" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={'technology'} pageSize={8} country="us" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
        {/* <NavBar/>
        <News setProgress={setProgress} apiKey={apiKey}  pageSize={8} country="us" category="home"/> */}
      </div>
    )
}


export default App;








