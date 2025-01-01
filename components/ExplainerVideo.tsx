export default function ExplainerVideo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How MasterCrypto Works</h2>
        <div className="aspect-w-16 aspect-h-9 mx-auto max-w-4xl">
          <iframe
            src="https://www.youtube.com/embed/dummyvideo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

