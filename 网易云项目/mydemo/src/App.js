import React from 'react';
import './App.css';
//引入全局样式
import './assets/css/resect.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './components/pages/index'
import Play from './components/pages/play'
import List from './components/pages/list'
class App extends React.Component {
  render() {
    return (
      <div className="app">
       
        {/* 一级路由出口 */}
        <Switch>
          < Route path='/index' component={Index}></Route>
          {/* < Route path='/play/:id' component={Play}></Route> */}
          < Route path='/play' component={Play}></Route>
          < Route path='/list' component={List}></Route>
          <Redirect to='/index/home'></Redirect>
        </Switch>
      </div>

    )
  }

}

export default App
