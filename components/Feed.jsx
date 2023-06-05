"use client";

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => {
                return (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                );
            })}
        </div>
    );
};

function Feed() {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([])
    const handlesSearchChange = (e) => {

    }
    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handlesSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={() => { }}
            />
        </section>
    );
};

export default Feed;