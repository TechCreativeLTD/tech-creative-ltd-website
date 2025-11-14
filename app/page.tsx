import { Hero } from '@/components/hero'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <ContactForm /> */}
      <div className='flex justify-center my-8'>
        <div className='text-center'>
          <h2 className="mb-2 text-3xl font-bold text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground">Ready to start your next project? Contact us at{' '}</p>
          <div>
            <a
              href="mailto:hello@tech-creative.co.uk"
              className="font-medium text-accent hover:underline"
            >
              hello@tech-creative.co.uk
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
