import React, { memo, useEffect, useState } from 'react';

// import component
import RepositoryItem from './RepositoryItem';
import NotExistPanel from '../helper/NotExistPanel';
import LoadingPanel from '../helper/LoadingPanel';

//import css file
import "./Repositories.css"

// import api
import { getRepoInfo } from './../../api/Api'

// import react query
import { useQuery } from 'react-query';


const Repositories = memo(() => {

    const [repos, setRepos] = useState([]);
    const [displayShowRepo, setDisplayShowRepo] = useState(5);

    const {
        data,
        isFetched,
        isLoading,
        error
    } = useQuery("fetchRepoInfos", getRepoInfo, {retryOnMount: true});

    
    useEffect(() => {
        initRepos();
        if(data !== undefined) {
            setRepos(data.slice(0, displayShowRepo));
        }
    }, [ repos, data ]);

    const initRepos = () => {
        setRepos(data || []);
    }

    const loadMoreRepos = () => {
        setDisplayShowRepo(displayShowRepo + 5);
    }

    return (
        <div className="repositories__section">
            <div className="repositories__title">
                <span className="slash"></span>
                <h2>
                    Public repositories 
                    { data && ` (${data.length})` }
                </h2>
            </div>
            
            {
                isFetched &&
                <>
                    <div className="repositories">
                        {
                            repos.map(item => <RepositoryItem 
                                                key={item.id}
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
                        data.length > 5 && displayShowRepo <= data.length ?
                        <div className="load-more" onClick={loadMoreRepos} >
                            <p className="load-more__text">Load more</p>
                            <div className="load-more__icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>  
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
