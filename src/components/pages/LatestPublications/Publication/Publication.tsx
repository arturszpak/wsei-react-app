import './Publication.scss';

const Publication = () => {
    return(
        <div className="article">
            <div className="article__image">
                <img src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg" alt="doe" />
            </div>
            <div className="article__content">
                <p className="article__paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, animi.
                </p>
                <div className="article__info">
                    <span className="article__date">21 jan. 2020</span>
                    <span className="article__publisherAvatar">
                        <img src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg" alt="doe" />
                    </span>
                    <span className="article__publisherName">John Doe</span>
                </div>
            </div>

        </div>
    );
};

export default Publication;