import React from 'react';
import logo from './logo.svg';
import P from './P';

function App() {
  // const texts = [<p key={1}>hello</p>, <p key={2}>world</p>];

  // const texts = ['hello', 'worlds'].map((text, index) => <p key={index}>{text}</p>);

  // const texts = ['hello', 'worlds'].map((text, index) => (
  //   <p key={index} children={text} />
  const texts = ['hello', 'worlds'].map((text, index) => (
    <P key={index} children={text} />
  ));
  return <div>{texts}</div>;
}

export default App;
