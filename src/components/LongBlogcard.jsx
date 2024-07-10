import React from 'react';
import './longblogcard.scss';
import { FloppyFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const LongBlogcard = ({ blogData }) => {
  const img1 = 'http://localhost/the_mentor/storage/app/public/blog_img1.jpeg';

  const limit = 110;
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
  const plainText = getText(blogData?.description);
  const limited = blogData ? plainText.substring(0, limit) + '...' : '';

  return (
    <div className="lg-blog-card">
      <div className="lg-img-container">
        <NavLink to={`blog/${blogData?.slug}`}>
          <img src={blogData?.image} alt="no img" />
        </NavLink>
      </div>
      <div className="lg-info-container">
        <div className="lg-info-wrapper">
          <p className="lg-title">{blogData?.title}</p>
          <p className="lg-subtitle">{limited}</p>
        </div>
        <div className="lg-small-details">
          <div className="author">{blogData?.author}</div>
          <div className="save">
            <FloppyFill />
            save
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongBlogcard;
