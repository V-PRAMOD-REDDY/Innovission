import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const ContactPage = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, feedback, or support"
        backgroundImage="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <SectionTitle
              title="Send Us a Message"
              subtitle="We'd love to hear from you! Please fill out the form below."
            />
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for reaching out to us. We'll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary-600 font-medium hover:text-primary-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                      {field === 'name' ? 'Your Name' : 'Email Address'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder={field === 'name' ? 'Pramod' : 'Pramod@example.com'}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="course-inquiry">Course Inquiry</option>
                    <option value="service-inquiry">Service Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full sm:w-auto flex items-center justify-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <SectionTitle title="Contact Information" subtitle="Reach out to us through any of these channels" />

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  title: 'Email Us',
                  content: (
                    <>
                      <p className="text-gray-600 mb-2">For inquiries:</p>
                      <a href="mailto:vpr59@gmail.com" className="text-primary-600 hover:text-primary-800">
                        vpr59@gmail.com
                      </a>
                      
                    </>
                  ),
                },
                {
                  icon: <Phone className="h-6 w-6" />,
                  title: 'Call Us',
                  content: (
                    <>
                      <p className="text-gray-600 mt-2 mb-2">Office:</p>
                      <a href="tel:+919441663905" className="text-primary-600 hover:text-primary-800">
                        +91 9441663905
                      </a>
                    </>
                  ),
                },
                {
                  icon: <MapPin className="h-6 w-6" />,
                  title: 'Visit Us',
                  content: (
                    <p className="text-gray-600">
                      Kuppam,
                      RBR, Chittoor - 517423<br />
                      AP, India
                    </p>
                  ),
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: 'Working Hours',
                  content: (
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  ),
                },
              ].map((info, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                      {info.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                    {info.content}
                  </div>
                </div>
              ))}

              <div className="mt-8 bg-primary-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Connect on Social Media</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for updates, tips, and community highlights.
                </p>
                {/* Social icons already present */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* FAQ Cards (already added by you, not repeated here) */}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
            <a href="#" className="btn btn-primary">
              View All FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest courses, events, and career tips. We promise not to spam your inbox!
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button
                type="submit"
                className="btn bg-white text-primary-900 hover:bg-gray-100 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <MessageSquare className="h-12 w-12 text-gray-500 mr-4" />
          <span className="text-gray-700 text-lg">Interactive Map Would Be Displayed Here</span>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
