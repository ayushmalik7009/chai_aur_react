import React, { useState, useEffect } from 'react';
import One from './components/One';
import './App.css';
import useCurrencyapi from './hooks/useCurrencyapi';

function App() {
  const [api, setApiData] = useState([]);
  const apiData = useCurrencyapi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ap = await apiData;
        setApiData(ap);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiData]);
console.log(api)
  if (!api.articles || api.articles.length === 0) {
    return <div>Loading...</div>;
  } 

  return (
    <div className='flex justify-between flex-wrap'>
      {api.articles.map((element) => {
        return (
          <div className="col-md-4" key={element.url}>
            <One name={element.title ? element.title : ""} para={element.description ? element.description : ""} url={element.urlToImage ? element.urlToImage : "https://images.freeimages.com/images/large-previews/34e/williamstown-1057646.jpg"} link={element.url}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
