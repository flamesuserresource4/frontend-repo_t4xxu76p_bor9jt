import { useState } from 'react'
import { Menu, X, PackageSearch } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-emerald-500 to-lime-500 text-white flex items-center justify-center shadow">
              <PackageSearch className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-slate-800 tracking-tight">AgroBridge Exports</p>
              <p className="text-xs text-slate-500 -mt-0.5">Global Merchants</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition-colors">Get Quote</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-medium">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-emerald-600 text-white font-semibold text-center">Get Quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
