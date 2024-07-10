import React from 'react';
import './smallblogcard.scss';
import { FloppyFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const SmallBlogcard = ({ blogData }) => {
  const img1 = 'http://localhost/the_mentor/storage/app/public/card_img_1.jpg';
  // console.log(blogData);
  return (
    <div className="small-product-card">
      <div className="sm-img-container">
        <NavLink to={`blog/${blogData?.slug}`}>
          <img src={blogData?.image} alt="no img" />
        </NavLink>
      </div>
      <div className="sm-info-container">
        <span className="item-title">{blogData?.title}</span>
      </div>
      <div className="sm-small-details">
        <div className="author">{blogData?.author}</div>
        <div className="save">
          <FloppyFill />
          save
        </div>
      </div>
    </div>
  );
};

export default SmallBlogcard;
