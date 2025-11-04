import { Swiper, SwiperSlide } from "swiper/react";
import Main01 from "../../images/bg_main_01.png";
import Main02 from "../../images/bg_main_02.png";

// Import Swiper styles
import "swiper/css";

export const CarouselWrapper = ({ title, description, image }) => {
  return (
    <section className="w-full h-[700px] relative mx-auto flex flex-col justify-center items-center">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute md:max-w-[1240px] max-w-[90%] w-full mx-auto top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-center items-start">
        <h2 className="text-white md:text-6xl whitespace-pre-wrap text-5xl mb-6 font-extrabold">{title}</h2>
        <p className="text-white md:text-xl text-base font-normal whitespace-pre-wrap">{description}</p>
        <button className="bg-white text-main-500 px-4 py-2 rounded-full mt-8 w-[200px]">
          <span className="text-sm font-semibold">자세히 보기</span>
        </button>
      </div>
    </section>
  );
};

export default function MainCarousel() {
  const carouselList = [
    {
      title: "AI 교육 · 네트워킹 · 컨퍼런스의 중심,\n한국 AI 진흥원",
      description: "한국 AI 진흥원은 사람과 기술이 함께 성장하는 세상을 만들어갑니다.",
      image: Main01,
    },
    {
      title: "AI로 더 나은 내일을\n설계합니다",
      description: "AI 진흥원은 인공지능 기술을 통해 사회적 가치와 산업 경쟁력을 높이고,\n지속가능한 미래를 위한 혁신의 길을 열어갑니다.",
      image: Main02,
    },
  ];

  return (
    <Swiper>
      {carouselList.map((item) => (
        <SwiperSlide key={item.title}>
          <CarouselWrapper title={item.title} description={item.description} image={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
