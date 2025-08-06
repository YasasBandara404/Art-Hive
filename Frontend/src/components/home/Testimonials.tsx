import { TESTIMONIALS } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-ct-blue-50/50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 dark:text-white">Loved by Creators & Buyers</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what our community has to say about their experience with Create & Trade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-ct-teal-500 ring-2 ring-white dark:ring-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
