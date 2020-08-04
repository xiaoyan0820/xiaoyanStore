import React from 'react'
import '../../assets/css/search.css'
import { NavLink } from 'react-router-dom'
//调取接口地址
//调取接口地址
import { searchHot,searchInfo} from '../../utils/axios'
class Search extends React.Component {
    constructor() {
        
        super()
        this.state = {
            searchHotList: [],
            searchList: [
                // {
                //     id:1,
                //     name:'Taylor Swift'
                // },
                // {
                //     id:2,
                //     name:'Billie Eilish'
                // },
                // {
                //     id:3,
                //     name:'无滤镜'
                // },
                // {
                //     id:4,
                //     name:'潘玮柏'
                // },
                // {
                //     id:5,
                //     name:'天外来物'
                // }
                // , {
                //     id:6,
                //     name:'Trove Sivan'
                // },
                // {
                //     id:7,
                //     name:'亚运会歌征集'
                // },
                // {
                //     id:8,
                //     name:'上半年音乐榜单'
                // },
                // {
                //     id:9,
                //     name:'要我怎么办'
                // },
                // {
                //     id:9,
                //     name:'2020毕业音乐会'
                // }
            ],

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
                        searchList: res.result.hots
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
                        searchHotList: res.result.songs
                    })
                }
            })
    }
    //封装一个getInput
    getInput() {
        console.log(this.inpVal.current.value, 'input内容')
    }
    //清空事件
    clearInfo() {
        //input为空
        this.inpVal.current.value = ''
        this.setState({
            searchHotList: []
        })
    }
    render() {
        const { searchList, searchHotList } = this.state
        let valFlag = ''
        if (this.inpVal.current) {
            valFlag = this.inpVal.current.value
            console.log(valFlag, 'this.inpVal.current.value')
        }
        let hotInfo = <div className='hotSearch'>
            <h3>热门搜索</h3>
            <ul>
                {
                    searchList.map(item => {
                        return <NavLink to='#' key={item.id} onClick={this.goSearch.bind(this, item.first)}>
                            <li className='link'>
                                {item.first}
                            </li>
                        </NavLink>
                    })
                }
            </ul>
        </div>
        return (<div className='content'>
            <form action="#" method="post" className='form'>
                <div className='inputText'>
                    <i className='icon'></i>
                    <input className='search' placeholder='搜索专辑 歌手 歌曲' type="text" ref={this.inpVal} onInput={this.getInput.bind(this)} />
                    {
                        valFlag ? <button onClick={this.clearInfo.bind(this)}>×</button> : ''
                    }
                </div>
            </form>
            {/* 搜索列表 */}
            <div>
                <ul>
                    {
                        searchHotList.length > 0 ? searchHotList.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })
                            : ''
                    }
                </ul>
            </div>
            <div className="m-default">
                {/* 热搜标签 */}
                {
                    searchHotList.length == 0 ? hotInfo : ''
                }
            </div>
        </div>

        )
    }
}
export default Search