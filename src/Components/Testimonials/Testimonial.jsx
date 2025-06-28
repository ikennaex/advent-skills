import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Josephine Amaka',
    title: 'CEO, TechCorp',
    quote:
      'Advent Skills helped us find the perfect domestic staff. Their service is reliable and professional.',
    image:
      'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'John Tayo',
    title: 'Entrepreneur',
    quote:
      'The recruitment process was smooth and stress-free. Highly recommended!',
    image:
      'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 3,
    name: 'Amina Opeyemi',
    title: 'Homeowner',
    quote:
      'I love the professionalism of the staff we hired through Advent Skills.',
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">“{testimonial.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;