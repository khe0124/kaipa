import React from "react";
import StrengthCard from "./pages/components/StrengthCard";
import Icon01 from "./images/icon_01.svg";
import Icon02 from "./images/icon_02.svg";
import Icon03 from "./images/icon_03.svg";
import Icon04 from "./images/icon_04.svg";
import Data01 from "./images/data_01.png";
import Data02 from "./images/data_02.png";

import Banner01 from "./images/banner.png";
import MainBgCarousel from "./pages/components/MainBgCarousel";

export default function Home() {
  const coreValueList = [
    {
      title: "AI 연구 지원",
      description:
        "인공지능 핵심 기술의 연구개발을 지원하고,\n학계와 산업계가 함께 성장할 수 있는 기반을 만듭니다",
      icon: Icon01,
    },
    {
      title: "산업 혁신 촉진",
      description:
        "기업의 AI 도입과 활용을 돕고,\n다양한 산업 분야에서 새로운 비즈니스 가치를 창출합니다.",
      icon: Icon02,
    },
    {
      title: "교육과 인재 양성",
      description:
        "체계적인 교육 프로그램을 통해\n미래를 선도할 AI 전문가와 실무 인재를 길러냅니다.",
      icon: Icon03,
    },
    {
      title: "윤리와 책임",
      description:
        "신뢰할 수 있는 AI를 위해\n윤리적 기준과 사회적 책임을 지켜나갑니다.",
      icon: Icon04,
    },
    {
      title: "국제 협력 네트워크",
      description:
        "글로벌 연구기관과 협력하여\n세계 수준의 AI 생태계를 구축합니다.",
      icon: Icon01,
    },
    {
      title: "미래 사회 기여",
      description:
        "AI 기술을 통해 사회적 가치를 창출하고,\n모두가 함께 누릴 수 있는 지속가능한 미래를 열어갑니다.",
      icon: Icon02,
    },
  ];

  const resourceCenterList = [
    {
      title: "한눈에 보는 최신 AI 연구 동향과 데이터",
      description: "",
    },
    {
      title: "기업과 기관의 실제 활용 사례 모음",
      description: "",
    },
    {
      title: "산업별 실전 적용 사례와 성공 스토리 공유",
      description: "",
    },
  ];

  const newsletterList = [
    {
      title: "최신 AI 연구·기술 트렌드 소개",
      description: "",
    },
    {
      title: "산업 적용 사례와 정책 동향",
      description: "",
    },
    {
      title: "전문가의 분석과 심층 인사이트 제공",
      description: "",
    },
  ];

  return (
    <div className="">
      {/* 히어로 섹션 */}
      <MainBgCarousel />
      <section className="relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <h2 className="text-white md:text-5xl text-3xl font-extrabold mb-4 text-center mt-16">
          한국 AI 진흥원의 VISION
        </h2>
        <p className="text-white md:text-xl text-base font-light text-center leading-relaxed max-w-4xl mx-auto whitespace-pre-wrap">
          {`AI 진흥원은 인공지능 기술을 통해 사회적 가치와 산업 경쟁력을 높이고,\n지속가능한 미래를 위한 혁신의 길을 열어갑니다.`}
        </p>
        {/* 주요 기능 카드 섹션 */}
        <section className="container mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {coreValueList.map((item) => (
              <StrengthCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </section>
      </section>



      {/* AI 인사이트 섹션 */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="mb-12 md:mb-16">
          <h2 className="text-gray-900 md:text-5xl text-3xl font-extrabold mb-4 text-center">
            다양한 AI 인사이트
          </h2>
          <p className="text-gray-600 md:text-xl text-base font-light text-center max-w-3xl mx-auto whitespace-pre-wrap">
            {`AI 진흥원은 연구자, 기업, 그리고 일반 시민까지 모두가 활용할 수 있는\n종합적인 인공지능 자료와 서비스를 제공합니다.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* AI 리소스 센터 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* left: image half */}
              <div className="md:w-1/3 w-full h-48 md:h-auto">
                <img src={Data01} alt="AI 리소스 센터" className="w-full h-full object-cover" />
              </div>
              {/* right: text half */}
              <div className="md:w-2/3 w-full p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-slate-800 md:text-3xl text-2xl font-bold">
                    AI 리소스 센터
                  </h3>
                </div>
                <ul className="space-y-4">
                  {resourceCenterList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-main-500 text-xl mt-1">•</span>
                      <span className="text-gray-700 md:text-base text-sm">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AI 인사이트 뉴스레터 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* left: image half */}
              <div className="md:w-1/3 w-full h-48 md:h-auto">
                <img src={Data02} alt="AI 인사이트 뉴스레터" className="w-full h-full object-cover" />
              </div>
              {/* right: text half */}
              <div className="md:w-2/3 w-full p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-slate-800 md:text-3xl text-2xl font-bold">
                    AI 인사이트 뉴스레터
                  </h3>
                </div>
                <ul className="space-y-4">
                  {newsletterList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-main-500 text-xl mt-1">•</span>
                      <span className="text-gray-700 md:text-base text-sm">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 배너 섹션 */}
      <section className="relative py-16 md:py-28">
        <img
          src={Banner01}
          alt="banner"
          className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0"
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <h2 className="text-white md:text-5xl text-3xl font-black whitespace-pre-wrap leading-tight">
              {`AI 진흥원과 함께\n더 나은 미래를 만들어가세요`}
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-white md:text-xl text-base font-light whitespace-pre-wrap">
                {`AI 기술을 통해 사회적 가치를 창출하고,\n모두가 함께 누릴 수 있는 지속가능한 미래를 열어갑니다.`}
              </p>
              <p className="text-white md:text-xl text-base font-semibold whitespace-pre-wrap">
                AI와 함께 성장하는 과정에서 더 큰 도약을 이룰 수 있도록 언제나
                함께 하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
