import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Title';
import MainContent from './components/Content';
import Footer from './components/Footer';
import BlogPage from './pages/blog';
import NotFound from './pages/not-found';

function BlogPost() {
  return (
    <div className='blog-post-container'>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<MainContent />}/>
          <Route path='/blogs' element={<BlogPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        
        <Footer  />
      </BrowserRouter>
    </div>

  );
}

export default BlogPost;
