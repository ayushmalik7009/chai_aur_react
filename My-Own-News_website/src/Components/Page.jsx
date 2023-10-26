import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyInfo from '../Components/Api'
import Card from './Card';


function Page() {
  const currencyData = useSelector((state) => state.todos.id);

  return (
    
    <div className='flex mx-6 justify-between flex-row flex-wrap'>
      <CurrencyInfo />
     
      {Array.isArray(currencyData) ? (
        currencyData.map((element) => (
          <div className="flex my-6" key={element.url}>
            <Card
              title={element.title ? element.title : ''}
              description={element.description ? element.description : ''}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          </div>
        ))
      ) : (
        // Render an alternative UI or loading indicator while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Page;
