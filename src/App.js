import './App.css';
import { Fragment } from 'react';
import Header from './header';
import Main from './main';
import Card from './Cards';
import Footer from './footer';

function App() {

  return (
    <Fragment>
      <Header />
      <Main />
      <Card />
      <Footer />
    </Fragment>
  );
}

export default App;


// src={
//   process.env.PUBLIC_URL +
//   "/dresses1.jpg"
// }