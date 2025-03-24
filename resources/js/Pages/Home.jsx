import { useEffect } from "react";

const Home = ({ posts }) => {
    useEffect(() => {
        console.log(posts);
    }, []);
    return (
        <>
            <div className="py-2 font-bold text-teal-500 flex flex-row w-full justify-center">Home</div>
            <div>
                {posts?.map((post, index) => (
                    <div key={index} className="p-4 border-b font-bold">
                        <p>{post?.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
