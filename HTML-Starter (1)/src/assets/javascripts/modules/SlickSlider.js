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
        mobileFirst: true,
        slidesToShow:3,
        dotsClass:'dotsC',
        prevArrow: '<button class="slick-prev arrows h1 text-blue-800"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next arrows h1 text-blue-800"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
        responsive: [
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
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      })
    }
  }
  new SlickSlider().init()


 