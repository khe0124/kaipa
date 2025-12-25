import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Partner01 from "../../images/partners/logo_01.png";
import Partner02 from "../../images/partners/logo_02.png";
import Partner03 from "../../images/partners/logo_03.png";
import Partner04 from "../../images/partners/logo_04.png";
import Partner05 from "../../images/partners/logo_05.png";

export default function AICaseStudyPage() {
    // 파트너사 로고 데이터 (예시 - 실제 이미지 경로로 교체 필요)
    const originalPartnerLogos = [
        { id: 1, logo: Partner01, name: "Google Marketing Live" },
        { id: 2, logo: Partner02, name: "Boardmix" },
        { id: 3, logo: Partner03, name: "Skywork" },
        { id: 4, logo: Partner04, name: "Mapify" },
        { id: 5, logo: Partner05, name: "Genwave" },
    ];

    // 무한 루프를 위해 슬라이드 데이터를 여러 번 복제
    const partnerLogos = [...originalPartnerLogos, ...originalPartnerLogos, ...originalPartnerLogos, ...originalPartnerLogos];

    // 성공사례 데이터 (예시 - 실제 데이터로 교체 필요)
    const successCases = [
        {
            id: 1,
            logo: "/images/case1.png",
            title: "A기업 AI 도입 성공 사례",
            description:
                "생성형 AI를 활용한 고객 서비스 자동화로 응답 시간을 80% 단축하고 고객 만족도를 크게 향상시켰습니다.",
        },
        {
            id: 2,
            logo: "/images/case2.png",
            title: "B기관 디지털 혁신 프로젝트",
            description:
                "AI 기반 문서 처리 시스템 도입으로 업무 효율성을 3배 이상 향상시키고 인력 재배치를 통한 비용 절감을 실현했습니다.",
        },
        {
            id: 3,
            logo: "/images/case3.png",
            title: "C학교 AI 교육 프로그램",
            description:
                "전 교직원 대상 AI 리터러시 교육을 통해 혁신적인 수업 방식을 도입하고 학생들의 학습 참여도를 크게 높였습니다.",
        },
        {
            id: 4,
            logo: "/images/case4.png",
            title: "D기업 마케팅 자동화",
            description:
                "AI를 활용한 개인화된 마케팅 캠페인으로 전환율을 150% 증가시키고 마케팅 비용을 효율적으로 관리했습니다.",
        },
        {
            id: 5,
            logo: "/images/case5.png",
            title: "E기관 데이터 분석 혁신",
            description:
                "AI 기반 빅데이터 분석 플랫폼 구축으로 의사결정 속도를 향상시키고 예측 정확도를 크게 개선했습니다.",
        },
        {
            id: 6,
            logo: "/images/case6.png",
            title: "F기업 고객 경험 개선",
            description:
                "AI 챗봇과 추천 시스템을 통합하여 고객 만족도를 높이고 매출 성장을 이끌어냈습니다.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                .partner-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
            {/* 파트너사 로고 슬라이드 섹션 */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-gray-900 md:text-4xl text-2xl font-bold mb-8 md:mb-12 text-center">
                            협력 파트너사
                        </h2>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2}
                            spaceBetween={30}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={1000}
                            loop={true}
                            loopedSlides={5}
                            allowTouchMove={false}
                            grabCursor={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            className="partner-swiper"
                            style={{
                                '--swiper-transition-timing-function': 'linear',
                            }}
                        >
                            {partnerLogos.map((partner, index) => (
                                <SwiperSlide key={`${partner.id}-${index}`}>
                                    <div className="flex items-center justify-center md:h-40 rounded-lg p-4 md:p-6">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-w-full max-h-full object-contain duration-300"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                                e.target.parentElement.innerHTML = `<div class="text-gray-400 text-sm text-center">${partner.name}</div>`;
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* 성공사례 섹션 */}
            <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-gray-900 md:text-4xl text-2xl font-bold mb-4 md:mb-6 text-center">
                        파트너사 협업 성공 사례
                    </h2>
                    <p className="text-gray-600 md:text-lg text-base font-light mb-12 md:mb-16 text-center">
                        한국AI진흥원과 함께한 다양한 기업 및 기관의 성공 스토리를 확인해보세요.
                    </p>

                    {/* 성공사례 카드 그리드 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {successCases.map((caseItem) => (
                            <div
                                key={caseItem.id}
                                className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                {/* 로고 */}
                                <div className="mb-4 md:mb-6 flex items-center justify-center h-20 md:h-24">
                                    <img
                                        src={caseItem.logo}
                                        alt={caseItem.title}
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                            e.target.parentElement.innerHTML = `<div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">로고</div>`;
                                        }}
                                    />
                                </div>

                                {/* 제목 */}
                                <h3 className="text-gray-900 md:text-xl text-lg font-bold mb-3 md:mb-4 text-center">
                                    {caseItem.title}
                                </h3>

                                {/* 내용 */}
                                <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed flex-grow text-center">
                                    {caseItem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}