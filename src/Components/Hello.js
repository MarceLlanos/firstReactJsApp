import React from 'react';
const Hello = () => {
  // return(
    // <div className = 'dummyClass'>
    //   <h1>Hello Everybody</h1>
    // </div>
    //);
  return React.createElement('div', {id: 'hello', className: 'dummyClass'}, 
          React.createElement('h1', {id:'context'}, 'HELLO TO YOU MENSITO'));
}

export default Hello;