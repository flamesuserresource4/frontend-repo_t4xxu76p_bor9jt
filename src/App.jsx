import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Process />
        <Contact />
        <footer className="py-10 bg-slate-900 text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} AgroBridge Exports. All rights reserved.</p>
            <div className="text-sm">
              <a href="/test" className="hover:text-white">System Status</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
