import './App.css'
import React from 'react';
import Header from './title';
import MainContent from './content';
import Footer from './footer';

function BlogPost() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className='blog-post-container'>
      <Header title="Ivy's Blog" className="header" />
      <div className='main-container'>
          <MainContent
          postTitle="Blog post 1"
          postContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate hic voluptatum dignissimos itaque dolor aspernatur ipsa velit animi aut eveniet, saepe, earum numquam totam sed doloremque illo molestias praesentium sequi repudiandae! Perspiciatis enim soluta repudiandae dolor quis voluptas optio dolorem, excepturi numquam veniam neque voluptatem nobis reiciendis, ratione modi deserunt magnam, similique nam! Eveniet id a odit. Adipisci, earum? Ducimus dolore labore optio hic voluptatum ratione soluta ipsa minima adipisci, autem nesciunt consectetur iste maiores rerum odit, qui saepe quae tempore libero reprehenderit voluptate corporis amet! Tempore eaque fugit earum expedita, eligendi quae magni dolorum exercitationem, dolore, asperiores mollitia esse aperiam cumque! Officiis ipsam, minima saepe eaque esse optio! Quaerat distinctio et placeat incidunt excepturi eos velit quis dolores magnam! Voluptatem inventore doloribus quam voluptas, adipisci quisquam consectetur, autem quae eos fuga assumenda dignissimos? Ipsam molestias veniam velit quas excepturi commodi? Obcaecati doloribus rerum cumque nostrum hic, ipsum voluptates incidunt velit maiores in excepturi porro totam, quam maxime architecto quisquam laborum placeat provident, quidem eius temporibus harum eos vero! Velit, sed laborum omnis adipisci corrupti inventore cupiditate quam veritatis maiores quis vel cumque nihil distinctio pariatur qui, laboriosam enim rerum vero aut asperiores repellat ut sapiente est delectus. Ad, magni." />
        <MainContent
          postTitle="Highlights"
          postContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non vero fugiat eum, itaque consequuntur esse temporibus tempora dolore, ipsum rem voluptates."
          className="highlights"
        />

      </div>

      
      <Footer authorName="Ivy Mbogo" postDate={currentDate} />
    </div>

  );
}

export default BlogPost;
