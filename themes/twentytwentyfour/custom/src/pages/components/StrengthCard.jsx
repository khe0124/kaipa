export default function StrengthCard({ title, description, icon }) {
    return (
        <div className="relative overflow-hidden w-full h-[200px] flex flex-col justify-center items-start cursor-pointer bg-main-500 rounded-xl shadow-lg p-6 transition-all duration-500 group border border-transparent hover:bg-white/10 hover:backdrop-blur-xl hover:border-white/20 hover:shadow-2xl">
            {/* glass highlight overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/5" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[140%] h-24 rounded-full bg-white/50 blur-3xl opacity-60" />
                <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl" />
            </div>

            <img src={icon} alt={title} className="w-10 h-10 drop-shadow" />
            <section className="mt-4 flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-white drop-shadow-sm transition-colors duration-300">{title}</h3>
                <p className="text-sm text-white/90 whitespace-pre-wrap drop-shadow-sm transition-colors duration-300">{description}</p>
            </section>
        </div>
    );
}