import { Apple, Carrot, Wheat, Sprout } from 'lucide-react'

const productGroups = [
  {
    title: 'Fresh Fruits',
    icon: Apple,
    items: ['Banana', 'Mango', 'Grapes', 'Pomegranate', 'Citrus'],
    color: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Vegetables',
    icon: Carrot,
    items: ['Onion', 'Potato', 'Okra', 'Tomato', 'Chili'],
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Grains & Pulses',
    icon: Wheat,
    items: ['Basmati Rice', 'Non-Basmati Rice', 'Wheat', 'Lentils', 'Chickpeas'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Spices & Herbs',
    icon: Sprout,
    items: ['Turmeric', 'Cumin', 'Coriander', 'Black Pepper', 'Cardamom'],
    color: 'from-violet-500 to-indigo-500'
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">What We Export</h2>
          <p className="mt-2 text-slate-600">Sustainably sourced, rigorously graded, and packed to international standards.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productGroups.map((g) => (
            <div key={g.title} className="group rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all bg-white">
              <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${g.color} text-white flex items-center justify-center shadow-md`}>
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-800">{g.title}</h3>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                {g.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
