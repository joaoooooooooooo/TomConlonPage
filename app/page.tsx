import Image from "next/image";

const observations = [
  {
    title: "AI Didn't Kill SEO",
    text: "It exposed it. The blank page won't last.",
    image: "/Ai didnt killed.png",
  },
  {
    title: "We Traded Accountability for Iteration",
    text: "Information is everywhere. Interpretation isn't.",
    image: "/We traded.png",
  },
  {
    title: "Piercing the Veil",
    text: "How did AI lose your trust today?",
    image: "/Piericing the veil.png",
  },
];

const topics = [
  {
    q: "Why does ChatGPT recommend one company and ignore another?",
    sub: "The new gatekeeping has no visible rules and no appeals process.",
  },
  {
    q: "Has Google stopped being the internet's front door?",
    sub: "What happens to a brand when the front door moves.",
  },
  {
    q: "Who earns trust when AI writes the answer?",
    sub: "The credibility chain behind an AI-generated recommendation.",
  },
  {
    q: "Why are some brands becoming invisible overnight?",
    sub: "Visibility used to be earned slowly. Now it can vanish just as fast.",
  },
  {
    q: "What are agencies learning that most brands aren't?",
    sub: "The people closest to the disruption are already adapting.",
  },
  {
    q: "Is original research the last marketing advantage left?",
    sub: "When everything else can be copied, data can't.",
  },
];

const pressList = [
  {
    title: "Brand Authenticity Playbook for 2026: What Consumers Really Care About",
    outlet: "Clutch.co",
    type: "Article",
    category: "Marketing",
    date: "Feb 2026",
  },
  {
    title: "From Agency Battle Scars to AI Products",
    outlet: "Beyond the Plateau",
    type: "Podcast",
    category: "AI & Agencies",
    date: "Feb 2026",
  },
  {
    title: "Finding the Unexpected Tip of the Spear",
    outlet: "An Agency Story",
    type: "Podcast",
    category: "Strategy",
    date: "Dec 2025",
  },
  {
    title: "Turn Niche into Revenue",
    outlet: "The Innovative Agency Podcast",
    type: "Podcast",
    category: "Growth",
    date: "Mar 2025",
  },
  {
    title: "Building a Successful Creative Agency from Scratch",
    outlet: "The Pozcast",
    type: "Podcast",
    category: "Founder Story",
    date: "Feb 2025",
  },
  {
    title: "Advice for GenZ Searching for Employment",
    outlet: "Human Capital Leadership",
    type: "Podcast",
    category: "Career",
    date: "Feb 2025",
  },
];

const marqueeItems = [
  { title: "JOURNEY MAP", type: "PODCAST", wide: false },
  { title: "CLUTCH.CO", type: "ARTICLE", wide: false },
  { title: "BEYOND THE PLATEAU", type: "PODCAST", wide: true },
  { title: "THE PODCAST", type: "PODCAST", wide: false },
];

export default function Home() {
  return (
    <main className="page">
      <header className="section hero">
        <div className="shell hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Tom Conlon - Moonvine Founder</p>
            <h1>AI search, brand visibility, marketing, and agency economics.</h1>
            <div className="hero-actions">
              <a className="primary-btn" href="mailto:media@moonvine.io">
                Contact Tom
              </a>
              <a
                className="secondary-btn"
                href="https://moonvine.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="button-icon" viewBox="0 0 195 187" aria-hidden="true" focusable="false">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M96.9985 0.0192627C106.055 -0.27936 113.936 2.92194 121.378 7.68468C126.653 11.0614 130.764 15.5799 134.994 20.0572C139.89 25.2389 144.967 30.2714 150.178 35.1474C153.519 38.2748 157.822 40.0995 161.728 42.4594C167.587 46.0014 173.609 49.3843 179.015 53.531C186.319 59.1318 191.501 66.4291 193.505 75.5584C194.245 78.9353 194.067 82.3747 193.791 85.8104C193.226 92.8357 190.81 99.2193 187.226 105.248C184.483 109.864 181.99 114.633 179.1 119.153C175.298 125.098 172.86 131.539 171.158 138.302C169.623 144.398 168.26 150.541 166.53 156.582C164.609 163.283 161.328 169.398 156.914 174.822C152.161 180.663 145.669 183.819 138.455 185.735C133.414 187.073 128.334 187.105 123.227 186.335C119.235 185.733 115.233 185.148 111.281 184.331C108.94 183.846 106.682 182.954 104.405 182.189C99.4564 180.522 94.5439 180.591 89.5769 182.183C86.1351 183.286 82.6749 184.466 79.1298 185.086C74.2554 185.938 69.2914 186.778 64.3687 186.765C54.0133 186.738 44.927 183.185 37.7469 175.587C34.9653 172.64 33.079 169.082 31.1448 165.563C27.9332 159.72 26.6356 153.306 25.0941 146.927C23.3272 139.616 21.7545 132.191 18.3609 125.39C16.5275 121.714 14.1729 118.294 12.1396 114.711C9.50903 110.077 6.83795 105.456 4.4072 100.721C0.404948 92.9162 -0.719725 84.5776 0.422156 75.9758C0.964396 71.8967 2.76811 68.2078 4.98302 64.7244C8.88884 58.585 13.8533 53.5197 20.2011 49.7988C25.5195 46.6804 30.7259 43.367 36.1108 40.3663C42.0176 37.0756 47.0142 32.7475 51.6093 27.9146C55.5587 23.7587 59.4046 19.507 63.3816 15.3806C68.6062 9.96088 76.1172 3.81048 86.9293 1.18309C91.0369 0.18221 94.5793 0.00343458 96.9985 0.0192627ZM98.4427 36.3112C63.9827 36.3115 36.0469 64.2469 36.0469 98.707C36.0474 133.167 63.983 161.102 98.4427 161.103C132.903 161.103 160.838 133.167 160.838 98.707C160.838 64.2467 132.903 36.3112 98.4427 36.3112Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Meet Moonvine</span>
              </a>
            </div>
          </div>

          <Image
            className="hero-art hero-art-desktop"
            src="/hero-desktop.png"
            alt="Tom Conlon with abstract data visualizations"
            width={5149}
            height={2984}
            priority
          />
          <Image
            className="hero-art hero-art-mobile"
            src="/hero-mobile.png"
            alt="Tom Conlon with abstract data visualizations"
            width={2924}
            height={1890}
            priority
          />
        </div>
      </header>

      <section className="section section-pad about-section">
        <div className="shell about-simple">
          <div className="about-heading-stack">
            <h2 className="section-title">About Tom Conlon</h2>
            <p className="about-intro">
              Download approved media assets and copy-ready background materials for interviews, features, and event
              listings.
            </p>
          </div>

          <div className="about-body">
            <div className="resource-list about-bio-block">
              <div className="resource-link">
                <div className="resource-copy">
                  <p>
                    Tom Conlon is the founder of Moonvine, a brand insights platform built to help marketers make sense
                    of an increasingly fragmented marketing landscape. Moonvine brings together AI visibility, organic
                    and paid search, website performance, social media, earned media, competitive intelligence, and
                    broader market signals, then translates them into a weekly read on what changed, why it matters,
                    and what to do next.
                  </p>
                </div>
              </div>
            </div>

            <div className="media-resource-actions">
              <h3 className="media-resource-title">Downloadable resources</h3>
              <div className="media-resource-buttons">
                <a className="secondary-btn" href="/034497b8-a4d1-4672-8aba-295144e5da30.png" download>
                  Hi-res headshot
                </a>
                <a className="secondary-btn" href="/tom-conlon-one-line-credential.txt" download>
                  One-line credential
                </a>
                <a className="secondary-btn" href="/tom-conlon-short-bio.txt" download>
                  Short bio
                </a>
                <a className="secondary-btn" href="/tom-conlon-long-bio.txt" download>
                  Long bio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-pad topics-section">
        <div className="shell">
          <h2 className="section-title">Currently thinking</h2>
          <div className="observation-grid">
            {observations.map((observation) => (
              <a key={observation.title} className="quiet-card quiet-card-link" href="#">
                <Image
                  className="quiet-card-image"
                  src={observation.image}
                  alt=""
                  aria-hidden="true"
                  width={1456}
                  height={1048}
                />
                <div className="quiet-card__body">
                  <h3>
                    <span className="quiet-card-title">{observation.title}</span>
                  </h3>
                  <p>{observation.text}</p>
                </div>
                <span className="card-read-more">Read more</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="shell">
          <div className="split-heading">
            <h2 className="wide-heading">Six questions worth asking him.</h2>
          </div>
          <div className="topic-grid">
            {topics.map((topic) => (
              <div key={topic.q} className="topic-card">
                <span className="num" aria-hidden="true" />
                <p className="question">{topic.q}</p>
                <p className="sub">{topic.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-pad">
        <div className="shell media-grid">
          <div>
            <h2 className="section-title">Featured conversation</h2>
            <a className="showcase showcase-link" href="#">
              <div className="episode-still">
                <Image
                  className="episode-art"
                  src="/spotify-card-v2.png"
                  alt="Listen on Spotify artwork for Growing a Creative Agency"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="showcase-body">
                <div className="badge-row">
                  <span className="badge">Journey Map</span>
                  <span className="micro">Podcast - Agency &amp; AI - May 20, 2026</span>
                </div>
                <h3>
                  <span className="card-link">Growing a Creative Agency in Shifting Markets</span>
                </h3>
                <p className="quote">
                  On this episode: what happens to an agency&apos;s playbook when the products clients hire you to build
                  start building themselves.
                </p>
                <span className="card-read-more">Listen now</span>
              </div>
            </a>
          </div>

          <div>
            <h3 className="section-label small emphasis">Also as heard on</h3>
            <div className="press-list">
              {pressList.map((item) => (
                <a key={item.title} className="press-item press-item-link" href="#">
                  <div>
                    <div className="press-title">
                      <span className="card-link">{item.title}</span>
                    </div>
                    <div className="press-meta">
                      <span>{item.outlet}</span>
                      <span>-</span>
                      <span>{item.type}</span>
                      <span>-</span>
                      <span className="badge">{item.category}</span>
                    </div>
                  </div>
                  <div className="press-item__side">
                    <div className="date">{item.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="logo-marquee-section">
        <div className="shell">
          <div className="logo-marquee">
            <div className="logo-marquee-track">
              {[0, 1, 2, 3].map((group) => (
                <div key={group} className="logo-marquee-group">
                  {marqueeItems.map((item) => (
                    <div
                      key={`${group}-${item.title}`}
                      className={`feature-marquee-card${item.wide ? " feature-marquee-card-wide" : ""}`}
                    >
                      <span className="feature-marquee-title">{item.title}</span>
                      <span className="feature-marquee-type">{item.type}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section footer-cta">
        <div className="shell footer-cta-shell">
          <div className="footer-cta-content">
            <h2>
              Covering AI, search,
              <br />
              or marketing?
            </h2>
            <p className="hero-copy">
              Tom is available for interviews, panels, and commentary and usually replies within a day.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="mailto:media@moonvine.io">
                <span>Contact Tom</span>
              </a>
            </div>
            <div className="proof footer-cta-links">
              <a href="#">Substack</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>

          <Image
            className="footer-art"
            src="/footer-art.png"
            alt=""
            aria-hidden="true"
            width={3544}
            height={1939}
          />
        </div>
      </section>

      <footer>
        <div className="shell footer">
          <span>Copyright 2026 Moonvine</span>
          <span>media@moonvine.io</span>
        </div>
      </footer>
    </main>
  );
}
