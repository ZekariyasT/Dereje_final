import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBlogStore } from '../../../../services/blog';
import CommentSection from './CommentSection';

const HOST = import.meta.env.VITE_HOST;

const BlogDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { blogs, fetchBlogs } = useBlogStore();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      await fetchBlogs();
      setLoading(false);
    };
    loadBlog();
  }, [fetchBlogs]);

  useEffect(() => {
    if (blogs.length > 0) {
      const foundBlog = blogs.find(b => b._id === id);
      setBlog(foundBlog);
    }
  }, [blogs, id]);

  if (loading) {
    return (
      <div className="container">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">{t('loading')}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container">
        <div className="text-center py-5">
          <h2>{t('blogNotFound')}</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <article className="cs_blog_details">
              <div className="cs_blog_header cs_mb_40">
                <div className="cs_blog_meta cs_mb_20">
                  <div className="cs_post_meta">
                    <span className="cs_accent_color">
                      <i className="bi bi-calendar"></i>
                    </span>
                    <span className="cs_heading_color">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color">
                      <i className="bi bi-chat-dots"></i>
                    </span>
                    <span className="cs_heading_color">
                      {blog.comments?.length || 0} {t('comments')}
                    </span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color">
                      <i className="bi bi-person"></i>
                    </span>
                    <span className="cs_heading_color">
                      {blog.author || t('admin')}
                    </span>
                  </div>
                </div>
                <h1 className="cs_fs_32 cs_semibold">{blog.title}</h1>
              </div>
              
              <div className="cs_blog_thumb cs_mb_30">
                <img 
                  src={`${HOST}/uploads/${blog.image.data}`} 
                  alt={blog.title}
                  className="w-100"
                />
              </div>
              
              <div className="cs_blog_content cs_mb_40">
                <p>{blog.content}</p>
              </div>

              {/* Comment Section */}
              <CommentSection 
                blogId={blog._id} 
                comments={blog.comments || []} 
              />
            </article>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default BlogDetail; 