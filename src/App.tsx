import { useState } from 'react'
import { ArrowRightIcon, GlobeAltIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/outline'

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
            <span className="text-xl font-bold tracking-tight">AXON_CLEAN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="link-underline">Solutions</a>
            <a href="#" className="link-underline">Resources</a>
            <a href="#" className="link-underline">Pricing</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container-clean text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
            <BoltIcon className="w-4 h-4" />
            What's new in v4.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Build faster with <br />
            <span className="text-blue-600">Pure Simplicity.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed">
            A minimalist approach to building high-performance web applications. 
            No clutter, no noise. Just your ideas brought to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Start Building
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Book a Demo
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <GlobeAltIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Global Scale</h3>
              <p className="text-slate-500 leading-relaxed">Deploy to edges around the world with a single click. Minimal latency, maximum reach.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Secure by Default</h3>
              <p className="text-slate-500 leading-relaxed">Enterprise-grade security baked into every component. Your data is safe with Axon.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <BoltIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Instant Feedback</h3>
              <p className="text-slate-500 leading-relaxed">Experience zero-lag development with our new Turbo-engine. Speed up your workflow.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-clean">
          <div className="bg-slate-900 rounded-[32px] p-8 md:p-16 text-center space-y-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to streamline your workflow?</h2>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-sm">Join 2,000+ developers receiving our weekly updates.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded" />
            <span className="font-bold tracking-tight">AXON</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
          </div>
          <p className="text-sm text-slate-400">© 2026 Axon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
