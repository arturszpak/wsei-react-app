import './SingleEntity.scss';
import IEntityProps from '../IEntityProps';

const SingleEntity = ({ imgSrc, title, content }: IEntityProps) => {

    return (
        <div className="entity">
            <div className="entity__imgContainer">
                <img src={imgSrc} alt="img" className="entity__img" />
            </div>

            <div className="entity__content">
                <h2 className="entity__title">{title}</h2>
                <p className="entity__desc">{content}</p>
            </div>
        </div>
    );
}

export default SingleEntity;