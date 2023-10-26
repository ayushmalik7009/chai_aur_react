import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: { id: [
    {
      "source": {
      "id": null,
      "name": "Business Standard"
      },
      "author": "SI Reporter",
      "title": "Stock Market Live: Sensex drops 150 pts, Nifty below 19250; Infy, NTPC drag - Business Standard",
      "description": "Stock market live updates on October 25, 2023: Delta Corp jumped 5 per cent after the Bombay HC restrained DGGI Hyderabad's Rs 16,195 crore-tax notice against the company",
      "url": "https://www.business-standard.com/markets/news/stock-market-live-sensex-nifty-gift-nifty-delta-corp-crude-oil-tech-m-123102500067_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/21/full/1676957660-7806.jpg",
      "publishedAt": "2023-10-25T06:37:16Z",
      "content": "The broader markets turned flat after strong gains at the day's open. The BSE MidCap and SmallCap indices were down up to 0.07 per cent.  Delta Corp jumped 5 per cent after the Bombay HC directed DGG… [+115 chars]"
      }
  ], category: "General" },
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrencyInfo: (state, action) => {
      state.todos.id = action.payload; 
      // Assuming 'id' is a field in the API response
    },
    setCategory: (state, action) => {
      state.todos.category = action.payload;
    },
  },
});

export const { setCurrencyInfo, setCategory } = currencySlice.actions;
export default currencySlice.reducer;
