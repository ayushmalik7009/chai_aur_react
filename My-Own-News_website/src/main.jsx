import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import CurrencyInfo from './Components/Api'
import Page from './Components/page'
import { Header } from './Header/Header';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <div>
  <Header/>
  <Page/>
  </div>
</Provider>
)
