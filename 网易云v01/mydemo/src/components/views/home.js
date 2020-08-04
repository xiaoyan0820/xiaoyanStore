import React from 'react'
//引入axios库
import axios from 'axios'
import '../../assets/css/home.css'
import { NavLink } from 'react-router-dom'
//引入swipercss
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.min.js'
//调用swiper插件
import Swiper from 'swiper'
import { personalized, banner, getNewSongs } from '../../utils/axios'
import Axios from 'axios'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            bannerList: [],
            imgSongsList: [
                // {
                //     id: 1,
                //     img: require('../../assets/images/songList01.jpg'),
                //     name: '宝藏音乐观 | 舒适旋律渲染微醺夜色',
                //     num: '51.8万'
                // },
                // {
                //     id: 2,
                //     img: require('../../assets/images/songList02.jpg'),
                //     name: '[国电新势力] 网易电子音乐人精选',
                //     num: '1864万'
                // },
                // {
                //     id: 3,
                //     img: require('../../assets/images/songList03.jpg'),
                //     name: '打野BGM [游戏专用]',
                //     num: '24.8万'
                // },
                // {
                //     id: 4,
                //     img: require('../../assets/images/songList04.jpg'),
                //     name: '不够优秀 但不想责备努力活着的自己',
                //     num: '362.7万'
                // },
                // {
                //     id: 5,
                //     img: require('../../assets/images/songList05.jpg'),
                //     name: 'KORG P1000电子琴',
                //     num: '190.1万'
                // },
                // {
                //     id: 6,
                //     img: require('../../assets/images/songList06.jpg'),
                //     name: '维吾尔族情歌 Muhabbat Nahxiliri',
                //     num: '640.5万'
                // },
            ],
            newsgList: [
                // {
                //     id: 1,
                //     name: '致我们终将失去的青春',
                //     author: '张靓颖-致我们终将逝去的青春',
                // },
                // {
                //     id: 2,
                //     name: '如果我是海',
                //     author: '李荣浩-麻雀'
                // },
                // {
                //     id: 3,
                //     name: '祝我快乐',
                //     author: '汪苏泷-祝我快乐'
                // },
                // {
                //     id: 4,
                //     name: '星星之火',
                //     author: '罗云熙-星星之火'
                // },
                // {
                //     id: 5,
                //     name: '晚来天欲雪',
                //     author: '恋恋故人难-晚来天欲雪'
                // },
                // {
                //     id: 6,
                //     name: '致我们终将失去的青春',
                //     author: '张靓颖-致我们终将逝去的青春'
                // },
                // {
                //     id: 7,
                //     name: '先知',
                //     author: '田馥甄-先知'
                // },
                // {
                //     id: 8,
                //     name: '我行我素我爱你',
                //     author: '郁可唯-我行我素我爱你'
                // },
                // {
                //     id: 9,
                //     name: 'PARADISE',
                //     author: 'Ravi/河成云-PARADISE'
                // },
                // {
                //     id: 10,
                //     name: '尘埃',
                //     author: '董家鸿-尘埃'
                // },
            ]
        }
    }
    //调用挂载函数
    componentDidMount() {
        // //组件一加载就调取推荐歌单接口
        // this.getPersonalized()
        // //调用轮播图
        // this.getBanner()
        //组件一加载就调取推荐歌单,轮播图，推荐新音乐接口
        axios.all([personalized({ limit: 6 }), banner(), getNewSongs()])
            .then(axios.spread((imgSongsList, bannerList, songList) => {
                console.log(imgSongsList, 'imgSongsList')
                console.log(bannerList, 'bannerList')
                console.log(songList, 'songList')
                //获取轮播图
                if (bannerList.code === 200) {
                    //可以通过filter 对数组进行过滤
                    let banners = bannerList.banners.filter((item, i) => i < 4)
                    this.setState({
                        bannerList: banners
                    }, () => {
                        let swiper = new Swiper('.swiper-container', {
                            autoplay: {
                                delay: 2000,
                            },
                            loop: true,
                            pagination: {
                                el: '.swiper-pagination',
                            },
                        });
                    })
                }
                //获取推荐歌单
                if (imgSongsList.code === 200) {
                    this.setState({
                        imgSongsList: imgSongsList.result
                    })
                }
                //获取最新音乐
                if (songList.code === 200) {
                    console.log(songList.result)
                    this.setState({
                        newsgList: songList.result
                    })
                }
            }))
    }
    //封装一个获取推荐歌单的接口
    // getPersonalized() {
    //     personalized({
    //         limit: 6
    //     })
    //         .then(res => {
    //             if (res.code === 200) {
    //                 this.setState({
    //                     imgSongsList: res.result
    //                 })
    //             }
    //         })
    // }
    //获取一个轮播图的接口
    // getBanner() {
    //     banner()
    //         .then(res => {
    //             console.log(res, '轮播图')
    //             if (res.code === 200) {
    //                 this.setState({
    //                     bannerList: res.banners
    //                 }, () => {
    //                     //调用轮播图
    //                     let swiper = new Swiper('.swiper-container', {
    //                         autoplay: {
    //                             delay: 1000,
    //                         },
    //                         loop: true,
    //                         pagination: {
    //                             el: '.swiper-pagination',
    //                         }
    //                     });
    //                 })
    //             }
    //         })
    // }
    render() {
        const { imgSongsList, newsgList, bannerList } = this.state
        return (
            <div className='content'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerList.map(item => {
                                return <div key={item.imageUrl} className="swiper-slide">
                                    <img className='imgUrl' src={item.imageUrl} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
                {/* 分页器。如果放置在swiper-container外面，需要自定义样式。 */}
                <div className="swiper-pagination"></div>
                <div className='header'><span>推荐歌单</span></div>
                <ul className='imgSongs'>
                    {
                        imgSongsList.map(item => {
                            return <NavLink key={item.id} to='/play' className='list'>
                                <li >
                                    <div className='img'>
                                        <img src={item.picUrl} alt="" />
                                        <span className='num'>{item.playCount}</span>
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
                            newsgList.map(item => {
                                return <NavLink to='/play' key={item.id} className='songs'>
                                    <li>
                                        <div className='left'>
                                            {/* <p className='name'>{item.name}</p> */}
                                            <div className="name">{item.song.name}
                                                {
                                                    item.song.alias ?
                                                        item.song.alias.map(item => {
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
                                                <span>{item.author}</span>
                                            </p> */}
                                            <div >
                                                <i className='sq'></i>
                                                <i className="author">
                                                    {
                                                        item.song.artists ?
                                                            item.song.artists.map(item => {
                                                                return <span key={item.id}>{item.name}</span>
                                                            })
                                                            : ''
                                                    }-{item.song.album.name}</i></div>
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