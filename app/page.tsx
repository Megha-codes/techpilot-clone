export default function Home() {
  return (
    <main>
      <section className="bg-muted py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-primary">
            Smarter Manufacturing Sourcing
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Discover manufacturers, submit RFQs, and automate procurement with RFX.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/manufacturers"
              className="bg-secondary text-white px-6 py-3 rounded-xl shadow-soft"
            >
              Explore Manufacturers
            </a>
            <a
              href="/rfq"
              className="border border-border px-6 py-3 rounded-xl"
            >
              Submit RFQ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
