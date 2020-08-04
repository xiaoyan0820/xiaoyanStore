import React from 'react'
import '../../assets/css/rank.css'
import { NavLink } from 'react-router-dom'
//引入接口文件
import { getHotList } from '../../utils/axios'
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            hottime: 0,
            bgImg: require('../../assets/images/hot_music_bg_2x.jpg'),
            rankList: [
                // {
                //     id: 1,
                //     songName: '爸爸妈妈',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 2,
                //     songName: '你走',
                //     singer: '松紧先生（李宗锦-你走'
                // },
                // {
                //     id: 3,
                //     songName: '海底',
                //     singer: '一只榴莲-独'
                // },
                // {
                //     id: 4,
                //     songName: '收敛',
                //     singer: '不够-收敛'
                // },
                // {
                //     id: 5,
                //     songName: '丢了你',
                //     singer: '景眬-丢了你'
                // },
                // {
                //     id: 6,
                //     songName: '爱，存在',
                //     singer: '卢卢快闭嘴-爱，存在'
                // },
                // {
                //     id: 7,
                //     songName: '官方回答',
                //     singer: 'O.WEN-官方回答'
                // },
                // {
                //     id: 8,
                //     songName: '夏天的风',
                //     singer: '火羊瞌睡了-夏天的风'
                // },
                // {
                //     id: 9,
                //     songName: '无人之岛',
                //     singer: '任然-没有发生的爱情'
                // },
                // {
                //     id: 10,
                //     songName: '传奇',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 11,
                //     songName: '爸爸妈妈',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 12,
                //     songName: '你走',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 13,
                //     songName: '海底',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 14,
                //     songName: '夏天的风',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 15,
                //     songName: '传奇',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 16,
                //     songName: '爸爸妈妈',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 17,
                //     songName: '你走',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 18,
                //     songName: '海底',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 19,
                //     songName: '夏天的风',
                //     singer: '李荣浩-有理想'
                // },
                // {
                //     id: 20,
                //     songName: '传奇',
                //     singer: '李荣浩-有理想'
                // }
            ]
        }
    }
    componentDidMount() {
        this.gethotlist()
    }
    //封装一个时间转化函数
    formatTime(timer) {
        let date = new Date(timer)
        //年份
        let year = date.getFullYear()
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        //天数
        let day = (date.getDate() + '').padStart(2, '0')
        //小时
        let hours = (date.getHours() + '').padStart(2, '0')
        //分钟
        let minutes = (date.getMinutes() + '').padStart(2, '0')
        //秒数
        let seconds = (date.getSeconds() + '').padStart(2, '0')
        return `${month}月${day}日`
    }
    //获取热歌榜事件
    gethotlist() {
        getHotList()
            .then(res => {
                if (res.code == 200) {
                    //对返回列表进行过滤
                    let hotList = res.playlist.tracks.filter((item, i) => i < 20)
                    console.log(hotList, '热歌榜列表')
                    this.setState({
                        hottime: res.playlist.updateTime,
                        rankList: hotList
                    })
                }
            })
    }
    //编程式导航
    //封装一个动态路由跳转的方法
    // goPlay(id) {
    //     console.log(this, 'rank')
    //     //this.props.history.push(`/play/${id}`)
    //     this.props.history.replace(`/play/${id}`)
    // }
    //封装一个query跳转的方法
    // goPlay1(id) {
    //     this.props.history.replace(`/play?id = ${id}`)
    // }
    render() {
        const { bgImg, rankList, hottime, } = this.state
        return (
            <div className='content'>
                <div className='bg'>
                    <div className='bgLeft'>
                        <div className='title'></div>
                        <div className='hottime'>更新日期：{this.formatTime(hottime)}</div>
                    </div>
                </div>
                <ul className='songsList'>
                    {
                        rankList.map(item => {

                            // return <NavLink to={'/play?id=' +item.id + '&name=' + item.songName}  key={item.id}>
                            //     <li >
                            //         <div>{item.id}</div>
                            //         <div>{item.songName}</div>
                            //     </li>
                            // </NavLink>
                            // 编程式导航
                            // return <li key={item.id} onClick={this.goPlay1.bind(this, item.id)}>
                            //     <div>{item.id}</div>
                            //     <div>{item.songName}</div>
                            // </li>
                            return <NavLink to='/play' key={item.id} className='songs'>
                                <li>
                                    <div className='left'>
                                        <span className='num'>{item.id < 10 ? '0' + item.id : item.id}</span>
                                        <div className='innLeft'>
                                            {/* <p className='name'>
                                                {item.songName}</p> */}
                                            <div className="name">{item.name}
                                                {
                                                    item.alia ?
                                                        item.alia.map(item => {
                                                            return <span style={
                                                                {
                                                                    color: "#888"
                                                                }
                                                            } key={item}>({item})</span>
                                                        })
                                                        : ''
                                                }
                                            </div>
                                            {/* <p className='author'>
                                                <i className='sq'></i>
                                                <span>{item.singer}</span>
                                            </p> */}
                                            <div className="author">
                                                <i className='sq'></i>
                                                <i className="sghot u-hmsprt">
                                                    {
                                                        item.ar ?
                                                            item.ar.map(item => {
                                                                return <span key={item.id}>{item.name}</span>
                                                            })
                                                            : ''
                                                    }-{item.al.name}
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <span className='play'></span>
                                    </div>
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