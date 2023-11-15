import { ReactComponent as LeftArrowIcon } from '@/assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '@/assets/icons/right-arrow.svg';
import { SubArrayType } from '@/components/HistoricalDates';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import cl from './CardList.module.scss';
import './Swipes.scss';

type CardListProps = {
    data?: SubArrayType[];
};

export const CardList = (props: CardListProps) => {
    const { data } = props;
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const [swiper, setSwiper] = useState<SwiperClass>(null);
    const swiperRef = useRef(null);

    const handlePrev = () => {
        swiper.slidePrev();
    };
    const handleNext = () => {
        swiper.slideNext();
    };

    const updateNavigation = useCallback(() => {
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        }
    }, [swiper]);

    useEffect(() => {
        updateNavigation();
    }, [updateNavigation]);

    const sliderSettings = {
        440: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 80,
            slideNextClass: cl.nextSlide,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
    };

    return (
        <div className={cl.cardListWrapper}>
            <div>
                <button className={cl.btn} onClick={handlePrev} disabled={isBeginning}>
                    <LeftArrowIcon />
                </button>
            </div>

            <Swiper
                ref={swiperRef}
                onSwiper={setSwiper}
                onSlideChange={updateNavigation}
                onReachBeginning={() => setIsBeginning(true)}
                onReachEnd={() => setIsEnd(true)}
                breakpoints={sliderSettings}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {data?.map(item => {
                    return (
                        <SwiperSlide key={item.description}>
                            <div>
                                <p className={cl.title}>{item.date}</p>
                                <p className={cl.body}>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div>
                <button className={cl.btn} onClick={handleNext} disabled={isEnd}>
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    );
};
