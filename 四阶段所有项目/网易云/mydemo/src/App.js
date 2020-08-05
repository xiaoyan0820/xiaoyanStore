import React from 'react';
//import Home from './components/home'
 import Home from './components/home'
 //引入歌单详情组件
 import Detail from './components/detail'
 //引入播放组件
 import Play from './components/play'
 import {Switch,Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/play' component={Play}></Route>
        <Redirect to='/home'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
