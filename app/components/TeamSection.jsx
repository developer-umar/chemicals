"use client";

const teamMembers = [
  {
    name: "Mr. Nadeem Ajmal",
    role: "Proprietor & Director",
    description: "18+ years of expertise in leather chemicals, global sourcing, and industrial trading solutions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marketing Team",
    role: "Business Development",
    description: "Dedicated professionals handling global client communication and strategic order management.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Technical Experts",
    role: "Industrial Support",
    description: "Experienced specialists providing product guidance and industrial troubleshooting assistance.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-emerald-600"></span>
              <span className="text-emerald-700 font-bold tracking-[0.2em] text-[10px] uppercase">Leadership & Core Team</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              The Experts Behind <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 italic font-serif">Tansol Exims</span>
            </h2>
          </div>
        </div>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/50 transition-all duration-500 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80" />

              {/* SOCIAL ACTION (SVG Inline) */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-16 group-hover:translate-x-0 transition-transform duration-500">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors border border-white/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-colors border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
              </div>

              {/* CONTENT */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">{member.role}</p>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{member.name}</h3>
                  <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-white/80 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STRIP (Zero Library Arrow) */}
        <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl font-bold text-white max-w-md">
            Consult with our technical <span className="text-emerald-500 font-serif italic">specialists</span> today.
          </h3>
          <button className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-full font-bold transition-all active:scale-95 shadow-lg">
            Contact Leadership 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}