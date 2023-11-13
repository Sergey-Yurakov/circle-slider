// import React, { useCallback, useRef } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
//
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
//
// // import required modules
// export const MySwiper = () => {
//   const sliderRef = useRef(null);
//
//   const handlePrev = useCallback(() => {
//     if (!sliderRef.current) return;
//     // @ts-ignore
//     sliderRef.current.swiper.slidePrev();
//   }, []);
//
//   const handleNext = useCallback(() => {
//     if (!sliderRef.current) return;
//     // @ts-ignore
//     sliderRef.current.swiper.slideNext();
//   }, []);
//
//   return (
//     <div>
//       <Swiper ref={sliderRef}>
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//       <button className="prev-arrow" onClick={handlePrev}>
//         prev
//       </button>
//       <button className="next-arrow" onClick={handleNext}>
//         next
//       </button>
//     </div>
//   );
// };

import React, { ReactNode, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

type MySwiperProps = {
  children: ReactNode;
  className?: string;
};

export const MySwiper = (props: MySwiperProps) => {
  const { children, className } = props;

  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      // navigation={true}
      modules={[Pagination, Navigation]}
      className={className}
    >
      {children}
    </Swiper>
  );
};
