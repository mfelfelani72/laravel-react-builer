import React, { useEffect, useState } from "react";
import Layout from "../../Layouts/Layout";

const About = () => {
    const [d, setD] = useState("SAD");
    useEffect(() => {
        console.log("sdfdsf");
        setD("Dd");
    }, []);
    return <div>About {d}</div>;
};

About.layout = (page) => <Layout children={page} />;

export default About;
