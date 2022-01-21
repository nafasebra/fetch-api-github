import React, { memo, useState } from 'react';

// import component
import RepositoryItem from './RepositoryItem';
import NotExistPanel from '../helper/NotExistPanel';
import LoadingPanel from '../helper/LoadingPanel';
import Pagination from './Pagination';

//import css file
import "./Repositories.css"

// import api
import { getRepoInfo } from './../../api/Api'

// import react query
import { useQuery } from 'react-query';


const Repositories = memo(() => {

    const [repos] = useState([]);

    const {
        data,
        isFetched,
        isLoading,
        error
    } = useQuery("fetchRepoInfos", getRepoInfo, {retryOnMount: true});

    const prevRepo = () => {
        console.log('prev repo');
    } 
    
    const nextRepo = () => {
        console.log('next repo');
    } 

    return (
        <div className="repositories__section">
            <div className="repositories__title">
                <span className="slash"></span>
                <h2>
                    Public repositories
                </h2>
            </div>
            
            {
                isFetched &&
                <>
                    <div className="repositories">
                        {
                            repos.map((item, index) => <RepositoryItem 
                                                key={index}
                                                name={item.name}
                                                description={item.description}
                                                forkCount={item.forks_count}
                                                starCount={item.stargazers_count}
                                                watchCount={item.watchers_count}
                                                topics={item.topics}
                                            />)
                        }
                    </div>
                     
                    { 
                        data.length > 5 ?
                            <Pagination 
                                prevFunc={prevRepo}  
                                nextFunc={nextRepo}
                            />
                        : null
                    }
                </>
            }
            { error && <NotExistPanel notExistText="you have not Repo!" /> }
            { isLoading && <LoadingPanel /> }
        </div>
    );
})

export default Repositories;
