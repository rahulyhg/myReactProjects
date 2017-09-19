import React, { Component } from 'react';
import A11 from './A11.js';

class App extends Component {
  render() {
    return (
      <div>
        <A11 name="Kate" age="22" gender="Female" city="San Jose" state="CA" country="USA"/>
        <A11 name="Carrie" age="23" gender="Female" city="Berkeley" state="CA" country="USA" />
        <A11 name="DJ" age="24" gender="Male" city="Freemont" state="CA" country="USA" />
        <A11 name="Tony" age="25" gender="Male" city="Emeryville" state="CA" country="USA" />
      </div>
    );
  }
}

export default App;
