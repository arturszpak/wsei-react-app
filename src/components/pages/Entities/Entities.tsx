import './Entities.scss';
import SingleEntity from './SingleEntity/SingleEntity'
import { entityData } from './EntitiesData'
import { useState } from 'react'
import EntityFilter from './EntityFilter/EntityFilter'; 
import IEntityProps from './IEntityProps';

const Entities = () => {

    const [showFilterComponent, setShowFilterComponent] = useState(false);
    const [searchEntity, setSearchEntiity] = useState('');
    const [sortOrder, setSortOrder] = useState(false);
    const [entData, setEntData] = useState(entityData)

    const copyLink = () => {
        var inputc = document.body.appendChild(document.createElement("input"));
        inputc.value = window.location.href;
        inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
        alert("URL Copied.");
    }

    const toggleEntityFilter = () => {
        setShowFilterComponent(!showFilterComponent)
    }

    const entitiesSort = () => {
        const sorted = entData.sort((a, b) => {
            const isDesc = (sortOrder === false) ? 1 : -1;
            return isDesc * a.title.localeCompare(b.title)
        })
        setSortOrder(!sortOrder);
        setEntData(sorted);
    }

    const fullscreen = () => {
        const sideMenu = document.querySelector(".userProfileWrapper") as HTMLDivElement;
        const nav = document.querySelector(".mainNav") as HTMLDivElement;
        const display = window.getComputedStyle(sideMenu, null).getPropertyValue("display")
        const entitiesWrapper = document.querySelector(".entities__wrapper") as HTMLDivElement;

        if(display === "block"){
            nav.style.display = "none";
            sideMenu.style.display = "none";
           
            entitiesWrapper.style.width = "90%";
            entitiesWrapper.style.margin = " 2rem auto";
        }
        else if(display === "none"){
            nav.style.display = "flex";
            sideMenu.style.display = "block";
            entitiesWrapper.style.margin = "0 auto";
        }
    }

    const changeDisplayMode = (mode: string) => {
        const container = document.querySelector(".entitiesContainer")
        const elements = [...container.getElementsByTagName('div')];
        if(mode === "list")
            elements.forEach(element => element.style.width = "100%");
        else if(mode === 'mosaic'){
            elements.forEach(element => element.style.width = "auto");
        }
    }

    return (
        <>
            <div className="entities__wrapper">
                <div className="entities__headerWrapper">
                    <div className="entities__header">
                        <h2 className="entities__headerTitle">Entities</h2>
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="entities__displayTypes">
                        <button className="displayBtn displayBtn__mosaic" onClick={() => changeDisplayMode('mosaic')}>
                            <i className="fab fa-windows"></i>
                            <p>Mosaic</p>
                        </button>
                        <button className="displayBtn displayBtn__list" onClick={() => changeDisplayMode('list')}>
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
                            <button className="controls__sortBtn control-btn" onClick={entitiesSort}>
                                <i className="fas fa-sort"></i> Sort
                            </button>
                        </div>
                        <div className="controls__filter">
                            <button className="controls__filterBtn control-btn" onClick={toggleEntityFilter}>
                                <i className="fas fa-filter"></i> Filters
                            </button>
                            {showFilterComponent ?
                                <EntityFilter/> :
                                null
                            }
                        </div>
                        <div className="controls__fullscreen">
                            <button className="controls__fullscreenBtn control-btn" onClick={fullscreen}>
                                <i className="fas fa-expand-alt"></i>
                            </button>

                        </div>
                        <div className="controls__share">
                            <button className="controls__shareBtn control-btn" onClick={copyLink}>
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
                       entData.filter(val => {
                        if (searchEntity === ''){
                            return val;
                        }
                        else if (val.title.toLowerCase().includes(searchEntity.toLowerCase())) {
                            return val;
                        }
                        else return null;
                     }).map(entity => <SingleEntity {...entity} ></SingleEntity>)
                    }
                </div>

            </div>
        </>
    );
}

export default Entities;