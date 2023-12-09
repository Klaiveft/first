// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "public/css/templatemo-hexashop.css",
    "public/css/bootstrap.min.css",
    "public/css/font-awesome.css",
    "public/css/owl-carousel.css",
    "public/css/lightbox.css",
    "public/css/flex-slider.css",
  ],
  head: {
    script: [
      {src: "/js/jquery-2.1.0.min.js",
        type: "text/javascript"},
{src: "/js/bootstrap.min.js",
        type: "text/javascript"},
{src: "/js/popper.js",
        type: "text/javascript"},
{src: "/js/accordions.js",
        type: "text/javascript"},
{src: "/js/owl-carousel.js",
        type: "text/javascript"},
{src: "/js/datepicker.js",
        type: "text/javascript"},
{src: "/js/scrollreveal.min.js",
        type: "text/javascript"},
{src: "/js/waypoints.min.js",
        type: "text/javascript"},
{src: "/js/jquery.counterup.min.js",
        type: "text/javascript"},
{src: "/js/imgfix.min.js",
        type: "text/javascript"},
{src: "/js/slick.js",
        type: "text/javascript"},
{src: "/js/lightbox.js",
        type: "text/javascript"},
{src: "/js/isotope.js",
        type: "text/javascript"},
{src: "/js/custom.js",
        type: "text/javascript"},
    ]
  }
});
