import { ShieldCheck, Truck, BadgeCheck, Scale } from 'lucide-react'

const services = [
  {
    title: 'Sourcing & Aggregation',
    desc: 'Farm-gate procurement through a vetted grower network across key belts.',
    icon: Scale
  },
  {
    title: 'Quality & Compliance',
    desc: 'Phytosanitary checks, grading, packing, and export documentation end-to-end.',
    icon: ShieldCheck
  },
  {
    title: 'Logistics & Freight',
    desc: 'Cold-chain, reefer containers, multimodal, and last-mile coordination.',
    icon: Truck
  },
  {
    title: 'Private Labeling',
    desc: 'Custom packaging, branding, and SKU creation for retail and wholesale.',
    icon: BadgeCheck
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">What We Do</h2>
          <p className="mt-2 text-slate-600">We manage the complete export cycle so you focus on markets and customers.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
