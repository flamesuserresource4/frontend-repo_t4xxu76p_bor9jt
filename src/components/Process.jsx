import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Inquiry & Spec',
    desc: 'Share target product, specs, quantity, port, and timeline.'
  },
  {
    title: 'Offer & Samples',
    desc: 'We submit prices, availability, and send samples if required.'
  },
  {
    title: 'PO & Processing',
    desc: 'We grade, pack, and arrange documentation per destination norms.'
  },
  {
    title: 'Logistics & Dispatch',
    desc: 'We book freight, handle customs, and share real-time updates.'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">How We Work</h2>
          <p className="mt-2 text-slate-600">A clear, reliable process built for international trade.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <CheckCircle2 className="h-5 w-5" /> Step {i + 1}
              </div>
              <h3 className="mt-3 font-bold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
