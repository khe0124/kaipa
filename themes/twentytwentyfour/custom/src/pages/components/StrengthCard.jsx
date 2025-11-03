export default function StrengthCard({ title, description, icon }) {
  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-start cursor-pointer bg-main-500 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:bg-white transition-all duration-300 group">
      <img src={icon} alt={title} className="w-10 h-10" />
      <section className="mt-4 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-white group-hover:text-main-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white whitespace-pre-wrap group-hover:text-gray-600 transition-colors duration-300">
          {description}
        </p>
      </section>
    </div>
  );
}
