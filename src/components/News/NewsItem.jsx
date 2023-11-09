export const NewsItem = ({img, description}) => {
    return (
        <>
                <img src={img} alt="news" />
                <p>{description}</p>
        </>
    )
}