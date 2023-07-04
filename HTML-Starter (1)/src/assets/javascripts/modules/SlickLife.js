export default class SlickLife {
  constructor () {
    this.$this = $('.mod-Slick-Life')
  }
  init () {
    if (this.$this.length) {
      this.addSlick()
    }
  }
  addSlick () {
    this.$this.find('.slider2').slick({
      rows: 0,
      arrows:true,
      dots:true,
      mobileFirst: true,
      slidesToShow:3,
      dotsClass:'dotsCss',
      prevArrow: '<button class="slick-prev arrows h2 text-blue-800"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
      nextArrow: '<button class="slick-next arrows h2 text-blue-800"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
      responsive: [
        {
          breakpoint: 319,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 413,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll:1,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            infinite: true,
            dots: true,
            variableWidth: true
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })
  }
}
new SlickLife().init()


