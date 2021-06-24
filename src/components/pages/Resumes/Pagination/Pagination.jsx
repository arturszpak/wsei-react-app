import styled from 'styled-components';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const PaginationList = styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 1rem 0;

    `;
    const PaginationLink = styled.a`
        color: black;
        text-decoration: none;
        font-weight: 700;
    `;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
        pageNumbers.push(i);

    return (
        <nav>
            <PaginationList>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <PaginationLink href="" onClick={(e) => paginate(number, e)}>
                                {number}
                            </PaginationLink>
                        </li>
                    ))
                }
            </PaginationList>
        </nav>
    )
}

export default Pagination;