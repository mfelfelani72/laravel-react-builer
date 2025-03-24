import { Head, Link } from "@inertiajs/react";
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
                {posts?.data?.map((post, index) => (
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

            <div className="py-12 px-4 ">
                {posts?.links?.map((link, index) =>
                    link?.url ? (
                        <Link
                            href={link?.url}
                            key={link?.label}
                            dangerouslySetInnerHTML={{ __html: link?.label }}
                            className={`px-1 mx-1 ${
                                link?.active ? "text-blue-500 font-bold" : ""
                            } `}
                        />
                    ) : (
                        <span
                            key={link?.label}
                            dangerouslySetInnerHTML={{ __html: link?.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

export default Home;
