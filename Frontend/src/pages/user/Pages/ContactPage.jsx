import BreadCumb from "../Components/Common/BreadCumb";
import Contact from "../Components/Contact/Contact";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Contact"
            ></BreadCumb> 
            <Contact></Contact>           
        </div>
    );
};

export default ContactPage;