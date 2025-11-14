export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">TechCreative LTD</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Innovative technology solutions for the modern business.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: hello@tech-creative.co.uk</p>
              <p>Business Number: 16378107</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:hello@tech-creative.co.uk"
                className="font-medium text-muted-foreground hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechCreative LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
