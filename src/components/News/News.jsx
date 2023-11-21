import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";
import { NewsList } from "./News.styled";
import { NewsSection } from "./News.styled";
import { Container } from "GlobalStyle";
// import image1 from "img/Nature1.jpg"
// import image2 from "img/Nature2.jpg"
// import image3 from "img/Nature3.jpg"
// import image4 from "img/Nature4.jpg"

export const News = () => {

    const [news, setNews] = useState('')
    console.log(news);

    // if (news) {
    //     const img = news.map((onenew) => );
    //     console.log(img);
    // }

    
    // useEffect(() => {
    //     setInterval(() => {
    //         fetch(`https://newsapi.org/v2/everything?pageSize=4&q=tesla&counrty=us&sortBy=publishedAt&apiKey=f58eaf87dd6248efaa19cf893b7b86fa`) 
    //         .then(res => res.json())
    //         .then(result => setNews(result.articles))
    //     }, 30000)
    // }, [] )
    
    
    
    

    // const getNews = () => {

    // }


    return (
        <>
            <NewsSection>
                <Container>
                    <NewsList>
                            {news && news.map((onenew) => {
                                return (
                                        <li key={onenew.author}> 
                                            <NewsItem
                                                img={onenew.urlToImage}
                                                description={onenew.description} />
                                        </li>
                                ) 
                            })}
                                        {/* <li> 
                                            <NewsItem
                                                img={image1}
                                            />
                                        </li>
                                        <li> 
                                            <NewsItem
                                                img={image2}
                                            />
                                        </li>
                                        <li> 
                                            <NewsItem
                                                img={image3}
                                            />
                                        </li>
                                        <li> 
                                         <NewsItem
                                               img={image4}
                                            />
                                     </li> */}
                    </NewsList>
                </Container>
            </NewsSection>

        </>
    )
}