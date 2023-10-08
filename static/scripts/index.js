(function () {

    const SKILLS = [
        { path: ['./static/img/skills/html.png', './static./img/skills/css.png'], name: 'HTML & CSS' },
        { path: './static/img/skills/js.png', name: 'JavaScript' },
        { path: './static/img/skills/react.png', name: 'React JS' },
        { path: './static/img/skills/node.png', name: 'Node JS' },
        { path: './static/img/skills/expo.png', name: 'Expo & React Native' },
        { path: './static/img/skills/php.png', name: 'PHP' },
        { path: './static/img/skills/laravel.png', name: 'Laravel' },
        { path: './static/img/skills/python.png', name: 'Python & Django' },
        { path: './static/img/skills/c.png', name: 'C++' },
        { path: './static/img/skills/sql.png', name: 'SQL' },
        { path: './static/img/skills/mysql.png', name: 'MySQL' },
        { path: './static/img/skills/postgresql.png', name: 'PostgreSQL' }
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

        SKILLS.forEach(({ path, name }) => {
            let pathCtx = ''

            pathCtx = Array.isArray(path) ? path.map(el => `<img src="${el}" alt="html" />`) : `<img src="${path}" alt="html" />`

            document.querySelector('.skills__wrap').innerHTML += `
                <div class="skills__item">
                    <span class="skills__img">${Array.isArray(path) ? pathCtx.join(' ') : pathCtx}</span>
                    <p class="skills__name">${name}</p>
                </div>
            `

        })

    })

})()
