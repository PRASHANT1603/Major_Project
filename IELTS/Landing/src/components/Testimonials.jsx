const reviews = [
  {
    img: "media/Zuck-Welcomes-Superintelligence-Team-Business-2170596573.webp",
    name: "Mark Zuckerberg",
     text: "This IELTS website is exellent.",
  },
  {
    img: "media/sara ali khan.avif",
    name: "Sara Khan",
    text: "The AI feedback improved my writing score a lot.",
  },
  {
    img: "media/images.jpeg",
    name: "Bill Gate",
    text: "Flexible timings helped me prepare while working full-time.",
  },
 
];

export default function Testimonials() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-10">
        What Students Say
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            {/* Card Image */}
            <img
              src={r.img}
              alt={r.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-100"
            />

            {/* Review Text */}
            <p className="italic text-gray-700 mb-3">"{r.text}"</p>

            {/* Reviewer Name */}
            <h4 className="font-semibold text-blue-600">– {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
