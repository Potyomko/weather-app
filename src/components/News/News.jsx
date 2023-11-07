import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";

export const News = () => {

    const [news, setNews] = useState('')
    console.log(news);

    // if (news) {
    //     const img = news.map((onenew) => );
    //     console.log(img);
    // }

    // useEffect(() => {
    //     fetch(`https://newsapi.org/v2/everything?pageSize=4&q=tesla&counrty=us&sortBy=publishedAt&apiKey=f58eaf87dd6248efaa19cf893b7b86fa`) 
    //     .then(res => res.json())
    //     .then(result => setNews(result.articles))
    // }, [] )
    
    
    
    

    // const getNews = () => {

    // }


    return (
        <>
            <div>
                <ul>
                        {news && news.map((onenew) => {
                            return (
                                <>
                                    <NewsItem
                                        img={onenew.urlToImg}
                                        description={onenew.description} />
                                    <NewsItem
                                        img={onenew.urlToImg}
                                        description={onenew.description} />
                                    <NewsItem
                                        img={onenew.urlToImg}
                                        description={onenew.description} />
                                    <NewsItem
                                        img={onenew.urlToImg}
                                        description={onenew.description} />
                                </>
                            ) 
                        })}
                </ul>
            </div>
        </>
    )
}