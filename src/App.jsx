import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E85A70] to-[#5A6FF0] flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.35-9-7.2C1.2 10.95 3.2 6 7 6c2.2 0 3.5 1.5 5 3.1C13.5 7.5 14.8 6 17 6c3.8 0 5.8 4.95 4 7.8C19 16.65 12 21 12 21z" fill="white"/></svg>
          </div>
          <div>
            <a href="/" className="font-semibold text-xl">HeartSaid</a>
            <div className="text-xs text-gray-500">HeartSaid.shop</div>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#teams" className="hover:underline">For Teams</a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#E85A70] to-[#5A6FF0] text-white">Get Started</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Say what your heart feels — beautifully.</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Send short, meaningful messages that make someone’s day. Text, voice, or video — personalized and delivered with care.</p>

              <div className="mt-6 flex flex-wrap gap-3">
  <a
    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#E85A70] to-[#5A6FF0] text-white shadow-lg"
    href="#create"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
    </svg>
    Try Demo
  </a>

  <a
    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200"
    href="#pricing"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l4 4-9 9-4 1 1-4 9-10z" fill="currentColor" />
    </svg>
    Pricing
  </a>

  <button
    onClick={() =>
      window.location.href = "https://forms.gle/YOUR_WAITLIST_FORM_LINK"
    }
    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#5A6FF0] to-[#E85A70] text-white shadow-lg hover:opacity-90 transition-all"
  >
    💌 Join Waitlist
  </button>
</div>


            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-white border rounded-lg">
                <div className="font-semibold">Formats</div>
                <div className="text-gray-500">Text · Voice · Video</div>
              </div>
              <div className="p-4 bg-white border rounded-lg">
                <div className="font-semibold">AI Templates</div>
                <div className="text-gray-500">Personalized copy in seconds</div>
              </div>
              <div className="p-4 bg-white border rounded-lg">
                <div className="font-semibold">Scheduler</div>
                <div className="text-gray-500">Send later for birthdays & milestones</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-6 bg-white shadow-xl border">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Send a HeartSaid</div>
                  <div className="font-semibold">I’m proud of you — demo</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 rounded-md bg-[#FFF0F2] text-[#E85A70] border">Text</button>
                  <button className="px-3 py-2 rounded-md bg-[#F0F8FF] text-[#5A6FF0] border">Voice</button>
                </div>
              </div>

              <form className="mt-4 space-y-3">
                <input aria-label="Recipient" placeholder="Recipient name" className="w-full p-3 border rounded-md" />
                <textarea placeholder="Write your message (or use AI help)" className="w-full p-3 border rounded-md h-28" />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">Preview: A sweet preview of the message will appear here.</div>
                  <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#E85A70] to-[#5A6FF0] text-white">Send Demo</button>
                </div>
              </form>
            </div>

            <div className="absolute -right-6 -bottom-8 w-48 h-48 rounded-full bg-gradient-to-br from-[#E85A70] to-[#5A6FF0] opacity-10 blur-3xl" />
          </div>
        </section>

        <section id="features" className="py-8">
          <h2 className="text-2xl font-bold">What you can send</h2>
          <p className="text-gray-600 mt-2">Flexible formats to match how you express yourself.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Proud Text" desc="Instant SMS or WhatsApp messages with friendly tone options." />
            <FeatureCard title="Proud Voice" desc="Record your voice or use AI clone for a natural message." />
            <FeatureCard title="Proud Video" desc="Short customized clips with captions, music and animation." />
          </div>
        </section>

        <section id="teams" className="py-8 bg-gradient-to-r from-[#FFF8F8] to-white rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold">HeartSaid for Teams</h3>
              <p className="text-gray-600 mt-2">Automate recognition, send team-wide shoutouts, and track engagement. Boost morale with meaningful messages.</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• Scheduled recognition</li>
                <li>• Slack & Teams integration</li>
                <li>• Analytics dashboard</li>
              </ul>
              <div className="mt-4">
                <a href="#pricing" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#5A6FF0] text-white">Book Demo</a>
              </div>
            </div>
            <div className="w-64 p-4 bg-white border rounded-lg shadow-sm">
              <div className="font-semibold">Team Snapshot</div>
              <div className="mt-3 text-sm text-gray-600">12 messages sent this week — 94% positive reactions</div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="text-gray-600">Simple plans for individuals and teams.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard title="Free" price="$0" bullets={["2 texts/month", "Basic templates"]} />
            <PriceCard title="Heart+" price="$9/mo" bullets={["Unlimited texts", "5 voice messages", "2 videos/mo"]} featured />
            <PriceCard title="HeartPro" price="$19/mo" bullets={["Unlimited everything", "AI writer", "Custom templates"]} />
          </div>
        </section>

        <footer id="contact" className="mt-12 border-t pt-8 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E85A70] to-[#5A6FF0] flex items-center justify-center text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.35-9-7.2C1.2 10.95 3.2 6 7 6c2.2 0 3.5 1.5 5 3.1C13.5 7.5 14.8 6 17 6c3.8 0 5.8 4.95 4 7.8C19 16.65 12 21 12 21z" fill="white"/></svg></div>
              <div className="text-lg font-semibold">HeartSaid</div>
            </div>
            <p className="text-gray-600">HeartSaid.shop — Where your heart speaks, we deliver.</p>
            <div className="mt-4 text-sm text-gray-500">Questions? hello@heartsaid.shop</div>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <a>Privacy</a>
              <a>Terms</a>
              <a>Docs</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-5 bg-white rounded-lg border shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-md bg-[#FFF0F2] flex items-center justify-center text-[#E85A70]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="currentColor"/></svg>
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function PriceCard({ title, price, bullets = [], featured }) {
  return (
    <div className={`p-6 rounded-xl border ${featured ? 'bg-gradient-to-br from-white to-[#FFF8FF] shadow-lg' : 'bg-white'}`}>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-3xl font-bold mt-2">{price}</div>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
      <div className="mt-6">
        <button className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#E85A70] to-[#5A6FF0] text-white">Choose</button>
      </div>
    </div>
  );
}

export default App;
