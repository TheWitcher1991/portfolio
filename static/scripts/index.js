(function () {

    const SKILLS = [
        {path: './static/img/skills/react.png', name: 'React JS'},
        {path: './static/img/skills/next.png', name: 'Next JS'},
        {path: './static/img/skills/dj.png', name: 'Django'},
        {path: './static/img/skills/asp.png', name: 'ASP.NET Core'},
        {path: './static/img/skills/nest.png', name: 'Nest JS'},
        {path: './static/img/skills/fastapi.svg', name: 'FastAPI'},
        {path: './static/img/skills/node.png', name: 'Node JS'},
        {path: ['./static/img/skills/html.png', './static/img/skills/css.png'], name: 'HTML & CSS'},
        {path: './static/img/skills/js.png', name: 'JavaScript'},
        {path: './static/img/skills/ts.png', name: 'TypeScript'},
        {path: './static/img/skills/python.png', name: 'Python'},
        {path: './static/img/skills/c.png', name: 'C++'},
        {path: './static/img/skills/php.png', name: 'PHP'},
        {path: './static/img/skills/sql.png', name: 'SQL'},
        {path: './static/img/skills/mysql.png', name: 'MySQL'},
        {path: './static/img/skills/postgresql.png', name: 'PostgreSQL'},
        {path: './static/img/skills/redis.png', name: 'Redis'},
        {path: './static/img/skills/rabbit.png', name: 'RabbitMQ'},
        {path: './static/img/skills/docker.webp', name: 'Docker'},
        {path: './static/img/skills/nginx.webp', name: 'Nginx'},
    ]

    const PROJECTS = [
        {
            name: 'TalentSpot $',
            desc: 'HR-Tech & Ed-Tech project (React & Django)',
            path: './static/img/project/talentspot-mockup.png',
            pos: 'left',
            link: {
                type: 'link',
                url: 'https://talentspot.ru'
            }
        },
        {
            name: 'Startup center StGAU $',
            desc: 'Ed-Tech project (Next.js & Nest.JS)',
            path: './static/img/project/learn-mockup.png',
            pos: 'right',
            link: {
                type: 'link',
                url: 'https://tk.stgau.ru'
            }
        },
        {
            name: 'PAPS $',
            desc: 'AI & AgriTech project (Next.js & Django & PyTorch)',
            path: './static/img/project/paps-mockup.jpg',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991'
            }
        },
        {
            name: 'HeyHey $',
            desc: 'HealthTech project (Next.js & Django)',
            path: './static/img/project/heyhey-mockup.png',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991'
            }
        },
        {
            name: 'HeyHey Telegram App $',
            desc: 'HealthTech  project (React & Django)',
            path: './static/img/project/heyhey-tg-mockup.jpg',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991'
            }
        },
        {
            name: 'Prostoprobuy $',
            desc: 'Web-tech project (Next.js & Django)',
            path: './static/img/project/actors-mockup.png',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991'
            }
        },
        {
            name: 'Prostoprobuy Telegram App $',
            desc: 'Web-tech project (React & Django)',
            path: './static/img/project/actors-tg-mockup.png',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991'
            }
        },
        {
            name: 'Stroy',
            desc: 'ECM system (Next.js & Django)',
            path: './static/img/project/stroy-mockup.png',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/stroy'
            }
        },
        {
            name: 'Sandbox FGIS',
            desc: 'Emulation of work with FGIS (Next.js & FastAPI)',
            path: './static/img/project/fgis-mockup.png',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/sandbox-fgis'
            }
        },
        {
            name: 'DoctorFit',
            desc: 'Definition of plant diseases (Flutter & Next.js & FastAPI)',
            path: './static/img/project/doctorfit-mockup-2.jpg',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/doctor-fit'
            }
        },
        {
            name: 'MyFarm',
            desc: 'Optimization of animal husbandry (Next.js & Django)',
            path: './static/img/project/myfarm-mockup.png',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/my-farm'
            }
        },
        {
            name: 'DevOops manager',
            desc: 'Event platform (Next.js & ASP.NET Core)',
            path: './static/img/project/stroy-mockup.png',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/dev-oops-manager'
            }
        },
        {
            name: 'Online library',
            desc: 'Web-tech project (Next.js & ASP.NET Core)',
            path: './static/img/project/lib-mockup.png',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/fullstack-nextjs-asp-net-core'
            }
        },
        {
            name: 'Lister',
            desc: 'File manager project (Electron & Node.js)',
            path: './static/img/project/litser-mockup.png',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/file-manager-nodejs'
            }
        },
        {
            name: 'REENSQ',
            desc: 'Forum project (PHP)',
            path: './static/img/project/reensq.jpg',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/REENSQ'
            }
        },
        {
            name: 'StgauJob $',
            desc: 'HR-Tech project (PHP)',
            path: './static/img/project/job.stgau-mockup.png',
            pos: 'right',
            link: {
                type: 'link',
                url: 'https://job.stgau.ru'
            }
        },
        {
            name: 'StGAU.Navigator',
            desc: 'Mobile app project (React Native)',
            path: './static/img/project/stgau.navigator-mockup.png',
            pos: 'left',
            link: {
                type: 'left',
                url: 'https://github.com/TheWitcher1991/stgau.navigator'
            }
        },
    ]

    const LANDINGS = [
        {name: 'EcoLyra', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'NextVita', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'ApiVet', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'BeeProtein', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'VitroBerry', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'UMP', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'Pvo26', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'Sandbox FGIS', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'Refract AI', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'DoctorFit', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'RootBerry', path: './static/img/landing/placeholder.svg', url: '#'},
        {name: 'PAMP', path: './static/img/landing/placeholder.svg', url: '#'},
    ]

    const LIBRARIES = [
        {name: 'modelstack', desc: 'It is a type-safe toolkit for working with entities at the frontend application level', url: '#'},
        {name: 'crono', desc: 'Interactive cron schedule builder', url: '#'},
        {name: 'craq', desc: 'Типобезопасные React Query хуки + Repository паттерн для CRUD на axios', url: '#'},
        {name: 'max-apps.js', desc: 'TypeScript библиотеки для разработки Mini Apps на платформе MAX', url: '#'},
        {name: 'clean-django', desc: 'Django clean architecture toolkit', url: '#'},
        {name: 't-kassa-widget', desc: 'React component for using t-kassa sdk', url: '#'},
        {name: 'use-yandex-cloud-video', desc: 'React hook for using yandex cloud video sdk', url: '#'},
        {name: 'redis-task-queue', desc: 'Distributed task queue on С++', url: '#'},
        {name: 'gross-js', desc: 'This is a plugin that speeds up work with some code. He is very similar to jQuery', url: '#'},
        {name: 'arise-js', desc: 'This is a plugin for creating various (customizable) pop-ups that can be added to a website or web application', url: '#'},
        {name: 'HTMLREditor', desc: 'WYSIWYG editor for creating comments and primitive web pages', url: '#'},
    ]

    document.addEventListener('DOMContentLoaded', function () {

        document.querySelectorAll('a[href^="#"]').forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                const id = el.getAttribute('href')

                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        })

        const projectWrap = document.querySelector('.project__wrap')
        if (projectWrap) {
        PROJECTS.forEach(({name, desc, link, path, pos}) => {
            const pathCtx = `<img src="${path}" alt="html" />`
            const itemClass = pos === 'left' ? 'project__left' : 'project__right'
            const fadeClass = pos === 'left' ? 'fadeInLeft' : 'fadeInRight'

            document.querySelector('.project__wrap').innerHTML += `
                <div class="project__item ${itemClass} wow ${fadeClass}">
                    ${pos === 'left' ? pathCtx : ''}
                    <div class="project__text" data-speed="1.1">
                        <span class="project__name">${name}</span>
                        <p class="project__exp">${desc}</p>
                        <a target="_blank" href="${link.url}">
                            ${pos === 'right' ? '<img class="pr__left" src="./static/img/left.png" alt="left">' : ''}
                            <img src="./static/img/github.png" alt="github">
                            ${pos === 'left' ? '<img class="pr__right" src="./static/img/right.png" alt="right">' : ''}
                        </a>
                    </div>
                     ${pos === 'right' ? pathCtx : ''}
                </div>
            `

        })
        }

        const skillsWrap = document.querySelector('.skills__wrap')
        if (skillsWrap) {
        SKILLS.forEach(({path, name}) => {
            const pathCtx = Array.isArray(path) ? path.map(el => `<img src="${el}" alt="html" />`) : `<img src="${path}" alt="html" />`

            document.querySelector('.skills__wrap').innerHTML += `
                <div class="skills__item">
                    <span class="skills__img">${Array.isArray(path) ? pathCtx.join(' ') : pathCtx}</span>
                    <p class="skills__name">${name}</p>
                </div>
            `

        })
        }

        document.querySelectorAll('.tab__btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab__btn').forEach(b => {
                    b.classList.remove('is-active')
                    b.setAttribute('aria-selected', 'false')
                })
                btn.classList.add('is-active')
                btn.setAttribute('aria-selected', 'true')

                document.querySelectorAll('.tab__panel').forEach(panel => {
                    panel.classList.toggle('is-active', panel.id === 'tab-' + btn.dataset.tab)
                })
            })
        })

        LANDINGS.forEach(({name, path, url}) => {
            const wrap = document.querySelector('.landings__list')
            if (!wrap) return

            wrap.innerHTML += `
                <a class="landing-card" href="${url}" target="_blank">
                    <div class="landing-card__media">
                        <img src="${path}" alt="${name}" loading="lazy" />
                    </div>
                    <div class="landing-card__body">
                        <h3 class="landing-card__title">${name}</h3>
                        <span class="landing-card__link">
                            View design
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </span>
                    </div>
                </a>
            `
        })

        LIBRARIES.forEach(({name, desc, url}) => {
            const wrap = document.querySelector('.libraries__list')
            if (!wrap) return

            wrap.innerHTML += `
                <div class="lib-card">
                    <div class="lib-card__body">
                        <h3 class="lib-card__title">${name}</h3>
                        <p class="lib-card__desc">${desc}</p>
                    </div>
                    <a class="lib-card__link" href="${url}" target="_blank">
                        GitHub
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
            `
        })

    })

})()
