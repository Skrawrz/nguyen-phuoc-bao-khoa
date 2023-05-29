export default class Slickslider {
    constructor () {
      this.$this = $('.mod-Slickslider')
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
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass:'dotsC',
        prevArrow: '<button class="slick-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>'
      })
    }
  }
  new Slickslider().init()