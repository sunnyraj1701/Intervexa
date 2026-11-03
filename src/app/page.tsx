
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B14] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">
          Intervexa<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-400">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#how-it-works" className="hover:text-white">How it works</a>
        </div>

        <div className="flex gap-3">
          <Link href="/login"
            className="px-4 py-2 text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/register"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-28 text-center">
        <div className="inline-block border border-blue-500/30
          bg-blue-500/10 text-blue-400 rounded-full px-5 py-2 mb-8">
          AI-Powered Interview Preparation
        </div>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Crack Your Next Interview
          <br />
          <span className="text-blue-500">
            With Confidence.
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl
          mx-auto mt-8 leading-relaxed">
          Practice real-world interviews with AI.
          Get personalized feedback, improve your skills,
          and become interview-ready.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link href="/register"
            className="bg-blue-600 px-8 py-4 rounded-xl
            font-semibold hover:bg-blue-700 transition">
            Start Practicing →
          </Link>

          <a href="#features"
            className="border border-gray-700 px-8 py-4
            rounded-xl hover:bg-gray-800 transition">
            Explore Features
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3
          gap-6 mt-24 text-left" id="features">

          <div className="bg-[#111827] border border-gray-800
            p-7 rounded-2xl">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-3">
              AI Mock Interviews
            </h3>
            <p className="text-gray-400">
              Experience realistic technical and HR interviews
              powered by AI.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800
            p-7 rounded-2xl">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-3">
              Resume Analysis
            </h3>
            <p className="text-gray-400">
              Analyze your resume and generate personalized
              interview questions.
            </p>
          </div>

          <div className="bg-[#111827] border border-gray-800
            p-7 rounded-2xl">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">
              Performance Insights
            </h3>
            <p className="text-gray-400">
              Discover your strengths, weaknesses and
              opportunities for improvement.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center
        text-gray-500">
        © 2026 Intervexa. All rights reserved.
      </footer>

    </main>
  );
}
