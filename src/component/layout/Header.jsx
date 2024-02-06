import { Box, Button, ButtonGroup, Container, Heading, IconButton } from "@chakra-ui/react"
import { FaHamburger } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
import Gnb from "./Gnb"
import gsap from "gsap";

const Header = () => {
    // 스크롤 이벤트 함수
    const HandleScoll = () => {
        const scrollY = window.scrollY // 현재 스크롤 위치
        const hd = document.querySelector('#header') // 헤더
        const navBelt = document.querySelector('.nav-belt__wrapper') // 헤더
        const navBar = document.querySelector('.nav-bar__wrapper') // 헤더
        const hdHeight = hd.offsetHeight // 헤더 높이
        const swiperHeight = document.querySelector('.topCont')?.offsetHeight || 0; // 슬라이드 높이
        console.log(scrollY)
        console.log(swiperHeight - hdHeight)
        // 537

        // if : 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
        if (scrollY > swiperHeight - hdHeight) {
            // gsap.to(요소, {옵션})
            gsap.to(navBelt, { backgroundColor: '#f6f7f8', duration: 0.5 })
            gsap.to(navBar, { backgroundColor: '#fff', duration: 0.5 })

            gsap.to(navBelt.querySelectorAll('button'), { color: '#000', duration: 0.5 })
        } else {
            // else : 100px 이하로 스크롤 되면 배경색을 없앤다.
            gsap.to(navBelt, { backgroundColor: '', duration: 0.5 })
            gsap.to(navBar, { backgroundColor: '', duration: 0.5 })
        }
    }

    // 스크롤 이벤트 등록
    window.addEventListener('scroll', HandleScoll)


    return (
        <Box id="header" as="header" position={'fixed'} top={'0'} left={0} right={0} zIndex={100} bg={['rgba(0,0,0,.6)','rgba(0,0,0,.05);', null, null]} backdropFilter={'saturate(180%) blur(15px)'}>
            {/* tab */}
            <Box className="nav-belt__wrapper" display={['none', null, null, null, 'block']} h={'32px'} bg={'rgba(0,0,0,.6)'}>
                <Container display="flex" justifyContent={'space-between'} alignItems={'center'}>
                    <ButtonGroup gap={'10px'}>
                        <Button colorScheme='teal' variant='linktnb'>
                            공공 기관용
                        </Button>
                        <Button colorScheme='teal' variant='linktnb'>
                            금융 클라우드
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup gap={'10px'}>
                        <Button colorScheme='teal' variant='linktnb'>
                            로그인
                        </Button>
                        <Button colorScheme='teal' variant='linktnb'>
                            회원가입
                        </Button>
                        <Button colorScheme='teal' variant='linktnb'>
                            Languages
                        </Button>
                    </ButtonGroup>
                </Container>
            </Box>
            {/* header */}
            <Box className="nav-bar__wrapper" bg={'rgba(0,0,0,.05)'}>
                <Container
                    display={['flex', null, null, 'flex']}
                    h={100}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Heading as={'h1'} fontSize={24}>
                        <Link to="/">Dashboard</Link>
                    </Heading>
                    <Gnb/>
                    <ButtonGroup>
                        <IconButton variant='ghost' aria-label="Search database" display={{sm: 'flex', lg: 'none'}}><RiAccountCircleFill />
                        </IconButton>
                        <IconButton variant='ghost' aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton variant='ghost' aria-label="Search database" display={{sm: 'flex', lg: 'none'}}><FaHamburger />
                        </IconButton>
                    </ButtonGroup>
                </Container>
            </Box>
        </Box>
    )
}

export default Header