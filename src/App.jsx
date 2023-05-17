import './App.css'
import React from 'react';
import Header from './components/Title';
import MainContent from './components/Content';
import Footer from './components/Footer';

function BlogPost() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className='blog-post-container'>
      <Header title="Ivy's Blog" className="header" />
      <MainContent
        postTitle="Blog post 1"
        postContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! Perspiciatis enim soluta repudiandae dolor quis voluptas optio dolorem, excepturi numquam veniam neque voluptatem nobis reiciendis, ratione modi deserunt magnam, similique nam! "
        postHighTitle="Highlight post 1" 
        postHighContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! " />
      <MainContent
        postTitle="Blog post 2"
        postContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! Perspiciatis enim soluta repudiandae dolor quis voluptas optio dolorem, excepturi numquam veniam neque voluptatem nobis reiciendis, ratione modi deserunt magnam, similique nam! "
        postHighTitle="Highlight post 2"
        postHighContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! " />
      <MainContent
        postTitle="Blog post 3"
        postContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! Perspiciatis enim soluta repudiandae dolor quis voluptas optio dolorem, excepturi numquam veniam neque voluptatem nobis reiciendis, ratione modi deserunt magnam, similique nam! "
        postHighTitle="Highlight post 3"
        postHighContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! " />
      <Footer authorName="Ivy Mbogo" postDate={currentDate} />
    </div>

  );
}

export default BlogPost;
