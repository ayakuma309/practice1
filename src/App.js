import './App.css';
import React from 'react';
import Preview from './components/previews/Preview';
import ListCategories from './components/list-categories/ListCategories';
import ListItems from './components/list-items/ListItems';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Preview/>
        <ListCategories />
        <ListItems />
      </div>
    </div>
  );
}

export default App;
