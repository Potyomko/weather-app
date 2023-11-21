import { NewsImage } from "./News.styled"

export const NewsItem = ({ img, description }) => {
    return (
        <>
                <NewsImage src={img} alt="news" width={270} />
            <p>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nostrum? */}
                {description}
            </p>
        </>
    )
}