import React, { useEffect, useState } from 'react'
import './App.css';
import News from './component/News/News';

function App() {

 const[ articles,setarticles]= useState([]);
  useEffect( ()=>{
    
    const url='https://newsapi.org/v2/everything?q=tesla&from=2023-05-09&sortBy=publishedAt&apiKey=80ff1b42c4204676b7308f33416e1b7a';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setarticles(data.articles))
    

  },[])

  return (
    <div >
      <h1>Headlines:{articles.length}</h1>
     
      {
        articles.map(article=> <News article= {article} ></News>)
      }
     
     

    </div>
  );
}

export default App;
