import React from 'react'
import '../../assets/css/home.css'
import { NavLink } from 'react-router-dom'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            imgSongsList: [
                {
                    id: 1,
                    img: require('../../assets/images/songList01.jpg'),
                    name: '宝藏音乐观 | 舒适旋律渲染微醺夜色',
                    num: '51.8万'
                },
                {
                    id: 2,
                    img: require('../../assets/images/songList02.jpg'),
                    name: '[国电新势力] 网易电子音乐人精选',
                    num: '1864万'
                },
                {
                    id: 3,
                    img: require('../../assets/images/songList03.jpg'),
                    name: '打野BGM [游戏专用]',
                    num: '24.8万'
                },
                {
                    id: 4,
                    img: require('../../assets/images/songList04.jpg'),
                    name: '不够优秀 但不想责备努力活着的自己',
                    num: '362.7万'
                },
                {
                    id: 5,
                    img: require('../../assets/images/songList05.jpg'),
                    name: 'KORG P1000电子琴',
                    num: '190.1万'
                },
                {
                    id: 6,
                    img: require('../../assets/images/songList06.jpg'),
                    name: '维吾尔族情歌 Muhabbat Nahxiliri',
                    num: '640.5万'
                },
            ],
            songList: [
                {
                    id: 1,
                    name: '致我们终将失去的青春',
                    author: '张靓颖-致我们终将逝去的青春',
                },
                {
                    id: 2,
                    name: '如果我是海',
                    author: '李荣浩-麻雀'
                },
                {
                    id: 3,
                    name: '祝我快乐',
                    author: '汪苏泷-祝我快乐'
                },
                {
                    id: 4,
                    name: '星星之火',
                    author: '罗云熙-星星之火'
                },
                {
                    id: 5,
                    name: '晚来天欲雪',
                    author: '恋恋故人难-晚来天欲雪'
                },
                {
                    id: 6,
                    name: '致我们终将失去的青春',
                    author: '张靓颖-致我们终将逝去的青春'
                },
                {
                    id: 7,
                    name: '先知',
                    author: '田馥甄-先知'
                },
                {
                    id: 8,
                    name: '我行我素我爱你',
                    author: '郁可唯-我行我素我爱你'
                },
                {
                    id: 9,
                    name: 'PARADISE',
                    author: 'Ravi/河成云-PARADISE'
                },
                {
                    id: 10,
                    name: '尘埃',
                    author: '董家鸿-尘埃'
                },
            ]
        }
    }
    render() {
        const { imgSongsList, songList } = this.state
        return (
            <div className='content'>
                <div className='header'><span>推荐歌单</span></div>
                <ul className='imgSongs'>
                    {
                        imgSongsList.map(item => {
                            return <NavLink key={item.id} to='/play' className='list'>
                                <li >
                                    <div className='img'>
                                        <img src={item.img} alt="" />
                                        <span className='num'>{item.num}</span>
                                    </div>
                                    <p className='name'>{item.name}</p>

                                </li>
                            </NavLink>

                        })
                    }
                </ul>
                <div className='header'><span>最新音乐</span></div>
                <div>
                    <ul className='songsList'>
                        {
                            songList.map(item => {
                                return <NavLink to='/play' key={item.id} className='songs'>
                                    <li>
                                       <div className='left'>
                                       <p className='name'>{item.name}</p>
                                        <p className='author'>
                                            <i className='sq'></i>
                                            <span>{item.author}</span>
                                        </p>
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
            </div>
        )
    }
}
export default Home