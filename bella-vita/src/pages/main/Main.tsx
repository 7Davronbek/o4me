import Header from "./Header.tsx";
import Benefits from "./Benefits.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Feedback, Map} from "@/components";
import Gallery from "./Gallery.tsx";
import Statistics from "../about-us/Statistics.tsx";
import {useEffect, useState} from "react";
import Loader from "../../components/Loader.tsx";
// import AboutBellaVita from "./AboutBellaVita.tsx";

const Main = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            {isLoading && <Loader/>}
            <Header/>
            <Benefits/>
            <Gallery/>
            <div className="MainStatics">
                <Statistics/>
            </div>
            {/*<AboutBellaVita />*/}
            <div className="Center">
                <Map/>
            </div>
            <Feedback
                type={"To'y_liboslari_tiktirish"}
                mainText={"To’y libosI TIKTIRISHNI XOHLAYSIZMI?"}
                secondaryText={"hAR BIR MIJOZ UCHUN INDIVIDUAL YONDASHUV"}
            />
        </>
    );
};

export default Main;