const expertsData = [
  {
    id: 1,
    name: "강기현",
    position: "에이정 대표",
    specialization: ["AI", "데이터", "자동화"],
    description:
      "AI는 이제 전 세계가 공유하는 공용 언어가 되었습니다.\n최신 글로벌 트렌드와 산업별 흐름을 이해하기 쉽게 풀어내고,\n국내 현실에 맞게 설명합니다. 데이터와 자동화 분야의 전문성을\n바탕으로, 수강생이 넓은 시야를 가질 수 있도록 돕습니다.",
    email: "kogi@sangsangcity.com",
  },
  {
    id: 2,
    name: "권순현",
    position: "블링크애드 대표",
    specialization: ["AI", "데이터", "자동화"],
    description:
      "AI는 반복되는 일을 자동화하고 새로운 아이디어를 시험할 수 있는 도구입니다.\n자동화 기술을 통해 시간을 아끼고, 변화를 두려워하지 않는 실험 정신을 전합니다.\n지식 전달을 넘어, 새로운 시각을 열어주는 데 초점을 맞추고 있습니다.\n",
    email: "kogi@sangsangcity.com",
  },
];

function ExpertCard({ expert }) {
  const initials = expert.name.split("").slice(0, 2).join("").toUpperCase();

  return (
    <div
      className="bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:-translate-y-1"
      style={{
        boxShadow: "0px 1px 2px -1px rgba(17, 12, 34, 0.08)",
      }}
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
      <p className="flex-1 text-center text-gray-600 leading-relaxed text-[13px] sm:text-sm">
        {expert.description}
      </p>

      {/* 이메일 (선택적) */}
      {expert.email && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs sm:text-[13px]">
            {expert.email}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * 전문가 소개 페이지 메인 컴포넌트
 */
export default function MentorList() {
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
            광주 DevOps 플랫폼을 이끌어가는 전문가들을 소개합니다.
            <br />각 분야의 최고 전문가들이 함께하고 있습니다.
          </p>
        </div>

        {/* 전문가 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {expertsData.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>

        {/* 통계 또는 추가 정보 섹션 (선택적) */}
        <div className="mt-10 md:mt-15 p-6 md:p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <h2 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg md:text-xl">
            우리와 함께하세요
          </h2>
          <p className="text-gray-600 leading-relaxed text-[13px] sm:text-sm">
            블록체인과 DevOps 분야의 전문가로서 함께 성장하고 싶으신가요?
            <br />
            언제든지 문의해 주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
