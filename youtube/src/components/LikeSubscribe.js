import React from 'react';

const LikeSubscribe = () => {
    return (
        <div className="youtube-video-details flex">
          <div className="title">
            Title
          </div>
          <div className="channel">
            <img src="" alt="Channel Logo" />
            <div className="channel-info">
              Channel Info
              <div className="subscribers">subscribers</div>
            </div>
          </div>
          <div className="actions">
            <button className="subscribe">Subscribe</button>
            <div className="likes">
              <svg className="like-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 21l22 -12-22 -12" />
              </svg>
                Likes
            </div>
            <button className="share">
                Share
            </button>
            <button className="download">
                Download
            </button>
            <button className="clip">
                Clip
            </button>
            <button className="save">
                Save
            </button>
            <button className="more">
            </button>
          </div>
        </div>
      );
    };

export default LikeSubscribe;
