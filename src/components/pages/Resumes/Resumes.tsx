import React, { useState, useEffect } from 'react';
import Contracts from './Contracts/Contracts';
import Pagination from './Pagination/Pagination';
import './Resumes.scss';
import axios from 'axios';


const Resumes = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const resData: object[] = res.data;
            setPosts(resData);
            setLoading(false);
        }

        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber: number, e: MouseEvent) => {
        e.preventDefault()
        setCurrentPage(pageNumber)
    }

    return (
        <div className="resumes">
            <div className="resumes__header">
                <h2>Resume your work</h2>
                <div className="resumes__filters">
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        className="resumes__filter"
                        value={filter}
                        onChange={event => setFilter(event.target.value)}
                    />

                    <select name="followed" id="followed">
                        <option value="enable">follow</option>
                        <option value="disable">no follow</option>
                    </select>
                </div>

            </div>
            <div className="resumes__wrapper">
                <Contracts posts={currentPosts} loading={loading} filter={filter} />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
            </div>

        </div>
    );
}

export default Resumes;