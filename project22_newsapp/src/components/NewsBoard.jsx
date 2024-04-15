import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=41f2544b9fcd467395b3a8be0c9bba20`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])

    return (
        <div>
            <br />
            <h2 className="text-center">Latest <span className="badge" style={{ backgroundColor: '#FF8C00' }}>News</span></h2>
            <br />

            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}

export default NewsBoard
