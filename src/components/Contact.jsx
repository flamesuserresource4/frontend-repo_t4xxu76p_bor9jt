import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      company_name: form.get('company_name') || undefined,
      contact_name: form.get('contact_name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      country: form.get('country') || undefined,
      inquiry_type: form.get('inquiry_type') || undefined,
      products: form.getAll('products')?.filter(Boolean) || undefined,
      message: form.get('message') || undefined,
      preferred_port: form.get('preferred_port') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Request a Quote</h2>
            <p className="mt-2 text-slate-600">Tell us what you need and our export team will respond within 24 hours.</p>
            {status && (
              <div className={`mt-4 p-3 rounded-md text-sm ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                {status.ok ? 'Thank you! Your inquiry has been received.' : `Error: ${status.error}`}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Company Name</label>
              <input name="company_name" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Contact Name</label>
              <input name="contact_name" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Phone / WhatsApp</label>
              <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Country</label>
              <input name="country" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Preferred Port</label>
              <input name="preferred_port" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Inquiry Type</label>
              <select name="inquiry_type" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">Select</option>
                <option>Export</option>
                <option>Import</option>
                <option>Buy</option>
                <option>Sell</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Products Interested In</label>
              <div className="mt-2 grid sm:grid-cols-4 gap-2 text-sm">
                {['Fruits', 'Vegetables', 'Grains', 'Spices'].map((p) => (
                  <label key={p} className="inline-flex items-center gap-2">
                    <input type="checkbox" name="products" value={p} />
                    {p}
                  </label>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className="sm:col-span-2">
              <button className="inline-flex items-center px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
