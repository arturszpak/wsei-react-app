import Publication from './Publication/Publication';
import './LatestPublications.scss';
import { Link } from 'react-router-dom';

const LatestPublications = () => {
    return(
        <div className="publications">
            <h2 className="publications__header">
                Latest Publications
            </h2>
            <Publication />
            <Publication />
            <Publication />
            <div className="publications__linkWrapper">
                <Link to="/Publications" className="publications__link">
                    See more publications
                </Link>
            </div>
            
        </div>
    );
};

export default LatestPublications;