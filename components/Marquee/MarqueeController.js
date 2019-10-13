export default class MarqueeController {
  init(container, speed = 1) {
    this.container = container
    this.wrapper = this.container.querySelector('.mq-wrapper')
    this.inner = this.container.querySelector('.mq-inner')

    this.speed = speed

    this._addListeners()
    this._setWrapperWidth()
    this._setAnimSpeed()
  }

  _addListeners = () => {
    window.addEventListener('resize', this._handleResize)
  }

  _removeListeners = () => {
    window.removeEventListener('resize', this._handleResize)
  }

  _handleResize = () => {
    this._setWrapperWidth()
    this._setAnimSpeed()
  }

  _setAnimSpeed = () => {
    const speed = this.containerWidth / (250 * this.speed)
    this.wrapper.style.animationDuration = `${speed}s`
  }

  _setWrapperWidth = () => {
    this.containerWidth = this.inner.offsetWidth * 2
    this.wrapper.style.width = `${this.containerWidth}px`
  }

  destroy() {
    this._removeListeners()
  }
}
