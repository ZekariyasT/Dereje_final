import { useState, useEffect, useRef } from "react";
import { useBlogStore } from "../services/blog";
import Slider from "react-slick";
import servicesData from '../Data/services1.json';
import SectionTitle from "./Common/SectionTitle";

const HOST = import.meta.env.VITE_HOST;

const BlogAndServices = () => {
  // Blog state
  const { blogs, fetchBlogs, createComment } = useBlogStore();
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [showComments, setShowComments] = useState({});
  const [commentTexts, setCommentTexts] = useState({});

  // Services slider ref
  const sliderRef = useRef(null);

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
    if (commentTexts[blogId]?.trim()) {
      await createComment(blogId, commentTexts[blogId]);
      setCommentTexts(prev => ({
        ...prev,
        [blogId]: ''
      }));
      fetchBlogs();
    }
  };

  // Services slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {/* Services Section */}
      <section className="cs_gray_bg cs_bg_filed position-relative" data-src="assets/img/service_bg_1.jpg">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
            <div className="cs_section_heading_left">
              <SectionTitle
                SubTitle="What We Offer For You"
                Title="Where Your Truck Gets Pride the Best Care"
              />
            </div>
            <div className="cs_section_heading_right mb-0 wow fadeInDown">
              We provide expert truck body production, modification and repair along with heavy duty truck rental,
              sales and accident recovery services, ensuring durability, reliability and top-quality craftsmanship for Truck.
            </div>
          </div>
        </div>
        <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
          <div className="container">
            <div className="cs_slider_container">
              <div className="cs_slider_wrapper">
                <Slider ref={sliderRef} {...settings}>
                  {servicesData.map((item, index) => (
                    <div key={index} className="cs_slide">
                      <div className="cs_card cs_style_1">
                        <div className="cs_card_thumbnail">
                          <img src={item.img} alt="Service Image" />
                        </div>
                        <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                          <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                            <img src={item.icon} alt="Service Icon" />
                          </div>
                          <h3 className="cs_card_title cs_fs_30 cs_mb_8">{item.title}</h3>
                          <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                          <button 
                            onClick={() => toggleContent(item.id)}
                            className="cs_text_btn cs_style_1 cs_bold cs_heading_color btn-sm"
                          >
                            <span className="cs_btn_text text-uppercase">Learn More</span>
                            <span className="cs_btn_icon cs_center">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </button>
                          {expandedBlogs[item.id] && (
                            <div className="cs_service_details mt-3">
                              <p>{item.fullDescription || item.desc}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="cs_slider_arrows cs_style_1">
                <div className="cs_arrow_wrap cs_arrow_wrap_left cs_center" onClick={previous}>
                  <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                    <i className="bi bi-arrow-left"></i>
                  </div>
                </div>
                <div className="cs_arrow_wrap cs_arrow_wrap_right cs_center" onClick={next}>
                  <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Blog Section */}
      <section className="position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {blogs.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_post cs_style_1 cs_type_1">
                  <div className="cs_post_thumbnail cs_mb_16 position-relative">
                    <img
                      src={`${HOST}/uploads/${item.image.data}`}
                      alt="Post Image"
                      className="w-100"
                    />
                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="cs_post_content_wrapper">
                    <div className="cs_post_content">
                      <div className="cs_post_meta_wrapper cs_mb_11">
                        <div className="cs_post_meta">
                          <span className="cs_accent_color">
                            <i className="bi bi-chat-dots"></i>
                          </span>
                          <span className="cs_heading_color">
                            {item.comments?.length || 0} Comments
                          </span>
                        </div>
                        <div className="cs_post_meta">
                          <span className="cs_accent_color">
                            <i className="bi bi-people"></i>
                          </span>
                          <span className="cs_heading_color">
                            {item.author || "Admin"}
                          </span>
                        </div>
                      </div>
                      <h3 className="cs_fs_20 cs_semibold cs_mb_5">
                        {item.title}
                      </h3>
                      <div className="cs_post_text">
                        <p className="cs_mb_15">
                          {expandedBlogs[item._id] 
                            ? item.content
                            : `${item.content.substring(0, 100)}...`}
                        </p>
                        <button
                          onClick={() => toggleContent(item._id)}
                          className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color btn-sm"
                        >
                          {expandedBlogs[item._id] ? 'Show Less' : 'Read More'}
                        </button>
                      </div>

                      {/* Comments Section */}
                      <div className="cs_comments_section mt-4">
                        <button
                          onClick={() => toggleComments(item._id)}
                          className="cs_btn cs_style_1 cs_fs_14 cs_mb_15 btn-sm"
                        >
                          {showComments[item._id] ? 'Hide Comments' : 'Show Comments'}
                        </button>

                        {showComments[item._id] && (
                          <div className="cs_comments_container">
                            {/* Comment Input */}
                            <div className="cs_comment_input_wrapper mb-3">
                              <textarea
                                className="form-control mb-2"
                                rows="2"
                                placeholder="Write your comment..."
                                value={commentTexts[item._id] || ''}
                                onChange={(e) => setCommentTexts(prev => ({
                                  ...prev,
                                  [item._id]: e.target.value
                                }))}
                              />
                              <button
                                onClick={() => handleCommentSubmit(item._id)}
                                className="cs_btn cs_style_1 btn-sm"
                              >
                                Submit Comment
                              </button>
                            </div>

                            {/* Comments List */}
                            <div className="cs_comments_list">
                              {item.comments?.map((comment, index) => (
                                <div key={index} className="cs_comment_item mb-3 p-2 bg-light rounded">
                                  <p className="mb-1 fs-14">{comment.text}</p>
                                  <small className="text-muted">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                  </small>
                                </div>
                              ))}
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
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </>
  );
};

export default BlogAndServices; 