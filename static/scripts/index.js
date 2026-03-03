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
            path: './static/img/project/stroy-mockup.png',
            pos: 'left',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/sandbox-fgis'
            }
        },
        {
            name: 'DoctorFit',
            desc: 'Definition of plant diseases (Flutter & Next.js & FastAPI)',
            path: './static/img/project/doctorfit-mockup.png',
            pos: 'right',
            link: {
                type: 'github',
                url: 'https://github.com/TheWitcher1991/doctor-fit'
            }
        },
        {
            name: 'My farm',
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

        SKILLS.forEach(({path, name}) => {
            const pathCtx = Array.isArray(path) ? path.map(el => `<img src="${el}" alt="html" />`) : `<img src="${path}" alt="html" />`

            document.querySelector('.skills__wrap').innerHTML += `
                <div class="skills__item">
                    <span class="skills__img">${Array.isArray(path) ? pathCtx.join(' ') : pathCtx}</span>
                    <p class="skills__name">${name}</p>
                </div>
            `

        })

    })

})()
