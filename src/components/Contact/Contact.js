import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    // Create a mailto link
    const mailtoLink = `mailto:asharma@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AMessage:%0A${encodeURIComponent(formData.message)}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
    setSubmitStatus('success');
  };

  const neumorphicCard = "bg-gray-100 rounded-xl p-6 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]";
  const neumorphicInput = "w-full bg-gray-100 rounded-lg p-3 mb-4 shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-500";
  const neumorphicButton = "w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#3b82f6,inset_-4px_-4px_8px_#60a5fa] transition-all duration-300 ease-in-out";

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Contact ASK Optics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={neumorphicCard}>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
            <p className="mb-4 text-gray-700"><strong>Phone:</strong> (+91) 8652243885</p>
            <p className="mb-4 text-gray-700"><strong>Email:</strong> asharma@gmail.com</p>
            <p className="mb-4 text-gray-700"><strong>Address:</strong> Shop No:10, Labh Aveneu, Sector-11, Plot No: 20A Kalamboli Navi Mumbai 410218</p>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Business Hours</h4>
              <p className="text-gray-700">Monday - Friday: 10:00 AM - 10:00 PM</p>
              <p className="text-gray-700">Saturday: 10:00 AM - 10:00 PM</p>
              <p className="text-gray-700">Sunday: 10:00 AM - 10:00 PM</p>
            </div>
          </div>

          <div className={neumorphicCard}>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={neumorphicInput}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={neumorphicInput}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={neumorphicInput}
              ></textarea>
              <button 
                type="submit" 
                className={neumorphicButton}
              >
                Send Message
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600">Message sent successfully! Please check your email client.</p>
            )}
          </div>
        </div>

        <div className={`${neumorphicCard} mt-12`}>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Find Us</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.031414434936!2d73.08620844824249!3d19.030388964634227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9fb47ff82fd%3A0xe3fdf3c4101e8d2d!2sAsk%20Opticians!5e0!3m2!1sen!2sin!4v1728815303068!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;