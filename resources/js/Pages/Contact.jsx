import { Head } from "@inertiajs/react";
import React from "react";
import Layout from "../Layouts/Layout";

const Contact = () => {
    return (
        <div>
            <Head>
                <title>تماس با ما</title>
                <meta
                    name="description"
                    content="صفحه تماس با ما برای ارتباط با تیم پشتیبانی."
                />
                <meta name="keywords" content="تماس, پشتیبانی, ارتباط" />
            </Head>
            Contact
        </div>
    );
};

Contact.layout = (page) => <Layout children={page} />;

export default Contact;
