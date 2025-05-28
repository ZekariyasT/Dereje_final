import Blog from "../Components/Blog/Blog";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogPage = () => {
  return (
    <div>
      <BreadCumb
        bgImg="../../../../public/assets/img/page_heading_1.jpg"
        Title="Blog"
      />
      <Blog />
    </div>
  );
};

export default BlogPage;
