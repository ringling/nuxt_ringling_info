<template>
  <div>
    <Menu />
    <div class="page-inner">
      <h1 class="page-h1">Now</h1>
      <p class="lede">
        This page is a living document that I try to update every month. It's a way for me to keep track of
        what I've been doing and what I've learned. It's also a way for me to share what I've learned with others.
      </p>
      <p class="meta-line">
        Built with TypeScript, Vue 3, Nuxt 3 &amp; TailwindCSS. Images generated with Midjourney. Deployed on Hetzner as a Docker image. <span class="updated">Last updated: April 27, 2026</span>
      </p>

      <div class="cards-grid">
        <template v-for="(card, idx) in cards" :key="card.month">
          <div v-if="getYear(card.month) !== getYear(cards[idx - 1]?.month ?? '')" class="year-divider">
            <span class="year-num">{{ getYear(card.month) }}</span>
            <span class="year-line" />
          </div>
          <div class="now-card neu">
          <img :src="card.img" :alt="card.month" class="card-img" />
          <div class="card-body">
            <div class="card-kicker">
              <span class="kicker-rule" />
              {{ String(idx + 1).padStart(2, '0') }} / {{ card.month.split(' ').pop() }}
            </div>
            <h5 class="card-month">{{ card.month.replace(' ' + card.month.split(' ').pop(), '') }}</h5>

            <template v-if="card.interests && card.interests.length">
              <div class="section-label">Areas of interest</div>
              <ul class="item-list">
                <li v-for="item in card.interests" :key="item" class="item-row">{{ item }}</li>
              </ul>
            </template>

            <template v-if="card.books && card.books.length">
              <div class="section-label">Books</div>
              <ul class="item-list">
                <li v-for="book in card.books" :key="book.title" class="item-row">
                  <b>{{ book.title }}</b>
                  <em class="author">— {{ book.author }}</em>
                </li>
              </ul>
            </template>

            <template v-if="card.courses && card.courses.length">
              <div class="section-label">Courses</div>
              <ul class="item-list">
                <li v-for="course in card.courses" :key="course.title" class="item-row">
                  <b>{{ course.title }}</b>
                  <em class="author">— {{ course.institution }}</em>
                </li>
              </ul>
            </template>
          </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Thomas Ringling — Now',
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/now' }],
  meta: [{ name: 'description', content: 'What am I doing right now and what have I been doing' }]
})

interface Book { title: string; author: string }
interface Course { title: string; institution: string }
interface NowEntry {
  month: string
  img: string
  interests?: string[]
  books?: Book[]
  courses?: Course[]
}

function getYear(month: string): string {
  const match = month.match(/\d{4}/)
  return match ? match[0] : ''
}

const cards: NowEntry[] = [
  {
    month: 'April 2026',
    img: '/img/2026_hannah_9.jpg',
    interests: ['Claude Design', 'Marimo'],
    books: [
      { title: 'Shogun', author: 'James Clavell' },
      { title: 'Hvis jeg ikke ringer i morgen', author: 'Kim Eg Thygesen' },
    ],
  },
  {
    month: 'March 2026',
    img: '/img/copper_wedding.jpg',
    interests: ['Marimo notebooks', 'Kubernetes'],
    books: [
      { title: 'History of War in 100 Battles', author: 'Richard Overy' },
      { title: 'Shoshin', author: 'Hiroshi Nakamura' },
    ],
  },
  {
    month: 'February 2026',
    img: '/img/shoshin.jpg',
    interests: ['初心', 'Pandas', 'OpenCode with Devstral Small 2'],
    books: [{ title: 'Domain-Specific Small Language Models', author: 'Guglielmo Iozzia' }],
  },
  {
    month: 'January 2026',
    img: '/img/2026.jpg',
    interests: ['Enneagram', '無心', 'Mistral (functions)'],
    books: [{ title: 'Russerne kommer', author: 'Tom Buk-Swienty' }],
  },
  {
    month: 'December 2025',
    img: '/img/christmas2025.jpg',
    interests: ['改善 初心 生き甲斐'],
    books: [{ title: 'Kaizen - et lille skridt kan ændre dit liv', author: 'Robert Maurer' }],
  },
  {
    month: 'November 2025',
    img: '/img/japan_immersion.jpg',
    interests: ['日本語'],
    books: [{ title: 'Kryssing - Manden, der valgte forkert', author: 'Thomas Harder' }],
  },
  {
    month: 'October 2025',
    img: '/img/bridge.jpg',
    interests: ['Claude Code commands'],
    books: [{ title: 'Range', author: 'David Epstein' }],
  },
  {
    month: 'September 2025',
    img: '/img/glc.jpg',
    interests: ['Claude Code (subagents)'],
    books: [{ title: 'Tælle til en, tælle til to', author: 'Jørgen Svejstrup' }],
  },
  {
    month: 'August 2025',
    img: '/img/olivia.png',
    interests: ['Claude Code (subagents)', 'MCP servers'],
    books: [{ title: "L'Heure des Prédateurs", author: 'Giuliano da Empoli' }],
  },
  {
    month: 'July 2025',
    img: '/img/icehotel.jpg',
    interests: ['Knowledge graphs', 'RAG', 'Claude Code'],
    books: [
      { title: 'Essential GraphRAG', author: 'Tomaž Bratanič & Oskar Hane' },
      { title: 'Adopting Elixir', author: 'Ben Marx, José Valim, Bruce Tate' },
      { title: 'Genesis', author: 'Henry A. Kissinger, Eric Schmidt, Craig Mundie' },
    ],
  },
  {
    month: 'June 2025',
    img: '/img/boy_anim.gif',
    interests: ['html to pdf', 'DeepSeek R1, Qdrant'],
    books: [{ title: 'Real-World Event Sourcing', author: 'Kevin Hoffman' }],
  },
  {
    month: 'May 2025',
    img: '/img/faroer.jpg',
    interests: ['Raycast', 'Productivity'],
    books: [{ title: 'Berlin brænder', author: 'Tom Buk-Swienty' }],
  },
  {
    month: 'April 2025',
    img: '/img/europe_first.png',
    interests: ['Svelte', 'Elixir Phoenix & LiveView'],
    books: [{ title: 'The Idiot', author: 'Fyodor Dostoyevsky' }],
  },
  {
    month: 'March 2025',
    img: '/img/womb.png',
    interests: ['Pydantic AI', 'Model Context Protocol'],
    books: [
      { title: 'Learn Japanese', author: 'Paul Noble' },
      { title: 'Shogun', author: 'James Clavell' },
      { title: 'Personforsikring', author: 'Inge Brabrand' },
    ],
    courses: [{ title: 'How Transformer LLMs Work', institution: 'DeepLearning.AI' }],
  },
  {
    month: 'February 2025',
    img: '/img/disaster-start.jpg',
    interests: ['Obsidian', '3 Echonomies', 'DDD', 'Modular Monolith'],
    books: [
      { title: 'Norwegian Wood', author: 'Haruki Murakami' },
      { title: 'Software Engineering at Google', author: 'Titus Winters, Tom Manshreck and Hyrum Wright' },
    ],
  },
  {
    month: 'January 2025',
    img: '/img/2025.jpg',
    interests: ['Rust', 'Docling, Neo4J'],
    courses: [{ title: 'ISTQB Foundation', institution: 'Testhuset' }],
    books: [
      { title: 'Software Engineering at Google', author: 'Titus Winters, Tom Manshreck and Hyrum Wright' },
      { title: 'Gid min chef var høvding', author: 'Dennis Nørmark' },
      { title: 'Empire of the Summer Moon', author: 'S. C. Gwynne' },
    ],
  },
  {
    month: 'December 2024',
    img: '/img/drones.jpg',
    interests: ['LLM - basics (Elixir)', 'DuckDB, Polars, Pandas'],
    courses: [{ title: 'Knowledge Graphs for RAG', institution: 'DeepLearning.AI' }],
    books: [
      { title: 'The Castaway', author: 'W. W. Jacobs' },
      { title: "It Doesn't Have to Be Crazy at Work", author: 'Jason Fried & David Heinemeier Hansson' },
      { title: 'Vikingernes Helte', author: 'Niels Saxtorph' },
      { title: 'Build a Large Language Model (From Scratch)', author: 'Sebastian Raschka' },
    ],
  },
  {
    month: 'November 2024',
    img: '/img/senate.jpg',
    interests: ['Knowledge graphs', 'LLM - basics (Python)', 'Elixir: Livebook, Nx, Explorer'],
    courses: [{ title: 'Knowledge Graphs for RAG', institution: 'DeepLearning.AI' }],
    books: [
      { title: 'The Edgar Allan Poe Collection', author: 'Edgar Allan Poe' },
      { title: 'Build a Large Language Model (From Scratch)', author: 'Sebastian Raschka' },
    ],
  },
  {
    month: 'October 2024',
    img: '/img/nov2024.jpg',
    interests: ['LLM - basics'],
    books: [
      { title: '1000-årsriget', author: 'Tonny Gulløv' },
      { title: 'Seikatsu (生活)', author: 'Asger Røjle Christensen' },
    ],
  },
  {
    month: 'September 2024',
    img: '/img/zen.jpg',
    interests: ['Structured Output - OpenAI', 'Change Management', 'Multimodal RAG'],
    courses: [
      { title: 'Japanese level A2 (まるごと)', institution: 'FOF' },
      { title: 'Prompt Compression and Query Optimization', institution: 'DeepLearning.AI' },
    ],
    books: [
      { title: 'Det ensomme hjerte', author: 'Tom Buk-Swienty' },
      { title: 'Zen: The Art of Simple Living', author: 'Shunmyo Masuno' },
      { title: 'Ulvehjerter', author: 'Puk Damsgård' },
    ],
  },
  {
    month: 'August 2024',
    img: '/img/lego.jpg',
    interests: ['Mojo', 'FastHTML', 'Multimodal RAG'],
    courses: [{ title: 'Systems Thinking Course', institution: 'Dave Shapiro / Patreon' }],
    books: [
      { title: 'Imminent', author: 'Lois Elizondo' },
      { title: 'Kan man tænke sig rask', author: 'Thomas Breinholt' },
      { title: 'What is ChatGPT Doing...and Why Does It Work?', author: 'Stephen Wolfram' },
      { title: 'Die Welt von Gestern: Erinnerungen eines Europäers', author: 'Stefan Zweig' },
    ],
  },
  {
    month: 'July 2024',
    img: '/img/norway.jpg',
    interests: ['Multimodal RAG', 'Embeddings, Voyage', 'Pandas AI'],
    courses: [{ title: 'Building Multimodal Search and RAG', institution: 'DeepLearning.AI' }],
    books: [
      { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry' },
      { title: 'Siddhartha', author: 'Hermann Hesse' },
      { title: 'Artemis', author: 'Andy Weir' },
    ],
  },
  {
    month: 'June 2024',
    img: '/img/tau-ceti.jpg',
    interests: ['Embeddings, Nomic, Llama3, OpenAI'],
    courses: [{ title: 'Building Multimodal Search and RAG', institution: 'DeepLearning.AI' }],
    books: [
      { title: 'AI Epoken', author: 'Anders Bæk' },
      { title: 'Project Hail Mary', author: 'Andy Weir' },
      { title: 'Uncommon Sense Teaching', author: 'Barbara Oakley & Terrence J. Sejnowski' },
    ],
  },
  {
    month: 'May 2024',
    img: '/img/porto_santo.jpg',
    interests: ['LlamaIndex, RAG and ChromaDB', 'BDD / Behave'],
    courses: [
      { title: 'Open Source Models with Hugging Face', institution: 'DeepLearning.AI' },
      { title: 'Systems Thinking: Essential Concepts', institution: 'Udemy' },
      { title: 'Beginning Llamafile for Local Large Language Models', institution: 'Coursera' },
    ],
    books: [
      { title: 'Den Falske Løjtnant', author: 'Martin Q. Magnussen' },
      { title: 'Before The Coffee Gets Cold (コーヒーが冷めないうちに)', author: 'Toshikazu Kawaguchi' },
      { title: 'Uncommon Sense Teaching', author: 'Barbara Oakley & Terrence J. Sejnowski' },
      { title: 'Book You Wish Your Parents Had Read', author: 'Philippa Perry' },
    ],
  },
  {
    month: 'April 2024',
    img: '/img/hannah.jpg',
    interests: ['Systems Thinking', 'Web Assembly', 'BDD / Behave'],
    courses: [
      { title: 'Agile Leadership: Introduction to Change', institution: 'Coursera / University of Colorado System' },
      { title: 'Systems Thinking: Essential Concepts', institution: 'Udemy' },
      { title: 'LLM University', institution: 'Cohere' },
      { title: 'Red Teaming LLM Applications', institution: 'DeepLearning.AI' },
    ],
    books: [
      { title: 'Factfulness', author: 'Hans Rosling' },
      { title: 'En dag i Ivan Denisovitjs liv', author: 'Aleksandr Solsjenitsyn' },
      { title: 'Turn the Ship Around!', author: 'L. David Marquet' },
    ],
  },
  {
    month: 'March 2024',
    img: '/img/shogun.jpg',
    interests: ['Domain Storytelling', 'Pydantic'],
    courses: [
      { title: 'LangChain Chat with Your Data', institution: 'DeepLearning.AI' },
      { title: 'Large Language Models with Semantic Search', institution: 'DeepLearning.AI' },
    ],
    books: [
      { title: 'Magteliten', author: 'Markus Bernsen, Christoph Ellersgaard & Anton Grau Larsen' },
      { title: 'Domain Storytelling', author: 'Stefan Hofer & Henning Schwentner' },
      { title: 'Gopler ældes baglæns', author: 'Nicklas Brendborg' },
    ],
  },
  {
    month: 'February 2024',
    img: '/img/aquarius.jpg',
    interests: ['Weaviate', 'AlpineJS', 'Polars', 'Pydantic'],
    courses: [{ title: 'Developing a Systems Mindset', institution: 'Coursera / University of Colorado Boulder' }],
    books: [
      { title: 'Change By Design', author: 'Tim Brown' },
      { title: 'Dit selvhelbredende sind', author: 'Mette Louise Holland' },
      { title: 'Streamlit for Data Science', author: 'Tyler Richards' },
    ],
  },
  {
    month: 'January 2024',
    img: '/img/new_year2024.jpg',
    interests: ['Weaviate', 'LangChain', 'Ludwig (ludwig.ai)', 'AlpineJS'],
    courses: [
      { title: 'Developing a Systems Mindset', institution: 'Coursera / University of Colorado Boulder' },
      { title: 'Vector Databases: from Embeddings to Applications', institution: 'DeepLearning.AI' },
    ],
    books: [
      { title: "You're Not Listening", author: 'Kate Murphy' },
      { title: 'UFO-Mysteriet', author: 'Frederik Dirks Gottlieb' },
      { title: 'The Case Against Reality', author: 'Donald D. Hoffman' },
    ],
  },
  {
    month: 'December 2023',
    img: '/img/winter_wonderland.jpeg',
    interests: ['Vector Databases', 'Scikit Learn', 'LangChain'],
    courses: [
      { title: 'LangChain for LLM Application Development', institution: 'DeepLearning.AI' },
      { title: 'Unsupervised Learning, Recommenders, Reinforcement Learning', institution: 'Coursera / DeepLearning.AI' },
    ],
    books: [
      { title: 'Sapiens', author: 'Yuval Noah Harari' },
      { title: 'Encounters', author: 'Diana W. Pasulka' },
      { title: 'Atomic Habits', author: 'James Clear' },
    ],
  },
  {
    month: 'November 2023',
    img: '/img/gen-ai.jpg',
    interests: ['Scikit Learn', 'MemGPT', 'InsightFace library', 'Zettelkasten & Obsidian', 'OpenAI GPT 4.0'],
    courses: [{ title: 'Generative AI for Everyone', institution: 'Coursera / DeepLearning.AI' }],
    books: [
      { title: 'Software Engineering at Google', author: 'Winters, Manshreck & Wright' },
      { title: 'Die Vermessung der Welt', author: 'Daniel Kehlmann' },
    ],
  },
  {
    month: 'October 2023',
    img: '/img/kabuki.jpg',
    interests: ['Llama with Ollama', 'Scikit Learn', 'llama-index', 'Figma, Dall-E and Midjourney', 'InsightFace library'],
    courses: [{ title: 'Advanced Learning Algorithms', institution: 'Coursera / DeepLearning.AI' }],
    books: [
      { title: 'grokking Machine Learning', author: 'Luis G. Serrano' },
      { title: 'Jytte vender tilbage', author: 'Morten Münster' },
    ],
  },
  {
    month: 'September 2023',
    img: '/img/wiking.jpg',
    interests: ['Machine Learning theory & application', 'OpenAI API - ChatGPT 4.0', 'Midjourney'],
    courses: [
      { title: 'Japanese — level A2 (Marugoto)', institution: 'FOF Lyngby 2023–2024' },
      { title: 'Supervised Machine Learning: Regression and Classification', institution: 'Coursera / DeepLearning.AI' },
      { title: 'Probability & Statistics for Machine Learning and Data Science', institution: 'Coursera / DeepLearning.AI' },
      { title: 'Building Systems with the ChatGPT API', institution: 'DeepLearning.AI' },
    ],
    books: [
      { title: 'Jytte fra Marketing er desværre gået for i dag', author: 'Morten Münster' },
      { title: 'Viking', author: 'Jeanette Varberg' },
    ],
  },
  {
    month: 'August 2023',
    img: '/img/probability.jpg',
    interests: ['OpenAI API - ChatGPT 3.5', 'Midjourney'],
    courses: [
      { title: 'Calculus for Machine Learning and Data Science', institution: 'Coursera / DeepLearning.AI' },
      { title: 'Linear Algebra for Machine Learning and Data Science', institution: 'Coursera / DeepLearning.AI' },
      { title: 'Statistical Learning', institution: 'StanfordOnline — STATSX0001' },
    ],
    books: [{ title: 'Scary Smart', author: 'Mo Gawdat' }],
  },
  {
    month: 'July 2023',
    img: '/img/elizabeth.jpg',
    interests: ['Machine Learning theory & application', 'Chat with your PDF (OpenAI, HuggingFace, Streamlit)', 'OpenAI API — Davinci, ChatGPT 3.5', 'Midjourney', 'Ontology, metatheory', 'Barefoot training'],
    courses: [{ title: 'Fat Chance: Probability from the Ground Up', institution: 'HarvardX — FC1x' }],
    books: [
      { title: 'Middelalderen i Danmark', author: 'Niels Knud Liebgott' },
      { title: 'Fat Chance! Probability from 0 to 1', author: 'Benedict Gross, Joe Harris & Emily Riehl' },
      { title: 'The Hundred-Page Machine Learning Book', author: 'Andriy Burkov' },
    ],
  },
  {
    month: 'June 2023',
    img: '/img/frankenstein.jpg',
    interests: ['Machine Learning theory & application', 'OpenAI API - ChatGPT 3.5 & Whisper', 'Midjourney', 'Pyscript', 'Mojo'],
    courses: [{ title: 'Building Systems with the ChatGPT API', institution: 'DeepLearning.AI' }],
    books: [
      { title: 'The Alchemist', author: 'Paulo Coelho' },
      { title: 'Frankenstein', author: 'Mary Shelley' },
    ],
  },
  {
    month: 'May 2023',
    img: '/img/ai_mosaik.jpg',
    interests: ['Machine Learning theory & application', 'OpenAI API', 'Midjourney', 'HuggingFace', 'ChatGPT', 'Python, Elixir Nx', 'Anaconda 2023.3', 'AlpineJS, Tornado & Websockets'],
    courses: [{ title: 'ChatGPT Prompt Engineering for Developers', institution: 'DeepLearning.AI' }],
    books: [
      { title: 'Modern Software Engineering', author: 'David Farley' },
      { title: 'Pirate Latitudes', author: 'Michael Crichton' },
    ],
  },
  {
    month: 'April 2023',
    img: '/img/ai.jpg',
    interests: ['Gradio, OpenAI, Whisper, AssemblyAI', 'Python, Elixir Nx, Julia', 'Midjourney', 'Pandas 2.0', 'Github Copilot X', 'Playwright'],
    courses: [{ title: 'MIT 6.S191: Introduction to Deep Learning', institution: 'YouTube' }],
    books: [
      { title: 'The Andromeda Evolution', author: 'Daniel H. Wilson and Michael Crichton' },
      { title: 'Ikigai', author: 'Héctor García and Francesc Miralles' },
    ],
  },
  {
    month: 'March 2023',
    img: '/img/python.jpg',
    interests: ['SQLite', 'Arrow', 'Pandas', 'Polars'],
    books: [
      { title: 'Niels Bohr - Det beskedne geni', author: 'Charlotte Koldbye' },
      { title: 'ZOV', author: 'Pavel Filatjev' },
      { title: 'Stalingrad', author: 'Antony Beevor' },
    ],
  },
  {
    month: 'December 2022 – February 2023',
    img: '/img/relax.jpg',
    books: [
      { title: 'Lær at præstere, når du skal', author: 'Lars Robl' },
      { title: 'Kaptajn Dinesen - Ild og blod', author: 'Tom Buk-Swienty' },
      { title: 'Safari fra helvede', author: 'Tom Buk-Swienty' },
    ],
  },
  {
    month: 'February – September 2022',
    img: '/img/pc.jpg',
    interests: ['Rust (primarily WASM)', 'TypeScript, Vue 3 and Nuxt 3', 'Python and Pandas'],
    courses: [{ title: 'The Hardware of a Quantum Computer', institution: 'DelftX — QTM2x' }],
    books: [
      { title: 'Philosophy of Science: A Very Short Introduction', author: 'Samir Okasha' },
      { title: "Butcher's Crossing", author: 'John Williams' },
      { title: 'What Every BODY is Saying', author: 'Joe Navarro & Marvin Karlins' },
      { title: 'Tuesdays with Morrie', author: 'Mitch Alborn' },
    ],
  },
  {
    month: 'June 2021 – January 2022',
    img: '/img/qc.jpg',
    interests: ['Quantum Computing', 'Qiskit', 'Linear Algebra in QC'],
    courses: [
      { title: 'Introduction to quantum computing for everyone', institution: 'UChicagoX — QUAN11000' },
      { title: 'The quantum internet and quantum computers: how will they change the world?', institution: 'DelftX — QTM1x' },
    ],
    books: [
      { title: 'Leading Change: Why Transformation Efforts Fail', author: 'John P. Kotter' },
      { title: 'Extraterrestrial', author: 'Avi Loeb' },
      { title: 'Quantum Computing for Everyone', author: 'Chris Bernhardt' },
      { title: 'In Plain Sight', author: 'Ross Coulthart' },
      { title: 'Blood and Thunder', author: 'Hampton Sides' },
    ],
  },
]
</script>

<style scoped>
.page-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.page-h1 {
  margin: 64px 0 0 0;
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -0.035em;
  text-align: center;
  color: #111827;
}

.lede {
  margin-top: 32px;
  margin-bottom: 0;
  color: #374151;
}

.meta-line {
  margin-top: 12px;
  margin-bottom: 64px;
  font-size: 12px;
  color: #6b7280;
}
.updated { margin-left: 12px; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 16px;
  padding-bottom: 64px;
}

.year-divider {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 32px 0 8px 0;
}
.year-divider:first-child { margin-top: 0; }

.year-num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #111827;
  white-space: nowrap;
}
.year-line {
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.now-card {
  padding: 24px;
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.card-img {
  width: 96px;
  height: 96px;
  flex: none;
  border-radius: 6px;
  object-fit: cover;
}

.card-body {
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}

.card-kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #111827;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.kicker-rule {
  width: 18px;
  height: 1px;
  background: #111827;
  display: inline-block;
}

.card-month {
  margin: 8px 0 16px 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #111827;
  line-height: 1.05;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin: 14px 0 6px 0;
}

.item-list {
  padding-left: 0;
  margin: 0;
  list-style: none;
  color: #374151;
  font-size: 14px;
  line-height: 1.55;
}

.item-row {
  padding: 4px 0;
  border-top: 1px solid #f3f4f6;
}
.item-row:first-child { border-top: none; }

.author {
  color: #6b7280;
  font-size: 13px;
  font-style: normal;
}
.author::before { content: ' '; }
</style>
