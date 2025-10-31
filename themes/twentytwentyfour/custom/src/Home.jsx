import React from "react";
import MainCarousel from "./pages/components/MainCarousel";

export default function Home() {
  const strengthList = [
    {
      title: "기업 맞춤형 AI 교육",
      description: "현업에서 바로 쓸 수 있는 실무 중심 AI 활용 교육",
    },
    {
      title: "공공기관, 대기업이 선택!",
      description:
        "GPT부터 최신 생성형 AI까지 , 한국 현장에서 검증된 맞춤형 AI 교육을 제공합니다.",
    },
    {
      title: "크리에이터 교육",
      description: "콘텐츠 제작, 블로그 / SNS 자동화, 마케팅 AI 교육",
    },
    {
      title: "심화 교육",
      description: "최신 모델(Veo, Claude, GPT 등) 기반의 고급 실습 교육",
    },
  ];

  const serviceList = [
    {
      title: "공공기관",
      description:
        "서울 여성인력센터 실무 중심 커리큘럼을 통해 GPT 기초과정을 진행하였습니다.",
    },
    {
      title: "대기업",
      description:
        "각 기관별로 맞춤형 커리큘럼을 제시하고, 팀 전체가 업무와 비즈니스에 AI를 적용할 수 있도록 지원합니다.",
    },
    {
      title: "중고등학생 AI 교육",
      description:
        "10대들에게도 AI 교육은 필수입니다. 중고등학교에서도 AI역량을 교육하고 있습니다.",
    },
  ];

  const reasonList = [
    {
      title: "최신 트렌드",
      description:
        "AI를 빠르고, 효율적으로 배우려면 최신 트렌드를 알아야 합니다. 저희는 항상 트렌드를 반영한 변화되고, 맞춤형 커리큘럼을 통해 서비스를 제공해 드리고 있습니다.",
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
      <section className="container mx-auto p-4">
        <section className="md:py-10 py-5">
          <h2 className="text-2xl font-bold">Strength</h2>
          <ul>
            {strengthList.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl text-slate-800 font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="md:py-10 py-5">
          <h2 className="text-2xl font-bold">Service</h2>
          <ul>
            {serviceList.map((item) => (
              <li key={item.title}>
                <h3 className="text-xl text-slate-800 font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
