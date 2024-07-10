import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './addblog.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const AddBlog = () => {
  const [value, setValue] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const toast = useToast();

  const handleReq = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', value);
    formData.append('user_id', 1);
    formData.append('file', file);
    formData.append('topic', topic);

    try {
      const res = await axios
        .post('http://127.0.0.1:80/the_mentor/public/api/add_blog', formData)
        .then((re) => {
          console.log(re.data?.message);
          toast({
            title: 'Blog created.',
            description: 'Blog was published.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        });
    } catch (error) {
      console.log(error);
      error &&
        toast({
          title: 'oops!!.',
          description: 'Something went wrong.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
    }
  };
  const editorStyle = {
    width: '50rem',
    height: '30rem',
    background: 'white',
  };

  return (
    <>
      <Navbar />
      <div className="add_blog">
        <Sidebar />
        <div className="add_container">
          <div className="editor">
            <h1>Add new content</h1>
            <button className="btn" type="submit" onClick={(e) => handleReq()}>
              Submit
            </button>
            <div className="title_input">
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="img_input">
              <input
                style={{ display: 'none' }}
                type="file"
                id="file"
                name=""
                onChange={(e) => setFile(e.target.files[0])}
              />
              <span className="file_name">{file?.name || 'no file'}</span>
              <label className="file" htmlFor="file">
                Upload Image
              </label>
              <input
                type="text"
                className="input_small"
                placeholder="add topic"
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div className="desc_input">
              <ReactQuill
                style={editorStyle}
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
