import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import { Route, BrowserRouter} from 'react-router-dom';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Route exact path = '/' component={Home} />
        <Route path='/user/:id' component={UserProfile} />
    </BrowserRouter>
  </Provider>
);

export default App;
