import cl from './HistoricalDates.module.scss';
import { Tittle } from '../Tittle';
import { HorizontalLine } from '../Lines/HorizontalLine';
import { VerticalLine } from '../Lines/VerticalLine';
import { MySwiper } from '../MySwiper';
import { mockData, SubArrayType } from './mockData';
import { useEffect, useState } from 'react';
import { ReactComponent as LeftArrowIcon } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/icons/right-arrow.svg';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import cn from 'classnames';
import { CardList } from '../Card/CardList/CardList';

gsap.registerPlugin(TextPlugin);

export const HistoricalDates = () => {
    const [startDate, setStartDate] = useState<string>('2015');
    const [endDate, setEndDate] = useState<string>('2022');

    const [selectedDot, setSelectedDot] = useState<number>(6);
    const [currentArrayHistory, setCurrentArrayHistory] = useState<SubArrayType[]>();
    const [textCircle, setTextCircle] = useState<string>();

    useEffect(() => {
        // handleClick(selectedDot);
        handleFindSubArray(selectedDot);
    }, [selectedDot]);

    useEffect(() => {
        gsap.to('#title-start-date', {
            textContent: startDate,
            duration: 1,
        });
        gsap.to('#title-end-date', {
            textContent: endDate,
            duration: 1,
        });
    }, [endDate, startDate]);

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

        gsap.to(`#name-marker`, {
            rotation: -angle,
            duration: 1,
            transformOrigin: 'center center',
        });

        gsap.to(`#groupActive #name-marker`, {
            rotation: angle,
            duration: 1,
            transformOrigin: 'center center',
            delay: 1.5,
        });

        gsap.to('#current-text', {
            opacity: 1,
            duration: 2,
            onComplete: () => {
                gsap.to('#current-text', { opacity: 0, delay: 1 });
            },
        });
    };

    const handleMouseEnter = (currentNumber: number) => {
        gsap.to(`#group-${currentNumber} circle`, {
            r: 28,
            strokeWidth: 1,
            fill: 'white',
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

    const handleCurrentMarker = (currentNumber: number) => {
        console.log('currentNumber', currentNumber);
        console.log('selectedDot', selectedDot);
        // if (currentNumber !== selectedDot) {
        //     handleMouseEnter(currentNumber);
        // }
        // handleMouseLeave(currentNumber);
    };

    return (
        <>
            <div className={cl.wrapper}>
                <HorizontalLine />
                <VerticalLine />

                <div className={cl.contentWrapper}>
                    <Tittle className={cl.title} title={'Исторические даты'} />
                    <div className={cl.circleSvg}>
                        <svg width="1050" height="660">
                            <g>
                                <text
                                    x={20}
                                    y={390}
                                    className={cn(cl.leftTitleCircle, cl.titleCircle)}
                                    id="title-start-date"
                                >
                                    {startDate}
                                </text>
                                <text
                                    y={390}
                                    x={550}
                                    className={cn(cl.rightTitleCircle, cl.titleCircle)}
                                    id="title-end-date"
                                >
                                    {endDate}
                                </text>
                            </g>

                            <g id="circle">
                                <circle cx="50%" cy="50%" r="265" stroke={'rgba(66, 86, 122, 0.1)'} fill="none" />
                                {mockData.map(({ name, number }, i) => {
                                    const angle = (i / 6) * 2 * Math.PI;
                                    const cx = 1050 / 2;
                                    const cy = 660 / 2;
                                    const x = cx + 265 * Math.cos(angle);
                                    const y = cy + 265 * Math.sin(angle);
                                    return (
                                        <g key={number}>
                                            <g
                                                id={`group-${number}`}
                                                onClick={() => handleClick(number)}
                                                onMouseEnter={() => handleMouseEnter(number)}
                                                onMouseLeave={() => handleMouseLeave(number)}
                                            >
                                                <circle
                                                    cx={x}
                                                    cy={y}
                                                    r="3"
                                                    id={`dot`}
                                                    strokeWidth={1}
                                                    cursor={'pointer'}
                                                    stroke={'rgba(48, 62, 88, 0.5)'}
                                                />
                                                <text
                                                    x={x}
                                                    y={y}
                                                    id={'text'}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    cursor={'pointer'}
                                                    // id={`text-${i + 1}`}
                                                    opacity={0}
                                                    onClick={() => handleCurrentMarker(number)}
                                                    className={cl.dotNumber}
                                                >
                                                    {number}
                                                </text>
                                            </g>
                                            {selectedDot === number && (
                                                <g
                                                    id={`groupActive`}
                                                    onClick={() => handleClick(number)}
                                                    // onMouseEnter={() => handleMouseEnter(number)}
                                                    // onMouseLeave={() => handleMouseLeave(number)}
                                                >
                                                    <circle
                                                        cx={x}
                                                        cy={y}
                                                        r="28"
                                                        id={`dot`}
                                                        strokeWidth={1}
                                                        fill="white"
                                                        cursor={'pointer'}
                                                        stroke={'rgba(48, 62, 88, 0.5)'}
                                                    />
                                                    <text
                                                        x={x}
                                                        y={y}
                                                        id={'text'}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                        cursor={'pointer'}
                                                        // id={`text-${i + 1}`}
                                                        opacity={1}
                                                        onClick={() => handleCurrentMarker(number)}
                                                        className={cl.dotNumberOp}
                                                    >
                                                        {number}
                                                    </text>
                                                </g>
                                            )}
                                        </g>
                                    );
                                })}
                            </g>
                            <g>
                                <text x={700} y={100} id={'current-text'} className={cl.nameMarker}>
                                    {textCircle}
                                </text>
                            </g>
                        </svg>
                    </div>

                    <div className={cl.contentFooter}>
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

                {/*<svg*/}
                {/*  viewBox="0 0 1050 600"*/}
                {/*  width="1050"*/}
                {/*  height="600"*/}
                {/*  className={cl.circleSvg}*/}
                {/*>*/}
                {/*  <g>*/}
                {/*    <text x={20} y={360} fontSize={200}>*/}
                {/*      {startDate}*/}
                {/*    </text>*/}
                {/*    <text fontSize={200} y={360} x={550}>*/}
                {/*      {endDate}*/}
                {/*    </text>*/}
                {/*  </g>*/}
                {/*  <g className={cl.circleWrapper}>*/}
                {/*    <circle*/}
                {/*      cx="50%"*/}
                {/*      cy="50%"*/}
                {/*      r="265"*/}
                {/*      stroke={"rgba(66, 86, 122, 1)"}*/}
                {/*      strokeWidth="0.1"*/}
                {/*      fill="none"*/}
                {/*    />*/}

                {/*    {mockData.map(({ number, name }) => {*/}
                {/*      const angle = (number / 6) * 2 * Math.PI;*/}
                {/*      const cx = 1050 / 2; // преобразование процентных значений в абсолютные*/}
                {/*      const cy = 600 / 2; // преобразование процентных значений в абсолютные*/}
                {/*      const x = cx + 265 * Math.cos(angle);*/}
                {/*      const y = cy + 265 * Math.sin(angle);*/}
                {/*      const dotClass =*/}
                {/*        hoveredDot === number ? cl.dotHovered : cl[`dot-${number}`];*/}
                {/*      return (*/}
                {/*        <g*/}
                {/*          key={number}*/}
                {/*          onMouseEnter={() => handleMouseEnter(number)}*/}
                {/*          onMouseLeave={handleMouseLeave}*/}
                {/*          // data-number={i + 1}*/}
                {/*        >*/}
                {/*          <circle*/}
                {/*            cx={x}*/}
                {/*            cy={y}*/}
                {/*            r={hoveredDot === number ? "28" : "3"}*/}
                {/*            stroke={*/}
                {/*              hoveredDot === number*/}
                {/*                ? "rgba(48, 62, 88, 0.5)"*/}
                {/*                : "rgba(66, 86, 122, 0.1)"*/}
                {/*            }*/}
                {/*            className={[cl.circleBnt, dotClass].join("")}*/}
                {/*            onClick={() => handleClick(number)}*/}
                {/*          />*/}
                {/*          <text x={x} y={y} className={cl.dotNumber}>*/}
                {/*            {number}*/}
                {/*          </text>*/}
                {/*        </g>*/}
                {/*      );*/}
                {/*    })}*/}
                {/*  </g>*/}
                {/*</svg>*/}
            </div>
        </>
    );
};
