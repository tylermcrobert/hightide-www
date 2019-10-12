export default class Swiper {
  constructor() {
    this.width = 0
    this.distance = 0
  }

  register(el) {
    this.el = el
    this.setWidth()
    this.addListners()
  }

  setTranslateVal() {
    const dist = this.el.style.transform.split('(')[1].split('px')[0]
    const parsedDist = parseInt(dist, 0)
    this.distance = parsedDist
  }

  swipe = delta => {
    const adv = this.distance + delta
    this.setX(adv)
  }

  setSlide(dist) {
    this.setX(dist)
    this.setTranslateVal()
  }

  setX = dist => {
    this.el.style.transform = `translateX(${dist}px)`
  }

  addListners = () => {
    window.addEventListener('resize', this.handleResize)
  }

  removeListeners = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  setWidth = () => {
    this.width = this.el.offsetWidth
  }

  handleResize = () => {
    this.setWidth()
  }
}
