import React, { useState } from "react";
import Icon01 from "../../images/icon_01.svg";
import Icon02 from "../../images/icon_02.svg";
import Icon03 from "../../images/icon_03.svg";
import Edu01 from "../../images/edu_01.png";
import Edu02 from "../../images/edu_02.png";

export default function AIEduPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const programList = [
    {
      title: "AI 리터러시 과정",
      description:
        "인공지능 기본 개념, ChatGPT 등 생성형 AI 활용법, 데이터 이해",
      note: "누구나 쉽게 접근 가능한 기초 교육",
      icon: Icon01,
    },
    {
      title: "AI 실무 과정",
      description:
        "기업 업무 자동화, 산업별 AI 활용 사례, 프롬프트 엔지니어링 실습",
      note: "현업에 바로 적용하는 실무 중심 강의",
      icon: Icon02,
    },
    {
      title: "AI 전문가 과정",
      description: "AI 모델 설계·활용, 데이터 분석, 윤리·정책 이슈",
      note: "연구자, 개발자, 기업의 AI 전략 담당자를 위한 전문 과정",
      icon: Icon03,
    },
  ];

  const faqList = [
    {
      question: "AI 교육은 비전공자도 들을 수 있나요?",
      answer:
        "네. 기본 과정인 AI 리터러시 과정은 누구나 쉽게 이해할 수 있도록 구성되어 있어, 비전공자도 문제없이 참여할 수 있습니다.",
    },
    {
      question: "교육은 온라인인가요, 오프라인인가요?",
      answer:
        "두 가지 모두 진행합니다. 온라인 강의는 시간·장소 제약 없이 수강 가능하며, 오프라인 과정은 네트워킹과 실습 중심으로 운영됩니다.",
    },
    {
      question: "교육을 수료하면 인증서가 발급되나요?",
      answer:
        "네. 모든 과정을 수료한 참가자에게는 한국AI진흥원 명의의 수료증이 발급됩니다. 일부 과정은 기업/기관과 연계한 공동 인증도 가능합니다.",
    },
    {
      question: "기업 맞춤형 교육도 가능한가요?",
      answer:
        "가능합니다. 기업의 업종과 필요에 맞춘 맞춤형 커리큘럼을 설계하여, 사내 직원 대상 워크숍 및 교육을 제공합니다.",
    },
    {
      question: "교육 신청 방법은 어떻게 되나요?",
      answer:
        "홈페이지 내 '교육 신청' 메뉴에서 원하는 과정을 선택해 신청할 수 있습니다. 단체/기관 교육은 별도의 상담 신청 절차를 통해 진행됩니다.",
    },
    {
      question: "강사진은 어떤 분들인가요?",
      answer:
        "국내외 AI 연구자, 업계 실무 전문가, 정책 전문가 등 다양한 분야의 강사진이 참여합니다.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* AI 교육 섹션 */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 md:text-5xl text-3xl font-bold mb-8 md:mb-12 text-center">
            AI 교육
          </h1>

          <div className="mb-12 md:mb-16">
            <h2 className="text-gray-900 md:text-3xl text-2xl font-bold mb-6 md:mb-8">
              한국AI진흥원은
            </h2>

            <div className="space-y-4 md:space-y-2">
              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                {` 인공지능을 단순한 기술이 아닌 사회·산업 전반을 혁신하는 핵심
                역량으로 보고 있습니다. 이에 따라 학생, 직장인, 연구자, 일반
                시민 누구나 AI를 이해하고 활용할 수 있도록 체계적이고 실용적인
                AI 교육 프로그램을 운영합니다.`}
              </p>
            </div>
          </div>

          {/* 프로그램 섹션 */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-gray-900 md:text-2xl text-xl font-bold mb-4 md:mb-6">
              프로그램
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {programList.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center gap-3 mb-4 md:mb-6 bg-main-25 rounded-xl p-2">
                    <h3 className="text-main-500 text-base font-bold text-center">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 md:text-base text-sm font-light mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-main-500 md:text-sm text-xs font-semibold">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 맞춤형 교육 섹션 */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-gray-900 md:text-2xl text-xl font-bold mb-4 md:mb-6">
              맞춤형 교육
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <img
                  src={Edu01}
                  alt="기업/기관 맞춤형 사내 교육 프로그램"
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-gray-700 md:text-base text-sm font-bold leading-relaxed mb-4">
                    기업/기관 맞춤형 사내 교육 프로그램
                  </h3>
                  <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                    AI 기술을 조직의 실무에 직접 적용할 수 있도록, 기업의 산업
                    특성과 수준에 맞춘 맞춤형 커리큘럼을 제공합니다. 기초
                    인공지능 이해부터 데이터 분석·자동화·생성형 AI 활용까지,
                    실무 중심의 워크숍형 교육으로 직원들의 역량을 빠르게
                    강화합니다.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <img
                  src={Edu02}
                  alt="공공기관·학교와 협력한 특별 과정 운영"
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-gray-700 md:text-base text-sm font-bold leading-relaxed mb-4">
                    공공기관·학교와 협력한 특별 과정 운영
                  </h3>
                  <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                    공공기관과 교육기관을 위한 사회 맞춤형 AI 교육 과정을
                    기획·운영합니다. 청소년, 대학생, 공무원 등 다양한 대상에게
                    AI 리터러시와 실습 중심의 프로젝트 교육을 제공하여, 현장
                    중심의 인재 양성을 지원합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section className="bg-gray-50 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 md:text-4xl text-2xl font-bold mb-8 md:mb-12 text-center">
              자주 묻는 질문
            </h2>

            <div className="space-y-4">
              {faqList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 md:px-8 py-4 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-gray-900 md:text-lg text-base font-semibold pr-4">
                      Q{index + 1}. {item.question}
                    </span>
                    <span className="text-main-500 text-2xl font-bold flex-shrink-0">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 md:px-8 pb-4 md:pb-6">
                      <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                        A. {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
