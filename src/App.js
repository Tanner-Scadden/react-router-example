import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const FirstPage = () => (
  <div>
    <h1>This is the first page</h1>
    <Link to="/secondpage">Second Page</Link>
    <Link to="/thirdpage">Third Page</Link>
  </div>
)

const SecondPage = () => (
  <div>
    <h1>This is the second page</h1>
    <Link to="/">First Page</Link>
    <Link to="/thirdpage">Third Page</Link>
  </div>
)

const ThirdPage = () => (
  <div>
    <h1>This is the third page</h1>
    <Link to="/">First Page</Link>
    <Link to="/secondpage">Second Page</Link>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/secondpage" component={SecondPage}/>
      <Route path="/thirdpage" component={ThirdPage}/>
      <Route path="/" component={FirstPage}/>
    </Switch>
  </BrowserRouter>
)


export default App;
