import './Contracts.scss';

const Contracts = ({ posts, loading, filter }) => {
    if (loading) return <h2>Loading...</h2>

    return (
        <ul className="pagination-number-list">

            {posts.filter(val => {
                if (filter == "")
                    return val
                else if (val.title.toLowerCase().includes(filter.toLowerCase())) {
                    return val;
                }
            }).map((post) => (
                <li className="pagination-number-list-item" key={post.title}>
                    <div className="contract">
                        <h3 className="contract__header">{post.title}</h3>
                        <p className="contract__paragraph">{post.body}</p>
                        <div className="contract__info">
                            <span>Subsid. corp</span>
                            <span>Corporate</span>
                            <p>Updated 3 days ago by John Doe</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>


    )
}

export default Contracts;
