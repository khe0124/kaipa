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
                <span className="font-bold">글로벌 AI 기업 · AI 크리에이터(인플루언서) · 공공기관 · 대한민국 학교</span>를 연결하여
                AI 기술이 한국 사회 전반에 자연스럽게 확산되도록 돕는 <span className="font-bold">국가 단위 AI 생태계 허브</span>입니다.
              </p>

              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                우리는 AI 교육을 통해 국민의 디지털 역량을 높이고, 산업 현장에서
                AI 기술이 실질적으로 활용될 수 있도록 지원하며, 기업·학계·정부
                간 협력을 촉진하는 역할을 수행합니다.
              </p>

              <p className="text-gray-700 md:text-lg text-base font-light leading-relaxed">
                또한 국내외 전문가와 함께하는 컨퍼런스와 세미나, 현장 중심의
                교육 프로그램, 그리고 정책 제안 및 연구 활동을 통해 대한민국이
                글로벌 AI 혁신 허브로 자리매김할 수 있도록 노력하고 있습니다.
              </p>
            </div>
          </div>

          {/* 설립 목적 및 주요 활동 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-main-500">
              <h3 className="text-slate-800 text-center md:text-2xl text-xl font-bold mb-4">
                설립 목적
              </h3>
              <p className="text-gray-700 text-center md:text-base text-sm font-light">
                한국 내 AI 교육 확산, 산업 발전 기여
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-main-500">
              <h3 className="text-slate-800 text-center md:text-2xl text-xl font-bold mb-4">
                주요 활동
              </h3>
              <p className="text-gray-700 text-center md:text-base text-sm font-light">
                교육, 컨퍼런스, 정책 제안, 기업·학계·정부 연계
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value 섹션 */}
      <section className="bg-main-500 py-12 md:py-20">
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
    </div>
  );
}
