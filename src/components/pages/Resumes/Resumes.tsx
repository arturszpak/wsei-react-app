import { useState, useEffect } from 'react';
import Contracts from './Contracts/Contracts';
import Pagination from './Pagination/Pagination';
import './Resumes.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';


const Resumes = () => {

    const usersStore = useSelector((state: RootState)=> state.users.users);
    const postsStore = useSelector((state: RootState)=> state.comments.comments);
    const photosStore = useSelector((state: RootState)=> state.photos.photos);

    
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [filter, setFilter] = useState('');
    
    useEffect(() => {
        setPosts(postsStore)
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
                        <option value="ALL">All</option>
                        <option value="MY">My posts</option>
                    </select>
                </div>

            </div>
            <div className="resumes__wrapper">
                <Contracts posts={currentPosts} filter={filter} users={usersStore} photos={photosStore} />
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
            </div>

        </div>
    );
}

export default Resumes;