import React, { useState } from 'react';
import contactbg from '../assets/contactbg.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED SUBMIT HANDLER (MAILTO REDIRECTION)
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Contact Request from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}`
    );

    window.location.href = `mailto:info@tanvox.in?subject=${subject}&body=${body}`;

    setFormStatus("Redirecting to email...");

    setTimeout(() => setFormStatus(""), 3000);

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const hyderabadOffice = {
    city: "Hyderabad",
    address:
      "3rd Floor JQ Chambers,4-50/5,Gachibowli - Miyapur Rd, Hyderabad, Telangana",
    phone: "+91 9676507387",
    email: "info@tanvox.in"
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "Custom software development, mobile apps, web development, cloud solutions, UI/UX design, and DevOps."
    },
    {
      question: "How long does a project take?",
      answer: "4-6 weeks for simple websites, 3-6 months for complex applications."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance and support packages."
    },
    {
      question: "What is your pricing model?",
      answer:
        "Fixed-price, time & materials, and dedicated team models."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(185,176,176,0.7), rgba(19,1,66,0.8)), url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red-900">Get In</span>
            <span className="block text-navy-blue">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Ready to start your next project? Contact us today.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Send Us a <span className="text-navy-blue">Message</span>
          </h2>

          {formStatus && (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-6 text-center">
              {formStatus}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              rows="5"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              type="submit"
              className="bg-navy-blue text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* OFFICE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1814107272626!2d78.3628605!3d17.4510292"
            className="w-full h-96 rounded-lg shadow-lg"
            loading="lazy"
            title="Tanvox Office"
          />

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-navy-blue mb-6">
              {hyderabadOffice.city}
            </h3>
            <p>{hyderabadOffice.address}</p>
            <p className="mt-3">{hyderabadOffice.phone}</p>
            <p className="mt-3">{hyderabadOffice.email}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-blue">
                {faq.question}
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
