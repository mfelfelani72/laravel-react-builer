import Layout from "../Layouts/Layout";

const Home = () => {
    return <div className="py-2 font-bold text-teal-500">Home</div>;
};

Home.layout = (page) => <Layout children={page} />;

export default Home;
