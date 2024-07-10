import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './singlepost.scss';
import Sidebar from '../components/Sidebar';
// import img from '../img/img1.jpg';
// import img2 from '../img/for lara doc 2.jpg';
import { useParams } from 'react-router-dom';
// import { useQuery } from '@chakra-ui/react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

const SinglePost = () => {
  const [data, setData] = useState([]);
  const [topicId, setTopicId] = useState('');
  const [blogId, setBlogId] = useState('');

  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [id]);

  // console.log(topicId + ' | and| ' + id);
  const getData = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('topic_id', localStorage.getItem('topicId'));
    formData.append('blog_id', localStorage.getItem('blog_id'));
    // formData.append('topic_id', 3);
    // formData.append('blog_id', 14);

    // return;
    try {
      const response = await axios
        .post('http://127.0.0.1:80/the_mentor/public/api/one_blog', formData)
        .then((res) => {
          // console.log(res.data.data);
          setData(res.data.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="singlepost">
        <Sidebar sidedata={data?.subtopic} />
        <div className="content_area">
          {loading === true && (
            <Spinner
              className="spinner"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
              size="xl"
            />
          )}
          <div className="content">
            <div className="code">
              <img src={data?.img} alt="" />
            </div>
            <div className="desc">
              <div className="title">
                <h2>{data?.title}</h2>
              </div>
              <div className="info">
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
