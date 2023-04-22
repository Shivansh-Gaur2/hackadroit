import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/widget.css"
function Widget() {
  return (
    <div className='widget'>
        <div className='widget_top'>
            <div className = 'widget__header'>
                <h4>PsyCoder News</h4>
                <InfoIcon />
            </div>
            <div className='widget__body'>
                <ul>
                <div className='widget__options'>
                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>
                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>
                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>6d ago * 4,55 readers</p>
                    </li>
                </div>
                </ul>
            </div>
        </div>

        <div className='widget_bottom'>
            <div className='widget__header'>
                <h4>Todays top courses</h4>
                <InfoIcon/>
            </div>
            <div className='widget__body'>
                <ul>
                <div className='widget__options'>
                    <li>
                        <h4>C++ Programming</h4>
                        <p>Amandeep</p>
                    </li>
                    <li>
                        <h4>C++ Programming</h4>
                        <p>Amandeep</p>
                    </li>
                    <li>
                        <h4>C++ Programming</h4>
                        <p>Amandeep</p>
                    </li>
                    <li>
                        <h4>C++ Programming</h4>
                        <p>Amandeep</p>
                    </li>
                </div>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Widget