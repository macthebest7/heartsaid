export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg border">
        <h1 className="text-3xl font-bold text-center text-pink-600">Get in Touch 💌</h1>
        <p className="text-gray-600 text-center mt-2">
          We’d love to hear from you! Fill out the form below and our team will reply soon.
        </p>

        <form
          action="https://formspree.io/f/mvgwjqpy"
          method="POST"
          className="mt-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-pink-300 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-pink-300 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border rounded-md p-3 focus:ring-2 focus:ring-pink-300 outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#E85A70] to-[#5A6FF0] text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
