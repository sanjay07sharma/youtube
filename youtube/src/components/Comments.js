import { useEffect } from 'react'

const commentsData = [{
    name: " Sanjay Sharma",
    comment: "lorem ipsuem",
    replies: [
        {
            name: " Sanjay Sharma",
            comment: "lorem ipsuem",
            replies: [
                {
                    name: " Sanjay Sharma",
                    comment: "lorem ipsuem",
                    replies: [
                        {
                            name: " Sanjay Sharma",
                            comment: "lorem ipsuem",
                            replies: [
                                {
                                    name: " Sanjay Sharma",
                                    comment: "lorem ipsuem",
                                    replies: [
                                        {
                                            name: " Sanjay Sharma",
                                            comment: "lorem ipsuem",
                                            replies: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}]

const Comments = () => {
    
    const {name, comment, replies} = commentsData;
    
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default Comments;
