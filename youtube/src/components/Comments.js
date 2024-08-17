import { useEffect } from 'react'

const commentsData = [{
    name: " Sanjay Sharma",
    comment: "lorem ipsuem",
    replies: []
}]

const Comments = () => {
    
    const {name, text, replies} = commentsData;
    
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Comments;
