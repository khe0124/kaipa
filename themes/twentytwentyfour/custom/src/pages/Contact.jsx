import ContactForm from "./components/ContactForm";

export default function Contact() {
  return (
    <div>
      <section className="container mx-auto flex flex-col items-center justify-center p-4 py-16">
        <h2 className="text-3xl font-bold">문의하기</h2>
        <p className="text-gray-600 text-base font-light whitespace-pre-wrap">
          문의하실 내용을 입력해주세요.
        </p>
        <div className="w-full max-w-[600px] mx-auto mt-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
