const features = [
  { title: "Speaking Practice", desc: "Live sessions with expert trainers.", icon: "🗣️" },
  { title: "Mock Tests", desc: "Real exam simulations to track progress.", icon: "📚" },
  { title: "AI Band Score", desc: "Instant feedback on essays & speaking.",icon: "🤖"  },
  { title: "Flexible Schedule", desc: "Study anytime, anywhere at your pace.",icon: "📝"  },
];

export default function Features() {
  return (
    <section className="py-16 px-8 bg-white">
      <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-blue-50 rounded-xl shadow hover:scale-105 transition transform"
          >
             <div className="text-4xl mb-3 items-center text-center" >{f.icon}</div>
            <h4 className="text-xl font-semibold mb-2 text-blue-700 items-center text-center">{f.title}</h4>
            <p className="text-gray-600 items-center text-center">{f.desc}</p>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}
