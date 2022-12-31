import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ApolloClient , ApolloProvider , InMemoryCache} from '@apollo/client'
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme'
import "./styles/fonts.css"
import "./styles/index.css"
const client=new ApolloClient({
  uri:"https://api-ca-central-1.hygraph.com/v2/cl80k2om70b2e01t9hbkdaz5e/master" ,
  cache:new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>  
   </ApolloProvider>
  </BrowserRouter>
);
