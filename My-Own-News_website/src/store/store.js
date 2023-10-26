import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../Components/Slice'; // Import your currency slice

const store = configureStore({
  reducer: currencyReducer

});

export default store;
