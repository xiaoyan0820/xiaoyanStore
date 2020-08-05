import React from 'react'
import axios from 'axios'
import { getLyric, getUrl, getSongDetail } from '../util/axios'
class play extends React.Component {
    constructor() {
        super()
        this.state = {
            songUrl: '',
            lyric: '',
            songDetail: ''
        }
    }
    //组件一加载 就获取音乐的url和歌词
    componentDidMount() {
        axios.all([getLyric({ id: this.props.location.state.id }), getUrl({ id: this.props.location.state.id }), getSongDetail({ ids: this.props.location.state.id })])
            .then(axios.spread((lyric, songUrl, songDetail) => {
                console.log(lyric, '歌词')
                console.log(songUrl, '音乐地址')
                console.log(songDetail, 'songDetail')
                if (lyric.code === 200) {
                    this.setState({
                        lyric: lyric.lrc.lyric
                    })
                }
                if (songUrl.code === 200) {
                    this.setState({
                        songUrl: songUrl.data[0].url
                    })
                }
                if (songDetail.code === 200) {
                    this.setState({
                        songDetail: songDetail.songs[0]
                    })
                }
            }))
    }
    render() {
        const { lyric, songUrl, songDetail } = this.state
        return (<div>
            <h1>播放页面</h1>
            <div>
                歌词：{lyric}
            </div>
            <audio src={songUrl} autoPlay></audio>
            <div>
                {songDetail.al ? <img style={
                    {
                        width:"120px"
                    }
                } src={songDetail.al.picUrl} alt="" /> : ''}
            </div>
            {songDetail.al ? <div>{songDetail.al.name}-{songDetail.ar[0].name}</div> : ''}
        </div>)
    }
}
export default play