import Navbar from '../components/Navbar';
import './home.scss';
import axios from 'axios';
import apiConfig from '../utils/config';
import BlogCard from '../components/BlogCard';
import SmallBlogcard from '../components/SmallBlogcard';
import LongBlogcard from '../components/LongBlogcard';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const Home = () => {
  const [introData, setIntroData] = useState();
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  document.title = 'Blog website';

  const introImg =
    'http://localhost/the_mentor/storage/app/public/intro_sec_img.png';

  // const Data = [
  //   {
  //     id: 1,
  //     img: '',
  //     title: 'Some post',
  //     desc: 'testtesttest',
  //   },
  //   {
  //     id: 11,
  //     img: '',
  //     title: 'what happened',
  //     desc: 'testtesttest',
  //   },
  //   {
  //     id: 2,
  //     img: '',
  //     title: 'my diary',
  //     desc: 'testtesttest',
  //   },
  // ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get(apiConfig.apiUrl + `${'home'}`).then((res) => {
      setIntroData(res.data?.data.intro);
      setBlogs(res.data?.data.blogs);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      // setLoading(false);
    });
  };

  if (loading) {
    return <Loader />;
  }

  // const [firstBlog, ...remainingBlogs] = blogs;

  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <section className="intro-section">
          <div className="intro-left">
            <p className="intro-title">{introData ? introData.title : ''}</p>
            <p className="intro-subtitle">
              {introData ? introData.subtitle : ''}
            </p>
            <button className="intro-btn">Sign Up</button>
          </div>
          <div className="intro-right">
            {introData ? <img src={introData.image} alt="Intro" /> : ''}
          </div>
        </section>
        <section className="discover-section">
          {<BlogCard blogData={blogs[0]} />}
          <div className="small_card_wrapper">
            {blogs.slice(1).map((item) => (
              <SmallBlogcard blogData={item} />
            ))}
            {/* <SmallBlogcard />
            <SmallBlogcard />
            <SmallBlogcard />
            <SmallBlogcard /> */}
          </div>
        </section>
        <span className="line"></span>
        <section className="facinating-stories">
          <div className="fc-card-container">
            {blogs.map((item) => (
              <LongBlogcard blogData={item} />
            ))}

            {/* <LongBlogcard />
            <LongBlogcard />
            <LongBlogcard />
            <LongBlogcard /> */}
          </div>
          <div className="fc-topics">
            <div className="row1">
              <div className="list">Business</div>
              <div className="list">Career</div>
            </div>
            <div className="row1">
              <div className="list">Education</div>
              <div className="list">Entertainment</div>
            </div>
            <div className="row1">
              <div className="list">Education</div>
              <div className="list">Entertainment</div>
            </div>
            <div className="row1">
              <div className="list">Food</div>
              <div className="list">Gaming</div>
            </div>
            <div className="row1">
              <div className="list">Food</div>
              <div className="list">Gaming</div>
            </div>
            <div className="row1">
              <div className="list">Food</div>
              <div className="list">Gaming</div>
            </div>
            <div className="row1">
              <div className="list">Food</div>
              <div className="list">Gaming</div>
            </div>
            <div className="row1">
              <div className="list">Gaming</div>
            </div>
          </div>
        </section>
        <section className="discover-section">
          {<BlogCard blogData={blogs[0]} />}
          <div className="small_card_wrapper">
            {blogs.slice(1).map((item) => (
              <SmallBlogcard blogData={item} />
            ))}
          </div>
        </section>
        <section className="more-long">
          <div className="fc-card-container">
            {blogs.slice(1).map((item) => (
              <LongBlogcard blogData={item} />
            ))}
            {/* <LongBlogcard />
            <LongBlogcard />
            <LongBlogcard />
            <LongBlogcard />
            <LongBlogcard /> */}
          </div>
          <div className="design-card">
            <div className="des-green"></div>
          </div>
        </section>
        <section className="more-lists">
          <div className="row1">
            <div className="list">Food</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
          </div>
          <div className="row1">
            <div className="list">Food</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
            <div className="list">Gaming</div>
          </div>
          <div className="row1">
            <div className="list">Food</div>
          </div>
        </section>
        <span className="line2"></span>
        <Footer />
        <span className="line2"></span>
      </div>
    </div>
  );
};

export default Home;
