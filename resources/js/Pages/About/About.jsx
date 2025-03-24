import React, { useEffect, useState } from "react";

const About = () => {
    const [d, setD] = useState("SAD");
    useEffect(() => {
        console.log("sdfdsf");
        setD("Dd");
    }, []);
    return <div>About {d}</div>;
};

export default About;
