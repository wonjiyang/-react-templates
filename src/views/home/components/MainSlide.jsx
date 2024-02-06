// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Image } from '@chakra-ui/react'
import styled from 'styled-components';

const MainSlide = () => {
    return (
        <>
            <SwiperWrap pagination={true} modules={[Pagination]} className="main-slide topCont">
                <SwiperSlide>
                    <Image src='https://source.unsplash.com/random' alt='Dan Abramov' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://source.unsplash.com/random' alt='Dan Abramov' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://source.unsplash.com/random' alt='Dan Abramov' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://source.unsplash.com/random' alt='Dan Abramov' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='https://source.unsplash.com/random' alt='Dan Abramov' />
                </SwiperSlide>
            </SwiperWrap>
        </>
    )
}

export default MainSlide

const SwiperWrap = styled(Swiper)`
    img {
        display: block;
        width: 100%;
        height: 630px;
        object-fit: cover;
        object-position: center;
    }
`