// import React, { useEffect, useState } from 'react';
import img1 from '../img/img1.jpg';
import './post.scss';
import { Link } from 'react-router-dom';

const Post = ({ data }) => {
  const handleStore = () => {
    localStorage.setItem('blog_id', data.blogs[0].id);
    localStorage.setItem('topicId', data.id);
  };

  return (
    <div className="post">
      <div className="img">
        <img src={img1} alt="" />
      </div>
      <div className="content">
        <h1>{data?.name}</h1>
        <p>{data?.desc}</p>
        <Link to={`post/1`} onClick={() => handleStore()}>
          <button className="btn">Go Read</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
