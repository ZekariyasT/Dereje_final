import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useBlogStore } from "../../services/blog";

const HOST = import.meta.env.VITE_HOST;

const Blog = () => {
  const { t } = useTranslation();
  const { blogs, fetchBlogs, createComment } = useBlogStore();
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [showComments, setShowComments] = useState({});
  const [commentTexts, setCommentTexts] = useState({});
  const [isSubmitting, setIsSubmitting] = useState({});

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const toggleContent = (blogId) => {
    setExpandedBlogs(prev => ({
      ...prev,
      [blogId]: !prev[blogId]
    }));
  };

  const toggleComments = (blogId) => {
    setShowComments(prev => ({
      ...prev,
      [blogId]: !prev[blogId]
    }));
  };

  const handleCommentSubmit = async (blogId) => {
    if (!commentTexts[blogId]?.trim() || isSubmitting[blogId]) return;

    try {
      setIsSubmitting(prev => ({ ...prev, [blogId]: true }));
      const result = await createComment(blogId, commentTexts[blogId]);
      
      if (result.success) {
        setCommentTexts(prev => ({
          ...prev,
          [blogId]: ''
        }));
        await fetchBlogs();
      } else {
        console.error(t('common.error'), result.message);
      }
    } catch (error) {
      console.error(t('blog.commentError'), error);
    } finally {
      setIsSubmitting(prev => ({ ...prev, [blogId]: false }));
    }
  };

  return (
    <section className="position-relative" style={{ backgroundColor: '#f1f3f5' }}>
      <div className="cs_height_80 cs_height_lg_40"></div>
      <div className="container">
        <div className="row cs_row_gap_20 cs_gap_y_20">
          {blogs.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="cs_post cs_style_1 cs_type_1">
                <div className="cs_post_thumbnail cs_mb_10 position-relative">
                  <img
                    src={`${HOST}/uploads/${item.image.data}`}
                    alt={t('blog.postImage')}
                    className="w-100"
                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                  />
                  <div className="cs_post_date cs_accent_bg cs_fs_14 cs_semibold cs_white_color cs_center position-absolute">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="cs_post_content_wrapper">
                  <div className="cs_post_content">
                    <div className="cs_post_meta_wrapper cs_mb_8">
                      <div className="cs_post_meta">
                        <span className="cs_accent_color">
                          <i className="bi bi-chat-dots"></i>
                        </span>
                        <span className="cs_heading_color fs-14">
                          {item.comments?.length || 0} {t('blog.comments')}
                        </span>
                      </div>
                      <div className="cs_post_meta">
                        <span className="cs_accent_color">
                          <i className="bi bi-people"></i>
                        </span>
                        <span className="cs_heading_color fs-14">
                          {item.author || t('blog.admin')}
                        </span>
                      </div>
                    </div>
                    <h3 className="cs_fs_18 cs_semibold cs_mb_4">
                      {item.title}
                    </h3>
                    <div className="cs_post_text">
                      <p className="cs_mb_10 fs-14">
                        {expandedBlogs[item._id] 
                          ? item.content
                          : `${item.content.substring(0, 100)}...`}
                      </p>
                      <button
                        onClick={() => toggleContent(item._id)}
                        className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color btn-sm px-2 py-0"
                      >
                        {expandedBlogs[item._id] ? t('common.showLess') : t('common.readMore')}
                      </button>
                    </div>

                    {/* Comments Section */}
                    <div className="cs_comments_section mt-2">
                      <button
                        onClick={() => toggleComments(item._id)}
                        className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color btn-sm px-2 py-0"
                      >
                        {showComments[item._id] ? t('blog.hideComments') : t('blog.showComments')}
                      </button>

                      {showComments[item._id] && (
                        <div className="cs_comments_container mt-2">
                          {/* Comments List */}
                          <div className="cs_comments_list mb-2">
                            {item.comments?.map((comment, index) => (
                              <div key={index} className="cs_comment_item mb-1 p-2 bg-light rounded">
                                <p className="mb-1 fs-12">{comment.text}</p>
                                <small className="text-muted fs-11">
                                  {new Date(comment.createdAt).toLocaleDateString()}
                                </small>
                              </div>
                            ))}
                          </div>

                          {/* Comment Input */}
                          <div className="cs_comment_input_wrapper">
                            <textarea
                              className="form-control mb-1"
                              rows="1"
                              placeholder={t('blog.writeComment')}
                              value={commentTexts[item._id] || ''}
                              onChange={(e) => setCommentTexts(prev => ({
                                ...prev,
                                [item._id]: e.target.value
                              }))}
                            />
                            <button
                              onClick={() => handleCommentSubmit(item._id)}
                              disabled={isSubmitting[item._id]}
                              className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color btn-sm px-2 py-0"
                            >
                              {isSubmitting[item._id] ? t('common.submitting') : t('common.submit')}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_40"></div>
    </section>
  );
};

export default Blog; 
 