import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrencyInfo } from './Slice';




function CurrencyInfo() {
  const dispatch = useDispatch();
  const cate = useSelector((state) => state.todos);
console.log(cate.id)
console.log(cate.category)
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cate.category}&apiKey=aff037a5cc9c4235a67463a2c2b617e3&page=1&&pageSize=12 `)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCurrencyInfo(data.articles));
        // console.log(data)
   
      });
  }, [cate.category]);


  return (
    <div>
      {/* <pre>{JSON.stringify(currencyData, null,4)}</pre> */}
    </div>
  );
}

export default CurrencyInfo;
