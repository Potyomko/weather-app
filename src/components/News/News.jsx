import { useEffect, useState } from "react"


export const News = () => {

    const [news, setNews] = useState('')
    console.log(news);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?q=dog&ln=en&apiKey=f58eaf87dd6248efaa19cf893b7b86fa') 
        .then(res => res.json())
        .then(result => setNews(result))
    }, [] )

    // const getNews = () => {

    // }

    return (
        <>
            <h3>{}</h3>
            <div>
                <ul>
                    <li>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.pinterest.com%2Fpin%2F21884748169562217%2F&psig=AOvVaw17fANpB1QHsTqMVpHqM6Tq&ust=1698420282336000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi5pN-ClIIDFQAAAAAdAAAAABAE" alt="dogs" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, possimus.</p>
                    </li>
                    <li>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.pinterest.com%2Fpin%2F21884748169562217%2F&psig=AOvVaw17fANpB1QHsTqMVpHqM6Tq&ust=1698420282336000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi5pN-ClIIDFQAAAAAdAAAAABAE" alt="dogs" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
                    </li>
                    <li>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.pinterest.com%2Fpin%2F21884748169562217%2F&psig=AOvVaw17fANpB1QHsTqMVpHqM6Tq&ust=1698420282336000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi5pN-ClIIDFQAAAAAdAAAAABAE" alt="dogs" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dolorum.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}