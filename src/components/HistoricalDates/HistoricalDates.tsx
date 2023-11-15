import { ReactComponent as LeftArrowIcon } from '@/assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '@/assets/icons/right-arrow.svg';
import { CardList } from '@/components/Cards/CardList';
import { HorizontalLine } from '@/components/Lines/HorizontalLine';
import { VerticalLine } from '@/components/Lines/VerticalLine';
import { TimeLineDates } from '@/components/TimeLineDates';
import { Tittle } from '@/components/Tittle';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

import cl from './HistoricalDates.module.scss';
import { SubArrayType, mockData } from './mockData';

export const HistoricalDates = () => {
    const [startDate, setStartDate] = useState<string>('2015');
    const [endDate, setEndDate] = useState<string>('2022');

    const [selectedDot, setSelectedDot] = useState<number>(6);
    const [currentArrayHistory, setCurrentArrayHistory] = useState<SubArrayType[]>();
    const [textCircle, setTextCircle] = useState<string>('');

    useEffect(() => {
        handleClick(selectedDot);
        handleFindSubArray(selectedDot);
    }, [selectedDot]);

    const handleFindSubArray = (currentNumber: number) => {
        const currentDateArray = mockData.find(item => item.number === currentNumber);
        if (currentDateArray) {
            setStartDate(currentDateArray.dateFrom);
            setEndDate(currentDateArray.dateTo);
            setCurrentArrayHistory(currentDateArray.subArray);
            setTextCircle(currentDateArray.name);
        }
    };

    const handleClick = (currentNumber: number) => {
        setSelectedDot(currentNumber);

        const angle = 360 - (currentNumber / 6) * 360;

        gsap.to('#circle', {
            rotation: `${angle}_short`,
            duration: 1,
            transformOrigin: '50% 50%',
            transformBox: 'view-box',
        });

        gsap.to(`#text`, {
            rotation: -angle,
            duration: 1,
            transformOrigin: 'center center',
        });

        gsap.to(`#textInCircle`, {
            rotation: -angle,
            duration: 0.5,
            transformOrigin: 'center center',
        });

        gsap.to('#current-text', {
            opacity: 0,
            duration: 0,
            onComplete: () => {
                gsap.to('#current-text', { opacity: 1, delay: 1.5 });
            },
        });
    };

    const handleMouseEnter = (currentNumber: number) => {
        gsap.to(`#group-${currentNumber} circle`, {
            r: 28,
            strokeWidth: 1,
            fill: '#F4F5F9',
        });
        gsap.to(`#group-${currentNumber} text`, {
            opacity: 1,
        });
    };

    const handleMouseLeave = (currentNumber: number) => {
        gsap.to(`#group-${currentNumber} circle`, {
            r: 3,
            fill: '#42567A',
        });
        gsap.to(`#group-${currentNumber} text`, {
            opacity: 0,
        });
    };

    const handlePrevSlide = () => {
        if (selectedDot > 1) {
            setSelectedDot(selectedDot - 1);
        }
    };

    const handleNextSlide = () => {
        if (selectedDot <= mockData.length) {
            setSelectedDot(selectedDot + 1);
        }
    };

    return (
        <div className={cl.wrapper}>
            <HorizontalLine />
            <VerticalLine />

            <div className={cl.contentWrapper}>
                <Tittle className={cl.title} title={'Исторические даты'} />

                <TimeLineDates
                    startDate={startDate}
                    endDate={endDate}
                    handleClick={handleClick}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    selectedDot={selectedDot}
                    textCircle={textCircle}
                />

                <div className={cl.contentFooter}>
                    <div className={cl.contentFooterWrapper}>
                        <div className={cl.counterWrapper}>
                            <div className={cl.counter}>{`${selectedDot}/${mockData.length}`}</div>
                            <div className={cl.btnWrapper}>
                                <button className={cl.btn} disabled={selectedDot === 1} onClick={handlePrevSlide}>
                                    <LeftArrowIcon />
                                </button>
                                <button
                                    className={cl.btn}
                                    disabled={selectedDot === mockData.length}
                                    onClick={handleNextSlide}
                                >
                                    <RightArrowIcon />
                                </button>
                            </div>
                        </div>
                        <CardList data={currentArrayHistory} />
                    </div>
                </div>
            </div>
        </div>
    );
};
