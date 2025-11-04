import React, { useState } from "react";

export default function AINetworkingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqList = [
    {
      question: "AI 네트워킹은 전문가만 참여할 수 있나요?",
      answer:
        "아닙니다. 연구자와 기업 관계자뿐 아니라 AI에 관심 있는 일반 회원도 참여 가능합니다. 단, 일부 심화 세션은 사전 신청자 또는 관련 분야 종사자에게 우선권이 주어집니다.",
    },
    {
      question: "네트워킹 모임은 어디서 열리나요?",
      answer:
        "정기 모임은 주로 서울(수도권)에서 진행되며, 지역 거주자를 위해 온라인 세션도 병행합니다.",
    },
    {
      question: "온라인 커뮤니티에 참여하려면 어떻게 해야 하나요?",
      answer:
        "홈페이지 회원 가입 후, '네트워킹 커뮤니티' 메뉴를 통해 참여할 수 있습니다. 분야별 소모임은 별도 신청이 필요합니다.",
    },
    {
      question: "컨퍼런스 참가비와 네트워킹 모임 참가비는 별도인가요?",
      answer:
        "컨퍼런스 내 공식 네트워킹 세션은 참가비에 포함됩니다. 단독 네트워킹 행사나 소규모 워크숍은 소정의 참가비가 있을 수 있습니다.",
    },
    {
      question: "기업이나 기관 단위로 참여할 수 있나요?",
      answer:
        "가능합니다. 기업회원 또는 기관회원으로 가입하면 전용 네트워킹 프로그램(기업 매칭, 인재 발굴 등)에 참여할 수 있습니다.",
    },
    {
      question: "외국인도 참여할 수 있나요?",
      answer:
        "네. 일부 세션은 영어로도 진행되며, 국제 컨퍼런스와 연계해 글로벌 네트워킹 기회를 제공합니다.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* AI 인사 네트워킹 섹션 */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 md:text-5xl text-3xl font-bold mb-8 md:mb-12 text-center">
            AI 인사 네트워킹
          </h1>

          <div className="mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                한국AI진흥원은 AI 전문가, 기업, 연구자, 일반 시민까지 함께
                성장할 수 있는 네트워킹 기회를 제공합니다.
              </p>

              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                AI 분야는 빠르게 발전하고 있어 지식 교류와 인적 네트워크가
                무엇보다 중요합니다.
              </p>

              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                우리는 회원들이 서로 연결되고, 함께 배우며, 협력할 수 있도록
                다양한 네트워킹 플랫폼과 행사를 운영합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8 md:mb-12 justify-center">
              <span className="text-2xl md:text-3xl">❓</span>
              <h2 className="text-gray-900 md:text-4xl text-2xl font-bold text-center">
                자주 묻는 질문 (FAQ)
              </h2>
            </div>

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
