import React from 'react'
import { NavLink } from 'react-router-dom'
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            bgImg: require('../../assets/images/bg.jpg'),
            rankList: [
                {
                    id: 1,
                    songName: '爸爸妈妈'
                },
                {
                    id: 2,
                    songName: '你走'
                },
                {
                    id: 3,
                    songName: '海底'
                },
                {
                    id: 4,
                    songName: '夏天的风'
                },
                {
                    id: 5,
                    songName: '传奇'
                }
            ]
        }
    }
    //封装一个动态路由跳转的方法
    //编程式导航
    goPlay(id){
        console.log(this,'rank')
        //this.props.history.push(`/play/${id}`)
        this.props.history.replace(`/play/${id}`)
    }
    render() {
        const { bgImg, rankList } = this.state
        return (
            <div>
                <div>
                    <img src={bgImg} alt="" />
                </div>
                <h1>我是rank路由</h1>
                <ul>
                    {
                        rankList.map(item => {
                            return <NavLink to={'/play/' +item.id} key={item.id}>
                                <li >
                                    <div>{item.id}</div>
                                    <div>{item.songName}</div>
                                </li>
                            </NavLink>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Rank