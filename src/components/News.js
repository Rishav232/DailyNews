import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const captialize = (string) => {
        return string.charAt(0).toUpperCase() + string.substring(1);

    }
    useEffect(() => {
        document.title=`${captialize(props.category)}-NewsApp`;
        const UpdateNews = async () => {
            props.progress(10);
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            let data = await fetch(url)
            let parsedData = await data.json()
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setloading(false);
            props.progress(100);
        }
        UpdateNews();
        //eslint-disable-next-line
    }, [])
    
    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setpage(page+1);
    }
    return (
        <>
            <h1 className='text-center mt-3'>NewsApp - Top {captialize(props.category)} Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                style={{ overflow: "hidden" }}
            >
                <div className="container mt-3">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>

                                <NewsItems title={element.title ? element.title.slice(0, 74) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} url={element.url}
                                    source={element.source.name} author={element.author} date={element.publishedAt} />
                            </div>
                        }
                        )}
                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}
News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News; 