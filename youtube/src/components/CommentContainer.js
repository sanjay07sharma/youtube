import { USER_IMAGE_URL } from '../utils/constant';

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
        },
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
        },
    ]

const Comments = ({data}) => {
    const {name, comment} = data;    
    return (
        <div className='flex gap-2'>
            <img src={USER_IMAGE_URL} alt="userImg" className='w-6 h-6'/>
            <div>
                <p>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
}

const CommentsList = ({replies}) => {
  return (
    <div className="ml-4 border-l-2 border-gray-300 pl-4">
      {replies.map((reply, index) => (
        <div key={index}>
          <Comments data={reply}/>
          {reply.replies && reply.replies.length > 0 && (
            <CommentsList replies={reply.replies}/>
          )}
        </div>
      ))}
    </div>
  );
}

const CommentContainer = () => {
  return (
    <div className="m-5 p-5">
        <h1 className="text-2xl">
            Comments:
        </h1>
        <CommentsList replies={commentsData}/>
    </div>
  )
}

export default CommentContainer;
