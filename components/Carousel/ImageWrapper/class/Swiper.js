/* eslint-disable no-param-reassign */

export default class Swiper {
  constructor() {
    this.width = 0
    this.distance = 0
    this.swiping = false
  }

  _setTranslateVal() {
    const dist = this.el.style.transform.split('(')[1].split('px')[0]
    const parsedDist = parseInt(dist, 0)
    this.distance = parsedDist
  }

  _setX = dist => {
    this.el.style.transform = `translateX(${dist}px)`
  }

  _setWidth = () => {
    this.width = this.el.offsetWidth
  }

  _addListners = () => {
    window.addEventListener('resize', this._handleResize)
  }

  _handleResize = () => {
    this._setWidth()
  }

  /* sets pointer-events to slides */
  _setPointerEvents = (val = 'none') => {
    const slides = this.el.querySelectorAll('.slide')

    Array.prototype.forEach.call(slides, slide => {
      slide.style.pointerEvents = val
    })
  }

  /*
   *  Public Methods
   */

  register(el) {
    this.el = el
    this._setWidth()
    this._addListners()
  }

  swipe = delta => {
    const adv = this.distance + delta
    this._setX(adv)
    /* disable pointer events when swiping */
    this._setPointerEvents('none')
  }

  setSlide(dist) {
    this._setX(dist)
    this._setPointerEvents('inherit')
    this._setTranslateVal()
  }

  removeListeners = () => {
    window.removeEventListener('resize', this._handleResize)
  }
}
