import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './blogdetail.scss';
import axios from 'axios';
import apiConfig from '../utils/config';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const slugs = useParams();
  // console.log(slugs);
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const slug = slugs?.slug;

  useEffect(() => {
    getData();
  }, []);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };

  const description = getText(data?.description);
  const date = new Date(data?.created_at);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const finalDate = date.toLocaleDateString('en-US', options);
  // alert(final);
  // console.log(date.getDate());

  // const img/ = 'http://localhost/oxford-pro/storage/app/public/blog-detail.jpg';

  const getData = async () => {
    await axios.get(apiConfig.apiUrl + `${'blog'}/${slug}`).then((res) => {
      setData(res.data?.data);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="blog-details">
      <Navbar />

      <div class="blog-detail">
        <div class="blog-detail-wrapper">
          <div class="blog-category">
            <h4>{data?.category_name}</h4>
          </div>
          <div class="blog-title">
            <h1>{data?.title}</h1>
          </div>
          <div class="blog-img">
            <img src={data?.image} alt="" />
          </div>
          <div class="blog-author">
            <h3>by {data?.author}</h3>
          </div>
          <div class="blog-publish-date">
            <h5>{finalDate}</h5>
          </div>
          <div class="blog-subtitle">{description}</div>
          <div class="blog-img">
            <img src="" alt="" />
          </div>
          <div class="blog-description"></div>
        </div>
        <div class="recent-posts"></div>
        <span className="line2"></span>
        <Footer />
        <span className="line2"></span>
      </div>
    </div>
  );
};

export default BlogDetail;
