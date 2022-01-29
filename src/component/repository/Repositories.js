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

    const [pageNumber, setPageNumber] = useState(1);

    const {
        data,
        isFetched,
        isLoading,
        error
    } = useQuery(["fetchRepoInfos", pageNumber], getRepoInfo, {retryOnMount: true});

    const prevRepo = () => {
        console.log('prev repo');
        if(pageNumber > 0)
            setPageNumber(pageNumber - 1)
    } 
    
    const nextRepo = () => {
        console.log('next repo');
        setPageNumber(pageNumber + 1);
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
                            data.map((item, index) => <RepositoryItem 
                                                key={index}
                                                name={item.name}
                                                description={item.description}
                                                forkCount={item.forks_count}
                                                starCo unt={item.stargazers_count}
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
                                isFirstPage={true}
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
