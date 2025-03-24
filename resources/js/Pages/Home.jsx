import { Head } from "@inertiajs/react";
import { useEffect } from "react";

const Home = ({ posts }) => {
    useEffect(() => {
        console.log(posts);
    }, []);
    return (
        <>
            <Head>
                <title>Home</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,
                   initial-scale=1,
                   maximum-scale=1"
                />
                <meta
                    name="description"
                    content="A Computer Science portal for geeks. 
         It contains well written, well thought 
         and well explained computer science and 
         programming articles, quizzes and practice/competitive
         programming/company interview Questions."
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            <div className="py-2 font-bold text-teal-500 flex flex-row w-full justify-center">
                Home
            </div>
            <div>
                {posts?.map((post, index) => (
                    <div key={index} className="p-4 border-b font-bold">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}{" "}
                            </span>
                        </div>
                        <p>{post?.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
