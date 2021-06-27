import './Contracts.scss';

const Contracts = ({ posts, filter, users, photos }) => {
    
    return (
        <ul className="pagination-number-list">

            {posts.filter(val => {
                if (filter === "")
                    return val
                else if (val.name.toLowerCase().includes(filter.toLowerCase())) {
                    return val;
                }
                return null;
            }).map((post, i) => (
                <li className="pagination-number-list-item" key={post.name}>
                    <div className="contract">
                        <h3 className="contract__header">{post.name}</h3>
                        <p className="contract__paragraph">{post.body}</p>
                        <div className="contract__info">
                            <img src={ photos[i>9 ? 9 : i]?.thumbnailUrl } alt="avatar" className="contract__userAvatar" />
                            {
                                users[i> 9 ? 9 : i].name
                            }

                            <span className="contract__type">Corporate</span>
                            <p>Updated 3 days ago by {users[i > 9 ? 9 : i].name}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>


    )
}

export default Contracts;
