import { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center text-center px-4">
      {/* Hero Section */}
      <header className="mt-20 max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Say it from the Heart 💙
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Send short, meaningful messages that make someone’s day — through text, voice, or video.
        </p>
        <a
          href="#waitlist"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Join Waitlist
        </a>
      </header>

      {/* How It Works */}
      <section className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl">
        {[
          { emoji: "💬", title: "Text Message", desc: "A heartfelt message sent instantly." },
          { emoji: "🎤", title: "Voice Message", desc: "Your voice, your emotion — delivered with warmth." },
          { emoji: "🎥", title: "Video Message", desc: "Record your smile and say it face-to-face." },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl">{item.emoji}</div>
            <h3 className="mt-4 font-semibold text-xl text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Emotional Impact */}
      <section className="mt-24 max-w-2xl">
        <blockquote className="italic text-gray-700 text-lg">
          “Sometimes, a few words can change an entire day — or a life.”
        </blockquote>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mt-24 mb-24 bg-white p-8 rounded-3xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Waitlist 💌</h2>
        {!submitted ? (
          <form
            action="https://formspree.io/f/mvgwjqpy"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-medium mt-2">
            ✅ Thank you for joining! We’ll keep you posted.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mb-8">
        © {new Date().getFullYear()} HeartSaid. All rights reserved.
      </footer>
    </div>
  );
}
