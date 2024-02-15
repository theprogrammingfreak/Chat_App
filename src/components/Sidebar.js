import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import"./myStyle.css"; 
import { IconButton } from '@mui/material';
import ConversationsItem from './ConversationsItem';

const Sidebar = () => {
    const [conversations,setConversations]=useState([
        {
            name:"Test1",
            lastMessage:"last message 1",
            timeStamp:"today",
        },
        {
            name:"Test2",
            lastMessage:"last message 2",
            timeStamp:"today",
        },
        {
            name:"Test3",
            lastMessage:"last message 3",
            timeStamp:"today",
        },
    ]);
  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        <IconButton>
            <PersonAddIcon/>
        </IconButton>
        <IconButton>
            <GroupAddIcon/>
        </IconButton>
        <IconButton>
            <AddCircleIcon/>
        </IconButton>
        <IconButton>
            <NightlightIcon/>
        </IconButton>
          
        </div>
        <div className='sb-search'>
        <IconButton>
        <SearchIcon/>
        </IconButton>
        
            <input placeholder='search' className='search-box'/>
        </div>
        <div className='sb-conversation'>
        {
            conversations.map((conversation)=>{
                return<ConversationsItem props={conversation} key={conversation.name}/>
            })
        }
          
        </div>
    </div>
  )
}

export default Sidebar