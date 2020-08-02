import React from 'react'
import qs from 'querystring'
import '../../assets/css/play.css'
class Play extends React.Component {
    constructor() {
        super()
        this.state = {
            logo: require('../../assets/images/网易云logo.jpg'),
            lyricList: [
                {
                    id: 1,
                    lyric: '作曲 : 赵英俊'
                },
                {
                    id: 2,
                    lyric: '作词 : 赵英俊'
                },
                {
                    id: 3,
                    lyric: '编曲：丁少华'
                },
                {
                    id: 4,
                    lyric: '制作人: 丁少华'
                },
                {
                    id: 5,
                    lyric: '吉他：丁少华'
                },
                {
                    id: 6,
                    lyric: '贝斯：崔文正'
                },
                {
                    id: 7,
                    lyric: '小号：Noah'
                },
                {
                    id: 8,
                    lyric: '弦乐：国际首席爱乐乐团'
                },
                {
                    id: 9,
                    lyric: '荼蘼还没凋零 提醒我 紧紧抱着你'
                },
                {
                    id: 10,
                    lyric: '世界还在下雨 嘲笑着 晴天的远行'
                },
                {
                    id: 11,
                    lyric: '你说我逃不过的死亡就是被人遗忘'
                },
                {
                    id: 12,
                    lyric: '我说你是我人生路上最明媚的忧伤'
                },
                {
                    id: 13,
                    lyric: '接一个刻骨铭心的吻'
                },
                {
                    id: 14,
                    lyric: '献给我注定孤独的余生'
                },
            ]
        }

    }
    render() {
        const { logo, lyricList } = this.state
        console.log(this)
        console.log(this.props.location.search) //乱码 要解析成我们需要的形式
        //字符串截取 去掉？
        // let queryStr = this.props.location.search.slice(1)
        // //把字符串拆分为数组 以&为基准拆分
        // let arrQuery = queryStr.split('&')
        // //利用循环拆分=
        // let obj = {}
        // arrQuery.forEach(item => {
        //     console.log(item, 'item')
        //     let tempArr = item.split('=')
        //     console.log(tempArr, 'tempArr')
        //     obj[tempArr[0]] = tempArr[1]
        // });
        //第二组方法 node原生api
        let queryStr = this.props.location.search.slice(1)
        let obj = qs.parse(queryStr)
        console.log(obj)
        return (
            <div className='content'>
                {/* <h1>我是play路由</h1>
                <button onClick={() => this.props.history.go(-1)}>返回</button> */}
                {/* 动态接收路由参数 */}
                {/* <h2>当前歌曲id是:--{this.props.match.params.id}</h2> */}
                {/* 接收query参数 */}
                {/* 第一种方法 原生js获取 */}
                {/* <h2>query接收id是:--{obj.id}</h2>
                <h2>query接收name是:--{obj.name}</h2> */}
                {/* 第二种方法 用node原生api */}
                {/* <h2>node api接收id是:--{obj.id}</h2>
                <h2>node api接收name是:--{obj.name}</h2> */}
                {/* 第三种方法 state接收参数 */}
                {/* <h2>state接收的id是：{this.props.location.state.id}</h2> */}
               <i className='zhizhen'></i>
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>网易云音乐</span>
                </div>
                <div>
                    <div className='top'>
                        <div className='center'>
                            <div className='turn'>
                                <div className='songImg'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Play