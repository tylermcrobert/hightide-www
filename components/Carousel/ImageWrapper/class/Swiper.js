export default class Swiper {
  constructor() {
    this.dist = 0
    this.width = 0
  }

  register(el) {
    this.el = el
    this.setWidth()
  }

  swipe = delta => {
    const adv = this.dist + delta
    this.setY(adv)
  }

  setY = dist => {
    this.el.style.transform = `translate3d(${dist}px, 0, 0)`
  }

  recordDist = dist => {
    this.dist = this.dist + dist
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
