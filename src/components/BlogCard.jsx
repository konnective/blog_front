import React from 'react';
import './blogcard.scss';
import { FloppyFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blogData }) => {
  const img1 = 'http://localhost/the_mentor/storage/app/public/card_img_1.jpg';

  const limit = 200;
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
  const plainText = getText(blogData?.description);
  const limited = blogData ? plainText.substring(0, limit) + '...' : '';

  // Extract the first three lines of the description

  return (
    <div className="product-card">
      <div className="img-container">
        <NavLink to={`blog/${blogData?.slug}`}>
          <img src={blogData?.image} alt="no img" />
        </NavLink>
      </div>
      <div className="info-container">
        <span className="item-title">{blogData ? blogData.title : ''}</span>
        <span className="item-price">
          <p>{limited}</p>
        </span>
      </div>
      <div className="small-details">
        <div className="author">{blogData?.author}</div>
        <div className="save">
          <FloppyFill />
          save
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
