import React from "react";

export default function AIBizPage() {
  const programs = [
    {
      number: "①",
      title: "해외 AI 기업 한국 시장 진출 프로그램",
      englishTitle: "Korea Market Entry Program",
      items: [
        "한국 AI 산업/규제/고객 분석",
        "서비스·브랜딩 현지화 컨설팅",
        "한국 기업·정부·학교와의 파트너십 매칭",
        "AI 크리에이터와 협업한 초기 마케팅 지원",
      ],
    },
    {
      number: "②",
      title: "공공기관 AI 도입 지원 프로그램",
      englishTitle: "Public Sector AI Adoption Program",
      items: [
        "공공기관 업무에 맞는 AI 활용 모델 도출",
        "생성형 AI 실무 교육 및 전 직원 트레이닝",
        "해외·국내 AI 솔루션 도입 매칭",
        "공공기관 AI 가이드북 제공",
      ],
    },
    {
      number: "③",
      title: "학교·교육기관 AI 교육 및 도입 프로그램",
      englishTitle: "School AI Transformation Program",
      items: [
        "초·중·고·대학교 대상 AI 교육 커리큘럼 개발",
        "교사용 AI 수업 가이드 및 실습 콘텐츠 제공",
        "국내외 에듀테크 기업과의 솔루션 도입 매칭",
        "생성형 AI를 활용한 학습 혁신 사례 구축",
        "학교 현장의 파일럿 프로젝트 기획",
      ],
    },
    {
      number: "④",
      title: "AI 인플루언서/크리에이터 네트워크 프로그램",
      englishTitle: "AI Creator & Influencer Network",
      items: [
        "AI 교육·리뷰·창작 분야 크리에이터 커뮤니티 운영",
        "글로벌 AI 기업 × 인플루언서 밋업/데모데이 개최",
        "AI 제품 시연·테스트·리뷰 협업",
        "AI 콘텐츠 허브 운영(교육, 리뷰, 테크 콘텐츠 유통)",
        "한국·해외 크리에이터 공동 제작 프로젝트 기획",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 주요 사업 섹션 */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-gray-900 md:text-5xl text-3xl font-bold mb-8 md:mb-12 text-center">
            주요 사업
          </h1>
          <p className="text-gray-600 md:text-xl text-lg font-semibold mb-4 md:mb-6 text-center">
            Programs & Services
          </p>

          <div className="mb-12 md:mb-16">
            <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed text-center">
              한국AI진흥원의 사업은 크게{" "}
              <span className="font-bold text-main-500">4대 프로그램</span>으로
              구분됩니다.
            </p>
          </div>

          {/* 프로그램 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-main-500 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-main-500 md:text-3xl text-2xl font-bold">
                      {program.number}
                    </span>
                    <h2 className="text-gray-900 md:text-2xl text-xl font-bold">
                      {program.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 md:text-lg text-base font-semibold ml-8 md:ml-11">
                    ({program.englishTitle})
                  </p>
                </div>

                <ul className="space-y-3 md:space-y-4 ml-8 md:ml-11">
                  {program.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-main-500 font-bold flex-shrink-0">
                        •
                      </span>
                      <p className="text-gray-700 md:text-base text-sm leading-none font-light">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
