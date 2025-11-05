import React, { useState } from "react";
import Icon01 from "../../images/icon_01.svg";
import Icon02 from "../../images/icon_02.svg";
import Icon03 from "../../images/icon_03.svg";
import Icon04 from "../../images/icon_04.svg";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import IconButton from "@mui/material/IconButton";

export default function AIExpertPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const programList = [
    {
      title: "교육 콘텐츠 기획·제작",
      items: [
        "강의안(PPT, 교재) 개발 방법",
        "실습형 워크숍, 프로젝트 기반 학습 설계",
        "AI 도구(Figma, ChatGPT, 영상편집 AI 등) 활용한 교안 제작",
      ],
      icon: <EventNoteOutlinedIcon />,
    },
    {
      title: "강의 실습 & 피드백 세션",
      items: [
        "모의 강의 진행 → 피드백 → 개선",
        "카메라 앞 강의, 대면 강의, 온라인 강의 등 다양한 상황 실습",
      ],
      icon: <SpeakerNotesOutlinedIcon />,
    },
    {
      title: "전문 강사 인증 프로그램",
      items: [
        '최종 평가(강의 시연, 커리큘럼 설계안 제출) 후 "AI 교육 강사 인증서" 발급',
        "인증 강사는 협회 주최 교육, 외부 기관 위탁 교육에 참여 기회 제공",
      ],
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      title: "커리어 지원 & 강사 네트워크",
      items: [
        "협회 산하 AI 강사 풀(Pool) 등록",
        "기업/기관/학교 강의 매칭 기회 제공",
        "정기 강사 워크숍, 커뮤니티 교류",
      ],
      icon: <Diversity3OutlinedIcon />,
    },
  ];

  const faqList = [
    {
      question: "이 과정은 누구를 대상으로 하나요?",
      answer:
        "대학 강사, 기업 교육 담당자, 프리랜서 강사 지망생, 또는 AI 교육에 관심 있는 일반인 모두 지원 가능합니다.",
    },
    {
      question: "AI 기술에 대한 사전 지식이 꼭 필요한가요?",
      answer:
        "기본적인 디지털 리터러시가 있다면 누구나 가능합니다. AI 전문 지식은 과정 내에서 단계별로 학습할 수 있도록 설계되어 있습니다.",
    },
    {
      question: "수료하면 어떤 인증을 받을 수 있나요?",
      answer:
        '"한국AI진흥원 인증 AI 교육 강사" 자격이 부여되며, 협회와 외부 기관에서 진행하는 교육 프로그램에 참여할 수 있습니다.',
    },
    {
      question: "강사로 활동할 기회도 제공되나요?",
      answer:
        "네. 협회는 자체 강사 Pool을 운영하며, 수료자에게 기업·학교·기관에서 진행되는 교육 매칭 기회를 제공합니다.",
    },
    {
      question: "온라인 강사로도 활동할 수 있나요?",
      answer:
        "가능합니다. 비대면 교육 수요가 높아 온라인 강의 역량을 강화하는 별도 모듈도 제공됩니다.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* AI 전문가 양성 섹션 */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 md:text-5xl text-3xl font-bold mb-8 md:mb-12 text-center">
            AI 전문가 양성
          </h1>

          <div className="mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                한국AI진흥원은 AI 리터러시 확산과 교육 저변 확대를 위해, 단순한
                기술 습득을 넘어 AI를 가르칠 수 있는 전문가(트레이너, 강사)를
                양성합니다. AI 교육 강사 과정은 체계적인 교육 방법론, 커리큘럼
                설계, 강의 실습까지 포함하여, 기업·기관·학교 등 다양한 현장에서
                AI 교육을 직접 주도할 수 있는 인재를 배출하는 것을 목표로
                합니다.
              </p>
            </div>
          </div>

          {/* 프로그램 섹션 */}
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {programList.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <IconButton
                      color="primary"
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#E5E7EB",
                        color: "#1F2937",
                        fontSize: "20px",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #E5E7EB",
                        "&:hover": {
                          backgroundColor: "#E5E7EB",
                          color: "#1F2937",
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                    <h3 className="text-slate-800 md:text-2xl text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((listItem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                          • {listItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 섹션 */}
      <section className="bg-gray-50 py-12 md:py-20">
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
