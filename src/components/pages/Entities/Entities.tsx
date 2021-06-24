import './Entities.scss';
import SingleEntity from './SingleEntity/SingleEntity'
import { entityData } from './EntitiesData'
import { useState } from 'react'


const Entities = () => {

    const [searchEntity, setSearchEntiity] = useState('');

    return (
        <>
            <div className="entities__wrapper">
                <div className="entities__headerWrapper">
                    <div className="entities__header">
                        <h2 className="entities__headerTitle">Entities</h2>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="entities__displayTypes">
                        <button className="displayBtn displayBtn__mosaic">
                            <i className="fab fa-windows"></i>
                            <p>Mosaic</p>
                        </button>
                        <button className="displayBtn displayBtn__list">
                            <i className="fas fa-bars"></i>
                            <p>List</p>
                        </button>
                    </div>
                </div>

                <div className="controls">
                    <div className="controls__general">
                        <button className="displayBtn">
                            <i className="far fa-play-circle"></i> All
                            <i className="fas fa-caret-down"></i>
                        </button>
                        <button className="control-btn">
                            <i className="fas fa-ellipsis-h"></i>
                        </button>
                        <div className="controls__sort">
                            <button className="controls__sortBtn control-btn">
                                <i className="fas fa-sort"></i> Sort
                            </button>
                        </div>
                        <div className="controls__filter">
                            <button className="controls__filterBtn control-btn">
                                <i className="fas fa-filter"></i> Filters
                            </button>
                        </div>
                        <div className="controls__fullscreen">
                            <button className="controls__fullscreenBtn control-btn">
                                <i className="fas fa-expand-alt"></i>
                            </button>

                        </div>
                        <div className="controls__share">
                            <button className="controls__shareBtn control-btn">
                                <i className="fas fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                    <div className="controls__additional">
                        <div className="controls__search">
                            <input type="text" className="controls__inputFilter" placeholder="Search..." onChange={event => { setSearchEntiity(event.target.value) }} />
                        </div>
                        <div className="controls__followed">
                            <i className="fas fa-broadcast-tower"></i>
                            Followed
                            <i className="fas fa-sort-down"></i>
                        </div>
                    </div>

                </div>
                <div className="entitiesContainer">
                    {
                        entityData.filter(val => {
                            if (searchEntity === '')
                                return val;
                            else if (val.title.toLowerCase().includes(searchEntity.toLowerCase())) {
                                return val;
                            }
                        }).map(entity => <SingleEntity {...entity} ></SingleEntity>)
                    }

                </div>

            </div>
        </>
    );
}

export default Entities;