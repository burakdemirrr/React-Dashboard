import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlined className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img src="https://scontent.fyei6-5.fna.fbcdn.net/v/t1.18169-9/13925081_1025252104255997_7970422232339802997_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-nVRiEyKUiYAX-3v9Km&_nc_oc=AQn-i69d4VlGtcvKmjaZoJhdeNWtBFLObjy_Dv_MXfRsqKP7kqQwvNmVU_gb1WdG3GM&_nc_ht=scontent.fyei6-5.fna&oh=00_AT9zx1YqwzyXO49ix1TXVBxuqWoGJ13VKhTdhDRy9Xo-9w&oe=6256DADA" alt="" className="avatar"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar