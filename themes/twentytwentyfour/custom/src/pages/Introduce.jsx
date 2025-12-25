import React from "react";
import Icon01 from "../images/icon_01.svg";
import Icon02 from "../images/icon_02.svg";
import Icon03 from "../images/icon_03.svg";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import IconButton from "@mui/material/IconButton";

export default function Introduce() {
  const coreValueList = [
    {
      title: "Innovation",
      koreanTitle: "혁신",
      description: "AI 기술의 최전선에서\n새로운 가능성을 창조합니다.",
      icon: <LightModeOutlinedIcon />,
    },
    {
      title: "Education",
      koreanTitle: "교육",
      description: "체계적인 AI 교육으로\n미래인재를 양성합니다.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Connection",
      koreanTitle: "연결",
      description: "기업, 학계, 정부를 하나로\n이어 시너지를 만듭니다.",
      icon: <HubOutlinedIcon />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 진흥원 소개 섹션 */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-gray-900 md:text-5xl text-3xl font-bold mb-8 md:mb-12 text-center">
            진흥원 소개
          </h1>

          <div className="mb-8 md:mb-12">
            <h2 className="text-gray-900 md:text-3xl text-2xl font-bold mb-6 md:mb-8">
              한국AI진흥원은,
            </h2>

            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                <span className="font-bold">
                  글로벌 AI 기업 · AI 크리에이터(인플루언서) · 공공기관 ·
                  대한민국 학교
                </span>
                를 연결하여 AI 기술이 한국 사회 전반에 자연스럽게 확산되도록
                돕는 <span className="font-bold">국가 단위 AI 생태계 허브</span>
                입니다.
              </p>
              {/* <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                우리는 AI 교육을 통해 국민의 디지털 역량을 높이고, 산업 현장에서
                AI 기술이 실질적으로 활용될 수 있도록 지원하며, 기업·학계·정부
                간 협력을 촉진하는 역할을 수행합니다.
              </p>

              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                또한 국내외 전문가와 함께하는 컨퍼런스와 세미나, 현장 중심의
                교육 프로그램, 그리고 정책 제안 및 연구 활동을 통해 대한민국이
                글로벌 AI 혁신 허브로 자리매김할 수 있도록 노력하고 있습니다.
              </p> */}
            </div>
          </div>

          {/* 비전, 미션, 핵심 가치, 생태계 섹션 */}
          <div className="mt-12 md:mt-16 space-y-8 md:space-y-12">
            {/* 비전 */}
            <div className="bg-gradient-to-r from-main-500 to-main-600 rounded-xl p-6 md:p-10 text-white">
              <h3 className="text-white md:text-3xl text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">

                비전 (Vision)
              </h3>
              <p className="text-white md:text-xl text-lg font-semibold leading-relaxed">
                "한국을 AI 교육·정책·콘텐츠·비즈니스의 글로벌 허브로 만든다."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {/* 미션 */}
              <div className="bg-slate-50 rounded-xl p-6 md:p-10 border border-main-500">
                <h3 className="text-slate-800 md:text-3xl text-center text-2xl font-bold mb-6 md:mb-8">
                  미션 (Mission)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white rounded-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                      해외 AI 기업이 한국시장에 성공적으로 진입하도록 지원
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                      국내 공공기관과 교육기관의 AI 도입 가속화
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                      AI 인플루언서 및 크리에이터 커뮤니티 활성화
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                    <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                      정부·기업·교육계를 연결하는 'AI 교류 플랫폼' 구축
                    </p>
                  </div>
                </div>
              </div>

            </div>
            {/* Core Value 섹션 */}
            <section className="bg-main-500 py-12 md:py-20 rounded-xl">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-white md:text-5xl text-3xl font-bold mb-4 md:mb-6 text-center">
                    Core Value
                  </h2>
                  <p className="text-white md:text-2xl text-xl font-semibold mb-12 md:mb-16 text-center">
                    핵심 가치
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {coreValueList.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex flex-col items-center justify-center gap-3 mb-4 md:mb-6">
                          <IconButton>{item.icon}</IconButton>
                          <div className="flex flex-col items-center justify-center">
                            <h3 className="text-slate-800 md:text-2xl text-xl font-bold text-center">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 md:text-base text-sm font-semibold text-center">
                              {item.koreanTitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 md:text-base text-sm text-center font-light whitespace-pre-wrap leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* KAIPA가 만드는 생태계 */}
            <div className="bg-slate-50 rounded-xl p-6 md:p-10 border border-main-500">
              <h3 className="text-slate-800 md:text-3xl text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">

                KAIPA가 만드는 생태계
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-main-500 font-bold mt-1">•</span>
                  <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                    해외 AI 기업 → 한국 시장 진입
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-main-500 font-bold mt-1">•</span>
                  <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                    AI 크리에이터 → 기술 확산 및 콘텐츠 유통
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-main-500 font-bold mt-1">•</span>
                  <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                    공공기관/교육기관 → AI 도입 및 체계 구축
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-main-500 font-bold mt-1">•</span>
                  <p className="text-gray-700 md:text-base text-sm font-light leading-relaxed">
                    한국 기업 → 글로벌 AI 솔루션과 협력
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
