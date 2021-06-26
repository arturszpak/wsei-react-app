import Publication from './Publication/Publication';
import './LatestPublications.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const LatestPublications = () => {

    const removeArticleEntryImg = () => {
        const container: HTMLDivElement = document.querySelector(".articleEntry");
        const imgToRemove: HTMLImageElement = container.querySelector(".article__image")
        imgToRemove.remove();
    }
    useEffect(()=> {
        removeArticleEntryImg();
    })

    return(
        <div className="publications">
            <div className="articleEntry">
                <Publication/>
            </div>
            <div className="publications__list">
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

            
        </div>
    );
};

export default LatestPublications;