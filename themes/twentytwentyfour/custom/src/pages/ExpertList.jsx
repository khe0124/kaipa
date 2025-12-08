import React, { useState } from "react";
import ExpertImage01 from "../images/expert_01.png";
import ExpertImage02 from "../images/expert_02.png";

const expertsData = [
  {
    id: 1,
    name: "강기현",
    position: "에이정 대표",
    specialization: ["AI", "데이터", "자동화"],
    profileImage: ExpertImage01,
    description:
      "AI는 이제 전 세계가 공유하는 공용 언어가 되었습니다.\n최신 글로벌 트렌드와 산업별 흐름을 이해하기 쉽게 풀어내고,\n국내 현실에 맞게 설명합니다. 데이터와 자동화 분야의 전문성을\n바탕으로, 수강생이 넓은 시야를 가질 수 있도록 돕습니다.",
    email: "kaipakorea.info@gmail.com",
  },
  {
    id: 2,
    name: "권순현",
    position: "블링크애드 대표",
    specialization: ["AI", "데이터", "자동화"],
    profileImage: ExpertImage02,
    description:
      "AI는 반복되는 일을 자동화하고 새로운 아이디어를 시험할 수 있는 도구입니다.\n자동화 기술을 통해 시간을 아끼고, 변화를 두려워하지 않는 실험 정신을 전합니다.\n지식 전달을 넘어, 새로운 시각을 열어주는 데 초점을 맞추고 있습니다.\n",
    email: "kaipakorea.info@gmail.com",
  },
];

// 전문가 상세 데이터 (ExpertDetail.jsx와 동일)
const mentorDetailData = {
  1: {
    id: 1,
    name: "강기현",
    introduction:
      "AI는 이제 전 세계가 공유하는 공용 언어가 되었습니다.\n최신 글로벌 트렌드와 산업별 흐름을 이해하기 쉽게 풀어내고,\n국내 현실에 맞게 설명합니다. 데이터와 자동화 분야의 전문성을\n바탕으로, 수강생이 넓은 시야를 가질 수 있도록 돕습니다.",
    education: "한국교통대학교 전기공학전공 학사",
    email: "kaipakorea.info@gmail.com",
    phone: "010-9617-7768",
    youtube: "https://www.youtube.com/@aijeong",
    career: [
      { title: "한국교통대학교 전기공학전공 학사", period: "" },
      { title: "비즈하이 솔루션 이사", period: "2024 ~" },
      { title: "에이정 주식회사 대표", period: "2025 ~" },
      { title: "한국AI융합교육협회 강사", period: "2024 ~" },
    ],
    subject: [
      { title: "AI활용 숏폼 제작 유튜브 과정 콘텐츠·창작", period: "2024 ~" },
      {
        title: "AI를 움직이는 마법의 주문 프롬프트 과정 AI 리터러시",
        period: "2024 ~",
      },
      { title: "영상 AI 실무 활용 콘텐츠·창작", period: "2024 ~" },
    ],
    history: [
      { title: "AI강의 유튜브 '에이정' 운영 Youtube", period: "2024.10~" },
      { title: "CEO를 위한 AI역량강화 이벤터스", period: "2024.12~" },
      { title: "AI기초활용법 강원대학교", period: "2025.02" },
      {
        title: "2025 AI트렌드 및 AI툴 활용법 강사노동조합",
        period: "2025.02",
      },
      { title: "AI실무교육 부트캠프 새중앙교회", period: "2024.08~2024.09" },
      {
        title: "프롬프트 엔지니어 자격증 과정 한국AI융합교육협회",
        period: "2025.03~2025.04",
      },
      {
        title: "AI 기자단, 나만의 AI뉴스만들기 이천백사중학교",
        period: "2025.06",
      },
      {
        title: "캡컷으로 영상 콘텐츠 만들기 초급반,심화반 강서여성인력개발센터",
        period: "2025.08",
      },
      { title: "홍보역량 강화 직원교육 국가유산진흥원", period: "2025.07" },
      {
        title: "SBA 구직자를 위한 AI 역량 강화 영등포여성인력개발센터",
        period: "2025.10 ~",
      },
      {
        title: "고립운둔청년을 위한 AI활용 숏폼 쉽게 만들기 중림종합사회복지관",
        period: "2025.10",
      },
    ],
  },
  2: {
    id: 2,
    name: "권순현",
    introduction: "멘토 소개",
    education: "수원대학교 화학공학과 학사",
    email: "kaipakorea.info@gmail.com",
    phone: "010-5211-3420",
    youtube: "https://www.youtube.com/@aijeong",
    career: [
      { title: "수원대학교 화학공학과 학사", period: "" },
      { title: "블링크애드 대표", period: "2022.12 ~" },
      { title: "에이정 주식회사 대표", period: "2024 ~" },
      { title: "한국AI융합교육협회 강사", period: "2024 ~" },
    ],
    subject: [
      {
        title: "챗GPT 200%활용하기 초급,심화반 생산성·업무자동화",
        period: "2024 ~",
      },
      {
        title: "AI활용 업무자동화 보고서 쉽게 쓰기 생산성·업무자동화",
        period: "2024 ~",
      },
      {
        title: "챗GPT 나만의 비서 만들기 생산성·업무자동화",
        period: "2024 ~",
      },
    ],
    history: [
      { title: "AI강의 유튜브 '에이정' 운영 Youtube", period: "2024.10~" },
      { title: "CEO를 위한 AI역량강화 이벤터스", period: "2024.12~" },
      { title: "AI기초활용법 강원대학교", period: "2025.02" },
      {
        title: "2025 AI트렌드 및 AI툴 활용법 강사노동조합",
        period: "2025.02",
      },
      { title: "AI실무교육 부트캠프 새중앙교회", period: "2024.08~2024.09" },
      {
        title: "프롬프트 엔지니어 자격증 과정 한국AI융합교육협회",
        period: "2025.03~2025.04",
      },
      {
        title: "AI기자단, 나만의 AI뉴스만들기 이천백사중학교",
        period: "2025.06",
      },
      {
        title: "챗GPT활용 보고서와 기획서 쉽게 쓰기 강서여성인력개발센터",
        period: "2025.07",
      },
      {
        title: "챗GPT 200% 활용하기 초급,심화반 강서여성인력개발센터",
        period: "2025.08",
      },
      {
        title: "SBA 재직자를 위한 AI 역량 강화 영등포여성인력개발센터",
        period: "2025.10 ~",
      },
      {
        title: "AI활용 숏폼 콘텐츠 제작 강서여성인력개발센터",
        period: "2025.10 ~",
      },
    ],
  },
};

function ExpertCard({ expert, isExpanded, onToggle, detailData }) {
  const initials = expert.name.split("").slice(0, 2).join("").toUpperCase();

  return (
    <div className="w-full">
      <div
        className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 flex flex-col hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        style={{
          boxShadow: "0px 1px 2px -1px rgba(17, 12, 34, 0.08)",
        }}
        onClick={onToggle}
      >
        {/* 프로필 섹션 */}
        <div className="flex flex-col items-center mb-5">
          {/* 아바타 */}
          <div className="rounded-full flex items-center justify-center mb-4 text-white font-semibold w-20 h-20 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] bg-main-500">
            {expert.profileImage ? (
              <img
                src={expert.profileImage}
                alt={expert.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-3xl sm:text-4xl md:text-5xl">{initials}</span>
            )}
          </div>

          {/* 이름 */}
          <h3 className="font-semibold text-gray-900 mb-1 text-center text-lg sm:text-xl md:text-2xl">
            {expert.name}
          </h3>

          {/* 직책 */}
          <p className="font-medium text-main-500 text-center text-sm sm:text-[15px] md:text-base">
            {expert.position}
          </p>
        </div>

        {/* 전문 분야 태그 */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {expert.specialization.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-main-100 border bg-main-25 border-main-75 text-main-600 rounded-xl font-medium text-[11px] sm:text-xs"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 소개 */}
        <p className="flex-1 text-center text-gray-600 leading-relaxed text-[13px] sm:text-sm mb-4">
          {expert.description}
        </p>

        {/* 확장/축소 아이콘 */}
        <div className="flex justify-center items-center mt-2">
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* 확장된 상세 정보 */}
      {isExpanded && detailData && (
        <div className="mt-4 bg-white rounded-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-top-2 duration-300">
          <div className="p-6 sm:p-8">
            {/* 연락처 정보 */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm mb-6 pb-6 border-b border-gray-200">
              {detailData.email && (
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4L8 9L14 4M2 4H14M2 4V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V4"
                      stroke="#6b7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-600">{detailData.email}</span>
                </div>
              )}
              {detailData.phone && (
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 2C3.5 1.17157 4.17157 0.5 5 0.5H11C11.8284 0.5 12.5 1.17157 12.5 2V14C12.5 14.8284 11.8284 15.5 11 15.5H5C4.17157 15.5 3.5 14.8284 3.5 14V2Z"
                      stroke="#6b7280"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12H8.005"
                      stroke="#6b7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-gray-600">{detailData.phone}</span>
                </div>
              )}
              {detailData.youtube && (
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5 4.5C14.5 4.5 14.5 3.5 13.5 3L8.5 1L3.5 3C2.5 3.5 2.5 4.5 2.5 4.5V11.5C2.5 11.5 2.5 12.5 3.5 13L8.5 15L13.5 13C14.5 12.5 14.5 11.5 14.5 11.5V4.5Z"
                      stroke="#6b7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M6.5 9.5L10.5 7.5L6.5 5.5V9.5Z" fill="#6b7280" />
                  </svg>
                  <a
                    href={detailData.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-main-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    유튜브 채널
                  </a>
                </div>
              )}
            </div>

            {/* 학력 정보 */}
            {detailData.education && (
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  학력
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {detailData.education}
                </p>
              </div>
            )}

            {/* 경력 섹션 */}
            {detailData.career && detailData.career.length > 0 && (
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h2 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
                  학력 및 경력
                </h2>
                <div className="space-y-3">
                  {detailData.career.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                    >
                      <span className="text-gray-900 text-sm sm:text-base font-medium">
                        {item.title}
                      </span>
                      {item.period && (
                        <span className="text-sm font-medium whitespace-nowrap text-gray-500">
                          {item.period}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 강의 주제 섹션 */}
            {detailData.subject && detailData.subject.length > 0 && (
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h2 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
                  강의 주제
                </h2>
                <div className="space-y-3">
                  {detailData.subject.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                    >
                      <span className="text-gray-900 text-sm sm:text-base">
                        {item.title}
                      </span>
                      {item.period && (
                        <span className="text-sm font-medium whitespace-nowrap text-gray-500">
                          {item.period}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 강의 내역 섹션 */}
            {detailData.history && detailData.history.length > 0 && (
              <div>
                <h2 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
                  강의 내역
                </h2>
                <div className="space-y-3">
                  {detailData.history.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                    >
                      <span className="text-gray-900 text-sm sm:text-base">
                        {item.title}
                      </span>
                      {item.period && (
                        <span className="text-sm font-medium whitespace-nowrap text-gray-500">
                          {item.period}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 전문가 소개 페이지 메인 컴포넌트
 */
export default function MentorList() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (expertId) => {
    setExpandedId((prevId) => (prevId === expertId ? null : expertId));
  };

  return (
    <div className="min-h-screen bg-bg-light w-full">
      <div
        className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-12 lg:px-16"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* 헤더 섹션 */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h1 className="font-bold text-gray-900 mb-2 leading-tight text-2xl sm:text-[28px] md:text-[32px] lg:text-4xl">
            전문가 소개
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-600 leading-relaxed text-sm sm:text-base">
            KAIPA(한국AI진흥원)의 전문가들을 소개합니다.
            <br />각 분야의 최고 전문가들이 함께하고 있습니다.
          </p>
        </div>

        {/* 전문가 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {expertsData.map((expert) => (
            <ExpertCard
              key={expert.id}
              expert={expert}
              isExpanded={expandedId === expert.id}
              onToggle={() => handleToggle(expert.id)}
              detailData={mentorDetailData[expert.id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
