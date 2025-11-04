import { palette } from "../../style";
// import { useParams, useRouter } from "react-router-dom";
import { useMemo } from "react";

/**
 * 전문가 상세 데이터 (MentorList copy.jsx와 동일한 구조)
 */
const mentorDetailData = {
  1: {
    id: 1,
    name: "강기현",
    introduction:
      "AI는 이제 전 세계가 공유하는 공용 언어가 되었습니다.\n최신 글로벌 트렌드와 산업별 흐름을 이해하기 쉽게 풀어내고,\n국내 현실에 맞게 설명합니다. 데이터와 자동화 분야의 전문성을\n바탕으로, 수강생이 넓은 시야를 가질 수 있도록 돕습니다.",
    education: "한국교통대학교 전기공학전공 학사",
    email: "kogi@sangsangcity.com",
    phone: "010-5211-3420",
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
    email: "kogi@sangsangcity.com",
    phone: "010-5211-3420",
    youtube: "https://www.youtube.com/@aijeong",
    career: [
      { title: "수원대학교 화학공학과 학사", period: "" },
      { title: "블링크애드 대표", period: "2022.12 ~" },
      { title: "올리코퍼레이션 이사", period: "2024.10 ~" },
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

/**
 * 전문가 상세 페이지 컴포넌트
 */
export default function ExpertDetailPage() {
  // const params = useParams();
  // const router = useRouter();
  // const mentorId = params?.id;
  const mentorId = 1;

  const mentorDetail = useMemo(() => {
    return mentorDetailData[mentorId] || mentorDetailData["1"];
  }, [mentorId]);

  const initials = mentorDetail.name
    .split("")
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleBack = () => {
    router.push("/test");
  };

  return (
    <div className="min-h-screen bg-bg-light w-full">
      <div
        className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-12 lg:px-16"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* 뒤로가기 버튼 */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity text-gray-600"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          목록으로
        </button>

        {/* 프로필 헤더 섹션 */}
        <div
          className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border mb-6"
          style={{
            borderColor: "#e5e7eb",
            boxShadow: "0px 1px 2px -1px rgba(17, 12, 34, 0.08)",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            {/* 프로필 이미지 */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <div
                className="rounded-full flex items-center justify-center text-white font-semibold"
                style={{
                  width: "120px",
                  height: "120px",
                  backgroundColor: palette.main[500],
                  fontSize: "48px",
                }}
              >
                {mentorDetail.profileImage ? (
                  <img
                    src={mentorDetail.profileImage}
                    alt={mentorDetail.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>
            </div>

            {/* 프로필 정보 */}
            <div className="flex-1 text-center sm:text-left">
              <h1
                className="font-bold mb-4"
                style={{
                  fontSize: "28px",
                  color: "#111827",
                }}
              >
                {mentorDetail.name}
              </h1>

              {/* 연락처 정보 */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm mb-4">
                {mentorDetail.email && (
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
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
                    <span className="text-gray-600">{mentorDetail.email}</span>
                  </div>
                )}
                {mentorDetail.phone && (
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
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
                    <span className="text-gray-600">{mentorDetail.phone}</span>
                  </div>
                )}
                {mentorDetail.youtube && (
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
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
                      href={mentorDetail.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-main-500"
                    >
                      유튜브 채널
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 상세 설명 */}
          {mentorDetail.introduction && (
            <div
              className="mt-6 pt-6 border-t"
              style={{ borderColor: "#e5e7eb" }}
            >
              <p
                className="leading-relaxed whitespace-pre-wrap"
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: 1.7,
                }}
              >
                {mentorDetail.introduction}
              </p>
            </div>
          )}

          {/* 학력 정보 */}
          {mentorDetail.education && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg md:text-xl">
                학력
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                {mentorDetail.education}
              </p>
            </div>
          )}
        </div>

        {/* 경력 섹션 */}
        {mentorDetail.career && mentorDetail.career.length > 0 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 mb-6">
            <h2 className="font-bold text-gray-900 mb-6 text-base sm:text-lg md:text-xl">
              학력 및 경력
            </h2>
            <div className="space-y-4">
              {mentorDetail.career.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 last:pb-0 border-b last:border-b-0 border-gray-200"
                >
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg font-medium">
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
        {mentorDetail.subject && mentorDetail.subject.length > 0 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 mb-6">
            <h2 className="font-bold text-gray-900 mb-6 text-base sm:text-lg md:text-xl">
              강의 주제
            </h2>
            <div className="space-y-4">
              {mentorDetail.subject.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 last:pb-0 border-b last:border-b-0 border-gray-200"
                >
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg">
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
        {mentorDetail.history && mentorDetail.history.length > 0 && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h2 className="font-bold text-gray-900 mb-6 text-base sm:text-lg md:text-xl">
              강의 내역
            </h2>
            <div className="space-y-4">
              {mentorDetail.history.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 last:pb-0 border-b last:border-b-0 border-gray-200"
                >
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg">
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
  );
}
