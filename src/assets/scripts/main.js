import 'lazysizes'
import UIkit from 'uikit'
import { App, Quiz, Form } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()

    document.querySelectorAll(`a[href="tel:+380638671191"]`).forEach(el => {
        el.addEventListener('click', () => ym(72786013,'reachGoal','call'))
    })

    // QUIZ
    const quiz1 = new Quiz({
        selector: `#quiz-1`,
        startSlide: 1
    })
    quiz1.create()

    const quiz2 = new Quiz({
        selector: `#quiz-2`,
        startSlide: 1
    })
    quiz2.create()

    const quiz3 = new Quiz({
        selector: `#quiz-3`,
        startSlide: 1
    })
    quiz3.create()
    //выбор мебели

    document.querySelectorAll(`.quiz__counter-minus`).forEach( (elem) => {
        elem.addEventListener(`click`, (event) => {
            const target = event.currentTarget
            const item = target.closest(`.quiz__counter-item`)
            let number = +item.querySelector(`.quiz__counter-number`).textContent
            if (number == 1) {
                item.classList.remove(`quiz-active`)
            }
            if (number > 0) {
                item.setAttribute("data-value", number - 1)
                item.querySelector(`.quiz__counter-number`).textContent = number - 1
            }
            
        })
    })
    document.querySelectorAll(`.quiz__counter-plus`).forEach( (elem) => {
        elem.addEventListener(`click`, (event) => {
            const target = event.currentTarget
            const item = target.closest(`.quiz__counter-item`)
            let number = +item.querySelector(`.quiz__counter-number`).textContent
            if (number == 0) {
                item.classList.add(`quiz-active`)
            }
            item.setAttribute("data-value", number + 1)
            item.querySelector(`.quiz__counter-number`).textContent = number + 1
        })
    })

    const quiz4 = new Quiz({
        selector: `#quiz-4`,
        startSlide: 1
    })
    quiz4.create()
    
    

    // app.matchMediaListener(app.md, () => location.reload(), () => location.reload())
    // app.matchMediaListener(app.lg, () => location.reload(), () => location.reload())
    if (window.innerWidth < app.md) {
        UIkit.slider(`.s4__certificate-wrap`, {
            autoplay: true
        })
        UIkit.slider(`.s5__team-wrap`, {
            autoplay: true
        })
    } else if (window.innerWidth >= app.md && window.innerWidth < app.lg) {
        UIkit.slider(`.s5__team-wrap`, {
            autoplay: false,
            sets: true,
            center: true
        })
    } else if (window.innerWidth >= app.lg) {

    }
    if (window.innerWidth < app.lg) {
        UIkit.slider(`.s7__tab`, {
            autoplay: false,
            draggable: false,
            index: 1
        })
        // grab
        document.querySelectorAll(`.s7__slideshow`).forEach( (elem, idx) => {
            elem.addEventListener(`touchmove`, (event) => {
                event.currentTarget.querySelector(`.uk-active .s7__slideshow__hide-block`).style.width = `${event.touches[0].clientX}px`
                event.currentTarget.querySelector(`.s7__slideshowdrag`).style.left = `${event.touches[0].clientX}px`
            })
            elem.addEventListener(`beforeitemshow`, (event) => {
                event.currentTarget.querySelector(`.s7__slideshowdrag`).style.left = `50%`
                event.currentTarget.querySelectorAll(`.s7__slideshow__hide-block`).forEach(e => e.style.width = `50%`)
            })
        })

        //
        document.querySelector(`.s7__tab .slidenav-prev`).addEventListener(`click`, (event) => {
            const current = document.querySelector(`.s7__slideshow.active`)
            const prev = current.previousElementSibling
            current.classList.remove(`active`)
            if (prev != null) {
                prev.classList.add(`active`)
            } else {
                document.querySelector(`.s7__slideshow-wrap`).lastElementChild.classList.add(`active`)
            }
        })
        document.querySelector(`.s7__tab .slidenav-next`).addEventListener(`click`, (event) => {
            const current = document.querySelector(`.s7__slideshow.active`)
            const next = current.nextElementSibling
            current.classList.remove(`active`)
            if (next != null) {
                next.classList.add(`active`)
            } else {
                document.querySelector(`.s7__slideshow-wrap`).firstElementChild.classList.add(`active`)
            }
        })

        UIkit.slideshow(`.s8__slideshow`, {
            autoplay: false,
            animation: 'push',
            draggable: true,
            ratio: false
        })
    } else {
        document.querySelectorAll(`.s7__slideshow`).forEach( (elem, idx) => {
            elem.addEventListener(`mousemove`, (event) => {
                const node = event.target.nodeName
                if (node != `A` && node != `svg` && node != `path`) {
                    event.currentTarget.querySelector(`.uk-active .s7__slideshow__hide-block`).style.width = `${event.offsetX}px`
                    event.currentTarget.querySelector(`.s7__slideshowdrag`).style.left = `${event.offsetX}px`
                }
            })
            elem.addEventListener(`beforeitemshow`, (event) => {
                event.currentTarget.querySelector(`.s7__slideshowdrag`).style.left = `50%`
                event.currentTarget.querySelectorAll(`.s7__slideshow__hide-block`).forEach(e => e.style.width = `50%`)
            })
        })
        document.querySelectorAll(`.s7__tab-item a`).forEach( (elem, idx) => {
            elem.addEventListener(`click`, (event) => {
                event.preventDefault()
                document.querySelector(`.s7__tab-item.active`).classList.remove(`active`)
                event.currentTarget.parentElement.classList.add(`active`)
                document.querySelectorAll(`.s7__tab-item`).forEach( (elem, idx) => {
                    if (elem.classList.contains(`active`)) {
                        document.querySelector(`.s7__slideshow.active`).classList.remove(`active`)
                        document.querySelectorAll(`.s7__slideshow`)[idx].classList.add(`active`)
                    }
                })
            })
        })


        document.querySelectorAll(`.s3__item`).forEach( (elem) => {
            elem.addEventListener(`click`, (event) => {
                if (document.querySelector(`.s3__item.active`) != null) {
                    document.querySelector(`.s3__item.active`).classList.remove(`active`)
                }
                event.currentTarget.classList.add(`active`)
                
            })
        })


        UIkit.slideshow(`.s8__slideshow`, {
            autoplay: false,
            animation: 'push',
            draggable: false,
            ratio: false
        })

        document.querySelectorAll(`.s8__slideshow-navitem`).forEach( (elem, idx, parent) => {
            elem.addEventListener(`click`, (event) => {
                event.preventDefault()
                document.querySelector(`.s8__slideshow-navitem.active`).classList.remove(`active`)
                event.currentTarget.classList.add(`active`)
                document.querySelectorAll(`.s8__slideshow-navitem`).forEach( (elem, idx) => {
                    if (elem.classList.contains(`active`)) {
                        UIkit.slideshow(`.s8__slideshow`).show(idx)
                    }
                })
    
            })
        })
    }



    UIkit.slideshow(`.s7__slideshow`, {
        autoplay: false,
        animation: 'fade',
        draggable: false,
        ratio: false
    })


    UIkit.scrollspy(`.s11__map`)
    document.querySelector(`.s11__map`).addEventListener(`inview`, (event) => {
        document.querySelector(`.s11__map-script`).insertAdjacentHTML(`beforeend`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.5067930807736!2d32.06801302015278!3d49.44337410905408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d14b7c811c873d%3A0x6052c6a008731945!2z0YPQuy4g0KHQvNC10LvRj9C90YHQutCw0Y8sIDE1LCDQp9C10YDQutCw0YHRgdGLLCDQp9C10YDQutCw0YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDE4MDAx!5e0!3m2!1sru!2sru!4v1612765520263!5m2!1sru!2sru" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`)
    })


    UIkit.scrollspy(`#v-about`)
    document.querySelector(`#v-about`).addEventListener(`inview`, (event) => {
        document.querySelector(`#v-about .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/McoE4IXVyHk" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })
    

})
