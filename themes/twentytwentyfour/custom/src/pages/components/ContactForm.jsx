import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setSubmitted(false);
    setError(null);

    try {
      // 타임스탬프 추가
      const payload = {
        ...data,
        timestamp: new Date().toLocaleString('ko-KR'),
      };

      // Google Apps Script 웹훅으로 직접 요청
      const response = await fetch(process.env.REACT_APP_GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Google Apps Script는 JSON 응답을 반환
      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();

        // 5초 후 성공 메시지 자동 숨김
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error(result.error || '문의 전송에 실패했습니다.');
      }

    } catch (err) {
      setError(err.message || '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      console.error('Contact form error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light w-full">
      <div className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-12 lg:px-16 max-w-3xl mx-auto">
        <header className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h1 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-4xl font-bold text-grey-900 leading-tight">
            문의하기
          </h1>
          <p className="text-sm sm:text-base text-grey-600 mt-2">
            기업 협업, 강의 요청, 기술 문의 등 무엇이든 남겨주세요.
          </p>
        </header>

        {submitted && (
          <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
            문의가 성공적으로 접수되었습니다. 빠르게 연락드리겠습니다.
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl border border-grey-200 shadow-sm p-5 sm:p-6 md:p-8"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* 기업명 */}
            <div className="flex flex-col">
              <label
                htmlFor="companyName"
                className="mb-2 text-sm font-semibold text-grey-900"
              >
                기업 또는 기관명 <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                type="text"
                className="h-11 rounded-lg border border-grey-200 px-3 text-sm outline-none focus:border-primary-200 focus:ring-2 focus:ring-primary-25"
                placeholder="예) 한국AI진흥원"
                aria-invalid={!!errors.companyName}
                {...register("companyName", {
                  required: "기업 또는 기관명을 입력해 주세요.",
                })}
              />
              {errors.companyName && (
                <span className="mt-1 text-xs text-red-500">
                  {errors.companyName.message}
                </span>
              )}
            </div>

            {/* 담당자명 */}
            <div className="flex flex-col">
              <label
                htmlFor="contactName"
                className="mb-2 text-sm font-semibold text-grey-900"
              >
                담당자명 <span className="text-red-500">*</span>
              </label>
              <input
                id="contactName"
                type="text"
                className="h-11 rounded-lg border border-grey-200 px-3 text-sm outline-none focus:border-primary-200 focus:ring-2 focus:ring-primary-25"
                placeholder="예) 홍길동"
                aria-invalid={!!errors.contactName}
                {...register("contactName", {
                  required: "담당자명을 입력해 주세요.",
                })}
              />
              {errors.contactName && (
                <span className="mt-1 text-xs text-red-500">
                  {errors.contactName.message}
                </span>
              )}
            </div>

            {/* 이메일 */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-semibold text-grey-900"
              >
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="h-11 rounded-lg border border-grey-200 px-3 text-sm outline-none focus:border-primary-200 focus:ring-2 focus:ring-primary-25"
                placeholder="example@company.com"
                aria-invalid={!!errors.email}
                {...register("email", {
                  required: "이메일을 입력해 주세요.",
                  pattern: {
                    value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                    message: "유효한 이메일 주소가 아닙니다.",
                  },
                })}
              />
              {errors.email && (
                <span className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* 연락처 */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 text-sm font-semibold text-grey-900"
              >
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                className="h-11 rounded-lg border border-grey-200 px-3 text-sm outline-none focus:border-primary-200 focus:ring-2 focus:ring-primary-25"
                placeholder="010-1234-5678"
                aria-invalid={!!errors.phone}
                {...register("phone", {
                  required: "연락처를 입력해 주세요.",
                  pattern: {
                    value: /^(\+?82-?)?0?1[0-9]-?\d{3,4}-?\d{4}$/,
                    message: "유효한 연락처 형식이 아닙니다.",
                  },
                })}
              />
              {errors.phone && (
                <span className="mt-1 text-xs text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* 제목 */}
          <div className="mt-4 md:mt-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-grey-900"
            >
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              className="h-11 w-full rounded-lg border border-grey-200 px-3 text-sm outline-none focus:border-primary-200 focus:ring-2 focus:ring-primary-25"
              placeholder="문의 제목을 입력해 주세요"
              aria-invalid={!!errors.subject}
              {...register("subject", {
                required: "제목을 입력해 주세요.",
                minLength: {
                  value: 2,
                  message: "제목은 2자 이상이어야 합니다.",
                },
              })}
            />
            {errors.subject && (
              <span className="mt-1 text-xs text-red-500">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* 내용 */}
          <div className="mt-4 md:mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-grey-900"
            >
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full rounded-lg border border-grey-200 p-3 text-sm outline-none focus:border-primary-200 focus:ring-2 focus:ring-primary-25"
              placeholder="문의 내용을 자세히 입력해 주세요"
              aria-invalid={!!errors.message}
              {...register("message", {
                required: "내용을 입력해 주세요.",
                minLength: {
                  value: 10,
                  message: "내용은 10자 이상이어야 합니다.",
                },
              })}
            />
            {errors.message && (
              <span className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* 버튼 영역 */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <button
              type="button"
              className="h-11 rounded-lg border border-grey-200 px-4 text-sm font-medium hover:bg-grey-50"
              onClick={() => reset()}
              disabled={isSubmitting}
            >
              초기화
            </button>
            <button
              type="submit"
              className="h-11 rounded-lg px-5 text-sm font-semibold text-white bg-main-500 hover:bg-main-600 disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "전송 중..." : "문의 보내기"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
