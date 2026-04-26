<template>
  <div>
    <nav class="nav">
      <NuxtLink class="brand" to="/" aria-label="Thomas Ringling — Home" style="display:flex;align-items:center;text-decoration:none">
        <img class="brand-logo" src="/img/logo-mark.png" alt="" />
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/now">Now</NuxtLink>
        <NuxtLink class="active" to="/cv">CV</NuxtLink>
        <NuxtLink to="/team">Team</NuxtLink>
      </div>
      <div class="lang">
        <span>EN</span><span class="dot"></span><span>DA</span><span class="dot"></span>
        <span class="jp-text">日本語</span>
      </div>
    </nav>

    <header class="header">
      <div class="kanji">履歴</div>
      <div>
        <div class="eyebrow"><span class="bar"></span><span>Curriculum Vitæ&nbsp;·&nbsp;Thomas Ringling</span></div>
        <h1>Twenty years of<br />patient software.</h1>
        <p class="lede">Lifetime learner and polyglot software craftsman — developer, coach, architect, teacher. North of Copenhagen, with family, guitar, and a quiet commitment to Japanese joinery.</p>
        <div class="contact">
          <span><a href="mailto:cv@ringling.info">cv@ringling.info</a></span>
          <span>@thomasringling</span>
          <span><a href="https://www.linkedin.com/in/thomas-ringling-88698b/" target="_blank" rel="noopener">LinkedIn</a></span>
        </div>
      </div>
    </header>

    <section class="block profile">
      <h2><span class="jp">自己紹介</span><span>Profile</span><span class="bar"></span></h2>
      <div class="twocol">
        <p>As a lifetime learner and polyglot software craftsman, I have a great love for physical training, music, and nature. I am currently living north of Copenhagen with my wife and daughter.</p>
        <p>Over twenty years of experience in software development — implementing and teaching agile methodologies and principles. A wide range across technologies, paradigms and languages; roles from developer and coach to architect, project manager, scrum master, product owner and team lead, both inside and outside IT.</p>
        <p>Still actively developing software and keeping up with new technologies. I thrive in environments that value competence, innovation and creativity. Technical expertise matters, but so does the ability to communicate clearly and work collaboratively.</p>
        <p>Physical training, music and nature have taught me the importance of balance. A healthy body and mind support the work — and the learning never really stops.</p>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">技能</span><span>Self-assessment</span><span class="bar"></span></h2>
      <div class="chips">
        <span class="chip hi">Agile principles <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">Programming <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">Web technologies <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip">Architecture <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">DevOps <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">UI design <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">Machine Learning <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span></span></span>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">学歴・言語</span><span>Education &amp; Languages</span><span class="bar"></span></h2>
      <div class="row"><span class="yr">2002 — 2005</span><div><p class="title">Diploma in Information Technology</p><p class="where">IT-University, Copenhagen</p></div><div></div></div>
      <div class="row"><span class="yr">1998 — 2000</span><div><p class="title">Datamatician</p><p class="where">Lyngby Uddannelsescenter</p></div><div></div></div>
      <div class="row"><span class="yr">1988 — 1991</span><div><p class="title">Gymnasium / High school</p><p class="where">Deutsches Gymnasium für Nordschleswig</p></div><div></div></div>
      <div style="margin-top:36px" class="chips">
        <span class="chip">Danish <span class="lvl">NATIVE</span></span>
        <span class="chip">German <span class="lvl">NATIVE</span></span>
        <span class="chip">English <span class="lvl">PROFESSIONAL</span></span>
        <span class="chip hi jp-text">日本語 <span class="lvl">A2+ / ELEMENTARY</span></span>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">職歴</span><span>Experience</span><span class="bar"></span></h2>
      <div class="row"><span class="yr">Feb 2026 —</span><p class="title">PFA</p><p class="role-txt">—</p></div>
      <div class="row"><span class="yr">2025 — 2026</span><p class="title">Nes Tech A/S</p><p class="role-txt">Software consultant</p></div>
      <div class="row"><span class="yr">2023 — 2024</span><p class="title">PFA</p><p class="role-txt">Business consultant</p></div>
      <div class="row"><span class="yr">2021 — 2023</span><p class="title">PFA</p><p class="role-txt">Business consultant</p></div>
      <div class="row"><span class="yr">2020 — 2021</span><p class="title">PFA</p><p class="role-txt">Agile coach</p></div>
      <div class="row"><span class="yr">2019 — 2020</span><p class="title">PFA</p><p class="role-txt">Automation tester</p></div>
      <div class="row"><span class="yr">Aug — Oct 2019</span><p class="title">Dropboy</p><p class="role-txt">Tech lead</p></div>
      <div class="row"><span class="yr">2019 — 2022</span><p class="title">xwave</p><p class="role-txt">Partner</p></div>
      <div class="row"><span class="yr">2018 — 2019</span><p class="title">Danske Spil A/S</p><p class="role-txt">Agile coach</p></div>
      <div class="row"><span class="yr">2016 — 2022</span><p class="title">PrivacyTree</p><p class="role-txt">Partner</p></div>
      <div class="row"><span class="yr">2017</span><p class="title">MP Pension</p><p class="role-txt">Scrum master · product owner</p></div>
      <div class="row"><span class="yr">May — Nov 2016</span><p class="title">Nykredit</p><p class="role-txt">Developer</p></div>
      <div class="row"><span class="yr">Jan — Apr 2016</span><p class="title">Widex A/S</p><p class="role-txt">Delivery manager</p></div>
      <div class="row"><span class="yr">May — Dec 2015</span><p class="title">Macellum</p><p class="role-txt">Partner</p></div>
      <div class="row"><span class="yr">2012 — 2015</span><p class="title">Lokalebasen.dk A/S</p><p class="role-txt">Product owner · scrum master</p></div>
      <div class="row"><span class="yr">Jan — Sep 2012</span><p class="title">Nykredit</p><p class="role-txt">Developer</p></div>
      <div class="row"><span class="yr">2011 — 2012</span><p class="title">Danish Defence · Forsvaret</p><p class="role-txt">Force Protection</p></div>
      <div class="row"><span class="yr">2009 — 2011</span><p class="title">Forca</p><p class="role-txt">Developer · BA</p></div>
      <div class="row"><span class="yr">2008 — 2009</span><p class="title">Forsvaret</p><p class="role-txt">Instructor</p></div>
      <div class="row"><span class="yr">2007 — 2008</span><p class="title">Nykredit</p><p class="role-txt">Developer</p></div>
      <div class="row"><span class="yr">2005 — 2006</span><p class="title">Omada</p><p class="role-txt">Developer</p></div>
      <div class="row"><span class="yr">2003 — 2005</span><p class="title">XponCard</p><p class="role-txt">Developer · architect</p></div>
      <div class="row"><span class="yr">2001 — 2003</span><p class="title">Nokia</p><p class="role-txt">Requalification manager</p></div>
      <div class="row"><span class="yr">2001</span><p class="title">Ericsson</p><p class="role-txt">Developer · architect</p></div>
    </section>

    <section class="block">
      <h2><span class="jp">技術</span><span>Technologies</span><span class="bar"></span></h2>
      <div class="chips">
        <span class="chip hi">Elixir <span class="yrs">'14–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">Phoenix <span class="yrs">'15–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">Vue.js <span class="yrs">'15–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">PostgreSQL <span class="yrs">'12–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">Ruby <span class="yrs">'12–'20</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">RoR <span class="yrs">'12–'19</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">RabbitMQ <span class="yrs">'12–'20</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip hi">Java <span class="yrs">'98–'17</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span></span></span>
        <span class="chip">Python <span class="yrs">'19–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">Docker <span class="yrs">'13–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">MSSQL <span class="yrs">'07–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">.NET <span class="yrs">'07–'20</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">Javascript <span class="yrs">'01–'24</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">Angular <span class="yrs">'14–'17</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span></span></span>
        <span class="chip">Typescript <span class="yrs">'17–'23</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">React <span class="yrs">'19</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">NodeJS <span class="yrs">'14–'20</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">ElasticSearch <span class="yrs">'13–'16</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">Elm <span class="yrs">'17–'20</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">Julia <span class="yrs">'20–'22</span> <span class="dots"><span class="d on"></span><span class="d on"></span><span class="d"></span><span class="d"></span><span class="d"></span></span></span>
        <span class="chip">Linux / OS X / Windows <span class="yrs">long-running</span></span>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">研修</span><span>Courses</span><span class="bar"></span></h2>
      <div class="cards">
        <div class="card"><div class="k">2025</div><p class="t">ISTQB Foundation</p><div class="i">Testhuset</div></div>
        <div class="card"><div class="k">2025 — 2026</div><p class="t">Japanese A2+ (Marugoto)</p><div class="i">FOF</div></div>
        <div class="card"><div class="k">2023 — 2025</div><p class="t">Japanese A2 (Marugoto)</p><div class="i">FOF</div></div>
        <div class="card"><div class="k">2022 — 2023</div><p class="t">Japanese A1 &amp; A1+ (Marugoto)</p><div class="i">FOF</div></div>
        <div class="card"><div class="k">2021 — 2022</div><p class="t">Japanese beginner (Marugoto)</p><div class="i">FOF</div></div>
        <div class="card"><div class="k">2016, 2019</div><p class="t">Product Owner 360</p><div class="i">goAgile</div></div>
        <div class="card"><div class="k">2018</div><p class="t">Lead for Greatness</p><div class="i">goAgile</div></div>
        <div class="card"><div class="k">2016</div><p class="t">Angular 2.0</p><div class="i">Trifork</div></div>
        <div class="card"><div class="k">2016</div><p class="t">Stillwater Leadership</p><div class="i">Stillwater</div></div>
        <div class="card"><div class="k">2016</div><p class="t">Graphical Facilitation</p><div class="i">Future Factory</div></div>
        <div class="card"><div class="k">2012</div><p class="t">Agile Project Leadership</p><div class="i">goAgile</div></div>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">認定</span><span>Certifications</span><span class="bar"></span></h2>
      <div class="cards">
        <div class="card"><div class="k">2025</div><p class="t">ISTQB Certified Tester · Foundation Level</p><div class="i">DSTB</div><a class="link" href="https://www.ringling.info/istqb.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2024</div><p class="t">Systems Thinking: Essential Concepts</p><div class="i">Udemy</div><a class="link" href="https://www.ringling.info/UdemySystemsThinking.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2024</div><p class="t">Beginning Llamafile for Local LLMs</p><div class="i">Coursera · Duke University</div><a class="link" href="https://www.ringling.info/CourseraLlamafile.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2024</div><p class="t">Agile Leadership · Introducing Change</p><div class="i">Coursera · CU Boulder</div><a class="link" href="https://www.ringling.info/CourseraAgileLeadership_IntroducingChange.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2024</div><p class="t">Developing a Systems Mindset</p><div class="i">Coursera · CU Boulder</div><a class="link" href="https://www.ringling.info/CourseraDevelopingASystemsMindset.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2023</div><p class="t">Machine Learning Specialization · 3 courses</p><div class="i">Coursera · DeepLearning.AI</div><a class="link" href="https://www.ringling.info/CourseraML.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2023</div><p class="t">Generative AI for Everyone</p><div class="i">Coursera · DeepLearning.AI</div><a class="link" href="https://www.ringling.info/CourseraGenAI.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2023</div><p class="t">Mathematics for ML &amp; Data Science · 3 courses</p><div class="i">Coursera · DeepLearning.AI</div><a class="link" href="https://www.ringling.info/CourseraMLMathematics.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2023</div><p class="t">FC1x · Fat Chance: Probability from the Ground Up</p><div class="i">edX · HarvardX</div><a class="link" href="https://courses.edx.org/certificates/6bde02f1d18b4479b7cf435bdbb24d3a" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2021</div><p class="t">Introduction to Quantum Computing for Everyone</p><div class="i">edX · ChicagoX</div><a class="link" href="https://courses.edx.org/certificates/5ffdb3abc3e544a7bd4d4bcd22f58959" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2021</div><p class="t">The Quantum Internet &amp; Quantum Computers</p><div class="i">edX · DelftX</div><a class="link" href="https://courses.edx.org/certificates/28cbc507ba9d4dc5a3fddc7600e710de" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2021</div><p class="t">Certified LeSS Practitioner</p><div class="i">—</div></div>
        <div class="card"><div class="k">2016</div><p class="t">Certified SAFe Agilist</p><div class="i">—</div></div>
        <div class="card"><div class="k">2013</div><p class="t">Maps and the Geospatial Revolution</p><div class="i">Coursera</div><a class="link" href="https://www.ringling.info/maps_course.pdf" target="_blank">Certificate →</a></div>
        <div class="card"><div class="k">2013</div><p class="t">Professional Scrum Master · PSM I</p><div class="i">scrum.org</div></div>
        <div class="card"><div class="k">2012</div><p class="t">Agile Foundation · Leadership Focus</p><div class="i">DSDM</div></div>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">会議</span><span>Conferences</span><span class="bar"></span></h2>
      <div class="cards">
        <div class="card"><div class="k">2026</div><p class="t">SAOS</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2025</div><p class="t">Goatmire</p><div class="i">Varberg, Sweden</div></div>
        <div class="card"><div class="k">2025</div><p class="t">SAOS</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2024</div><p class="t">Agile Coach Camp</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2024</div><p class="t">SAOS</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2023</div><p class="t">Elixir Conf Europe</p><div class="i">Lisbon</div></div>
        <div class="card"><div class="k">2022</div><p class="t">Agile Coach Camp</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2019</div><p class="t">Agile Coach Camp · co-organizer</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2019</div><p class="t">SAOS</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2017</div><p class="t">Agile Coach Camp · co-organizer</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2017</div><p class="t">Elixir Conf Europe</p><div class="i">Barcelona</div></div>
        <div class="card"><div class="k">2016</div><p class="t">Elixir Conf Europe</p><div class="i">Berlin</div></div>
        <div class="card"><div class="k">2016</div><p class="t">SAOS</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2016</div><p class="t">Agile Coach Camp · co-organizer</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2015</div><p class="t">Agile Coach Camp</p><div class="i">Denmark</div></div>
        <div class="card"><div class="k">2015</div><p class="t">XP Days</p><div class="i">Benelux</div></div>
      </div>
    </section>

    <section class="block">
      <h2><span class="jp">趣味</span><span>Hobbies</span><span class="bar"></span></h2>
      <div class="hobbies">
        <div class="hobby"><span class="k jp-text">鍛錬</span><p class="t">Physical training</p><p>A lifetime of training, including thirty years of martial arts. Now primarily weight training.</p></div>
        <div class="hobby"><span class="k jp-text">音楽</span><p class="t">Guitar</p><p>Primarily classical guitar, with a little western on the side.</p></div>
        <div class="hobby"><span class="k jp-text">日本</span><p class="t">Japanese</p><p>Language, culture, and sashimono — the craft of wood joinery.</p></div>
        <div class="hobby"><span class="k jp-text">家族</span><p class="t">Family</p><p>Much of my time is spent with my wife and daughter.</p></div>
      </div>
    </section>

    <footer class="foot">
      <span>© Thomas Ringling&nbsp;·&nbsp;MMXXVI</span>
      <span class="mid">静かに、丁寧に。</span>
      <span>Nærum Hovedgade, 2850 Nærum</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'CV — Thomas Ringling',
  meta: [{ name: 'description', content: 'Curriculum Vitæ — Thomas Ringling, polyglot software craftsman.' }],
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/cv' }]
})
</script>

<style scoped>
.nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 28px 8%; color: var(--ink-2); border-bottom: 1px solid var(--line);
}
.brand-logo { width: 56px; height: 56px; border-radius: 50%; display: block; filter: drop-shadow(0 1px 2px rgba(40,30,20,.08)) drop-shadow(0 8px 22px rgba(40,30,20,.06)); }
.nav-links { display: flex; gap: 38px; font-size: 11.5px; letter-spacing: .28em; text-transform: uppercase; color: var(--ink-2); }
.nav-links a { color: inherit; text-decoration: none; position: relative; opacity: .75; transition: opacity .2s; }
.nav-links a:hover { opacity: 1; }
.nav-links a.active { opacity: 1; }
.nav-links a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -7px; height: 1px; background: var(--ochre); }
.lang { font-family: 'Noto Serif JP', serif; font-size: 12.5px; color: var(--blue); letter-spacing: .1em; display: flex; gap: 10px; align-items: center; }
.lang .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--teal); display: inline-block; }
.jp-text { font-family: 'Noto Serif JP', serif; }

.header {
  padding: 72px 8% 48px 8%;
  display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: end;
  border-bottom: 1px solid var(--line);
}
.header .kanji { font-family: 'Noto Serif JP', serif; font-size: 88px; line-height: 1; color: var(--ink); }
.eyebrow { font-family: 'Work Sans', sans-serif; font-size: 11px; letter-spacing: .42em; text-transform: uppercase; color: var(--blue); margin-bottom: 14px; display: flex; align-items: center; gap: 14px; }
.eyebrow .bar { flex: 0 0 44px; height: 1px; background: var(--blue); opacity: .7; }
h1 {
  font-family: 'Cormorant Garamond', serif; font-weight: 400;
  font-size: clamp(48px, 6vw, 88px); line-height: 1.02; letter-spacing: -.01em;
  color: var(--ink-2); margin: 0;
  background: linear-gradient(100deg, var(--ink-2) 0%, var(--ink-2) 55%, var(--blue) 82%, rgba(95,110,122,.45) 96%, rgba(95,110,122,.1) 100%);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.lede { font-family: 'Cormorant Garamond', serif; font-size: 20px; line-height: 1.55; color: var(--ink-2); max-width: 58ch; margin-top: 20px; }
.contact { display: flex; gap: 28px; margin-top: 22px; font-family: 'Work Sans', sans-serif; font-size: 12px; letter-spacing: .1em; color: var(--blue); }
.contact a { color: var(--ochre-2); text-decoration: none; border-bottom: 1px solid rgba(182,138,78,.35); }

.block { padding: 56px 8%; border-bottom: 1px solid var(--line); }
.block h2 {
  font-family: 'Work Sans', sans-serif; font-weight: 500;
  font-size: 10px; letter-spacing: .42em; text-transform: uppercase; color: var(--blue);
  margin: 0 0 28px 0; display: flex; align-items: center; gap: 14px;
}
.block h2 .jp { font-family: 'Noto Serif JP', serif; font-size: 16px; letter-spacing: .02em; color: var(--ink-2); opacity: .7; text-transform: none; }
.block h2 .bar { flex: 1; height: 1px; background: var(--line); }

.row {
  display: grid; grid-template-columns: 180px 1fr 1fr;
  gap: 40px; padding: 22px 0; border-bottom: 1px solid var(--line);
  align-items: flex-start;
}
.row:last-child { border-bottom: 0; }
.yr { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .16em; color: var(--blue); padding-top: 4px; }
.title { font-family: 'Cormorant Garamond', serif; font-size: 22px; line-height: 1.25; color: var(--ink-2); margin: 0; }
.where { font-family: 'Work Sans', sans-serif; font-size: 12px; color: var(--blue); letter-spacing: .05em; margin-top: 4px; opacity: .9; }
.role-txt { font-family: 'Work Sans', sans-serif; font-size: 12.5px; color: var(--ink-2); letter-spacing: .02em; }

.chips { display: flex; flex-wrap: wrap; gap: 10px 12px; }
.chip {
  display: inline-flex; align-items: baseline; gap: 10px;
  padding: 8px 14px; border: 1px solid var(--line);
  font-family: 'Cormorant Garamond', serif; font-size: 16px; color: var(--ink-2);
  background: var(--paper);
}
.chip .lvl { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--blue); letter-spacing: .1em; }
.chip .yrs { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ochre-2); letter-spacing: .08em; opacity: .9; }
.chip.hi { border-color: rgba(182,138,78,.5); background: rgba(182,138,78,.06); }
.dots { display: inline-flex; gap: 3px; }
.dots .d { width: 6px; height: 6px; border-radius: 50%; background: var(--mist); }
.dots .d.on { background: var(--ochre); }

.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px 36px; }
.card { padding: 18px 0; border-top: 1px solid var(--line); }
.card .k { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; color: var(--blue); letter-spacing: .14em; margin-bottom: 6px; }
.card .t { font-family: 'Cormorant Garamond', serif; font-size: 18px; line-height: 1.3; color: var(--ink-2); margin: 0; }
.card .i { font-family: 'Work Sans', sans-serif; font-size: 11px; color: var(--blue); letter-spacing: .02em; margin-top: 4px; opacity: .9; }
.card .link { font-family: 'Work Sans', sans-serif; font-size: 10.5px; letter-spacing: .14em; text-transform: uppercase; color: var(--ochre-2); text-decoration: none; margin-top: 6px; display: inline-block; border-bottom: 1px solid rgba(182,138,78,.35); }

.hobbies { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.hobby { border-top: 1px solid var(--line); padding-top: 16px; }
.hobby .k { font-size: 22px; color: var(--ink-2); display: block; margin-bottom: 6px; }
.hobby .t { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: var(--ink-2); margin: 0 0 6px 0; }
.hobby p { font-family: 'Cormorant Garamond', serif; font-size: 15px; line-height: 1.5; color: var(--ink-2); margin: 0; opacity: .9; }

.profile p { font-family: 'Cormorant Garamond', serif; font-size: 18px; line-height: 1.6; color: var(--ink-2); max-width: 72ch; margin: 0 0 14px 0; }
.twocol { columns: 2; column-gap: 56px; column-rule: 1px solid var(--line); }
.twocol p { break-inside: avoid; }

.foot {
  display: flex; justify-content: space-between; align-items: center;
  padding: 24px 8% 32px 8%;
  font-size: 10.5px; letter-spacing: .28em; text-transform: uppercase; color: var(--blue);
  background: var(--paper-2);
}
.foot .mid { font-family: 'Noto Serif JP', serif; text-transform: none; letter-spacing: .12em; color: var(--ink-2); opacity: .7; }

@media (max-width: 960px) {
  .nav { padding: 20px 24px; flex-wrap: wrap; gap: 14px; }
  .nav-links { order: 3; width: 100%; justify-content: flex-start; gap: 18px; }
  .header { grid-template-columns: 1fr; padding: 40px 24px 32px 24px; }
  .header .kanji { font-size: 56px; }
  .block { padding: 40px 24px; }
  .row { grid-template-columns: 90px 1fr; gap: 16px; }
  .cards { grid-template-columns: 1fr; }
  .hobbies { grid-template-columns: 1fr 1fr; }
  .twocol { columns: 1; }
  .foot { padding: 16px 24px 24px; flex-direction: column; gap: 8px; align-items: flex-start; }
}
</style>
