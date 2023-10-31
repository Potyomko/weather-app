import { useEffect, useState } from "react"


export const News = () => {

    const [news, setNews] = useState('')
    console.log(news);

    if (news) {
        const img = news.map((onenew) => onenew.urlToImage);
        console.log(img);
    }

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?pageSize=4&q=tesla&counrty=us&sortBy=publishedAt&apiKey=f58eaf87dd6248efaa19cf893b7b86fa`) 
        .then(res => res.json())
        .then(result => setNews(result.articles))
    }, [] )

    // const getNews = () => {

    // }

    return (
        <>
            <div>
                <ul>
                        {news && news.map((onenew) => {
                        return <li>
                            <img src={onenew.urlToImage} alt="dog" />
                            <p>{onenew.description}</p>
                        </li>
                    })}
                    {/* {news.map((onenew) => {
                        return <li>
                            <img src={onenew.urlToImage} alt="dog" />
                            <p>{onenew.description}</p>
                        </li>
                    })} */}

                    
                </ul>
            </div>
        </>
    )
}