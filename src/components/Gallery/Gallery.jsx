import { Container, Image, Title } from "./Gallery.styled"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Nature1 from '../../img/Nature1.jpg'
import Nature2 from '../../img/Nature2.jpg'
import Nature3 from '../../img/Nature3.jpg'
import Nature4 from '../../img/Nature4.jpg'
import Nature5 from '../../img/Nature5.jpg'

export default function Gallery(){

    return(
        <Container>
            <Title>Beautiful nature</Title>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <Image src={Nature1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Nature2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Nature3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Nature4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Nature5} alt="slide_image" />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}