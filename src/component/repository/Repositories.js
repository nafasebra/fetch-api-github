import React, { memo, useState } from 'react';

// import component
import RepositoryItem from './RepositoryItem';
import NotExistPanel from '../helper/NotExistPanel';
import LoadingPanel from '../helper/LoadingPanel';
import Pagination from './Pagination';

//import css file
import "./Repositories.css"

// import api
import { getRepoInfo, getUserInfo } from './../../api/Api'

// import react query
import { useQuery } from 'react-query';
import { useEffect } from 'react/cjs/react.development';


const Repositories = memo(() => {

    const [pageNumber, setPageNumber] = useState(1);
    let totalPage = 0;
    let isLastPage = false;

    const {
        data,
        isFetched,
        isLoading,
        error
    } = useQuery(["fetchRepoInfos", pageNumber], getRepoInfo);


    const {
        data: dataUser,
        isFetched: isFetchedUser
    } = useQuery(["fetchNumberOfRepos"], getUserInfo, {retryOnMount: true});


    const prevRepo = () => {
        console.log('prev repo');
        if(pageNumber > 1)
            setPageNumber(pageNumber - 1)
    } 
    
    const nextRepo = () => {
        console.log('next repo');
        setPageNumber(pageNumber + 1);
    } 

    const totalPages = () => {
        if(isFetchedUser) {
            totalPage = parseInt(dataUser.public_repos / 10);
            console.log("set totalpage " + totalPage)
            if(totalPage === pageNumber){
                isLastPage = true;
            }
        }
    }

    useEffect(() => {
        totalPages();
    }, [dataUser, totalPage])


    return (
        <div className="repositories__section">
            <div className="repositories__title">
                <span className="slash"></span>
                <h2>
                    Public repositories
                    {isFetchedUser && ` (${dataUser.public_repos})`}
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
                                isFirst={pageNumber === 1 ? true : false}
                                isLast={isLastPage}
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
