import React from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import Search from '../views/search'
import Home from '../views/home'
import Rank from '../views/rank'
//引入样式
import '../../assets/css/index.css'
class Index extends React.Component {
  render() {
    return (
      <div className="index">
      <div className='title'>
      <h1 className='tName'>优音乐</h1>
      </div>
      {/* 导航链接视图 */}
      <div className='tabBar'>
                    <NavLink activeClassName='select' to='/index/home'>推荐音乐</NavLink>
                    <NavLink activeClassName='select' to='/index/rank'>热歌榜</NavLink>
                    <NavLink activeClassName='select' to='/index/search'>搜索</NavLink>
                </div>
        {/* 二级路由出口 */}
        <Switch>
          < Route path='/index/home' component={Home}></Route>
          < Route path='/index/rank' component={Rank}></Route>
          < Route path='/index/search' component={Search}></Route>
          <Redirect to='/index/home'></Redirect>
        </Switch>
      </div>

    )
  }

}

export default Index;
