import './ArticleEntry.scss';

const ArticleEntry = () => {
    return(
        <>
            <div className="articleEntry">
                <div className="articleEntry__information">
                    <p className="articleEntry__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum ea quod, quaerat ipsam tempore?
                    </p>
                    <span className="articleEntry__entryDate">7 jan. 2020</span>
                    <span className="articleEntry__userAvatar">
                        <img src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg" alt="doe" />
                    </span>
                    <span className="articleEntry__userName">John Doe</span>
                </div>
            </div>
        </>
    );
};

export default ArticleEntry;