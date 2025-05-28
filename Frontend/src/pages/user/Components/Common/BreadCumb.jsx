import { Link } from "react-router-dom";

const BreadCumb = ({Title}) => {
    const getBackgroundStyle = () => {
        switch(Title.toLowerCase()) {
            case 'about us':
                return 'cs_about_bg';
            case 'services':
                return 'cs_services_bg';
            case 'blog':
                return 'cs_blog_bg';
            case 'contact':
                return 'cs_contact_bg';
            default:
                return 'cs_primary_bg';
        }
    };

    return (
      <section className={`cs_page_heading cs_center ${getBackgroundStyle()}`}>
        <div className="container">
          <h1 className="cs_white_color cs_semibold cs_mb_10 cs_fs_50">{Title}</h1>
          <ol className="breadcrumb cs_heading_font">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">{Title}</li>
          </ol>
        </div>
      </section>
    );
};

export default BreadCumb;