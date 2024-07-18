import React from 'react'
import Header from '../Header/Header';

function LayOut({children}) {
  return (
    <dev>
      <Header />
      {children}
    </dev>
  );
}

export default LayOut