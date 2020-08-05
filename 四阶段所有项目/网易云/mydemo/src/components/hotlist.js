import React from 'react'
//引入接口文件
import { getHotList } from '../util/axios'
class Hotlist extends React.Component {
    constructor() {
        super()
        this.state = {
            hottime: 0,
            hotsongList: []
        }
    }
    //挂载
    componentDidMount() {
        this.gethotlist()
    }
    //封装一个事件转化函数
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
                        hotsongList: hotList
                    })
                }
            })
    }
    //封装一个播放事件
    goPlay(id) {
        this.props.history.push({
            pathname: '/play',
            state: {
                id
            }
        })
    }
    render() {
        const { hottime, hotsongList } = this.state
        return (
            <div className="m-hmhot">
                <div className="hotop clearfix">
                    <div className="hotopct">
                        <div className="hoticon u-hmsprt"></div>
                        <div className="hottime">
                            更新日期：{this.formatTime(hottime)}
                        </div>
                    </div>
                </div>
                <div className="hotcont">
                    <div className="m-sglst">
                        {
                            hotsongList.map((item, i) => {
                                return <div onClick={this.goPlay.bind(this, item.id)} className="m-sgitem clearfix" key={item.id}>
                                    <div className="sgfl sgfl-cred">{i < 9 ? '0' + (i + 1) : (i + 1)}</div>
                                    <div className="sgfr f-bd f-bd-btm clearfix">
                                        <div className="sgchfl clearfix">
                                            <div className="sgtl f-thide clearfix">{item.name}
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
                                            <div className="sginfo f-thide clearfix">
                                                <i className="sghot u-hmsprt">
                                                    {
                                                        item.ar ?
                                                            item.ar.map(item => {
                                                                return <span key={item.id}>{item.name}</span>
                                                            })
                                                            : ''
                                                    }-{item.al.name}</i></div>
                                        </div>
                                        <div className="sgchfr"></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="hotdn"></div>
            </div>
        )
    }
}

export default Hotlist