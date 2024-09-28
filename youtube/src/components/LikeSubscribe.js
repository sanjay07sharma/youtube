import React from 'react';
import {
  DISLIKE_ICON,
  DOWNLOAD_ICON,
  LIKE_ICON,
  REPORT_ICON,
  SAVE_ICON,
  SCISSOR_ICON,
  SHARE_ICON
} from '../utils/constant';
import { useSelector } from 'react-redux';

const actions = [
  { icon: LIKE_ICON, label: 'Like', customClass: 'rounded-l-full w-20' },
  { icon: DISLIKE_ICON, label: 'Dislike', customClass: 'rounded-r-full w-24' },
  { icon: SHARE_ICON, label: 'Share' },
  { icon: DOWNLOAD_ICON, label: 'Download' },
  { icon: SCISSOR_ICON, label: 'Clip' },
  { icon: SAVE_ICON, label: 'Save' },
  { icon: REPORT_ICON, label: 'Report' }
];

const ActionButton = ({ icon, label, customClass = '' }) => (
  <button className={`action-btn ${customClass} bg-gray-400 hover:bg-gray-600 text-white rounded-full h-10 flex items-center justify-center gap-2 w-28`}>
    <img src={icon} className="w-6 h-6 invert" alt={`${label} icon`} />
    <p>{label}</p>
  </button>
);

const LikeSubscribe = (props) => {
  const videData = useSelector((state) => state.app.videoData);
  // Now in props.data we have videoInformation now update the watch page.
  return (
    <div className="youtube-video-details flex">
      <div className="title">Title</div>
      <div className="channel ml-9 flex items-center gap-4">
        <img src="" alt="Channel Logo" className="channel-logo" />
        <div className="channel-info">
          <p>Channel Info</p>
          <div className="subscribers">subscribers</div>
        </div>
        <button className="subscribe rounded-full bg-black text-white w-36 h-10 mt-4">Subscribe</button>
      </div>
      <div className="ml-8 mt-4 flex gap-4">
        {actions.slice(0, 2).map((action, index) => (
          <ActionButton key={index} {...action} />
        ))}
      </div>
      <div className="actions flex gap-4 ml-8 mt-4">
        {actions.slice(2).map((action, index) => (
          <ActionButton key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default LikeSubscribe;
