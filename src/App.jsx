import Header from './components/Header.jsx'
import FlightWidget from './components/FlightWidget.jsx'
import NewsletterSubscribe from './components/NewsletterSubscribe.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="brand">VibeFly</h1>
            <p className="tagline">Find the cheapest flights fast — beautiful, fast, and mobile-friendly.</p>
            <div className="cta-row">
              <a
                className="btn primary"
                href="https://tp.media/click?shmarker=670432&promo_id=8978&source_type=link&type=click&campaign_id=629&trs=456587"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get eSIM worldwide
              </a>
              <a className="btn ghost" href="#deals">Explore flight deals</a>
            </div>
          </div>
          <div className="gradient-orb orb-1" aria-hidden="true" />
          <div className="gradient-orb orb-2" aria-hidden="true" />
        </section>

        <section id="deals" className="widget-section">
          <h2>Search and compare cheap flights</h2>
          <p className="section-sub">Powered by trusted travel partners.</p>
          <FlightWidget />
        </section>

        <section className="subscribe-section">
          <NewsletterSubscribe />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
