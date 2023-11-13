import { SubArrayType } from '../../HistoricalDates/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './CardList.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './Swiper.scss';

// import required modules
import { Navigation } from 'swiper/modules';

type CardListProps = {
    data?: SubArrayType[];
};

export const CardList = (props: CardListProps) => {
    const { data } = props;

    return (
        // <Swiper modules={[Navigation]} slidesPerView={3} navigation>
        //     {data?.map(item => (
        //         <SwiperSlide key={item.description}>
        //             <div>
        //                 <h4>{item.date}</h4>
        //                 <p>{item.description}</p>
        //             </div>
        //         </SwiperSlide>
        //     ))}
        // </Swiper>
        <div className={cl.cardListWrapper}>
            <Swiper slidesPerView={3} modules={[Navigation]} navigation>
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
        </div>
    );
};
