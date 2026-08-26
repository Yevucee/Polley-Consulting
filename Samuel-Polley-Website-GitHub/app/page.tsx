export const metadata = {
  title: "The story changes when you get closer",
  description:
    "Investigator, journalist and cultural intelligence adviser. Fieldwork, private intelligence and stories that change the room.",
};

export const dynamic = "force-static";

const assetBase = process.env.GITHUB_PAGES === "true" ? "/Polley-Consulting" : "";

const films = {
  hero: {
    src: `${assetBase}/namibia-field.m4v`,
    poster: `${assetBase}/namibia-poster.png`,
    label: "Aerial view across the Namibian landscape",
  },
  bridge: {
    src: `${assetBase}/croatia-bridge.m4v`,
    poster: `${assetBase}/croatia-bridge-poster.png`,
    label: "Aerial view of a bridge over the Croatian coast",
  },
};

const work = [
  {
    number: "01",
    title: "Follow the trail",
    text: "Companies. People. Ownership. Money. Reputation. Influence. I start with what can be proved.",
  },
  {
    number: "02",
    title: "Enter the room",
    text: "Then I go closer. Culture changes the meaning of almost everything.",
  },
  {
    number: "03",
    title: "Make it useful",
    text: "A report. A briefing. A story. A film. Something that helps you decide.",
  },
];

const aliceWork = [
  {
    title: "Outside-in diligence",
    text: "What is owned, who controls it and where the risk really sits.",
  },
  {
    title: "People & networks",
    text: "Identity, authority, history, relationships and contradictions.",
  },
  {
    title: "On-the-ground verification",
    text: "The facts that only appear once somebody goes there.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <video
          className="heroFilm"
          autoPlay
          muted
          loop
          playsInline
          poster={films.hero.poster}
          aria-label={films.hero.label}
        >
          <source src={films.hero.src} type="video/mp4" />
        </video>
        <div className="heroShade" />
        <header className="siteHeader">
          <a className="wordmark" href="#top">Samuel Polley</a>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#alice">Alice</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <div className="heroCopy">
          <p className="eyebrow">Investigator · Journalist · Cultural intelligence</p>
          <h1>The story changes<br />when you get closer.</h1>
          <p className="heroIntro">
            I find out what is really going on: inside companies, between people
            and beneath the official version.
          </p>
        </div>
      </section>

      <section className="opening" id="work">
        <p className="sectionLabel">What I do</p>
        <h2>Some questions cannot be answered from a desk.</h2>
        <p>
          You have to go there. Listen properly. Notice who speaks, who does not,
          and what changes when the meeting ends.
        </p>
      </section>

      <section className="provocation">
        <p>I am a journalist.<br /><em>Most of my work is not made public.</em></p>
        <div className="privateAudience">
          <span>A CEO.</span>
          <span>An owner.</span>
          <span>A board.</span>
          <strong>The readership is small. The stakes are not.</strong>
        </div>
      </section>

      <section className="alice" id="alice">
        <div className="aliceHeading">
          <p className="sectionLabel">Alice · The quiet work</p>
          <h2>Private intelligence,<br /><em>applied.</em></h2>
        </div>
        <div className="aliceIntro">
          <p>
            With Alice, I investigate companies, individuals, family enterprises
            and unfamiliar markets, often before a decision that matters.
          </p>
          <p>
            I use open sources, fieldwork and relationship mapping. Then comes
            judgement. Most of the work remains private.
          </p>
        </div>
        <div className="aliceGrid">
          {aliceWork.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method">
        <div className="methodIntro">
          <p className="sectionLabel">The method</p>
          <h2>Evidence first.<br />Instinct close behind.</h2>
        </div>
        <div className="methodList">
          {work.map((item) => (
            <article className="methodItem" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bridge">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={films.bridge.poster}
          aria-label={films.bridge.label}
        >
          <source src={films.bridge.src} type="video/mp4" />
        </video>
        <div className="bridgeShade" />
        <p>From above, you see the pattern.<br /><em>On the ground, you learn what it means.</em></p>
      </section>

      <section className="about" id="about">
        <div className="aboutTitle">
          <p className="sectionLabel">Samuel Polley</p>
          <h2>Journalist by instinct.<br />Investigator by habit.<br />Communicator by trade.</h2>
        </div>
        <div className="aboutBody">
          <p>
            I have worked in politics, media, campaigns and family enterprise.
          </p>
          <p>
            I ask direct questions. I notice small things. I am comfortable not
            knowing, at least for a while.
          </p>
          <div className="identityLine">
            <span>British</span><span>Based in Zurich</span><span>Deeply connected to Ghana</span>
          </div>
        </div>
      </section>

      <section className="speaking">
        <p className="sectionLabel">Speaking & private briefings</p>
        <div className="speakingGrid">
          <h2>Put me in a room.</h2>
          <div>
            <p>
              Conferences, boardrooms and private gatherings. I do not deliver a
              lecture. I bring the room into the investigation.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel">A conversation</p>
        <h2>Bring me the question<br />nobody is answering.</h2>
        <p>Investigations. Private briefings. Speaking.</p>
        <div className="contactLinks">
          <a href="https://wa.me/233553685102" target="_blank" rel="noreferrer">Start a private conversation</a>
          <a href="https://www.linkedin.com/in/samuelpolley/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Samuel Polley</a>
        <span>Zurich · Accra · Elsewhere</span>
        <span>© 2026 Polley Consulting</span>
      </footer>
    </main>
  );
}
