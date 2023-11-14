import { SubArrayType } from '../../HistoricalDates/mockData';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import cl from './FooterSlider.module.scss';
import { ReactComponent as LeftArrowIcon } from '../../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../../assets/icons/right-arrow.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import './Swipes.scss';

import React, { useCallback, useEffect, useState } from 'react';

type CardListProps = {
    data?: SubArrayType[];
};

export const FooterSlider = (props: CardListProps) => {
    const { data } = props;
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const [swiper, setSwiper] = useState<SwiperClass>(null);

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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
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
                onSwiper={setSwiper}
                onSlideChange={updateNavigation}
                onReachBeginning={() => setIsBeginning(true)}
                onReachEnd={() => setIsEnd(true)}
                slidesPerView={3}
                breakpoints={sliderSettings}
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
