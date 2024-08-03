import React, { useEffect } from 'react'

const Comments = () => {
    
    useEffect(() => {
        // api call to get comments
        const data = fetch('/comments_api')
        
    },[]);
    
    return (
        <div>
            (display comments component)
        </div>
    );
}

export default Comments;
