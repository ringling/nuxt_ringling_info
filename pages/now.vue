<template>
  <div>
    <Menu />
    <main class="pp">
      <header>
        <div class="pp-masthead">
          <span class="pp-label">Now</span>
          <span class="pp-label">Updated November 14, 2026</span>
        </div>
        <h1>What I'm doing now.</h1>
        <p class="pp-lede">
          A living document I try to update every month, to keep track of what I've been doing and learning, and
          to share it with others.
        </p>
      </header>

      <hr>

      <div ref="timeline" class="tl">
        <div class="tl-line" aria-hidden="true"><div class="tl-progress" :style="{ height: progress + 'px' }" /></div>
        <template v-for="(card, idx) in cards" :key="card.month">
          <div v-if="getYear(card.month) !== getYear(cards[idx - 1]?.month ?? '')" class="tl-year">
            <span>{{ getYear(card.month) }}</span>
          </div>
          <article v-reveal class="tl-entry" :class="{ flip: idx % 2 === 1 }">
            <div class="tl-text">
              <h3>{{ monthName(card.month) }}</h3>

              <div v-if="card.interests?.length" class="tl-group">
                <div class="pp-label">Interests</div>
                <p>{{ card.interests.join(' · ') }}</p>
              </div>
              <div v-if="card.books?.length" class="tl-group">
                <div class="pp-label">{{ card.books.length === 1 ? 'Book' : 'Books' }}</div>
                <p v-for="book in card.books" :key="book.title">{{ book.title }} <em>— {{ book.author }}</em></p>
              </div>
              <div v-if="card.courses?.length" class="tl-group">
                <div class="pp-label">{{ card.courses.length === 1 ? 'Course' : 'Courses' }}</div>
                <p v-for="course in card.courses" :key="course.title">{{ course.title }} <em>— {{ course.institution }}</em></p>
              </div>
              <blockquote v-if="card.quote" class="tl-quote">“{{ card.quote }}”</blockquote>
            </div>
            <span class="tl-dot" aria-hidden="true" />
            <div class="tl-media">
              <img :src="card.img" :alt="card.month" loading="lazy">
            </div>
          </article>
        </template>
      </div>

      <footer class="pp-footer">
        <span class="pp-label">ringling.info · © 2026</span>
        <span class="pp-label">Built with Nuxt 3 · Hetzner / Docker</span>
      </footer>
    </main>
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
  quote?: string
}

// "November 2026" -> "November"; ranges like "June 2021 – January 2022" are kept whole.
function monthName(month: string): string {
  return /^\S+ \d{4}$/.test(month) ? month.split(' ')[0] : month
}

function getYear(month: string): string {
  const match = month.match(/\d{4}/)
  return match ? match[0] : ''
}

const cards: NowEntry[] = [
  {
    month: 'November 2026',
    img: '/img/november_2026.jpg',
    interests: ['AI SDLC'],
    books: [
      { title: 'Learning Systems Thinking', author: 'Diana Montalion' },
      { title: 'Out of the Shadows', author: 'Jay Stratton' },
    ],
  },
  {
    month: 'October 2026',
    img: '/img/oktober_2026.jpg',
    interests: ['Hyperframes', 'A2UI', 'OpenUI', 'Omarchy'],
    books: [
      { title: 'Humankind', author: 'Rutger Bregman' },
    ],
    quote: 'For the powerful, a hopeful view of human nature is downright threatening',
  },
  {
    month: 'September 2026',
    img: '/img/september_2026.png',
    interests: ['Claude Opus 5.5', 'Spec Driven Development', 'Omarchy'],
    books: [
      { title: 'Løveinden', author: 'Tom Buk-Swienty' },
    ],
  },
  {
    month: 'August 2026',
    img: '/img/august_2026.png',
    books: [
      { title: 'Make it Clear', author: 'Patrick Henry Winston' },
    ],
  },
  {
    month: 'July 2026',
    img: '/img/july_2026.png',
    interests: ['Rust', 'Qwen Coder 30B'],
    books: [
      { title: 'Small Things Like These', author: 'Claire Keegan' },
      { title: 'Forsvarsløs', author: 'Peter Ernstved Rasmussen' },
    ],
  },
  {
    month: 'June 2026',
    img: '/img/skthans_2026.jpg',
    interests: ['Rust', 'OpenCode', 'Gemma 4 MLX model'],
    books: [
      { title: 'Shogun Part 3', author: 'James Clavell' },
    ],
  },
  {
    month: 'May 2026',
    img: '/img/skagen.jpg',
    interests: ['mjml', 'Tauri', 'Pocketbase'],
    books: [
      { title: 'Personal Responsibility under a Dictatorship', author: 'Hannah Arendt' },
    ],
  },
  {
    month: 'April 2026',
    img: '/img/2026_hannah_9.jpg',
    interests: ['Claude Design', 'Marimo'],
    books: [
      { title: 'Shogun Part 2', author: 'James Clavell' },
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
      { title: 'Shogun Part 1', author: 'James Clavell' },
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

// Reveal on scroll: elements below the fold fade/slide in as they enter the viewport.
// Cards already visible on load are left alone (no flicker); reduced-motion users see no animation.
let revealObserver: IntersectionObserver | null = null

function getRevealObserver(): IntersectionObserver {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      let i = 0
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        el.style.transitionDelay = `${Math.min(i++, 5) * 70}ms`
        el.classList.add('reveal-in')
        revealObserver?.unobserve(el)
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })
  }
  return revealObserver
}

const vReveal = {
  mounted(el: HTMLElement) {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return
    el.classList.add('reveal-pending')
    getRevealObserver().observe(el)
  },
  unmounted(el: HTMLElement) {
    revealObserver?.unobserve(el)
  },
}

// Timeline: the dark line grows down to the middle of the viewport, and dots it has reached fill in.
const timeline = ref<HTMLElement | null>(null)
const progress = ref(0)
let frame = 0

function updateTimeline() {
  frame = 0
  const el = timeline.value
  if (!el) return
  const middle = window.innerHeight * 0.55
  const rect = el.getBoundingClientRect()
  progress.value = Math.max(0, Math.min(rect.height, middle - rect.top))
  el.querySelectorAll<HTMLElement>('.tl-dot').forEach((dot) => {
    dot.classList.toggle('reached', dot.getBoundingClientRect().top < middle)
  })
}
const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateTimeline) }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  updateTimeline()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
  revealObserver?.disconnect()
  revealObserver = null
})
</script>

<style scoped>
.reveal-pending {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 500ms ease, transform 500ms ease;
}
.reveal-pending.reveal-in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal-pending { opacity: 1; transform: none; transition: none; }
}

.tl { position: relative; padding: 8px 0 40px; }
.tl-line { position: absolute; top: 0; bottom: 0; left: 50%; width: 1px; margin-left: -.5px; background: var(--rule); }
.tl-progress { width: 2px; margin-left: -.5px; background: var(--ink); }

.tl-year { position: relative; display: flex; justify-content: center; margin: 24px 0 56px; }
.tl-year span { position: relative; background: var(--bg2, #f8f8f8); padding: 8px 0; font-weight: 300; font-size: 64px; line-height: 1; color: var(--ink); }

.tl-entry { position: relative; display: grid; grid-template-columns: 1fr 120px 1fr; align-items: start; margin-bottom: 88px; }
.tl-text { grid-column: 1; grid-row: 1; text-align: right; }
.tl-media { grid-column: 3; grid-row: 1; }
.tl-entry.flip .tl-text { grid-column: 3; text-align: left; }
.tl-entry.flip .tl-media { grid-column: 1; display: flex; justify-content: flex-end; }

.tl-dot { grid-column: 2; grid-row: 1; justify-self: center; position: relative; z-index: 1; margin-top: 22px; width: 13px; height: 13px; border-radius: 50%; background: var(--bg2, #f8f8f8); border: 1px solid var(--mute); transition: background 300ms ease, border-color 300ms ease, transform 300ms ease; }
.tl-dot.reached { background: var(--ink); border-color: var(--ink); transform: scale(1.15); }

.tl-media img { display: block; width: 100%; max-width: 380px; aspect-ratio: 4 / 5; object-fit: cover; }

.tl .tl-text h3 { font-size: 52px; font-weight: 300; line-height: 1.1; }
.tl .tl-text h3 + * { margin-top: 20px; }
.tl-group { margin-bottom: 16px; }
.tl-group .pp-label { margin-bottom: 4px; }
.tl-group p { margin: 0 0 2px; }
.tl-group em { color: var(--mute); }
.tl-quote { margin: 20px 0 0; font-style: italic; font-size: 22px; line-height: 1.4; color: var(--soft); }

@media screen and (max-width: 800px) {
  .tl-line { left: 6px; }
  .tl-year { justify-content: flex-start; margin: 8px 0 32px; padding-left: 28px; }
  .tl-year span { font-size: 44px; }
  .tl-entry, .tl-entry.flip { grid-template-columns: 12px 1fr; column-gap: 16px; margin-bottom: 56px; }
  .tl-dot { grid-column: 1; margin-top: 16px; }
  .tl-text, .tl-entry.flip .tl-text { grid-column: 2; text-align: left; }
  .tl-media, .tl-entry.flip .tl-media { grid-column: 2; grid-row: 2; justify-content: flex-start; margin-top: 16px; }
  .tl-media img { max-width: 280px; }
  .tl .tl-text h3 { font-size: 40px; }
}
</style>
