import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AllTodos from './pages/all-todos';
// import TodaysTodo from './pages/todays-todo';
import NewTodo from './components/new-todo';
import Alert from './components/alert';
import AppNav from './components/app-nav';
import './App.css';

function App() {

  return (
    <Router>
      <div className="app">
        <Alert />
        <AppNav />
        <div className="app-container">
          <div className="app-left-pane">
            <NewTodo />
          </div>
          <div className="app-right-pane">
            <Switch>
              {/* <Route path="/todays-todo"> */}
              {/* <TodaysTodo /> */}
              {/* <div>Todos</div>
              </Route> */}
              <Route path="/">
                <AllTodos />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
