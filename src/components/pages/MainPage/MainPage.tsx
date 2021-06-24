import ArticleEntry from '../ArticleEntry/ArticleEntry';
import LatestPublications from '../LatestPublications/LatestPublications';
import Resumes from '../Resumes/Resumes';
import WorkspacesWrapper from '../WorkspacesWrapper/WorkspacesWrapper';
import './MainPage.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers, getSomeData} from '../../../actions/usersActions'
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';


type GetUsers = ReturnType<typeof getUsers>
type GetSomeData = ReturnType<typeof getSomeData>

const MainPage = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch<GetUsers>(getUsers())
    }, [])

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch<GetSomeData>(getSomeData('lorem ipsum dolor'))
    }
    //Pobieranie danych z globalnego stanu
    const {someData} = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    return(
        <div className="MainPage">
            <div className="MainPage__header">
                <ArticleEntry />
                <LatestPublications />
            </div>
            <WorkspacesWrapper />
            <Resumes/>

        </div>
    );
}

export default MainPage;