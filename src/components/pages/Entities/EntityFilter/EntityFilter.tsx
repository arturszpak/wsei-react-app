import './EntityFilter.scss'

const EntityFilter = () => {
    return (
        <div className="entityFilter">
            <p className="entityFilter__header">
                Rows are filtered by the following conditions starting from the top.
            </p>
            <div className="entityFilter__filters">
                <div className="entityFilter__condition">
                    <i className="fas fa-times"></i>
                    <p >Where</p>
                    <p>Company <i className="fas fa-caret-down"></i></p>
                    <p>Company <i className="fas fa-caret-down"></i></p>
                    <input type="text" placeholder="type" className="entityFilter__condition__input" />
                </div>
                <div className="entityFilter__condition">
                    <i className="fas fa-times"></i>
                    <p >Where</p>
                    <p>Status <i className="fas fa-caret-down"></i></p>
                    <p>Is <i className="fas fa-caret-down"></i></p>
                    <input type="text" placeholder="type" className="entityFilter__condition__input" />
                    <p> In <i className="fas fa-caret-down"></i></p>
                    <input type="text" placeholder="type" className="entityFilter__condition__input" />
                </div>
                <div className="entityFilter__condition">
                    <i className="fas fa-times"></i>
                    <p >And</p>
                    <p>Status <i className="fas fa-caret-down"></i></p>
                    <p>Ends before <i className="fas fa-caret-down"></i></p>
                    <input type="text" placeholder="type" className="entityFilter__condition__input" />
                    <p> In <i className="fas fa-caret-down"></i></p>
                    <input type="text" placeholder="type" className="entityFilter__condition__input" />
                </div>
            </div>
            <div className="entityFilter__controls">
                <div className="entityFilter__controls__addCondition">
                    <i className="fas fa-plus"></i>
                     Add filter
                </div>
                <div className="entityFilter__controls__chooseProperty">
                    Choose property 
                    <p>
                        <i className="fas fa-caret-down"></i>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default EntityFilter;