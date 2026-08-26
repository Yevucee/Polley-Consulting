export const metadata = {
  title: "The story changes when you get closer",
  description:
    "Investigator, journalist and cultural intelligence adviser. Fieldwork, private intelligence and stories that change the room.",
};

const films = {
  hero: {
    src: "/namibia-field.m4v",
    poster: "/namibia-poster.png",
    label: "Aerial view across the Namibian landscape",
  },
  bridge: {
    src: "/croatia-bridge.m4v",
    poster: "/croatia-bridge-poster.png",
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
            I find out what is really going on — inside companies, between people
            and beneath the official version.
          </p>
        </div>
        <div className="locationStamp">
          <span>Walvis Bay region</span>
          <span>Namibia · Field observation</span>
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
            and unfamiliar markets — often before a consequential decision.
          </p>
          <p>
            Open sources meet fieldwork. Relationship maps meet judgement. The
            work is private because the decisions are.
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
        <p className="discretion">Discretion is not a footnote. It is part of the method.</p>
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

      <section className="fieldStory">
        <div className="fieldNote" aria-label="Field note from Namibia">
          <div className="fieldNoteTopline">
            <span>Field note 01</span>
            <span>Namibia</span>
          </div>
          <blockquote>
            The official picture was tidy. The place was not.
          </blockquote>
          <div className="fieldNoteFooter">
            <span>Walvis Bay</span>
            <span>Swakopmund</span>
            <span>Observed on the ground</span>
          </div>
        </div>
        <div className="fieldCopy">
          <p className="sectionLabel">Ground truth</p>
          <h2>From above, a landscape looks empty.</h2>
          <p className="fieldLead">On the ground, it is full of systems.</p>
          <p>
            I spent time between Walvis Bay and Swakopmund, listening, observing
            and testing the official picture against everyday reality.
          </p>
          <p>
            That work became useful because it was there. Not because it was loud.
          </p>
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
        <span>Croatia · Observed from the air</span>
      </section>

      <section className="africa" id="about">
        <p className="sectionLabel">Africa</p>
        <div>
          <h2>I first arrived in Ghana in 2003.</h2>
          <p className="largeCopy">
            I have lived there, studied there, worked there — and been wrong there.
            That last part matters.
          </p>
          <p>
            Africa is not one market, one culture or one convenient sentence. My
            work starts by refusing to pretend it is.
          </p>
        </div>
      </section>

      <section className="aboutSamuel">
        <div className="aboutTitle">
          <p className="sectionLabel">Samuel Polley</p>
          <h2>Journalist by instinct.<br />Investigator by habit.<br />Communicator by trade.</h2>
        </div>
        <div className="aboutBody">
          <p>
            I have worked in politics, media, campaigns, digital infrastructure
            and family enterprise. I have hosted rooms, made films, built tools
            and entered places I did not yet understand.
          </p>
          <p>
            I ask direct questions. I notice small things. I am comfortable not
            knowing — for a while.
          </p>
          <div className="identityLine">
            <span>British</span><span>Based in Zurich</span><span>Deeply connected to Ghana</span>
          </div>
        </div>
      </section>

      <section className="maker">
        <p className="sectionLabel">Tools I build</p>
        <h2>If the tool I need does not exist, I make it.</h2>
        <div className="makerCopy">
          <p>
            I build AI-assisted research tools to find connections, test claims,
            map relationships and make sense of large amounts of information.
          </p>
          <ul className="toolList" aria-label="Examples of tools Samuel builds">
            <li>Research systems</li>
            <li>Relationship maps</li>
            <li>Evidence workflows</li>
            <li>Interactive reports</li>
          </ul>
          <p className="makerAside">
            I design and prototype them myself. The useful ones become part of the method.
          </p>
        </div>
      </section>

      <section className="speaking">
        <p className="sectionLabel">Speaking & private briefings</p>
        <div className="speakingGrid">
          <h2>Put me in a room.</h2>
          <div>
            <p>
              I speak about the things people sense but have not yet named: what
              the official story leaves out, how culture changes decisions, what
              AI is doing to investigation, and why ground truth still matters.
            </p>
            <p>
              I do not deliver a lecture. I bring the room into the investigation.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel">A conversation</p>
        <h2>Bring me the question<br />nobody is answering.</h2>
        <p>Investigations. Field assignments. Private briefings. Speaking. Unusual commissions.</p>
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
