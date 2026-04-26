<template>
  <div>
    <nav class="nav">
      <NuxtLink class="brand" to="/" aria-label="Thomas Ringling — Home">
        <img class="brand-logo" src="/img/logo-mark.png" alt="" />
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/now">Now</NuxtLink>
        <NuxtLink to="/cv">CV</NuxtLink>
        <NuxtLink class="active" to="/team">Team</NuxtLink>
      </div>
      <div class="lang">
        <span>EN</span><span class="dot"></span><span>DA</span><span class="dot"></span>
        <span class="jp-text">日本語</span>
      </div>
    </nav>

    <header class="header">
      <div class="kanji jp-text">一人</div>
      <div>
        <div class="eyebrow"><span class="bar"></span><span>Team&nbsp;·&nbsp;A team of one</span></div>
        <h1>One developer,<br />many hats.</h1>
        <p class="lede">The studio is a solo practice — a team of one. Twenty-plus years of software has grown a handful of distinct competences, and every project draws on a different mix of them. These are the hats I wear, and how often each one comes off the shelf.</p>
        <div class="meta-row">
          <div><span class="label">Principal</span><span class="value">Thomas Ringling</span></div>
          <div><span class="label">Competences</span><span class="value mono">6 · in rotation</span></div>
          <div><span class="label">Studio</span><span class="value mono">Nærum · 55.81°N</span></div>
        </div>
      </div>
    </header>

    <section class="principal">
      <div class="portrait" aria-label="Portrait placeholder">
        <span class="tag">PORTRAIT · 3:4</span>
      </div>
      <div class="body">
        <h2>Thomas Ringling</h2>
        <div class="role"><span class="bar"></span><span>Principal&nbsp;·&nbsp;Developer</span></div>
        <p>Independent developer working out of a small room in Nærum, north of Copenhagen. Long contracts, small teams, patient code. I tend to stay on projects for years rather than months — the interesting problems take time to surface, and the interesting solutions take longer still.</p>
        <p>Backgrounds in systems programming and type design. Speaks Danish, English, a quiet bit of Japanese. Available for a small number of engagements each year.</p>
        <div class="quote">
          <span class="jp-text">静かに、丁寧に。</span>
          <span class="en">Quietly, carefully — the only way I know how to work.</span>
        </div>
      </div>
    </section>

    <section class="network">
      <div class="network-head">
        <h2>The many hats</h2>
        <span class="hint">One person · six competences · 2002 — present</span>
      </div>

      <div class="grid">
        <article class="card">
          <div class="head">
            <div><h3>The Architect</h3><div class="jp jp-text">設計者&nbsp;·&nbsp;Systems</div></div>
            <span class="num">№ 01</span>
          </div>
          <div class="meta">Systems&nbsp;·&nbsp;Architecture</div>
          <p>Drawing the shape of a system before a single line is written. Distributed backends, data flow, the quiet infrastructure that has to still be standing in five years.</p>
          <span class="since"><span class="dot ochre"></span>worn since 2006</span>
        </article>

        <article class="card">
          <div class="head">
            <div><h3>The Craftsman</h3><div class="jp jp-text">職人&nbsp;·&nbsp;Code</div></div>
            <span class="num">№ 02</span>
          </div>
          <div class="meta">Engineering&nbsp;·&nbsp;Full-stack</div>
          <p>Hands on the keys. Go, TypeScript, Elixir, a bit of Rust. Small dependencies, patient refactors, tests that still mean something a year later.</p>
          <span class="since"><span class="dot ochre"></span>worn since 2002</span>
        </article>

        <article class="card">
          <div class="head">
            <div><h3>The Designer</h3><div class="jp jp-text">デザイナー&nbsp;·&nbsp;Interfaces</div></div>
            <span class="num">№ 03</span>
          </div>
          <div class="meta">Product&nbsp;·&nbsp;Interfaces</div>
          <p>Shaping product surfaces when a project needs one — type, layout, motion, the small decisions that decide whether software feels quiet or loud.</p>
          <span class="since"><span class="dot"></span>worn since 2012</span>
        </article>

        <article class="card">
          <div class="head">
            <div><h3>The Coach</h3><div class="jp jp-text">先生&nbsp;·&nbsp;Agile</div></div>
            <span class="num">№ 04</span>
          </div>
          <div class="meta">Agile&nbsp;·&nbsp;Teaching</div>
          <p>Twenty years of implementing and teaching agile methods. The part of the job that's about people: facilitation, retros, unlearning the rituals that stopped serving a team.</p>
          <span class="since"><span class="dot ochre"></span>worn since 2008</span>
        </article>

        <article class="card">
          <div class="head">
            <div><h3>The Tester</h3><div class="jp jp-text">試験者&nbsp;·&nbsp;Quality</div></div>
            <span class="num">№ 05</span>
          </div>
          <div class="meta">Testing&nbsp;·&nbsp;Quality</div>
          <p>Probing software before it probes the user. Unit, integration, end-to-end — and the patient kind of manual testing that only boredom and curiosity unlock.</p>
          <span class="since"><span class="dot"></span>worn since 2010</span>
        </article>

        <article class="card">
          <div class="head">
            <div><h3>The Student</h3><div class="jp jp-text">学生&nbsp;·&nbsp;Always</div></div>
            <span class="num">№ 06</span>
          </div>
          <div class="meta">Learning&nbsp;·&nbsp;Lifetime</div>
          <p>The hat that's on more often than any other. A polyglot by habit — languages, paradigms, a little Japanese. The day I stop learning is the day the work stops being good.</p>
          <span class="since"><span class="dot ochre"></span>worn since forever</span>
        </article>
      </div>
    </section>

    <section class="ways">
      <div>
        <div class="kanji-s jp-text">仕事の流儀</div>
        <h2>Ways of working</h2>
        <span class="sub">Four principles · kept simple</span>
      </div>
      <div class="principles">
        <div class="principle">
          <span class="n">01</span>
          <h4>Long contracts</h4>
          <p>Projects under six months rarely produce the work I want to put my name on. I prefer to stay.</p>
        </div>
        <div class="principle">
          <span class="n">02</span>
          <h4>Small teams</h4>
          <p>Two to four people, assembled for the project at hand. No standing studio, no overhead, no sales pipeline.</p>
        </div>
        <div class="principle">
          <span class="n">03</span>
          <h4>Patient code</h4>
          <p>I write software that I'd be willing to maintain a decade from now. That constraint shapes everything upstream of it.</p>
        </div>
        <div class="principle">
          <span class="n">04</span>
          <h4>One letter, a season</h4>
          <p>No weekly standups with the world. A season's end brings a quiet letter to clients and friends.</p>
        </div>
      </div>
    </section>

    <section class="brief">
      <div>
        <div class="label">A brief — by post or mail</div>
        <h2>Working together<br />begins with a letter.</h2>
      </div>
      <div>
        <div class="form">
          <div class="row"><span class="k">Name</span><span class="v">—</span></div>
          <div class="row"><span class="k">Company / Project</span><span class="v">—</span></div>
          <div class="row full"><span class="k">In a sentence, what are you building?</span><span class="v">—</span></div>
          <div class="row"><span class="k">Timeline</span><span class="v">Six months or longer</span></div>
          <div class="row"><span class="k">Budget (DKK)</span><span class="v mono">—</span></div>
          <div class="row full"><span class="k">Best address</span><span class="v mono">hello@ringling.info</span></div>
        </div>
        <a class="cta" href="mailto:hello@ringling.info?subject=A%20brief">Send a brief&nbsp;&nbsp;→</a>
      </div>
    </section>

    <footer class="foot">
      <span>© Thomas Ringling&nbsp;·&nbsp;MMXXVI</span>
      <span class="mid jp-text">静かに、丁寧に。</span>
      <span>Nærum Hovedgade, 2850 Nærum</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Team — Thomas Ringling',
  meta: [{ name: 'description', content: 'A team of one — Thomas Ringling, independent developer, many hats.' }],
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/team' }]
})
</script>

<style scoped>
.nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 28px 8%; color: var(--ink-2); border-bottom: 1px solid var(--line);
}
.nav .brand { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-logo { width: 56px; height: 56px; border-radius: 50%; display: block; flex: 0 0 56px; filter: drop-shadow(0 1px 2px rgba(40,30,20,.08)) drop-shadow(0 8px 22px rgba(40,30,20,.06)); }
.nav-links { display: flex; gap: 38px; font-size: 11.5px; letter-spacing: .28em; text-transform: uppercase; color: var(--ink-2); }
.nav-links a { color: inherit; text-decoration: none; position: relative; opacity: .75; transition: opacity .2s; }
.nav-links a:hover { opacity: 1; }
.nav-links a.active { opacity: 1; }
.nav-links a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -7px; height: 1px; background: var(--ochre); }
.lang { font-family: 'Noto Serif JP', serif; font-size: 12.5px; color: var(--blue); letter-spacing: .1em; display: flex; gap: 10px; align-items: center; }
.lang .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--teal); display: inline-block; }
.jp-text { font-family: 'Noto Serif JP', serif; }

.header {
  padding: 72px 8% 56px 8%;
  display: grid; grid-template-columns: 1.2fr 2fr; gap: 48px; align-items: end;
  border-bottom: 1px solid var(--line);
}
.header .kanji { font-size: 72px; line-height: 1; color: var(--ink); }
.eyebrow { font-family: 'Work Sans', sans-serif; font-size: 11px; letter-spacing: .42em; text-transform: uppercase; color: var(--blue); margin-bottom: 14px; display: flex; align-items: center; gap: 14px; }
.eyebrow .bar { flex: 0 0 44px; height: 1px; background: var(--blue); opacity: .7; }
h1 {
  font-family: 'Cormorant Garamond', serif; font-weight: 400;
  font-size: clamp(48px, 6vw, 88px); line-height: 1.02; letter-spacing: -.01em;
  color: var(--ink-2); margin: 0;
  background: linear-gradient(100deg, var(--ink-2) 0%, var(--ink-2) 55%, var(--blue) 82%, rgba(95,110,122,.45) 96%, rgba(95,110,122,.1) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.lede { font-family: 'Cormorant Garamond', serif; font-size: 21px; line-height: 1.5; color: var(--ink-2); max-width: 58ch; margin-top: 20px; }
.meta-row { display: flex; gap: 40px; margin-top: 24px; font-family: 'Work Sans', sans-serif; flex-wrap: wrap; }
.meta-row .label { font-size: 10px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); display: block; margin-bottom: 4px; }
.meta-row .value { font-family: 'Cormorant Garamond', serif; font-size: 15px; color: var(--ink-2); }
.meta-row .mono { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: .04em; }

.principal {
  padding: 56px 8% 24px 8%;
  display: grid; grid-template-columns: 260px 1fr; gap: 56px; align-items: flex-start;
}
.portrait {
  width: 100%; aspect-ratio: 3/4;
  background:
    linear-gradient(180deg, rgba(206,197,179,.0) 0%, rgba(206,197,179,.35) 100%),
    repeating-linear-gradient(135deg, var(--paper-2) 0 6px, var(--mist) 6px 7px);
  border: 1px solid var(--line);
  position: relative;
  display: flex; align-items: flex-end; justify-content: center;
  padding: 12px;
}
.portrait::before {
  content: "";
  position: absolute; left: 50%; top: 30%; transform: translateX(-50%);
  width: 56%; aspect-ratio: 1; border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, rgba(40,38,34,.18), rgba(40,38,34,.06) 55%, transparent 70%);
}
.tag { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: .14em; color: var(--blue); background: rgba(239,231,218,.88); padding: 4px 8px; border: 1px solid var(--line); }

.body h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 42px; line-height: 1.1; margin: 0 0 6px 0; color: var(--ink-2); }
.body .role { font-family: 'Work Sans', sans-serif; font-size: 11px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); margin-bottom: 22px; display: flex; align-items: center; gap: 12px; }
.body .role .bar { width: 32px; height: 1px; background: var(--blue); opacity: .7; }
.body p { font-family: 'Cormorant Garamond', serif; font-size: 19px; line-height: 1.55; color: var(--ink-2); margin: 0 0 14px 0; max-width: 60ch; }
.quote { font-weight: 300; font-size: 20px; color: var(--ink-2); border-left: 1px solid var(--ochre); padding-left: 16px; margin: 24px 0 0 0; max-width: 48ch; line-height: 1.6; }
.quote .en { display: block; margin-top: 6px; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 15px; color: var(--blue); }

.network { padding: 56px 8% 40px 8%; border-top: 1px solid var(--line); }
.network-head { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 24px; margin-bottom: 28px; border-bottom: 1px solid var(--line); gap: 24px; flex-wrap: wrap; }
.network-head h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 32px; color: var(--ink-2); margin: 0; }
.hint { font-family: 'Work Sans', sans-serif; font-size: 10px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px 48px; }
.card { padding-top: 4px; }
.card .head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--line); margin-bottom: 14px; }
.card .num { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--blue); letter-spacing: .1em; }
.card h3 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 24px; line-height: 1.15; color: var(--ink-2); margin: 0 0 4px 0; }
.card .jp { font-size: 13px; color: var(--blue); letter-spacing: .04em; }
.card .meta { font-family: 'Work Sans', sans-serif; font-size: 10.5px; letter-spacing: .3em; text-transform: uppercase; color: var(--blue); margin: 10px 0 8px 0; }
.card p { font-family: 'Cormorant Garamond', serif; font-size: 16.5px; line-height: 1.5; color: var(--ink-2); margin: 0 0 12px 0; max-width: 34ch; }
.card .since { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--blue); letter-spacing: .04em; }
.card .dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--teal); margin-right: 6px; vertical-align: middle; opacity: .7; }
.card .dot.ochre { background: var(--ochre); }

.ways { padding: 56px 8% 40px 8%; border-top: 1px solid var(--line); display: grid; grid-template-columns: 1.1fr 2fr; gap: 56px; }
.ways h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 32px; color: var(--ink-2); margin: 0 0 10px 0; }
.kanji-s { font-size: 44px; color: var(--ink); margin-bottom: 8px; }
.sub { font-family: 'Work Sans', sans-serif; font-size: 11px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); }
.principles { display: grid; grid-template-columns: 1fr 1fr; gap: 28px 40px; }
.principle { border-top: 1px solid var(--line); padding-top: 14px; }
.principle .n { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ochre-2); letter-spacing: .14em; margin-bottom: 6px; display: block; }
.principle h4 { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 20px; color: var(--ink-2); margin: 0 0 6px 0; line-height: 1.2; }
.principle p { font-family: 'Cormorant Garamond', serif; font-size: 16px; line-height: 1.5; color: var(--ink-2); margin: 0; max-width: 38ch; }

.brief { padding: 56px 8% 72px 8%; border-top: 1px solid var(--line); background: var(--paper-2); display: grid; grid-template-columns: 1.2fr 2fr; gap: 48px; align-items: flex-start; }
.brief .label { font-family: 'Work Sans', sans-serif; font-size: 10px; letter-spacing: .42em; text-transform: uppercase; color: var(--blue); margin-bottom: 12px; }
.brief h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 38px; line-height: 1.1; color: var(--ink-2); margin: 0; }
.form { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 24px; }
.form .row { display: flex; flex-direction: column; gap: 6px; }
.form .row.full { grid-column: 1/-1; }
.k { font-family: 'Work Sans', sans-serif; font-size: 10px; letter-spacing: .34em; text-transform: uppercase; color: var(--blue); }
.v { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: var(--ink-2); border-bottom: 1px solid var(--line); padding: 4px 0 8px 0; line-height: 1.4; }
.v.mono { font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: .04em; }
.cta { margin-top: 8px; display: inline-flex; align-items: center; gap: 12px; font-family: 'Work Sans', sans-serif; font-size: 11px; letter-spacing: .36em; text-transform: uppercase; color: var(--ochre-2); text-decoration: none; border-bottom: 1px solid var(--ochre); padding-bottom: 6px; width: max-content; }

.foot { display: flex; justify-content: space-between; align-items: center; padding: 20px 8% 32px 8%; font-size: 10.5px; letter-spacing: .28em; text-transform: uppercase; color: var(--blue); background: var(--paper); border-top: 1px solid var(--line); }
.foot .mid { text-transform: none; letter-spacing: .12em; color: var(--ink-2); opacity: .7; }

@media (max-width: 960px) {
  .nav { padding: 20px 24px; flex-wrap: wrap; gap: 14px; }
  .nav-links { order: 3; width: 100%; justify-content: flex-start; gap: 18px; }
  .header { grid-template-columns: 1fr; padding: 40px 24px 32px 24px; }
  .header .kanji { font-size: 48px; }
  .principal { grid-template-columns: 1fr; padding: 32px 24px 16px; gap: 24px; }
  .portrait { max-width: 220px; }
  .network { padding: 32px 24px 24px; }
  .grid { grid-template-columns: 1fr; gap: 28px; }
  .ways { grid-template-columns: 1fr; padding: 32px 24px 24px; gap: 20px; }
  .principles { grid-template-columns: 1fr; gap: 20px; }
  .brief { grid-template-columns: 1fr; padding: 32px 24px 40px; gap: 20px; }
  .form { grid-template-columns: 1fr; }
  .foot { padding: 16px 24px 24px; flex-direction: column; gap: 8px; align-items: flex-start; }
}
</style>
