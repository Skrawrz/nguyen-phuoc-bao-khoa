export default class SlickSlider {
    constructor () {
      this.$this = $('.mod-SlickSlider')
    }
    init () {
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick () {
      this.$this.find('.slider').slick({
        rows: 0,
        adaptiveHeight: true,
        arrows:true,
        dots:true,
        slidesToShow:3,
        dotsClass:'dotsC',
        prevArrow: '<button class="slick-prev arrows h1 text-blue-800"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next arrows h1 text-blue-800"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>'
      })
    }
  }
  new SlickSlider().init()


 