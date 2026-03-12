import './ContactUs.scss'
import MainPageLayout from "../../components/Layout/MainPageLayout";
import { useState } from 'react';

export default function ContactUs() {
    const pageTitle = "Contact Us";
    document.title = pageTitle;
    const metaDescription = "Get in touch with Shamim Cadet Academy. Contact us for admission inquiries, coaching programs, and general information. We're here to help you succeed.";
    const metaKeywords = "contact us, Shamim Cadet Academy, admission inquiry, coaching programs";
    const metaAuthor = "Shamim Cadet Academy";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('Please fill in all required fields.');
            setTimeout(() => setSubmitStatus(''), 5000);
            return;
        }
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 5000);
    };

    const contactInfo = [
        {
            id: 1,
            icon: "📍",
            title: "Address",
            content: "Shamim Cadet Academy\nDhaka, Bangladesh",
            link: null
        },
        {
            id: 2,
            icon: "📞",
            title: "Phone",
            content: "+8801671-503680",
            link: "tel:+8801671-503680"
        },
        {
            id: 3,
            icon: "✉️",
            title: "Email",
            content: "email@shamimcadetacademy.com",
            link: "mailto:email@shamimcadetacademy.com"
        },
        {
            id: 4,
            icon: "⏰",
            title: "Office Hours",
            content: "Monday - Friday: 9 AM - 5 PM\nSaturday - Sunday: 10 AM - 3 PM",
            link: null
        }
    ];

    const faqs = [
        {
            id: 1,
            question: "What are your coaching program timings?",
            answer: "Our coaching programs operate during weekdays (Monday to Friday) from 9 AM to 5 PM, with flexible batch timings to accommodate various student schedules."
        },
        {
            id: 2,
            question: "Do you offer online coaching?",
            answer: "Yes, we offer both in-person and online coaching programs. Our online platform provides interactive classes, mock tests, and personalized mentoring."
        },
        {
            id: 3,
            question: "What is the eligibility criteria for admission?",
            answer: "Candidates must be between 12-18 years old, have completed primary education, and be currently enrolled in secondary school. Physical fitness standards are also required."
        },
        {
            id: 4,
            question: "How often are the admission tests conducted?",
            answer: "We conduct admission tests on a rolling basis. New batches are formed every two months with periodic entrance tests."
        },
        {
            id: 5,
            question: "What payment options do you accept?",
            answer: "We accept cash, bank transfers, mobile banking (Nagad, Bkash, Rocket), and installment payment options for qualified students."
        },
        {
            id: 6,
            question: "Can I take a trial class before enrolling?",
            answer: "Yes! We offer a free trial class so students can experience our teaching methodology and facilities before making a commitment."
        }
    ];

    const [expandedFaq, setExpandedFaq] = useState(null);

    return (
        <MainPageLayout title={pageTitle} description={metaDescription} keywords={metaKeywords} author={metaAuthor}>
            <section className="contactus-container">
                {/* Header */}
                <div className="contactus-header">
                    <h1>Get In Touch With Us</h1>
                    <p className="intro-text">Have questions about our programs? We're here to help!</p>
                </div>

                {/* Contact Information Cards */}
                <article className="contact-info-section">
                    <h2>Contact Information</h2>
                    <div className="info-cards-grid">
                        {contactInfo.map((info) => (
                            <div key={info.id} className="info-card">
                                <div className="info-icon">{info.icon}</div>
                                <h3>{info.title}</h3>
                                {info.link ? (
                                    <a href={info.link} className="info-link">{info.content}</a>
                                ) : (
                                    <p>{info.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </article>

                {/* Contact Form & Map */}
                <article className="contact-form-section">
                    <div className="contact-form-wrapper">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter message subject"
                                    required
                                />
                            </div>

                            <div className="form-group full-width">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>

                            {submitStatus && (
                                <div className={`form-status ${submitStatus.includes('successfully') ? 'success' : 'error'}`}>
                                    {submitStatus}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="map-wrapper">
                        <h2>Find Us On Map</h2>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29188.82761032821!2d90.3872512!3d23.868211199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59a4dc847ef%3A0x9cbb2cab270fb46a!2sShamim%20Cadet%20Academy!5e0!3m2!1sen!2sbd!4v1772351380406!5m2!1sen!2sbd"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '12px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </article>

                {/* FAQ Section */}
                <article className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`faq-icon ${expandedFaq === faq.id ? 'active' : ''}`}>▼</span>
                                </button>
                                {expandedFaq === faq.id && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </article>

                {/* Call to Action */}
                <article className="cta-section">
                    <h2>Ready to Start Your Journey?</h2>
                    <p>Take the first step towards your dreams of joining a prestigious cadet college. Contact us today for a free consultation and trial class.</p>
                    <button className="cta-btn">Schedule a Consultation</button>
                </article>
            </section>
        </MainPageLayout>
    );
}
