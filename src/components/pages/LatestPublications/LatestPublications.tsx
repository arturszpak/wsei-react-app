import Publication from './Publication/Publication';
import './LatestPublications.scss';

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
                <a href="#" className="publications__link">See more publications</a>
            </div>
            
        </div>
    );
};

export default LatestPublications;