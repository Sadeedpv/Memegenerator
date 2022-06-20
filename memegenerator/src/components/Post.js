import React, { useEffect } from 'react';
import axios from 'axios';
import './post.css';
import {FaHeart, FaComment, FaPaperPlane, FaBookmark, FaEllipsisH} from 'react-icons/fa';
import Avatar from 'react-avatar';

function Post() {
    const [state, sestate] = React.useState()
    useEffect(() =>{
        axios.get(`https://meme-api.herokuapp.com/gimme/50`).then(response => {
            console.log(response.data.memes);
            sestate(response.data.memes);
        })
    }, [])
  return (
    <div className='post'>
        {state && state.map((meme, index) => {
            return <Card key={index} url={meme.url} name={meme.author} title={meme.title}/>
        })}
    </div>
  )
}

function Card(props){
    return(
        <div className='card'>
            <div className='frow'>
            <div className='name'><Avatar round size='30' style={{marginRight:'10px'}}/>{props.name}</div>
            <div><FaEllipsisH style={{marginRight:'20px'}}/></div>
            </div>
            

            <div className='img'><img src={props.url} alt='Meme'/></div>
            <div className='frow'>
                <div className='lefticons'>
                    <FaHeart className='icon' size={40}/>
                    <FaComment className='icon' size={40}/>
                    <FaPaperPlane className='icon' size={40}/>
                </div>
                <div className='righticons'>
                    <FaBookmark className='icon2' size={40}/>
                </div>
            </div>
            <div className='caption'>{props.title}</div>
        </div>
    )
}

export default Post