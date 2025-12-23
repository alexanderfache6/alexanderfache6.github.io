'use client';

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending email (in production, integrate with email service)
        // You can use services like EmailJS, SendGrid, or your own backend API
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="gradient-bg grid-pattern">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-center fade-in-up">
                    <span className="gradient-text">Get In Touch</span>
                </h2>
                <p className="text-slate-400 text-center mb-12 text-lg">
                    Have a question or want to work together? I'd love to hear from you!
                </p>

                <div className="glass-card p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                placeholder="Tell me about your project or question..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}
                            </button>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
                                Oops! Something went wrong. Please try again.
                            </div>
                        )}
                    </form>

                    {/* Note about email integration */}
                    <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                        <p className="text-xs text-slate-400 text-center">
                            Note: To enable email sending, integrate with a service like EmailJS, SendGrid, or implement your own backend API.
                            Currently, form submissions are logged to the console.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
