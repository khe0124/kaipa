import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 px-4 py-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="companyName">
          기업명
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          id="companyName"
          type="text"
          {...register("companyName")}
          placeholder="기업명을 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="contactName">
          담당자명
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          id="contactName"
          type="text"
          {...register("contactName")}
          placeholder="담당자명을 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="email">
          이메일
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          id="email"
          type="email"
          {...register("email")}
          placeholder="이메일을 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="phone">
          연락처
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          id="phone"
          type="text"
          {...register("phone")}
          placeholder="연락처를 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="subject">
          문의제목
        </label>
        <input
          className="border border-gray-300 rounded-md p-2"
          id="subject"
          type="text"
          {...register("subject")}
          placeholder="문의제목을 입력해주세요."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="message">
          문의내용
        </label>
        <textarea
          className="border border-gray-300 rounded-md p-2"
          id="message"
          rows="10"
          {...register("message")}
          placeholder="문의내용을 입력해주세요."
        />
      </div>
      <button
        type="submit"
        className="bg-main-500 text-white px-4 py-2 rounded-full"
      >
        문의하기
      </button>
    </form>
  );
}
