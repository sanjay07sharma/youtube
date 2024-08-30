import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LikeSubscribe from './LikeSubscribe';
import { COMMENT_API } from '../utils/constant';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();

  const commentsDataFromUrl = async () => {
      const response = await fetch(COMMENT_API);
      const data = await response.json();
      console.log(data);
  }
  useEffect(() => {
    dispatch(closeMenu());
    commentsDataFromUrl();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <iframe width="1400" height="600"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
        </iframe>
      </div>
      <LikeSubscribe/>
      <CommentContainer />
    </div>
  )
}

export default WatchPage
