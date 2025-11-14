export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          TechCreative LTD
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-3xl space-y-6">
        <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
          We blend technology and creativity to deliver cutting-edge digital solutions
          that drive innovation.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {/* From web development to custom software solutions, we partner with organisations
          to build scalable, user-centric products that make an impact. */}

          From web development to custom software solutions, we build scalable, user-centric products that make an impact.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30">
          <div className="mx-auto mt-2 h-2 w-1 animate-pulse rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
