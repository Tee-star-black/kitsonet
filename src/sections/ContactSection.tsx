import { useState, type FormEvent } from 'react'
import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Kitso-Net enquiry: ${String(data.get('enquiryType') || 'General')}`)
    const body = encodeURIComponent([
      `Name: ${data.get('fullName')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Enquiry: ${data.get('enquiryType')}`,
      '',
      String(data.get('message') || ''),
    ].join('\n'))
    setSubmitted(true)
    window.location.href = `mailto:Kitsonet@classicmail.co.za?subject=${subject}&body=${body}`
    form.reset()
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Contact Us" title="Tell Us How We Can Help" description="Choose the reason for your enquiry, share the essentials and your email app will prepare the message for Kitso-Net." align="center" />

        <div className="mt-14 grid overflow-hidden rounded-[2.25rem] border border-primary-100 shadow-[0_24px_70px_rgba(25,51,46,.10)] lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative overflow-hidden bg-primary-900 p-7 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-accent-400/15 blur-2xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-accent-300">Direct contact</p>
              <h3 className="mt-4 font-heading text-4xl font-bold">We’re here to listen.</h3>
              <p className="mt-4 leading-7 text-primary-100">Reach our team during office hours for programme enquiries, assistance, volunteering and partnerships.</p>

              <div className="mt-9 space-y-5">
                <a href="https://maps.google.com/?q=No.+1+Rose+Street,+Rosettenville,+Johannesburg" target="_blank" rel="noreferrer" className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/10"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent-300"><MapPin size={20} /></span><span><strong className="block">Visit us</strong><span className="mt-1 block text-sm leading-6 text-primary-100">No. 1 Rose Street, Rosettenville<br />Johannesburg, 2190</span></span></a>
                <a href="tel:+27737764815" className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/10"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent-300"><Phone size={20} /></span><span><strong className="block">Call us</strong><span className="mt-1 block text-sm text-primary-100">073 776 4815 · 060 356 4815</span></span></a>
                <a href="mailto:Kitsonet@classicmail.co.za" className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/10"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent-300"><Mail size={20} /></span><span className="min-w-0"><strong className="block">Email us</strong><span className="mt-1 block break-all text-sm text-primary-100">Kitsonet@classicmail.co.za</span></span></a>
                <div className="flex items-start gap-4 p-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent-300"><Clock3 size={20} /></span><span><strong className="block">Office hours</strong><span className="mt-1 block text-sm text-primary-100">Monday to Friday, 08:00–16:00</span></span></div>
              </div>
              <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-primary-200">This website is not an emergency service. For urgent medical help, contact emergency services or visit the nearest healthcare facility.</p>
            </div>
          </div>

          <div className="bg-[#fbfcfb] p-7 sm:p-10">
            {submitted && <div role="status" className="mb-6 flex items-start gap-3 rounded-2xl border border-primary-200 bg-primary-50 p-4 text-primary-900"><CheckCircle2 className="mt-0.5 shrink-0" size={20} /><p className="text-sm leading-6"><strong>Your message is ready.</strong> Complete sending it in the email app that just opened.</p></div>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-primary-900">Full name<input name="fullName" type="text" autoComplete="name" required className="form-field" placeholder="Your full name" /></label>
                <label className="text-sm font-semibold text-primary-900">Email address<input name="email" type="email" autoComplete="email" required className="form-field" placeholder="you@example.com" /></label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-primary-900">Phone number <span className="font-normal text-muted">(optional)</span><input name="phone" type="tel" autoComplete="tel" className="form-field" placeholder="Your phone number" /></label>
                <label className="text-sm font-semibold text-primary-900">How can we help?<select name="enquiryType" required defaultValue="" className="form-field"><option value="" disabled>Select an enquiry</option><option>Request Assistance</option><option>Programme Information</option><option>Volunteer</option><option>Donation</option><option>Partnership</option><option>General Enquiry</option></select></label>
              </div>
              <label className="block text-sm font-semibold text-primary-900">Message<textarea name="message" rows={6} required className="form-field resize-y" placeholder="Share the most important details so our team can help." /></label>
              <label className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm leading-6 text-muted"><input type="checkbox" required className="mt-1 h-4 w-4 accent-primary-700" /><span>I consent to Kitso-Net using my information to respond to this enquiry.</span></label>
              <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary-800 px-7 font-semibold text-white shadow-lg shadow-primary-900/10 transition hover:-translate-y-0.5 hover:bg-primary-950 sm:w-auto">Prepare email <Send size={18} /></button>
              <p className="text-xs leading-5 text-muted">Submitting opens your default email app. No information is stored by this website.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection
