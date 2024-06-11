import React from 'react';
import './index.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {

  

  return (
    <div className='bg-gradient-to-t from-slate-500 to-slate-800 min-h-screen text-white px-8 py-8 md:px-20 md:py-16 lg:px-32 lg:py-16 xl:px-56 xl:py-16'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}


export default App;
