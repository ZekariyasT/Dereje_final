import Services from "../Components/Services/Services";
import BreadCumb from "../Components/Common/BreadCumb";

const ServicesPage = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Services"
            />
            <Services />
        </div>
    );
};

export default ServicesPage;