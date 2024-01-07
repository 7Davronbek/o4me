import {Feedback, Map} from "../../components";
import circle from "@/assets/circle.png"
import feedbackBg2 from "@/assets/feedbackBg2.png"

const FeedbackPage = () => {
    return (
        <>
            <div className='FeedbackPage miniFeedback'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <Feedback
                                type={"Feedback"}
                                mainText={"Biz bilan bog’laning"}
                                secondaryText={"Aloqa"}
                            />
                        </div>
                        <div className="col-lg-2">
                            <img src={feedbackBg2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PhoneNumber mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='secondaryText'><img className='circle' src={circle}
                                                                alt=""/> Telefon raqam
                            </div>
                            <a href={"tel:"} className="mainText">+998 90 009 09 09</a>
                        </div>
                    </div>
                </div>
            </div>
            <Map/>
        </>
    );
};

export default FeedbackPage;