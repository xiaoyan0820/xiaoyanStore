import React from 'react'
//调取接口地址
import { searchHot, searchInfo } from '../util/axios'
class Serach extends React.Component {
    constructor() {
        super()
        this.state = {
            searchHotList: [],
            searchList: []
        }
        this.inpVal = React.createRef()
    }
    //挂载
    componentDidMount() {
        //调取热门搜索
        this.get_search_hot()
    }
    //获取热门搜索事件
    get_search_hot() {
        searchHot()
            .then(res => {
                if (res.code == 200) {
                    console.log(res, '热门标签')
                    this.setState({
                        searchHotList: res.result.hots
                    })
                }
            })
    }
    //封装一个搜索事件
    goSearch(keywords) {
        //给input赋值
        this.inpVal.current.value = keywords
        //调取搜索接口
        searchInfo({ keywords })
            .then(res => {
                if (res.code == 200) {
                    console.log(res, '搜索结果')
                    this.setState({
                        searchList: res.result.songs
                    })
                }
            })
    }
    //封装一个getInput
    getInput() {
        console.log(this.inpVal.current.value, 'input内容')
        this.setState({})
    }
    //清空事件
    clearInfo() {
        //input为空
        this.inpVal.current.value = ''
        this.setState({
            searchList: []
        })
    }
    //键盘事件
    enter(e) {
        if (e.keyCode === 13 && e.target.value != '') {
            //当用户输入回车的时候 要调取搜索接口
            this.goSearch(e.target.value)
        }
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
        const { searchHotList, searchList } = this.state
        let valFlag = ''
        if (this.inpVal.current) {
            valFlag = this.inpVal.current.value
            console.log(valFlag, 'this.inpVal.current.value')
        }
        let hotInfo = <div className="m-hotlist">
            <h3 className="title">热门搜索</h3>
            <ul className="list">
                {
                    searchHotList.map((item, i) => {
                        return <li onClick={this.goSearch.bind(this, item.first)} className="item f-bd f-bd-full" key={item.first}>
                            <a className='link clearfix'>{item.first}</a>
                        </li>
                    })
                }

            </ul>
        </div>
        return (
            <div className="m-hmsrch">
                {/* 搜索框 */}
                <div className="m-input f-bd f-bd-btm" method='get'>
                    <div className="inputcover clearfix">
                        <i className="u-svg u-svg-srch"></i>
                        <input type="search" name='search' className='input' ref={this.inpVal} onInput={this.getInput.bind(this)} onKeyUp={this.enter.bind(this)} placeholder='搜索歌曲、歌手、专辑' />
                        {/* <label className='holder'>搜索歌曲、歌手、专辑</label> */}
                        {
                            valFlag ? <button onClick={this.clearInfo.bind(this)}>×</button> : ''
                        }

                    </div>
                </div>
                {/* 搜索列表 */}
                <div>
                    <ul>
                        {
                            searchList.length > 0 ? searchList.map(item => {
                                return <li onClick={this.goPlay.bind(this,item.id)} key={item.id}>{item.name}</li>
                            })
                                : ''
                        }
                    </ul>
                </div>
                <div className="m-default">
                    {/* 热搜标签 */}
                    {
                        searchList.length == 0 ? hotInfo : ''
                    }
                </div>
            </div>
        )
    }
}

export default Serach