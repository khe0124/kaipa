export default function MentorList() {
  const mentorList = [
    {
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
        { title: "AI강의 유튜브 ‘에이정’ 운영 Youtube", period: "2024.10~" },
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
          title:
            "캡컷으로 영상 콘텐츠 만들기 초급반,심화반 강서여성인력개발센터",
          period: "2025.08",
        },
        { title: "홍보역량 강화 직원교육 국가유산진흥원", period: "2025.07" },
        {
          title: "SBA 구직자를 위한 AI 역량 강화 영등포여성인력개발센터",
          period: "2025.10 ~",
        },
        {
          title:
            "고립운둔청년을 위한 AI활용 숏폼 쉽게 만들기 중림종합사회복지관",
          period: "2025.10",
        },
      ],
    },
    {
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
        { title: "AI강의 유튜브 ‘에이정’ 운영 Youtube", period: "2024.10~" },
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
  ];

  return (
    <div className="container mx-auto p-4 py-16">
      <section className="grid grid-cols-1 gap-4">
        <section className="flex flex-col gap-2 mb-12 py-8">
          <h2 className="text-3xl font-bold">AI 전문가</h2>
          <p className="text-gray-600 text-base font-light whitespace-pre-wrap">
            AI 전문가 목록을 확인해보세요.
          </p>
        </section>
        {mentorList.map((mentor) => (
          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] py-8 gap-32">
            <div className="flex flex-col gap-2">
              <div className="w-full h-[200px] bg-gray-200 rounded-xl"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{mentor.name}</h3>
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="text-sm font-bold">학력 및 경력</h4>
                  <dl>
                    {mentor.career.map((item) => (
                      <li key={item.title} className="grid grid-cols-2 gap-2">
                        <span className="text-sm">{item.title}</span>
                        <span className="text-sm text-gray-600">
                          {item.period}
                        </span>
                      </li>
                    ))}
                  </dl>
                </div>
                <div>
                  <h4 className="text-sm font-bold">강의 내역</h4>
                  <dl>
                    {mentor.subject.map((item) => (
                      <li key={item.title} className="grid grid-cols-2 gap-2">
                        <span className="text-sm">{item.title}</span>
                        <span className="text-sm text-gray-600">
                          {item.period}
                        </span>
                      </li>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
