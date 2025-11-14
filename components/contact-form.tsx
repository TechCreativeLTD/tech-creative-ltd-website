'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would send to an API
    setStatus('success')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section className="border-t border-border bg-muted/30 px-6 py-20" id="contact">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-accent p-3">
              <Mail className="h-6 w-6 text-accent-foreground" />
            </div>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground">
            Ready to start your next project? Contact us at{' '}
            <a
              href="mailto:hello@tech-creative.co.uk"
              className="font-medium text-accent hover:underline"
            >
              hello@tech-creative.co.uk
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-card p-8 shadow-sm">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={status === 'success'}
          >
            {status === 'success' ? 'Message Sent!' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
