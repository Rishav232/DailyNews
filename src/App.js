import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_API;
  const [progress, setProgress] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News progress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} category="general" />} />
          <Route exact path="/health" element={<News progress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} category="health" />} />
          <Route exact path="/science" element={<News progress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} category="science" />} />
          <Route exact path="/sports" element={<News progress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} category="sports" />} />
          <Route exact path="/technology" element={<News progress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} category="technology" />} />
          <Route exact path="/business" element={<News progress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} category="business" />} />
          <Route exact path="/entertainment" element={<News progress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} category="entertainment" />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App;
