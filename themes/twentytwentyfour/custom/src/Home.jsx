import React from "react";
import MainCarousel from "./pages/components/MainCarousel";
import StrengthCard from "./pages/components/StrengthCard";
import Icon01 from "./images/icon_01.svg";
import Icon02 from "./images/icon_02.svg";
import Icon03 from "./images/icon_03.svg";
import Icon04 from "./images/icon_04.svg";
import Service01 from "./images/service_01.png";
import Service02 from "./images/service_02.png";
import Service03 from "./images/service_03.png";
import Banner01 from "./images/banner.png";
import ContactForm from "./pages/components/ContactForm";

export default function Home() {
  const strengthList = [
    {
      title: "기업 맞춤형 AI 교육",
      description: "현업에서 바로 쓸 수 있는\n실무 중심 AI 활용 교육",
      icon: Icon01,
    },
    {
      title: "공공기관, 대기업이 선택!",
      description:
        "GPT부터 최신 생성형 AI까지,\n한국 현장에서 검증된 맞춤형 AI 교육",
      icon: Icon02,
    },
    {
      title: "크리에이터 교육",
      description: "콘텐츠 제작, 블로그 / SNS 자동화,\n마케팅 AI 교육",
      icon: Icon03,
    },
    {
      title: "심화 교육",
      description: "최신 모델(Veo, Claude, GPT 등) 기반의\n고급 실습 교육",
      icon: Icon04,
    },
  ];

  const serviceList = [
    {
      title: "공공기관",
      description:
        "서울 여성인력센터 실무 중심 커리큘럼을 통해\nGPT 기초과정을 진행하였습니다.",
      image: Service01,
    },
    {
      title: "대기업",
      description:
        "각 기관별로 맞춤형 커리큘럼을 제시하고,\n팀 전체가 업무와 비즈니스에 AI를 적용할 수 있도록 지원합니다.",
      image: Service02,
    },
    {
      title: "중고등학생 AI 교육",
      description:
        "10대들에게도 AI 교육은 필수입니다.\n중고등학교에서도 AI역량을 교육하고 있습니다.",
      image: Service03,
    },
  ];

  const reasonList = [
    {
      title: "최신 트렌드",
      description:
        "최신 AI 트렌드를 반영한 맞춤형 커리큘럼을 통해 서비스를 제공해 드리고 있습니다.",
    },
    {
      title: "전문성",
      description:
        "다양한 기업/기관 교육 경험으로 실무에 바로 적용 가능한 인사이트를 제공합니다.",
    },
    {
      title: "학습 지원",
      description:
        "교육 이후에도 가이드 문서, 커뮤니티, 추가 세션을 통해 학습을 이어갈 수 있게 지원합니다.",
    },
  ];

  return (
    <div className="">
      <section className="main">
        <MainCarousel />
      </section>
      <section className="md:py-24 py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {strengthList.map((item) => (
            <StrengthCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </section>
      <section className="container mx-auto p-4">
        <section className="md:py-28 py-5">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-5xl font-bold">제공 서비스</h2>
            <p className="text-gray-600 text-xl font-light whitespace-pre-wrap">기초 입문부터 실무 심화까지,
              누구나 참여할 수 있는 폭넓은 AI 교육 과정을 마련했습니다.</p>
          </div>
          <ul className="grid grid-cols-1 md:gap-14 gap-8">
            {serviceList.map((item) => (
              <li key={item.title} className="grid grid-cols-[300px_1fr] p-8 rounded-xl hover:bg-slate-100 transition-all duration-300 gap-12">
                <div className="w-[300px] rounded-xl overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <section className="mt-4 flex flex-col gap-2">
                  <h3 className="text-3xl text-slate-800 mb-4 font-bold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xl font-light whitespace-pre-wrap">{item.description}</p>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="relative py-28 bg-main-500">
        <div className="container mx-auto p-4 grid grid-cols-2 gap-4 relative">
          <div className="flex flex-col gap-2">
            <h2 className="text-6xl font-black whitespace-pre-wrap leading-tight text-white mb-8">
              {`AI와 성장은\n선택이 아니라 필수`}
            </h2>
            <p className="text-white text-xl font-light whitespace-pre-wrap">
              {`저희는 공공기관과 대기업에서 검증된 경험을 바탕으로,\n더 많은 사람들이 AI를 쉽고 효과적으로 활용할 수 있도록 돕고 있습니다.\nAI는 더 이상 전문가의 영역이 아닙니다.`}
            </p>
            <p className="text-white text-xl font-semibold whitespace-pre-wrap">
              모든 사람이 성장할 수 있는 새로운 기회라고 생각합니다.
            </p>
          </div>
          <div className="flex flex-col gap-8 justify-end px-6">
            {
              reasonList.map((item) => (
                <div key={item.title} className="flex gap-2">
                  <img src={Icon01} alt={item.title} className="w-10 h-10" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-white font-bold">{item.title}</h3>
                    <p className="text-white text-base font-light whitespace-pre-wrap">{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="relative py-28">
        <img src={Banner01} alt="banner" className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0" />
        <div className="container mx-auto p-4 grid grid-cols-2 gap-4 relative items-end">
          <h2 className="text-6xl font-black whitespace-pre-wrap leading-tight text-white">
            {`에이정은\nGPT부터 최신 AI툴까지,\n실무와 생활 속에서 바로 적용할 수 있는\n교육을 제공합니다.`}
          </h2>
          <div className="flex flex-col gap-2 px-6">

            <p className="text-white text-xl font-light whitespace-pre-wrap">
              {`저희 목표는 단순히 지식을 전달하는 것을 넘어 개인과 조직이 AI를 통해 새로운 가치를 창출하도록 지원하는 것입니다.`}
            </p>
            <p className="text-white text-xl font-semibold whitespace-pre-wrap">
              AI를 배우고, 활용하고, 성장하는 과정에서 더 큰 도약을 이룰 수 있도록 언제나 함께 하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </div >
  );
}
