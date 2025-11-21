import { ArrowRight, Globe2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-emerald-50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_10%_20%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(800px_600px_at_90%_10%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Merchant Exporters of Premium Agro Commodities
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We source, grade, and ship fresh fruits, vegetables, grains, and spices from farm to port—reliably and compliantly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 font-semibold hover:border-slate-400">
                Explore Products
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-emerald-600" /> Global Sourcing</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Quality Checks</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> On-time Delivery</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-b from-emerald-200/40 to-transparent rounded-3xl blur-2xl" />
            <img src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1400&auto=format&fit=crop" alt="Agro export" className="relative rounded-2xl shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4">
              <p className="text-sm font-semibold text-slate-700">100+ SKUs</p>
              <p className="text-xs text-slate-500">Fruits • Vegetables • Grains • Spices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
