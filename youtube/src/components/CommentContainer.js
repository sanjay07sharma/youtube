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
}]

const Comments = ({data}) => {
  debugger
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
  return replies.map((reply) => (
    <Comments data={reply}/>
  ))
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

export default CommentContainer
