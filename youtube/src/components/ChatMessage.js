import React from 'react'
import { USER_IMAGE_URL } from '../utils/constant'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center mx-2 p-2 shadow-sm gap-2'>
        <div>
            <img className="h-8" alt="user" src={USER_IMAGE_URL} />
        </div>
            <span className='font-bold'>
                {name}
            </span>
            <span>
                {message}
            </span>
    </div>
  )
}

export default ChatMessage
