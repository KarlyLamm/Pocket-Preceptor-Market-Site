import React from 'react';
import { MessageCircle, Users, BookOpen, TrendingUp, Clock, Shield, Brain } from 'lucide-react';
import demoVideo from './assets/demo.mp4';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="gradient-bg text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="Pocket Preceptor Logo" className="h-32" />
          <div className="space-x-6">
            <a href="#features" className="hover:text-teal-200">Features</a>
            <a href="#benefits" className="hover:text-teal-200">Benefits</a>
            <a href="#contact" className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-teal-50">Contact Sales</a>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real-Time Nurse Support for Real-Life Pressure
              </h2>
              <p className="text-xl mb-8">
                Empower your nurses with instant access to AI-powered guidance, peer support, and a thriving community. Save up to $600K annually in retention costs.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-50">
                Request Demo
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
              <video 
                src={demoVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">
            Comprehensive Support System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <MessageCircle className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI-Powered Chat</h3>
              <p className="text-gray-600">
                Instant answers to clinical questions with our intelligent chatbot trained on nursing expertise.
              </p>
            </div>
            <div className="feature-card">
              <Users className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-3">Peer Connection</h3>
              <p className="text-gray-600">
                Connect with experienced nurses in real-time for guidance and support.
              </p>
            </div>
            <div className="feature-card">
              <BookOpen className="w-12 h-12 text-teal mb-4" />
              <h3 className="text-xl font-semibold mb-3">Learning Management</h3>
              <p className="text-gray-600">
                Personalized article recommendations based on chat history and learning patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-16">
            Why Hospitals Choose Pocket Preceptor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-8 h-8 text-teal flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Retention</h3>
                <p className="text-gray-600">
                  Reduce turnover rates and save up to $600K annually in replacement costs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-teal flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Support</h3>
                <p className="text-gray-600">
                  24/7 access to guidance when nurses need it most.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-teal flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Confidence</h3>
                <p className="text-gray-600">
                  Build more confident nurses with reliable support systems.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Brain className="w-8 h-8 text-teal flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Learning</h3>
                <p className="text-gray-600">
                  AI-driven content recommendations for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to Transform Your Nurse Support System?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading hospitals in providing innovative support for your nursing staff. Schedule a demo to see how Pocket Preceptor can help reduce turnover and boost confidence.
          </p>
          <button className="gradient-bg text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90">
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Pocket Preceptor</h2>
              <p className="text-teal-100">Empowering nurses through innovation</p>
            </div>
            <div className="flex space-x-8">
              <a href="#features" className="hover:text-teal-200">Features</a>
              <a href="#benefits" className="hover:text-teal-200">Benefits</a>
              <a href="#contact" className="hover:text-teal-200">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-teal-700 text-center text-teal-100">
            <p>&copy; {new Date().getFullYear()} Pocket Preceptor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;