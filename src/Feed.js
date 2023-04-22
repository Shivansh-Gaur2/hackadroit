import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import './css/feed.css'
import { Avatar } from '@material-ui/core'

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
                    <AddAPhotoIcon/>
                    <span>Photo</span>
                </div>
                <div className='option'>
                    <VideoCallIcon/>
                    <span>Video</span>
                </div>
                <div className='option'>
                    <EventAvailableIcon/>
                    <span>Event</span>
                </div>
                <div className='option'>
                    <ArticleIcon/>
                    <span>Article</span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Feed