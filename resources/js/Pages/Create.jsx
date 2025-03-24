import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm();

    return (
        <>
            <Head>
                <title>Create</title>
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
                Create
            </div>

            <div className="w-1/2 mx-auto">
                <form>
                    <textarea
                        rows="10"
                        className="border w-full rounded-md focus:border-blue-600 border-blue-300 p-2"
                    ></textarea>
                    <button className="bg-blue-800 mt-4 text-white p-3 w-full cursor-pointer hover:bg-blue-600 rounded-xl">
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
