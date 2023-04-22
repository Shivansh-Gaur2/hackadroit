import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import './css/feed.css'
import { Avatar } from '@material-ui/core'
import Post from './Post';


function Feed() {
    return (
        <div className='feed'>
            <div className='feed__input'>
            <div className='feed__form'>
                <Avatar/>
                <form> 
                    <input type='text' placeholder='Start a post'/>
                    <input type='submit'/>
                </form>
            </div>

            <div className='feed__options'>
                <div className='option'>
                    <AddAPhotoIcon style = {{color:'#70b5f9'}}/>
                    <span>Photo</span>
                </div>
                <div className='option'>
                    <VideoCallIcon style = {{color:'#7fc15e'}}/>
                    <span>Video</span>
                </div>
                <div className='option'>
                    <EventAvailableIcon style = {{color:'#e7a33e'}}/>
                    <span>Event</span>
                </div>
                <div className='option'>
                    <ArticleIcon style = {{color:'#fc9295'}}/>
                    <span>Article</span>
                </div>
            </div>
            </div>
            <Post name = "shivansh" description = "this is test" message ="we are awesome" photoURL = "https://tse1.mm.bing.net/th?id=OIP.HYt3eGZJ81Lso5LKSPNI1gHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122"/>
            <Post name = "shivansh" description = "this is test" message ="we are awesome" photoURL = "https://tse1.mm.bing.net/th?id=OIP.HYt3eGZJ81Lso5LKSPNI1gHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122"/>
            <Post name = "shivansh" description = "this is test" message ="we are awesome" photoURL = "https://tse1.mm.bing.net/th?id=OIP.HYt3eGZJ81Lso5LKSPNI1gHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122"/>
            <Post name = "shivansh" description = "this is test" message ="we are awesome" photoURL = "https://tse1.mm.bing.net/th?id=OIP.HYt3eGZJ81Lso5LKSPNI1gHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122"/>
            <Post name = "shivansh" description = "this is test" message ="we are awesome" photoURL = "https://tse1.mm.bing.net/th?id=OIP.HYt3eGZJ81Lso5LKSPNI1gHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122"/>
        </div>
    )
}

export default Feed