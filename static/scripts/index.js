(function () {
  const PROJECTS = [
    { name: 'TalentSpot', desc: 'Recruiting and learning platform that helps teams discover talent and gives candidates a path to professional growth.', image: './static/img/project/talentspot-mockup.png', tags: ['React', 'Django'], url: 'https://talentspot.ru', linkLabel: 'talentspot.ru', featured: true },
    { name: 'Startup Center StGAU', desc: 'University platform for publishing startup initiatives, supporting student teams, and coordinating project work.', image: './static/img/project/learn-startup-mockup.png', tags: ['Next.js', 'Nest JS'], url: 'https://tk.stgau.ru', linkLabel: 'tk.stgau.ru', featured: true },
    { name: 'HeyHey', desc: 'Health and wellness product that brings personal routines, recommendations, and progress into one service.', image: './static/img/project/heyhey-mockup.png', tags: ['Next.js', 'Django'], url: 'https://heyhey.ru', linkLabel: 'heyhey.ru', featured: true },
    { name: 'SGM', desc: 'Merch store for a community of young entrepreneurs, built around its identity, products, and member culture.', image: './static/img/landing/sgm-mockup.png', tags: ['React', 'Node.js'], url: 'https://startap-golovnogo-mozga.ru', linkLabel: 'startap-golovnogo-mozga.ru', featured: true },
    { name: 'Project Space StGAU', desc: 'Shared workspace for university teams to organize initiatives, coordinate contributors, and track project progress.', image: './static/img/project/project-space-mockup.webp', tags: ['Next.js', 'Nest JS'], url: 'https://pm.stgau.ru', linkLabel: 'pm.stgau.ru' },
    { name: 'EntryPoint', desc: 'Turns practical IT tasks into verifiable experience for candidates and a clearer hiring signal for teams.', image: './static/img/project/entry-point-mockup.png', tags: ['Next.js', 'FastAPI'], url: 'https://github.com/TheWitcher1991', linkLabel: 'GitHub' },
    { name: 'PAPS', desc: 'AI-assisted agriculture product for analyzing plant conditions and supporting faster field decisions.', image: './static/img/project/paps-mockup.jpg', tags: ['Next.js', 'Django', 'PyTorch'], url: 'https://github.com/TheWitcher1991', linkLabel: 'GitHub' },
    { name: 'HeyHey Telegram App', desc: 'Telegram Mini App that gives users access to HeyHey health workflows without leaving the messenger.', image: './static/img/project/heyhey-tg-mockup.jpg', tags: ['React', 'Django'], url: 'https://heyhey.ru', linkLabel: 'heyhey.ru' },
    { name: 'Prostoprobuy', desc: 'Online shopping service focused on product discovery and a shorter path from catalog to purchase.', image: './static/img/project/actors-mockup.png', tags: ['Next.js', 'Django'], url: 'https://github.com/TheWitcher1991', linkLabel: 'GitHub' },
    { name: 'Prostoprobuy Telegram App', desc: 'Mini App for browsing products and shopping inside Telegram, with the same flow adapted to a messenger interface.', image: './static/img/project/actors-tg-mockup.png', tags: ['React', 'Django'], url: 'https://github.com/TheWitcher1991', linkLabel: 'GitHub' },
    { name: 'Stroy', desc: 'Document management workspace for construction teams, replacing scattered files and approval threads with one process.', image: './static/img/project/stroy-mockup.png', tags: ['Next.js', 'Django'], url: 'https://github.com/TheWitcher1991/stroy', linkLabel: 'GitHub' },
    { name: 'Sandbox FGIS', desc: 'Local FGIS simulator for testing integrations and user flows before connecting to production services.', image: './static/img/project/fgis-mockup.png', tags: ['Next.js', 'FastAPI'], url: 'https://github.com/TheWitcher1991/sandbox-fgis', linkLabel: 'GitHub' },
    { name: 'DoctorFit PWA', desc: 'Cross-platform tool that analyzes plant photos and returns an AI-assisted disease assessment.', image: './static/img/project/doctorfit-mockup-2.jpg', tags: ['Flutter', 'Next.js', 'FastAPI'], url: 'https://github.com/TheWitcher1991/doctor-fit', linkLabel: 'GitHub' },
    { name: 'DoctorFit Web', desc: 'Web interface for reviewing plant diagnostics, organizing cases, and connecting AI analysis to the user workflow.', image: './static/img/project/doctor-fit-web.png', tags: ['Next.js', 'FastAPI'], url: 'https://github.com/TheWitcher1991', linkLabel: 'GitHub' },
    { name: 'MyFarm', desc: 'Farm management platform for tracking livestock operations and making day-to-day decisions from one workspace.', image: './static/img/project/myfarm-mockup.png', tags: ['Next.js', 'Django'], url: 'https://myfarm360.ru', linkLabel: 'myfarm360.ru' },
    { name: 'DevOops Manager', desc: 'Event management platform for planning conferences, coordinating speakers, and publishing event information.', image: './static/img/project/stgau.ino-mockup.png', tags: ['Next.js', 'ASP.NET Core'], url: 'https://github.com/TheWitcher1991/dev-oops-manager', linkLabel: 'GitHub' },
    { name: 'Online Library', desc: 'Searchable digital library with catalog browsing and structured information about books and collections.', image: './static/img/project/lib-mockup.png', tags: ['Next.js', 'ASP.NET Core'], url: 'https://github.com/TheWitcher1991/fullstack-nextjs-asp-net-core', linkLabel: 'GitHub' },
    { name: 'Lister', desc: 'Lightweight desktop file manager for organizing local files through an Electron interface.', image: './static/img/project/litser-mockup.png', tags: ['Electron', 'Node.js'], url: 'https://github.com/TheWitcher1991/file-manager-nodejs', linkLabel: 'GitHub' },
    { name: 'REENSQ', desc: 'Forum for publishing topics, discussing ideas, and building a searchable archive of community conversations.', image: './static/img/project/reensq-mockup.jpg', tags: ['PHP'], url: 'https://github.com/TheWitcher1991/REENSQ', linkLabel: 'GitHub' },
    { name: 'StgauJob', desc: 'Job board connecting students and graduates with internships and early-career opportunities.', image: './static/img/project/job.stgau-mockup.png', tags: ['PHP'], url: 'https://job.stgau.ru', linkLabel: 'job.stgau.ru' },
    { name: 'StGAU.Navigator', desc: 'Mobile campus guide for finding university locations and navigating between them.', image: './static/img/project/stgau.navigator-mockup.png', tags: ['React Native'], url: 'https://github.com/TheWitcher1991/stgau.navigator', linkLabel: 'GitHub' },
  ]

  const SKILL_GROUPS = [
    { name: 'Core Stack', skills: [['React', '#61DAFB'], ['Next.js', '#000000'], ['TypeScript', '#3178C6'], ['JavaScript', '#F7DF1E'], ['Python', '#306998'], ['Django', '#092E20'], ['FastAPI', '#000000'], ['PostgreSQL', '#336791'], ['Docker', '#2496ED'], ['Git', '#F05032']] },
    { name: 'Backend & Integrations', skills: [['Node.js', '#339933'], ['Nest JS', '#E0234E'], ['C#', '#239120'], ['ASP.NET Core', '#512BD4'], ['RabbitMQ', '#FF6600'], ['WebSocket', '#0DB7ED']] },
    { name: 'Data & AI', skills: [['SQL', '#E48E00'], ['MySQL', '#4479A1'], ['MongoDB', '#47A248'], ['Redis', '#DC382D'], ['PyTorch', '#EE4C2C'], ['LLM', '#412991'], ['CNN / Deep Learning', '#FF6F00']] },
    { name: 'AI-assisted Development', skills: [['Codex', '#111827'], ['Cursor', '#2F80ED'], ['Agent Skills', '#C29A8A']] },
    { name: 'Infrastructure', skills: [['Kubernetes', '#326CE5'], ['GitHub Actions', '#181717'], ['Nginx', '#FF6600']] },
    { name: 'Additional Platforms', skills: [['Vue.js', '#4FC08D'], ['Tailwind CSS', '#06B6D4'], ['HTML & CSS', '#E34F26'], ['PHP', '#777BB4'], ['C++', '#00599C'], ['React Native', '#FF4154'], ['Flutter', '#02569B'], ['Electron', '#47848F']] },
    { name: 'Ways of Working', skills: [['Jira', '#0052CC'], ['Scrum', '#6DB33F'], ['Agile', '#0098D4']] },
  ]

  const LANDINGS = [
    'EcoLyra', 'NextVita', 'ApiVet', 'BeeProtein', 'VitroBerry', 'UMP', 'Pvo26',
    'Sandbox FGIS', 'Refract AI', 'DoctorFit', 'RootBerry', 'PAMP',
  ].map((name) => ({ name, path: './static/img/landing/placeholder.svg', url: '#' }))

  const LIBRARIES = [
    ['cvatkit', 'Python integration layer for sending datasets, tasks, and annotations between an application and CVAT'],
    ['modelstack', 'Type-safe frontend toolkit for describing entities, repositories, and application-level data access'],
    ['crono', 'Interactive cron expression builder with a visual schedule preview'],
    ['craq', 'Typed React Query hooks and repository helpers for Axios-based CRUD flows'],
    ['max-apps.js', 'TypeScript building blocks for developing Mini Apps on the MAX platform'],
    ['clean-django', 'Django toolkit for separating domain logic, application services, and infrastructure code'],
    ['t-kassa-widget', 'React component that wraps the T-Kassa SDK into a reusable checkout widget'],
    ['use-yandex-cloud-video', 'React hook for loading and controlling Yandex Cloud Video playback'],
    ['redis-task-queue', 'C++ distributed task queue backed by Redis for running work outside the request cycle'],
    ['gross-js', 'Small DOM and utility helpers for reducing repetitive browser-side code'],
    ['arise-js', 'Configurable popup system for dialogs, notifications, and custom web application overlays'],
    ['HTMLREditor', 'Lightweight WYSIWYG editor for composing comments and simple HTML pages'],
  ].map(([name, desc]) => ({ name, desc, url: '#' }))

  const externalLinkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'

  const escapeHTML = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

  function renderProjects() {
    const wrap = document.querySelector('.projects__grid')
    if (!wrap) return

    wrap.innerHTML = PROJECTS.map(({ name, desc, image, tags, url, linkLabel, featured }) => `
      <article class="card ${featured ? 'card--featured' : ''} reveal">
        <div class="card__media">
          <img src="${escapeHTML(image)}" alt="${escapeHTML(name)} project preview" loading="lazy" />
        </div>
        <h3 class="card__title">${escapeHTML(name)}</h3>
        <p class="card__desc">${escapeHTML(desc)}</p>
        <div class="card__tags">
          ${tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join('')}
        </div>
        <a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" class="card__link">
          ${escapeHTML(linkLabel)}
          ${externalLinkIcon}
        </a>
      </article>
    `).join('')
  }

  function renderSkills() {
    const wrap = document.querySelector('.skills__list')
    if (!wrap) return

    wrap.innerHTML = SKILL_GROUPS.map(({ name, skills }) => `
      <div class="skills__category">
        <h3 class="skills__category-title">${escapeHTML(name)}</h3>
        <div class="skills__grid">
          ${skills.map(([skill, color]) => `<span class="skill-badge"><span class="skill-badge__dot" style="background:${escapeHTML(color)};"></span>${escapeHTML(skill)}</span>`).join('')}
        </div>
      </div>
    `).join('')
  }

  function renderLandings() {
    const wrap = document.querySelector('.landings__list')
    if (!wrap) return

    wrap.innerHTML = LANDINGS.map(({ name, path, url }) => `
      <a class="landing-card" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">
        <div class="landing-card__media"><img src="${escapeHTML(path)}" alt="${escapeHTML(name)}" loading="lazy" /></div>
        <div class="landing-card__body"><h3 class="landing-card__title">${escapeHTML(name)}</h3><span class="landing-card__link">View design ${externalLinkIcon}</span></div>
      </a>
    `).join('')
  }

  function renderLibraries() {
    const wrap = document.querySelector('.libraries__list')
    if (!wrap) return

    wrap.innerHTML = LIBRARIES.map(({ name, desc, url }) => `
      <article class="lib-card">
        <div class="lib-card__body"><h3 class="lib-card__title">${escapeHTML(name)}</h3><p class="lib-card__desc">${escapeHTML(desc)}</p></div>
        <a class="lib-card__link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">GitHub ${externalLinkIcon}</a>
      </article>
    `).join('')
  }

  function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'))
        if (!target) return
        event.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
  }

  function setupTabs() {
    document.querySelectorAll('.tab__btn').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.tab__btn').forEach((item) => {
          item.classList.toggle('is-active', item === button)
          item.setAttribute('aria-selected', String(item === button))
        })
        document.querySelectorAll('.tab__panel').forEach((panel) => {
          panel.classList.toggle('is-active', panel.id === `tab-${button.dataset.tab}`)
        })
      })
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProjects()
    renderSkills()
    renderLandings()
    renderLibraries()
    setupNavigation()
    setupTabs()
  })
})()
