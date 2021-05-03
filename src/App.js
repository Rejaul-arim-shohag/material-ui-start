// import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import News from './components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
   const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-04-03&sortBy=publishedAt&apiKey=d04b76268ec14571b63af2ca4de5b3f1';
    fetch(url)
    .then(response=>response.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    <div className="App">


      <h2>News Headline {articles.length}</h2>
      {
        articles.map(article=><News article={article}></News>)
      }
      </div>
  );
}

export default App;
