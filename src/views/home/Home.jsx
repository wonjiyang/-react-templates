import { Container } from "@chakra-ui/react"
import {Title, TitleH4 } from "../../component/common/Title"
import { Section } from "../../component/layout/Container"
import MainSlide from "./components/MainSlide"

const Home = () => {
    return (
        <>
            <MainSlide />
            <Section isLightBackground={true}>
                <Container>
                <Title>회사 소개</Title>
                <TitleH4>사장님 말씀</TitleH4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste sint
                provident tempore mollitia. Deserunt labore ipsa quod odit dolore animi repudiandae vero dolorum
                delectus similique?
                <TitleH4>사업 개요</TitleH4>
                </Container>
            </Section>
            <Section>
                <Container>
                <Title>회사 비전</Title>
                <TitleH4>연혁</TitleH4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere. Ex asperiores maiores atque, ipsam
                laboriosam neque inventore molestias libero corrupti maxime? Iusto accusamus magni quis dolorem
                voluptatum saepe aut.
                </Container>
            </Section>
            <Section isLightBackground={true}>
                <Container>
                <Title>회사 소개</Title>
                <TitleH4>사장님 말씀</TitleH4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste sint
                provident tempore mollitia. Deserunt labore ipsa quod odit dolore animi repudiandae vero dolorum
                delectus similique?
                <TitleH4>사업 개요</TitleH4>
                </Container>
            </Section>
            <Section>
                <Container>
                <Title>회사 비전</Title>
                <TitleH4>연혁</TitleH4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere. Ex asperiores maiores atque, ipsam
                laboriosam neque inventore molestias libero corrupti maxime? Iusto accusamus magni quis dolorem
                voluptatum saepe aut.
                </Container>
            </Section>
        </>
    )
}

export default Home