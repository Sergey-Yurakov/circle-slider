import cl from './TimeLineDates.module.scss';
import cn from 'classnames';
import { mockData } from '../HistoricalDates/mockData';
import { TextPlugin } from 'gsap/TextPlugin';
import { gsap } from 'gsap';
import { useEffect } from 'react';

gsap.registerPlugin(TextPlugin);

type TimeLineDatesProps = {
    startDate: string;
    endDate: string;
    handleClick: (number: number) => void;
    handleMouseEnter: (number: number) => void;
    handleMouseLeave: (number: number) => void;
    selectedDot: number;
    textCircle: string;
};

export const TimeLineDates = (props: TimeLineDatesProps) => {
    const { startDate, endDate, textCircle, selectedDot, handleMouseEnter, handleMouseLeave, handleClick } = props;

    useEffect(() => {
        gsap.to('#title-start-date', {
            textContent: startDate,
            duration: 1,
            paused: true,
        });
        gsap.to('#title-end-date', {
            textContent: endDate,
            duration: 1,
            paused: true,
        });
    }, [endDate, startDate]);

    return (
        <>
            <div className={cl.mobileDateTitle}>
                <p id={'title-start-date'} className={cn(cl.leftTitleCircleMobile, cl.titleCircle)}>
                    {startDate}
                </p>
                <p id={'title-end-date'} className={cn(cl.rightTitleCircleMobile, cl.titleCircle)}>
                    {endDate}
                </p>
            </div>

            <div className={cl.circleSvgWrapper}>
                <svg width="1050" height="660">
                    <g>
                        <text x={20} y={390} className={cn(cl.leftTitleCircle, cl.titleCircle)} id="title-start-date">
                            {startDate}
                        </text>
                        <text y={390} x={550} className={cn(cl.rightTitleCircle, cl.titleCircle)} id="title-end-date">
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
                                            opacity={0}
                                            className={cl.dotNumber}
                                        >
                                            {number}
                                        </text>
                                    </g>
                                    {selectedDot === number && (
                                        <g id={`groupActiveInCircle-${number}`} onClick={() => handleClick(number)}>
                                            <circle
                                                cx={x}
                                                cy={y}
                                                r="28"
                                                id={`dot`}
                                                strokeWidth={1}
                                                fill="#F4F5F9"
                                                cursor={'pointer'}
                                                stroke={'rgba(48, 62, 88, 0.5)'}
                                            />
                                            <text
                                                x={x}
                                                y={y}
                                                id={'textInCircle'}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                cursor={'pointer'}
                                                opacity={1}
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
        </>
    );
};
