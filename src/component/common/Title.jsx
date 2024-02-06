import { Heading } from "@chakra-ui/react"

export const Title = (props) => {
    return (
        <Heading fontSize={24} color={'#333'} fontWeight={'bold'}>
            {props.children}
        </Heading>
    )
}

export const TitleH4 = (props) => {
    return (
        <Heading fontSize={20} color={'#777'} fontWeight={'bold'}>
            {props.children}
        </Heading>
    )
}