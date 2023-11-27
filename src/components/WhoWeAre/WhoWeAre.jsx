import { Container } from "GlobalStyle";
import people from "./WhoWeAreData";
import { OurSection, Persons, Person, Name, Img, Work, Email, Git } from "./WhoWeAre.styled";

export const WhoWeAre = () => {
    return (
        <OurSection>
            <Container>
                <Persons>
                        {people.map(people =>
                            <Person key={people.name}>
                                <Name>{people.name}</Name>
                                <Img src={people.photo}></Img>
                                <Work>Роботу, яку виконував на проекті : {people.work}</Work>
                                <Email>E-mail : {people.mail}</Email>
                                <Git>Github : {people.git}</Git>
                            </Person>
                        )
                        }
                </Persons>
            </Container>
        </OurSection>
    )
}