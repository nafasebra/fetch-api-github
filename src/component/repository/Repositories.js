import React, { memo } from 'react';

// import component
import RepositoryItem from './RepositoryItem';

//import css file
import "./Repositories.css"

// import api
import { getRepoInfo } from './../../api/Api'

// import react query
import { useInfiniteQuery } from 'react-query';


const Repositories = memo(() => {

    const {
        data,
        isFetched,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetching,
        error
    } = useInfiniteQuery(
        "fetchRepoInfos", getRepoInfo, 
        {
            getNextPageParam: (lastPage, pages) => {
                if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
                return false;
            }
        });

    console.log(data)
    console.log(error)


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
                    
                    {
                        hasNextPage ?
                        <div 
                            className="load-more"
                            onClick={() => fetchNextPage}
                        >
                            <p className="load-more__text">Load more</p>
                            <div className="load-more__icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                        : null
                    }
                </>
                :
                <h2>you have not Repo!</h2>
            }
        </div>
    );
})

export default Repositories;
