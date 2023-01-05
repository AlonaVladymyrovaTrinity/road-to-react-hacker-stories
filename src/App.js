import * as React from 'react'; 

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];

//const numbs = [1,2,3,4,5]; numbs.map(function(number) {return number*number;});

function App() { 
  const listItems = list.map(function(item) {
    return <li key = {item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
           </li>
  });

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {listItems}</ul>
    </div> 
    );
}

/* //another way how to list items
function listItem(item) {
  return <li>{item.title}</li>;
}

function App() { 
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map(listItem)}
      </ul>
    </div> 
    );
}*/

export default App;