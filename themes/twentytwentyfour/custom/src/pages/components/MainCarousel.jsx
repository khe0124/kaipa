import { Swiper, SwiperSlide } from "swiper/react";
import Main01 from "../../images/main_01.png";
import Main02 from "../../images/main_02.png";
import Main03 from "../../images/main_03.png";

// Import Swiper styles
import "swiper/css";

export const CarouselWrapper = ({ title, description, image }) => {
  return (
    <section className="w-full h-[600px] relative mx-auto flex flex-col justify-center items-center">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute md:max-w-[1240px] max-w-[90%] w-full mx-auto top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-center items-start">
        <h2 className="text-white md:text-7xl text-5xl mb-6 font-extrabold">{title}</h2>
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
      title: "가장 쉬운 AI 교육",
      description: "공공기관과 대기업이 선택한 AI 교육 파트너!\n저희는 한국에서 다양한 기관과 기업을 대상으로,\nGPT부터 최신 생성형 AI까지 실무 중심의 교육을 제공합니다.",
      image: Main02,
    },
    {
      title: "AI로 혁신을 시작하세요",
      description: "현업에 바로 적용되는 실무 중심 교육!\n조직의 문제 해결부터 자동화까지,\nAI가 바꾸는 업무 혁신을 경험해보세요.",
      image: Main01,
    },
    {
      title: "기업이 신뢰하는 AI 전문 파트너",
      description: "공공기관부터 대기업까지 검증된 교육 품질.\nGPT와 생성형 AI 트렌드를 반영한\n맞춤형 프로그램을 제공합니다.",
      image: Main03,
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
