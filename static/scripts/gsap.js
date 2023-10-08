(function () {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    if (ScrollTrigger.isTouch !== 1) {

        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true
        })

        gsap.fromTo('.hero__wrapper', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero__wrapper',
                start: 'center',
                end: 'bottom',
                scrub: true
            }
        })

    }

})()


