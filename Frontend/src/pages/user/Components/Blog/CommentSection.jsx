import { useState } from 'react';
import { useBlogStore } from '../../../../services/blog';
import { useTranslation } from 'react-i18next';

const CommentSection = ({ blogId, comments = [] }) => {
  const { t } = useTranslation();
  const { addComment } = useBlogStore();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!comment.trim() || !name.trim() || !email.trim()) {
      setMessage({ type: 'error', text: 'Please fill all fields' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    const result = await addComment(blogId, {
      name,
      email,
      content: comment,
    });

    setIsSubmitting(false);

    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      // Clear form
      setComment('');
      setName('');
      setEmail('');
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <div className="cs_comment_section cs_mt_40">
      <h2 className="cs_fs_24 cs_semibold cs_mb_30">{t('leaveComment')}</h2>
      
      {message.text && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="row">
        <div className="col-lg-6">
          <input
            type="text"
            className="cs_form_field cs_mb_15"
            placeholder={t('yourName')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            className="cs_form_field cs_mb_15"
            placeholder={t('yourEmail')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-lg-12">
          <textarea
            cols="30"
            rows="5"
            className="cs_form_field cs_mb_15"
            placeholder={t('yourComment')}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="col-lg-12">
          <button
            type="submit"
            className="cs_btn cs_style_1"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('submitting') : t('submitComment')}
          </button>
        </div>
      </form>

      {comments.length > 0 && (
        <div className="cs_comments_list cs_mt_40">
          <h3 className="cs_fs_20 cs_semibold cs_mb_20">
            {comments.length} {comments.length === 1 ? t('comment') : t('comments')}
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="cs_comment_item cs_mb_20">
              <div className="cs_comment_header">
                <h4 className="cs_fs_16 cs_semibold">{comment.name}</h4>
                <span className="cs_fs_14 cs_text_color">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="cs_fs_14 cs_text_color cs_mt_10">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection; 