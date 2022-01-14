import React, { memo, useEffect, useState } from 'react';

// import component
import RepositoryItem from './RepositoryItem';
import NotExistPanel from '../NotExistPanel';

//import css file
import "./Repositories.css"

// import api
import { getRepoInfo } from './../../api/Api'

// import react query
import { useQuery } from 'react-query';


const Repositories = memo(() => {

    const [repos, setRepos] = useState([]);

    const {
        data,
        isFetched,
        error
    } = useQuery("fetchRepoInfos", getRepoInfo, {retryOnMount: true});

    useEffect(() => {
        console.log(data)
        console.log(error)
        initRepos();
    }, [data]);

    const initRepos = () => {
        setRepos(data || []);
    }

    const loadMoreRepos = () => {
        console.log('load more repositories...');
        console.log(repos);
    }

    return (
        <div className="repositories__section">
            <div className="repositories__title">
                <span className="slash"></span>
                <h2>Last Repositories</h2>
            </div>
            
            {
                isFetched && data !== undefined ?
                <>
                    <div className="repositories">
                        {
                            data.map(item => <RepositoryItem 
                                                key={item.id}
                                                name={item.name}
                                                description={item.description}
                                                forkCount={item.forks_count}
                                                starCount={item.stargazers_count}
                                                watchCount={item.watchers_count}
                                            />)
                        }
                    </div>
                    
                    <div 
                        className="load-more"
                        onClick={loadMoreRepos}
                    >
                        <p className="load-more__text">Load more</p>
                        <div className="load-more__icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </>
                :
                <NotExistPanel notExistText="you have not Repo!" />
            }
        </div>
    );
})

export default Repositories;
