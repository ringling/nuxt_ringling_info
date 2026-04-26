<template>
  <div>
    <nav class="nav">
      <NuxtLink class="brand" to="/" aria-label="Thomas Ringling — Home">
        <img class="brand-logo" src="/img/logo-mark.png" alt="" />
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink class="active" to="/now">Now</NuxtLink>
        <NuxtLink to="/cv">CV</NuxtLink>
        <NuxtLink to="/team">Team</NuxtLink>
      </div>
      <div class="lang">
        <span>EN</span><span class="dot"></span><span>DA</span><span class="dot"></span>
        <span class="jp-text">日本語</span>
      </div>
    </nav>

    <header class="header">
      <div class="kanji">現在</div>
      <div>
        <div class="eyebrow"><span class="bar"></span><span>Now&nbsp;·&nbsp;Updated March 2026</span></div>
        <h1>A living record —<br />reading, learning,<br />building.</h1>
        <p class="lede">A monthly index of books, courses and areas of interest. Mostly software, often philosophy, occasionally Japanese. Kept as a habit, not a résumé.</p>
        <div class="meta-row">
          <div><span class="label">Cadence</span><span class="value">Updated monthly</span></div>
          <div><span class="label">Since</span><span class="value mono">2021.06</span></div>
          <div><span class="label">Studio</span><span class="value mono">Nærum · 55.81°N</span></div>
        </div>
      </div>
    </header>

    <section class="stream">
      <div class="stream-head">
        <h2>2026 — recent</h2>
        <span class="hint">Newest first</span>
      </div>

      <article class="month">
        <div class="when"><span class="yr">2026</span><span class="mo">March</span><span class="jp-text mo-jp">三月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Marimo notebooks</li><li>Kubernetes</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>History of War in 100 Battles<span class="by">Richard Overy</span></li><li>Shoshin<span class="by">Hiroshi Nakamura</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2026</span><span class="mo">February</span><span class="jp-text mo-jp">二月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li class="jpterm">初心</li><li>Pandas</li><li>OpenCode with Devstral Small 2</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Domain-Specific Small Language Models<span class="by">Guglielmo Iozzia</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2026</span><span class="mo">January</span><span class="jp-text mo-jp">一月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Enneagram</li><li class="jpterm">無心</li><li>Mistral (functions)</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Russerne kommer<span class="by">Tom Buk-Swienty</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <div class="stream-head" style="margin-top:48px">
        <h2>2025</h2>
        <span class="hint">Twelve months</span>
      </div>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">December</span><span class="jp-text mo-jp">十二月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li class="jpterm">改善 · 初心 · 生き甲斐</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Kaizen — et lille skridt kan ændre dit liv<span class="by">Robert Maurer</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">November</span><span class="jp-text mo-jp">十一月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li class="jpterm">日本語</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Kryssing — Manden, der valgte forkert<span class="by">Thomas Harder</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">October</span><span class="jp-text mo-jp">十月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Claude Code commands</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Range<span class="by">David Epstein</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">September</span><span class="jp-text mo-jp">九月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Claude Code (subagents)</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Tælle til en, tælle til to<span class="by">Jørgen Svejstrup</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">August</span><span class="jp-text mo-jp">八月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Claude Code (subagents)</li><li>MCP servers</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>L'Heure des Prédateurs<span class="by">Giuliano da Empoli</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">July</span><span class="jp-text mo-jp">七月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Knowledge graphs</li><li>RAG</li><li>Claude Code</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Essential GraphRAG<span class="by">Tomaž Bratanič &amp; Oskar Hane</span></li><li>Adopting Elixir<span class="by">Ben Marx, José Valim, Bruce Tate</span></li><li>Genesis<span class="by">Kissinger, Schmidt, Mundie</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">June</span><span class="jp-text mo-jp">六月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>HTML to PDF</li><li>DeepSeek R1, Qdrant</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Real-World Event Sourcing<span class="by">Kevin Hoffman</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">May</span><span class="jp-text mo-jp">五月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Raycast</li><li>Productivity</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Berlin brænder<span class="by">Tom Buk-Swienty</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">April</span><span class="jp-text mo-jp">四月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Svelte</li><li>Elixir Phoenix &amp; LiveView</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>The Idiot<span class="by">Fyodor Dostoyevsky</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">March</span><span class="jp-text mo-jp">三月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Pydantic AI</li><li>Model Context Protocol</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Learn Japanese<span class="by">Paul Noble</span></li><li>Shogun<span class="by">James Clavell</span></li><li>Personforsikring<span class="by">Inge Brabrand</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>How Transformer LLMs Work<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">February</span><span class="jp-text mo-jp">二月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Obsidian</li><li>3 Echonomies</li><li>DDD</li><li>Modular Monolith</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Norwegian Wood<span class="by">Haruki Murakami</span></li><li>Software Engineering at Google<span class="by">Winters, Manshreck, Wright</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2025</span><span class="mo">January</span><span class="jp-text mo-jp">一月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Rust</li><li>Docling, Neo4J</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Software Engineering at Google<span class="by">Winters, Manshreck, Wright</span></li><li>Gid min chef var høvding<span class="by">Dennis Nørmark</span></li><li>Empire of the Summer Moon<span class="by">S. C. Gwynne</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>ISTQB Foundation<span class="by">Testhuset</span></li></ul></div>
      </article>

      <div class="stream-head" style="margin-top:48px">
        <h2>2024</h2>
        <span class="hint">Twelve months</span>
      </div>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">December</span><span class="jp-text mo-jp">十二月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>LLM basics (Elixir)</li><li>DuckDB, Polars, Pandas</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>The Castaway<span class="by">W. W. Jacobs</span></li><li>It Doesn't Have to Be Crazy at Work<span class="by">Jason Fried &amp; DHH</span></li><li>Build a Large Language Model (From Scratch)<span class="by">Sebastian Raschka</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Knowledge Graphs for RAG<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">November</span><span class="jp-text mo-jp">十一月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Knowledge graphs</li><li>LLM basics (Python)</li><li>Elixir: Livebook, Nx, Explorer</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>The Edgar Allan Poe Collection<span class="by">Edgar Allan Poe</span></li><li>Build a Large Language Model (From Scratch)<span class="by">Sebastian Raschka</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Knowledge Graphs for RAG<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">October</span><span class="jp-text mo-jp">十月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>LLM basics</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>1000-årsriget<span class="by">Tonny Gulløv</span></li><li>Seikatsu (生活)<span class="by">Asger Røjle Christensen</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">September</span><span class="jp-text mo-jp">九月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Structured Output — OpenAI</li><li>Change Management</li><li>Multimodal RAG</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Det ensomme hjerte<span class="by">Tom Buk-Swienty</span></li><li>Zen: The Art of Simple Living<span class="by">Shunmyo Masuno</span></li><li>Ulvehjerter<span class="by">Puk Damsgård</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Japanese A2 (まるごと)<span class="by">FOF</span></li><li>Prompt Compression and Query Optimization<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">August</span><span class="jp-text mo-jp">八月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Mojo</li><li>FastHTML</li><li>Multimodal RAG</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Imminent<span class="by">Lois Elizondo</span></li><li>What is ChatGPT Doing...and Why Does It Work?<span class="by">Stephen Wolfram</span></li><li>Die Welt von Gestern<span class="by">Stefan Zweig</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Systems Thinking Course<span class="by">Dave Shapiro</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">July</span><span class="jp-text mo-jp">七月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Multimodal RAG</li><li>Embeddings, Voyage</li><li>Pandas AI</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>The Little Prince<span class="by">Antoine de Saint-Exupéry</span></li><li>Siddhartha<span class="by">Hermann Hesse</span></li><li>Artemis<span class="by">Andy Weir</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Building Multimodal Search and RAG<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">June</span><span class="jp-text mo-jp">六月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Embeddings, Nomic, Llama3, OpenAI</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>AI Epoken<span class="by">Anders Bæk</span></li><li>Project Hail Mary<span class="by">Andy Weir</span></li><li>Uncommon Sense Teaching<span class="by">Barbara Oakley &amp; Terrence J. Sejnowski</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Building Multimodal Search and RAG<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">May</span><span class="jp-text mo-jp">五月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>LlamaIndex, RAG, ChromaDB</li><li>BDD / Behave</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Den Falske Løjtnant<span class="by">Martin Q. Magnussen</span></li><li>Before The Coffee Gets Cold<span class="by">Toshikazu Kawaguchi</span></li><li>Uncommon Sense Teaching<span class="by">Barbara Oakley &amp; Terrence J. Sejnowski</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Open Source Models with Hugging Face<span class="by">DeepLearning.AI</span></li><li>Systems Thinking: Essential Concepts<span class="by">Udemy</span></li><li>Beginning Llamafile for Local LLMs<span class="by">Coursera</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">April</span><span class="jp-text mo-jp">四月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Systems Thinking</li><li>Web Assembly</li><li>BDD / Behave</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Factfulness<span class="by">Hans Rosling</span></li><li>Turn the Ship Around!<span class="by">L. David Marquet</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Agile Leadership: Introduction to Change<span class="by">Coursera / CU Boulder</span></li><li>Systems Thinking: Essential Concepts<span class="by">Udemy</span></li><li>Red Teaming LLM Applications<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">March</span><span class="jp-text mo-jp">三月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Domain Storytelling</li><li>Pydantic</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Magteliten<span class="by">Bernsen, Ellersgaard &amp; Grau Larsen</span></li><li>Domain Storytelling<span class="by">Hofer &amp; Schwentner</span></li><li>Gopler ældes baglæns<span class="by">Nicklas Brendborg</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>LangChain Chat with Your Data<span class="by">DeepLearning.AI</span></li><li>Large Language Models with Semantic Search<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">February</span><span class="jp-text mo-jp">二月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Weaviate</li><li>AlpineJS</li><li>Polars</li><li>Pydantic</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Change By Design<span class="by">Tim Brown</span></li><li>Streamlit for Data Science<span class="by">Tyler Richards</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Developing a Systems Mindset<span class="by">Coursera / CU Boulder</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2024</span><span class="mo">January</span><span class="jp-text mo-jp">一月</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Weaviate</li><li>LangChain</li><li>Ludwig (ludwig.ai)</li><li>AlpineJS</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>You're Not Listening<span class="by">Kate Murphy</span></li><li>The Case Against Reality<span class="by">Donald D. Hoffman</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Developing a Systems Mindset<span class="by">Coursera / CU Boulder</span></li><li>Vector Databases: from Embeddings to Applications<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <div class="stream-head" style="margin-top:48px">
        <h2>Earlier</h2>
        <span class="hint">2021 — 2023</span>
      </div>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Dec</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Vector Databases</li><li>Scikit Learn</li><li>LangChain</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Sapiens<span class="by">Yuval Noah Harari</span></li><li>Atomic Habits<span class="by">James Clear</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>LangChain for LLM Application Development<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Nov</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Scikit Learn</li><li>MemGPT</li><li>OpenAI GPT 4.0</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Software Engineering at Google<span class="by">Winters, Manshreck &amp; Wright</span></li><li>Die Vermessung der Welt<span class="by">Daniel Kehlmann</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Generative AI for Everyone<span class="by">Coursera / DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Oct</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Llama with Ollama</li><li>Scikit Learn</li><li>llama-index</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>grokking Machine Learning<span class="by">Luis G. Serrano</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Advanced Learning Algorithms<span class="by">Coursera / DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Sep</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Machine Learning theory</li><li>OpenAI API — ChatGPT 4.0</li><li>Midjourney</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Viking<span class="by">Jeanette Varberg</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Japanese A2 (Marugoto)<span class="by">FOF Lyngby</span></li><li>Supervised Machine Learning<span class="by">Coursera / DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Aug</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>OpenAI API — ChatGPT 3.5</li><li>Midjourney</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Scary Smart<span class="by">Mo Gawdat</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Calculus for Machine Learning<span class="by">Coursera / DeepLearning.AI</span></li><li>Linear Algebra for ML<span class="by">Coursera / DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Jul</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Machine Learning theory</li><li>Chat with your PDF</li><li>OpenAI API</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Middelalderen i Danmark<span class="by">Niels Knud Liebgott</span></li><li>The Hundred-Page ML Book<span class="by">Andriy Burkov</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Fat Chance: Probability from the Ground Up<span class="by">HarvardX</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Jun</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Machine Learning</li><li>OpenAI API</li><li>Pyscript, Mojo</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>The Alchemist<span class="by">Paulo Coelho</span></li><li>Frankenstein<span class="by">Mary Shelley</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Building Systems with the ChatGPT API<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">May</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Machine Learning (SVM, Linear Regression)</li><li>OpenAI API</li><li>HuggingFace</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Modern Software Engineering<span class="by">David Farley</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>ChatGPT Prompt Engineering for Developers<span class="by">DeepLearning.AI</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Apr</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Gradio, OpenAI, Whisper</li><li>Python, Elixir Nx, Julia</li><li>Playwright</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>The Andromeda Evolution<span class="by">Wilson &amp; Crichton</span></li><li>Ikigai<span class="by">García &amp; Miralles</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>MIT 6.S191: Introduction to Deep Learning<span class="by">YouTube</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2023</span><span class="mo">Mar</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Data Science: SQLite, Arrow, Pandas, Polars</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Niels Bohr — Det beskedne geni<span class="by">Charlotte Koldbye</span></li><li>Stalingrad<span class="by">Antony Beevor</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li class="empty">—</li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2022</span><span class="mo">Feb — Sep</span></div>
        <div class="col"><h4>Technologies</h4><ul><li>Rust (WASM)</li><li>Typescript, Vue 3, Nuxt 3</li><li>Python, Pandas</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Philosophy of Science<span class="by">Samir Okasha</span></li><li>Butcher's Crossing<span class="by">John Williams</span></li><li>What Every BODY is Saying<span class="by">Joe Navarro</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>The Hardware of a Quantum Computer<span class="by">DelftX</span></li></ul></div>
      </article>

      <article class="month">
        <div class="when"><span class="yr">2021</span><span class="mo">Jun — Jan '22</span></div>
        <div class="col"><h4>Areas of interest</h4><ul><li>Quantum Computing</li><li>Qiskit</li></ul></div>
        <div class="col"><h4>Books</h4><ul><li>Quantum Computing for Everyone<span class="by">Chris Bernhardt</span></li><li>Extraterrestrial<span class="by">Avi Loeb</span></li></ul></div>
        <div class="col"><h4>Courses</h4><ul><li>Introduction to Quantum Computing<span class="by">UChicagoX</span></li><li>The Quantum Internet &amp; Quantum Computers<span class="by">DelftX</span></li></ul></div>
      </article>
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
  title: 'Now — Thomas Ringling',
  meta: [{ name: 'description', content: 'A monthly index of books, courses and areas of interest — Thomas Ringling.' }],
  link: [{ rel: 'canonical', href: 'https://www.ringling.info/now' }]
})
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 8%;
  color: var(--ink-2);
  border-bottom: 1px solid var(--line);
}
.nav .brand { display: flex; align-items: center; gap: 14px; text-decoration: none; }
.brand-logo {
  width: 56px; height: 56px; border-radius: 50%; display: block; flex: 0 0 56px;
  filter: drop-shadow(0 1px 2px rgba(40,30,20,.08)) drop-shadow(0 8px 22px rgba(40,30,20,.06));
}
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
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 48px;
  align-items: end;
  border-bottom: 1px solid var(--line);
}
.header .kanji { font-family: 'Noto Serif JP', serif; font-size: 72px; line-height: 1; color: var(--ink); }
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
.meta-row { display: flex; gap: 40px; margin-top: 24px; font-family: 'Work Sans', sans-serif; }
.meta-row .label { font-size: 10px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); display: block; margin-bottom: 4px; }
.meta-row .value { font-family: 'Cormorant Garamond', serif; font-size: 15px; color: var(--ink-2); }
.meta-row .mono { font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: .04em; }

.stream { padding: 48px 8% 72px 8%; }
.stream-head {
  display: flex; justify-content: space-between; align-items: baseline;
  padding-bottom: 24px; margin-bottom: 32px;
  border-bottom: 1px solid var(--line);
}
.stream-head h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: 32px; color: var(--ink-2); margin: 0; letter-spacing: -.005em; }
.stream-head .hint { font-family: 'Work Sans', sans-serif; font-size: 10px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); }

.month {
  display: grid;
  grid-template-columns: 180px 1fr 1fr 1fr;
  gap: 40px;
  padding: 32px 0;
  border-bottom: 1px solid var(--line);
  align-items: flex-start;
}
.month:last-child { border-bottom: 0; }

.when { position: sticky; top: 20px; display: flex; flex-direction: column; gap: 6px; }
.when .yr { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .24em; color: var(--blue); }
.when .mo { font-family: 'Cormorant Garamond', serif; font-size: 28px; color: var(--ink-2); line-height: 1.1; }
.mo-jp { font-size: 14px; color: var(--ink-2); opacity: .7; margin-top: 4px; }

.col h4 { font-family: 'Work Sans', sans-serif; font-weight: 500; font-size: 10px; letter-spacing: .36em; text-transform: uppercase; color: var(--blue); margin: 0 0 14px 0; padding-bottom: 10px; border-bottom: 1px solid var(--line); }
.col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.col li { font-family: 'Cormorant Garamond', serif; font-size: 17px; line-height: 1.35; color: var(--ink-2); }
.col li .by { display: block; font-family: 'Work Sans', sans-serif; font-size: 11px; color: var(--blue); letter-spacing: .04em; margin-top: 2px; opacity: .85; }
.col li.jpterm { font-family: 'Noto Serif JP', serif; font-size: 20px; }
.col li.empty { color: var(--blue); font-style: italic; font-size: 15px; }

.foot {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 8% 32px 8%;
  font-size: 10.5px; letter-spacing: .28em; text-transform: uppercase; color: var(--blue);
  background: var(--paper-2); border-top: 1px solid var(--line);
}
.foot .mid { font-family: 'Noto Serif JP', serif; text-transform: none; letter-spacing: .12em; color: var(--ink-2); opacity: .7; }

@media (max-width: 960px) {
  .nav { padding: 20px 24px; flex-wrap: wrap; gap: 14px; }
  .nav-links { order: 3; width: 100%; justify-content: flex-start; gap: 18px; }
  .header { grid-template-columns: 1fr; padding: 40px 24px 32px 24px; }
  .header .kanji { font-size: 48px; }
  .stream { padding: 32px 24px 48px 24px; }
  .month { grid-template-columns: 1fr; gap: 18px; padding: 24px 0; }
  .when { position: static; flex-direction: row; align-items: baseline; gap: 12px; }
  .foot { padding: 16px 24px 24px; flex-direction: column; gap: 8px; align-items: flex-start; }
}
</style>
