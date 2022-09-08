import React from 'react'
import Rotas from './routes'
import Header from "./components/Header";
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export default function App() {
  return (
  <Provider store={store}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Rotas />
    </Router>
  </Provider>
   
  )
}
