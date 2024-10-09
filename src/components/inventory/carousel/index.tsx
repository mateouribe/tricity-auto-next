/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import SwiperCore from "swiper";

type Props = {
  images: string[];
};

const Carousel = ({ images }: Props) => {
  // Typing the ref for SwiperCore
  const mainSwiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  // Typing the index argument as number
  const handleThumbnailClick = (index: number) => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)} // Assign Swiper instance to ref
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Controller]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        controller={{ control: thumbsSwiper }} // Sync with thumbnails
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full min-h-[70vh] max-h-[70vh] object-cover rounded-10 lg:rounded-l-none select-none cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper} // Set the thumbsSwiper for control
          spaceBetween={2}
          slidesPerView={11}
          freeMode={true} // Enable free dragging
          watchSlidesProgress={true}
          modules={[Controller]}
          controller={{ control: mainSwiperRef.current }} // Sync with main Swiper
          className="mt-10 thumbnailSwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-[100px] h-[80px] object-cover rounded-[5px] border select-none cursor-pointer ${
                  activeIndex === index ? "border-[1px] !border-main" : ""
                }`}
                onClick={() => handleThumbnailClick(index)} // Set clicked thumbnail as the main image
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
