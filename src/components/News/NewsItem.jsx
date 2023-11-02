export const NewsItem = (img, description) => {
    return (
        <>
            <li>
                <img src={img} alt="news" />
                <p>{description}</p>
            </li>
        </>
    )
}