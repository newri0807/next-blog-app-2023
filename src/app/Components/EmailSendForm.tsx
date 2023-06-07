"use client";
import React, { useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("유효한 이메일을 입력해주세요")
    .required("이메일은 필수 입력 항목입니다"),
  subject: yup.string().required("제목은 필수 입력 항목입니다"),
  message: yup.string().required("메시지는 필수 입력 항목입니다"),
});

type FormErrors = {
  email?: string;
  subject?: string;
  message?: string;
};

const EmailSendForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // 유효성 검사 통과
      console.log("폼 데이터:", formData);
      // 에러 메세지 초기화
      setErrors({});

      // 이메일을 API로 보내기
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("이메일이 성공적으로 전송되었습니다.");
        // 이메일 전송 성공 처리
      } else {
        console.error("이메일 전송에 실패했습니다.");
        // 이메일 전송 실패 처리
      }
    } catch (err: any) {
      // 유효성 검사 실패
      const validationErrors: Record<string, any> = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-1">
          Your Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-semibold mb-1">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.subject ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">{errors.subject}</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-semibold mb-1">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-2 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmailSendForm;
