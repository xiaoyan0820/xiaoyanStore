import React from 'react'
import '../../assets/css/search.css'
import { NavLink } from 'react-router-dom'
class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            searchList:[
                {
                    id:1,
                    name:'Taylor Swift'
                },
                {
                    id:2,
                    name:'Billie Eilish'
                },
                {
                    id:3,
                    name:'无滤镜'
                },
                {
                    id:4,
                    name:'潘玮柏'
                },
                {
                    id:5,
                    name:'天外来物'
                }
                , {
                    id:6,
                    name:'Trove Sivan'
                },
                {
                    id:7,
                    name:'亚运会歌征集'
                },
                {
                    id:8,
                    name:'上半年音乐榜单'
                },
                {
                    id:9,
                    name:'要我怎么办'
                },
                {
                    id:9,
                    name:'2020毕业音乐会'
                }
            ]
        }
    }
    render() {
        const { searchList} = this.state
        return (
            <div className='content'>
                <form action="#" method="post" className='form'>
                    <div className='inputText'>
                        <i className='icon'></i>  <input className='search' placeholder='搜索专辑 歌手 歌曲' type="text" />
                    </div>
                </form>
                <div className='hotSearch'>
                    <h3>热门搜索</h3>
                    <ul>
                        {
                            searchList.map(item=>{
                                return <NavLink to='#' key={item.id}>
                                    <li className='link'>
                                    {item.name}
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
export default Search