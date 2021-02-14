import {Component} from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './Routes/Main'


class App extends Component {
  state = {
    redirect: false
}
render() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  </BrowserRouter>
    )
  }
}
export default App;