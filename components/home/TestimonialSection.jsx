export default function TestimonialSection() {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        location: "Dallas",
        quote: "The arrangement was even more beautiful than the photos. My mother was thrilled with her birthday flowers!",
        avatar: "https://via.placeholder.com/48x48"
      },
      {
        id: 2,
        name: "Michael Rodriguez",
        location: "Fort Worth",
        quote: "Fast delivery and the roses were incredibly fresh. They lasted almost two weeks!",
        avatar: "https://via.placeholder.com/48x48"
      },
      {
        id: 3,
        name: "Jennifer Williams",
        location: "Plano",
        quote: "I order flowers for my office regularly and Loveshot always exceeds expectations.",
        avatar: "https://via.placeholder.com/48x48"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-custom-blue">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  