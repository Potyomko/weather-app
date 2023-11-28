import { NewsImage } from "./News.styled"
import { NewsDesc } from "./News.styled"

export const NewsItem = ({ img, description }) => {
    return (
        <>
                <NewsImage src={img} alt="news" width={270} />
            <NewsDesc>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nostrum? */}
                {description}
            </NewsDesc>
        </>
    )
}