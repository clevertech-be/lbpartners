/*----------------------------------------------
*
* [Main Scripts]
*
*
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. Preloader
2. Responsive Menu
3. Navigation
4. Slides
5. Particles
6. Progress Bar
7. Shuffle
8. Sign and Register Form
9. Simple Form
10. Recaptcha
11. Cookie Notice

----------------------------------------------*/

/*----------------------------------------------
1. Preloader
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  let preloader = $(".preloader");

  setTimeout(function () {
    preloader.addClass("ready");
  }, preloader.data("timeout"));
});

/*----------------------------------------------
2. Responsive Menu
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  function navResponsive() {
    let navbar = $(".navbar .items");
    let menu = $("#menu .items");

    menu.html("");
    navbar.clone().appendTo(menu);

    $(".menu .icon-arrow-right")
      .removeClass("icon-arrow-right")
      .addClass("icon-arrow-down");
  }

  navResponsive();

  $(window).on("resize", function () {
    navResponsive();
  });

  $(".menu .dropdown-menu").each(function () {
    var children = $(this).children(".dropdown").length;
    $(this).addClass("children-" + children);
  });

  $(".menu .nav-item.dropdown").each(function () {
    var children = $(this).children(".nav-link");
    children.addClass("prevent");
  });

  $(document).on("click", "#menu .nav-item .nav-link", function (e) {
    if ($(this).hasClass("prevent")) {
      e.preventDefault();
    }

    var nav_link = $(this);

    nav_link.next().toggleClass("show");

    if (nav_link.hasClass("smooth-anchor")) {
      $("#menu").modal("hide");
    }
  });
});

/*----------------------------------------------
3. Navigation
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  var position = $(window).scrollTop();
  var navbar = $(".navbar.sub");
  var toTop = $("#scroll-to-top");

  $(document).ready(function () {
    if (position > 0) {
      navbar.addClass("navbar-sticky");
    }
    toTop.hide();
  });

  $(window).scroll(function () {
    navbar.removeAttr("data-aos");
    navbar.removeAttr("data-aos-delay");

    var scroll = $(window).scrollTop();

    if (!navbar.hasClass("relative")) {
      // Down
      if (scroll > position && position > 0) {
        navbar.addClass("navbar-sticky");

        if (navbar.hasClass("navbar-fixed") || window.innerWidth <= 767) {
          navbar.removeClass("hidden").addClass("visible");
        } else {
          if ($(window).scrollTop() >= window.innerHeight) {
            navbar.removeClass("visible").addClass("hidden");
          }
        }

        toTop.fadeOut("fast");

        // Up
      } else {
        navbar.removeClass("hidden").addClass("visible");

        // Top
        if ($(window).scrollTop() <= 100) {
          navbar.removeClass("navbar-sticky");
        } else {
          if (!navbar.hasClass("navbar-no-fixed")) {
            navbar.addClass("visible");
          }
        }

        if (position >= window.innerHeight && window.innerWidth >= 767) {
          toTop.fadeIn("fast");
        } else {
          toTop.fadeOut("fast");
        }
      }
      position = scroll;
    }
  });

  $(".nav-link").each(function () {
    let href = $(this).attr("href");
    if (href.length > 1 && href.indexOf("#") != -1) {
      $(this).addClass("smooth-anchor");
    }
  });

  $(".nav-link").each(function () {
    if (this.hasAttribute("href")) {
      let href = $(this).attr("href");
      if (href.length > 1 && href.indexOf("#") != -1) {
        $(this).addClass("smooth-anchor");
      }
    }

    let body = $("body");

    if (this.hasAttribute("href") && !body.hasClass("home")) {
      let href = $(this).attr("href");
      if (href.length > 1 && href.indexOf("#") != -1) {
        $(this).removeClass("smooth-anchor");
        $(this).attr("href", "/" + href);
      }
    }
  });

  $(document).on("click", ".smooth-anchor", function (e) {
    e.preventDefault();

    let href = $(this).attr("href");
    let target = $.attr(this, "href");

    if ($(target).length > 0) {
      if (href.length > 1 && href.indexOf("#") != -1) {
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          500
        );
      }
    }
  });

  $(".dropdown-menu").each(function () {
    let dropdown = $(this);

    dropdown.hover(
      function () {
        dropdown.parent().find(".nav-link").first().addClass("active");
      },
      function () {
        dropdown.parent().find(".nav-link").first().removeClass("active");
      }
    );
  });

  let navbar_holder = $(".navbar-holder");
  let navbar_height = $(".navbar-expand.sub").outerHeight();

  if (navbar_holder.length > 0) {
    $(".navbar-holder").css("min-height", navbar_height);
  }
});

/*----------------------------------------------
4. Slides
----------------------------------------------*/

jQuery(function ($) {
  setTimeout(function () {
    $(".no-slider .left").addClass("init");
    $(".no-slider .right").addClass("init");
  }, 1200);

  var animation = function (slider) {
    let image = $(slider + " .swiper-slide-active img");
    let title = $(slider + " .title");
    let description = $(slider + " .description");
    let btn = $(slider + " .buttons");
    let nav = $(slider + " nav");

    image.toggleClass("aos-animate");
    title.toggleClass("aos-animate");
    description.toggleClass("aos-animate");
    btn.toggleClass("aos-animate");
    nav.toggleClass("aos-animate");

    setTimeout(function () {
      image.toggleClass("aos-animate");
      title.toggleClass("aos-animate");
      description.toggleClass("aos-animate");
      btn.toggleClass("aos-animate");
      nav.toggleClass("aos-animate");

      AOS.refresh();
    }, 100);

    if ($(".full-slider").hasClass("animation")) {
      $(".full-slider .left").addClass("off");
      $(".full-slider .left").removeClass("init");
      $(".full-slider .right").addClass("off");
      $(".full-slider .right").removeClass("init");

      setTimeout(function () {
        $(".full-slider .left").removeClass("off");
        $(".full-slider .right").removeClass("off");
      }, 200);

      setTimeout(function () {
        $(".full-slider .left").addClass("init");
        $(".full-slider .right").addClass("init");
      }, 1000);
    } else {
      $(".full-slider .left").addClass("init");
      $(".full-slider .right").addClass("init");
    }
  };

  var fullSlider = new Swiper(".full-slider", {
    autoplay: {
      delay: 10000,
    },
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: {
      el: ".full-slider .swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      init: function () {
        animation(".full-slider");
        let pagination = $(".full-slider .swiper-pagination");
        pagination.hide();

        setTimeout(function () {
          pagination.fadeIn("slow");
        }, 3600);
      },
      slideChange: function () {
        animation(".full-slider");

        let title = $(".full-slider .title");
        let description = $(".full-slider .description");
        let btn = $(".full-slider .buttons");

        title.attr("data-aos-delay", 400);
        description.attr("data-aos-delay", 800);
        btn.attr("data-aos-delay", 1200);
      },
    },
  });

  $(".mid-slider").each(function () {
    if ($(this).data("perview")) {
      var midPerView = $(this).data("perview");
    } else {
      var midPerView = 3;
    }

    var midSlider = new Swiper(this, {
      autoplay: false,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1023: {
          slidesPerView: midPerView,
          spaceBetween: 30,
        },
      },
    });
  });

  $(".min-slider").each(function () {
    if ($(this).data("perview")) {
      var minPerView = $(this).data("perview");
    } else {
      var minPerView = 6;
    }

    var minSlider = new Swiper(this, {
      autoplay: {
        delay: 5000,
      },
      loop: false,
      centerInsufficientSlides: true,
      slidesPerView: 2,
      spaceBetween: 15,
      breakpoints: {
        424: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1023: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1199: {
          slidesPerView: minPerView,
          spaceBetween: 15,
        },
      },
      pagination: false,
    });
  });

  var noSlider = new Swiper(".no-slider", {
    autoplay: false,
    loop: false,
    keyboard: false,
    grabCursor: false,
    allowTouchMove: false,
    on: {
      init: function () {
        animation(".no-slider");
      },
    },
  });
});

/*----------------------------------------------
5. Particles
----------------------------------------------*/

function particles(type, ID) {
  if (type === "default") {
    particlesJS(ID, {
      particles: {
        number: { value: 80, density: { enable: !0, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.25,
          random: !1,
          anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
        },
        size: {
          value: 5,
          random: !0,
          anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
        },
        line_linked: {
          enable: !0,
          distance: 150,
          color: "#ffffff",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 6,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: 0, mode: "repulse" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
      config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
  }

  if (type === "squares") {
    particlesJS(ID, {
      particles: {
        number: { value: 20, density: { enable: !0, value_area: 800 } },
        color: { value: "#21333e" },
        shape: {
          type: "edge",
          stroke: { width: 0, color: "#000" },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: { enable: !1, speed: 1, opacity_min: 0.05, sync: !1 },
        },
        size: {
          value: 80,
          random: !1,
          anim: { enable: !0, speed: 5, size_min: 5, sync: !1 },
        },
        line_linked: {
          enable: !1,
          distance: 200,
          color: "#ffffff",
          opacity: 1,
          width: 2,
        },
        move: {
          enable: !0,
          speed: 5,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !1, mode: "grab" },
          onclick: { enable: !1, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });
  }

  if (type === "bubble") {
    particlesJS(ID, {
      particles: {
        number: { value: 6, density: { enable: !0, value_area: 800 } },
        color: { value: "#182c50" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000" },
          polygon: { nb_sides: 6 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.3,
          random: !0,
          anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
        },
        size: {
          value: 160,
          random: !1,
          anim: { enable: !0, speed: 10, size_min: 40, sync: !1 },
        },
        line_linked: {
          enable: !1,
          distance: 200,
          color: "#ffffff",
          opacity: 1,
          width: 2,
        },
        move: {
          enable: !0,
          speed: 8,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !1, mode: "grab" },
          onclick: { enable: !1, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });
  }

  if (type === "space") {
    particlesJS(ID, {
      particles: {
        number: { value: 160, density: { enable: !0, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: !0,
          anim: { enable: !0, speed: 1, opacity_min: 0, sync: !1 },
        },
        size: {
          value: 3,
          random: !0,
          anim: { enable: !1, speed: 4, size_min: 0.3, sync: !1 },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "none",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 600 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !0, mode: "bubble" },
          onclick: { enable: !0, mode: "repulse" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 400, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });
  }
}

/*----------------------------------------------
6. Progress Bar
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  function initCounter(section, item, duration) {
    $(document).one("inview", item, function (event, inview) {
      if (inview) {
        $(item).each(function () {
          var percent = $(this).data("percent");
          var pcolor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--secondary-color");
          var scolor = getComputedStyle(
            document.documentElement
          ).getPropertyValue("--secondary-color");

          if ($(section).hasClass("odd")) {
            var tmode = "rgba(255, 255, 255, 0.075)";
          } else {
            var tmode = "rgba(0, 0, 0, 0.075)";
          }

          if (
            $(section).hasClass("preloader") ||
            $(section).hasClass("skills")
          ) {
            var symbol = "<i>%</i>";
          } else {
            var symbol = "";
          }

          if (
            section == ".counter.preloader" ||
            section == ".counter.funfacts"
          ) {
            var height = 70;
          } else {
            var height = 110;
          }

          $(this)
            .radialProgress({
              value: percent / 100,
              size: height,
              thickness: 10,
              lineCap: "butt",
              emptyFill: tmode,
              animation: {
                duration: duration,
                easing: "radialProgressEasing",
              },
              fill: {
                gradient: [
                  [pcolor, 0.1],
                  [scolor, 1],
                ],
                gradientAngle: Math.PI / 4,
              },
            })
            .on("radial-animation-progress", function (event, progress) {
              $(this)
                .find("span")
                .html(Math.round(percent * progress) + symbol);
            });
        });
      }
    });
  }

  let preloader = $(".preloader");
  let preloader_timeout = preloader.data("timeout") - 800;

  initCounter(
    ".counter.preloader",
    ".counter.preloader .radial",
    preloader_timeout
  );
  initCounter(".counter.funfacts", ".counter.funfacts .radial", 5000);
  initCounter(".counter.skills", ".counter.skills .radial", 5000);
});

/*----------------------------------------------
7. Shuffle
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  $(".filter-section").each(function (index) {
    var count = index + 1;

    $(this)
      .find(".filter-items")
      .removeClass("filter-items")
      .addClass("filter-items-" + count);
    $(this)
      .find(".filter-item")
      .removeClass("filter-item")
      .addClass("filter-item-" + count);
    $(this)
      .find(".filter-sizer")
      .removeClass("filter-sizer")
      .addClass("filter-sizer-" + count);
    $(this)
      .find(".btn-filter-item")
      .removeClass("btn-filter-item")
      .addClass("btn-filter-item-" + count);

    var Shuffle = window.Shuffle;
    var Filter = new Shuffle(document.querySelector(".filter-items-" + count), {
      itemSelector: ".filter-item-" + count,
      sizer: ".filter-sizer-" + count,
      buffer: 1,
    });

    $(".btn-filter-item-" + count).on("change", function (e) {
      var input = e.currentTarget;

      if (input.checked) {
        Filter.filter(input.value);
      }
    });
  });
});

/*----------------------------------------------
8. Sign and Register Form
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  $(document).on("click", 'a[data-target="#register"]', function () {
    $("#sign").modal("hide");
  });

  $(document).on("click", 'a[data-target="#sign"]', function () {
    $("#register").modal("hide");
  });
});

/*----------------------------------------------
9. Simple Form
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  function sendForm(ID) {
    var form = $(ID);
    var input = $(ID + " .form-control");
    var btn = $(ID + " .btn:first-child");
    var alert = $(ID + " .form-alert");

    alert.hide();

    $(document).on("click", ID + " .btn:first-child", function () {
      $(this).addClass("effect-motion-bg");
      form.submit();
    });

    form.submit(function (e) {
      e.preventDefault();

      if ($('input[name="reCAPTCHA"]').length) {
        let reCAPTCHA = $('input[name="reCAPTCHA"]');

        grecaptcha.ready(function () {
          grecaptcha
            .execute(reCAPTCHA.data("key"), { action: "create_comment" })
            .then(function (token) {
              reCAPTCHA.val(token);
            });
        });
      }

      var url = form.attr("action");

      $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(),
        success: function (response) {
          try {
            JSON.parse(response);
            var obj = JSON.parse(response);

            if (obj.status == "success") {
              setTimeout(function () {
                btn.removeClass("effect-motion-bg");
                input.val("").removeClass("invalid").removeClass("valid");
                alert
                  .text(window.languagesResources["contact_form_success"])
                  .removeClass("invalid")
                  .addClass("valid")
                  .fadeIn();
              }, 1200);
            } else if (obj.status == "invalid") {
              setTimeout(function () {
                btn.removeClass("effect-motion-bg");
                alert
                  .text(window.languagesResources["contact_form_invalid"])
                  .removeClass("valid")
                  .addClass("invalid")
                  .fadeIn();
              }, 1200);

              input.each(function () {
                let input_name = $(this).attr("name");

                if (obj.fields[input_name] == true) {
                  $(ID + " .field-" + input_name)
                    .removeClass("valid")
                    .addClass("invalid");
                } else {
                  $(ID + " .field-" + input_name)
                    .removeClass("invalid")
                    .addClass("valid");
                }
              });
            } else {
              btn.removeClass("effect-motion-bg");
              input.val("").removeClass("invalid").removeClass("valid");
              alert
                .text(window.languagesResources["contact_form_error"])
                .removeClass("valid")
                .addClass("invalid")
                .fadeIn();
            }
          } catch (e) {
            btn.removeClass("effect-motion-bg");
            input.val("").removeClass("invalid").removeClass("valid");
            alert
              .text("Sorry. We were unable to send your message.")
              .removeClass("valid")
              .addClass("invalid")
              .fadeIn();
          }
        },
      });
    });
  }

  sendForm("#nexgen-simple-form");
  sendForm("#nexgen-subscribe");
});

/*----------------------------------------------
10. Recaptcha
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  if ($('input[name="reCAPTCHA"]').length) {
    let siteKey = "6Lf-NwEVAAAAAPo_wwOYxFW18D9_EKvwxJxeyUx7"; // Put your site key here

    if (siteKey) {
      $('input[name="reCAPTCHA"]').attr("data-key", siteKey);
      grecaptcha.ready(function () {
        grecaptcha
          .execute(siteKey, { action: "create_comment" })
          .then(function (token) {
            $('input[name="reCAPTCHA"]').val(token);
          });
      });
    }
  }
});

/*----------------------------------------------
11. Cookie Notice
----------------------------------------------*/

jQuery(function ($) {
  "use strict";

  let cookieNotice = true;

  if (cookieNotice) {
    // Translate
    gdprCookieNoticeLocales.en = {
      description:
        "We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.",
      settings: "Cookie settings",
      accept: "Accept cookies",
      statement: "Our cookie statement",
      save: "Save settings",
      always_on: "Always on",
      cookie_essential_title: "Essential website cookies",
      cookie_essential_desc:
        "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.",
      cookie_performance_title: "Performance cookies",
      cookie_performance_desc:
        "These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. For example it stores your preferred language or the region that you are in.",
      cookie_analytics_title: "Analytics cookies",
      cookie_analytics_desc:
        "We use analytics cookies to help us measure how users interact with website content, which helps us customize our websites and application for you in order to enhance your experience.",
      cookie_marketing_title: "Marketing cookies",
      cookie_marketing_desc:
        "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
    };

    gdprCookieNoticeLocales.fr = {
      description:
        "Nous utilisons des cookies pour vous offrir une meilleure expérience de navigation, personnaliser le contenu et les publicités, fournir des fonctionnalités de médias sociaux et analyser notre trafic. Découvrez comment nous utilisons les cookies et comment vous pouvez les contrôler en cliquant sur Paramètres des cookies. Vous consentez à nos cookies si vous continuez à utiliser ce site web.",
      settings: "Params. des cookies",
      accept: "Accepter les cookies",
      statement: "Notre déclaration relative aux cookies",
      sauvegarder: "Enregistrer les params.",
      always_on: "Toujours activé",
      cookie_essential_title: "Cookies de site web essentiels",
      cookie_essential_desc:
        "Les cookies essentiels contribuent à rendre un site web utilisable en permettant des fonctions de base comme la navigation dans les pages et l'accès aux zones sécurisées du site web. Le site web ne peut pas fonctionner correctement sans ces cookies.",
      cookie_performance_title: "Cookies de performance",
      cookie_performance_desc:
        "Ces cookies sont utilisés pour améliorer les performances et les fonctionnalités de nos sites web mais ne sont pas essentiels à leur utilisation. Par exemple, ils enregistrent votre langue préférée ou la région dans laquelle vous vous trouvez.",
      cookie_analytics_title: "Cookies d'analyse",
      cookie_analytics_desc:
        "Nous utilisons des cookies d'analyse pour nous aider à mesurer comment les utilisateurs interagissent avec le contenu du site Web, ce qui nous aide à personnaliser nos sites Web et notre application pour vous afin d'améliorer votre expérience.",
      cookie_marketing_title: "Cookies de marketing",
      cookie_marketing_desc:
        "Ces cookies sont utilisés pour rendre les messages publicitaires plus pertinents pour vous et vos intérêts. L'intention est d'afficher des annonces qui sont pertinentes et engageantes pour l'utilisateur individuel et qui ont donc plus de valeur pour les éditeurs et les annonceurs tiers.",
    };

    gdprCookieNoticeLocales.nl = {
      description:
        "Wij gebruiken cookies om u een betere browse-ervaring te bieden, inhoud en advertenties te personaliseren, functies voor sociale media aan te bieden en ons verkeer te analyseren. Lees meer over hoe wij cookies gebruiken en hoe u ze kunt controleren door te klikken op Cookie-instellingen. U stemt in met onze cookies als u deze website blijft gebruiken.",
      settings: "Cookie-instellingen",
      accept: "Cookies accepteren",
      statement: "Onze cookieverklaring",
      sauvegarder: "Instellingen opslaan",
      always_on: "Altijd aan",
      cookie_essential_title: "Noodzakelijke website cookies",
      cookie_essential_desc:
        "Noodzakelijke cookies helpen een website bruikbaar te maken door basisfuncties zoals paginanavigatie en toegang tot beveiligde delen van de website mogelijk te maken. Zonder deze cookies kan de website niet goed functioneren.",
      cookie_performance_title: "Prestatiecookies",
      cookie_performance_desc:
        "Deze cookies worden gebruikt om de prestaties en functionaliteit van onze websites te verbeteren, maar zijn niet essentieel voor het gebruik ervan. Ze slaan bijvoorbeeld uw voorkeurstaal op of de regio waarin u zich bevindt.",
      cookie_analytics_titel: "Analytics cookies",
      cookie_analytics_desc:
        "Wij gebruiken analytische cookies om ons te helpen meten hoe gebruikers omgaan met de inhoud van de website, wat ons helpt onze websites en applicatie voor u aan te passen om uw ervaring te verbeteren",
      cookie_marketing_title: "Marketing cookies",
      cookie_marketing_desc:
        "Deze cookies worden gebruikt om reclameboodschappen relevanter te maken voor u en uw interesses. De bedoeling is om advertenties weer te geven die relevant en aantrekkelijk zijn voor de individuele gebruiker en daardoor waardevoller zijn voor uitgevers en externe adverteerders.",
    };

    gdprCookieNotice({
      locale: window.localStorage.getItem("current-locale") || "en", // This is the default value
      timeout: 2000, // Time until the cookie bar appears
      expiration: 30, // This is the default value, in days
      domain: window.location.hostname, // If you run the same cookie notice on all subdomains, define the main domain starting with a .
      implicit: true, // Accept cookies on page scroll automatically
      statement: "https://www.lbpartners.be/privacy-policy", // Link to your cookie statement page
      performance: ["JSESSIONID"], // Cookies in the performance category.
      analytics: ["ga"], // Cookies in the analytics category.
      marketing: ["SSID"], // Cookies in the marketing category.
    });
  }
});

jQuery(function ($) {
  "use strict";

  const translations = {};
  translations.debug = {
    "current-locale": "DEBUG",
    navbar_text:
      "Nos conseillers répondent à vos questions du lundi au vendredi, de 9h à 18h.",
    menu_item1: "Accueil",
    menu_item2: "Services",
    menu_item3: "Équipe",
    menu_item4: "Témoignages",
    menu_item5: "Cas d'étude",

    languages_picker_title: "Choisissez une langue",

    hero_item1_title: "Fiscalité des entreprises",
    hero_item1_body:
      "Sed in orci nunc. Donec sit amet ante et dolor commodo venenatis vitae nec odio.",
    hero_item2_title: "Conseils juridiques",
    hero_item2_body:
      "Nos juristes vous fournissent assistance et conseil afin que votre entreprise puisse constamment répondre aux exigences légales et réglementaires en vigueur.",
    hero_item3_title: "Gestion d'entreprise",
    hero_item3_body:
      "Notre équipe vous accompagne et vous assiste lors de la création de votre entreprise et tout au long de votre activité.",
    hero_item4_title: "Gestion du personnel",
    hero_item4_body:
      "Nos spécialistes RH vous aident à recruter de nouveaux collaborateurs et s’occupent de la gestion salariale de votre entreprise en vous garantissant le respect de la législation sociale en vigueur.",

    services_pre_title: "Nos domaines d'expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Audit & Assurance",
    services_body_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_2: "Conseil financier",
    services_body_2: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_3: "Fiscalité",
    services_body_3: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_4: "Marketing",
    services_body_4: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_5: "Conseil juridique",
    services_body_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_6: "Gestion des risques",
    services_body_6: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",

    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "L'éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.\n\nVivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.\n\nDuis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Legal advisor & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Fiscal advisor & co-founder",

    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Chaque mois, nous publions une étude de cas afin de vous faire découvrir comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance.",
    study_cases_cta_more: "Découvrez nos cas d'étude",

    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",

    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_cta_more: "Découvrez nos cas d'étude",

    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",

    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Audit & Assurance",
    contact_form_subject_option_2: "Conseil financier",
    contact_form_subject_option_3: "Fiscalité",
    contact_form_subject_option_4: "Marketing",
    contact_form_subject_option_5: "Conseil juridique",
    contact_form_subject_option_6: "Gestion des risques",
    contact_form_subject_option_7: "Autre",
    contact_form_success: "Votre message a été envoyé avec succès. Merci.",
    contact_form_invalid:
      "Des erreurs de validation sont survenues. Veuillez confirmer les champs et soumettre à nouveau.",
    contact_form_error: "Sorry. Nous n'avons pas pu envoyer votre message.",

    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "contact@lbpartners.be",
    contact_office_address: "Av. Reine Astrid 59b", //Kon. Astridlaan 59b, 1780 Wemmel

    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",

    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Reine Astrid 59b",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",

    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
  };

  translations.fr = {
    "current-locale": "FR",
    navbar_text:
      "Nos conseillers répondent à vos questions du lundi au vendredi, de 9h à 18h.",
    menu_item1: "Accueil",
    menu_item2: "Services",
    menu_item3: "Équipe",
    menu_item4: "Témoignages",
    menu_item5: "Cas d'étude",

    languages_picker_title: "Choisissez une langue",

    hero_item1_title: "Fiscalité des entreprises",
    hero_item1_body:
      "Sed in orci nunc. Donec sit amet ante et dolor commodo venenatis vitae nec odio.",
    hero_item2_title: "Conseils juridiques",
    hero_item2_body:
      "Nos juristes vous fournissent assistance et conseil afin que votre entreprise puisse constamment répondre aux exigences légales et réglementaires en vigueur.",
    hero_item3_title: "Gestion d'entreprise",
    hero_item3_body:
      "Notre équipe vous accompagne et vous assiste lors de la création de votre entreprise et tout au long de votre activité.",
    hero_item4_title: "Gestion du personnel",
    hero_item4_body:
      "Nos spécialistes RH vous aident à recruter de nouveaux collaborateurs et s’occupent de la gestion salariale de votre entreprise en vous garantissant le respect de la législation sociale en vigueur.",

    services_pre_title: "Nos domaines d'expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Audit & Assurance",
    services_body_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_2: "Conseil financier",
    services_body_2: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_3: "Fiscalité",
    services_body_3: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_4: "Marketing",
    services_body_4: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_5: "Conseil juridique",
    services_body_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_6: "Gestion des risques",
    services_body_6: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",

    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "L'éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.\n\nVivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.\n\nDuis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Legal advisor & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Fiscal advisor & co-founder",

    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Chaque mois, nous publions une étude de cas afin de vous faire découvrir comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance.",
    study_cases_cta_more: "Découvrez nos cas d'étude",

    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",

    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_cta_more: "Découvrez nos cas d'étude",

    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",

    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Audit & Assurance",
    contact_form_subject_option_2: "Conseil financier",
    contact_form_subject_option_3: "Fiscalité",
    contact_form_subject_option_4: "Marketing",
    contact_form_subject_option_5: "Conseil juridique",
    contact_form_subject_option_6: "Gestion des risques",
    contact_form_subject_option_7: "Autre",

    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "contact@lbpartners.be",
    contact_office_address: "Av. Reine Astrid 59b", //Kon. Astridlaan 59b, 1780 Wemmel

    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",

    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Reine Astrid 59b",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",

    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
  };

  translations.en = {
    "current-locale": "EN",
    navbar_text:
      "Our experts are available to answer your questions from Monday to Friday, from 9am to 6pm.",
    menu_item1: "Home",
    menu_item2: "Services",
    menu_item3: "Team",
    menu_item4: "Testimonials",
    menu_item5: "Case studies",
    languages_picker_title: "Choose a language",
    hero_item1_title: "Accounting and Auditing",
    hero_item1_body:
      "Our expert accountants ensure accurate financial records and help businesses navigate complex regulations, providing peace of mind and enabling informed decision-making.",
    hero_item2_title: "Tax Advice",
    hero_item2_body:
      "Maximize your savings and minimize risks with our personalized tax advice, as our knowledgeable team helps you optimize your tax strategies and ensure compliance with ever-changing tax laws.",
    hero_item3_title: "Corporate Finance",
    hero_item3_body:
      "Make informed financial decisions and achieve sustainable growth with our corporate finance solutions, including financial analysis, capital optimization, and expert guidance in mergers and acquisitions.",
    hero_item4_title: "Human Resources",
    hero_item4_body:
      "Attract top talent, enhance employee engagement, and streamline HR practices with our comprehensive HR consulting services, designed to maximize the potential of your workforce and drive organizational success.",
    services_pre_title: "Our Areas of Expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Audit & Assurance",
    services_body_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_2: "Conseil financier",
    services_body_2: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_3: "Fiscalité",
    services_body_3: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_4: "Marketing",
    services_body_4: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_5: "Conseil juridique",
    services_body_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_6: "Gestion des risques",
    services_body_6: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "L'éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.\n\nVivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.\n\nDuis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Legal advisor & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Fiscal advisor & co-founder",
    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Chaque mois, nous publions une étude de cas afin de vous faire découvrir comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance.",
    study_cases_cta_more: "Découvrez nos cas d'étude",
    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",
    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_cta_more: "Découvrez nos cas d'étude",
    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",
    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Audit & Assurance",
    contact_form_subject_option_2: "Conseil financier",
    contact_form_subject_option_3: "Fiscalité",
    contact_form_subject_option_4: "Marketing",
    contact_form_subject_option_5: "Conseil juridique",
    contact_form_subject_option_6: "Gestion des risques",
    contact_form_subject_option_7: "Autre",
    contact_form_success: "Votre message a été envoyé avec succès. Merci.",
    contact_form_invalid:
      "Des erreurs de validation sont survenues. Veuillez confirmer les champs et soumettre à nouveau.",
    contact_form_error: "Sorry. Nous n'avons pas pu envoyer votre message.",
    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "contact@lbpartners.be",
    contact_office_address: "Av. Reine Astrid 59b",
    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",
    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Reine Astrid 59b",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",
    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
    contact_form_succes: "",
  };

  translations.nl = {
    "current-locale": "NL",
    navbar_text:
      "Nos conseillers répondent à vos questions du lundi au vendredi, de 9h à 18h.",
    menu_item1: "Accueil",
    menu_item2: "Services",
    menu_item3: "Équipe",
    menu_item4: "Témoignages",
    menu_item5: "Cas d'étude",

    languages_picker_title: "Choisissez une langue",

    hero_item1_title: "Fiscalité des entreprises",
    hero_item1_body:
      "Sed in orci nunc. Donec sit amet ante et dolor commodo venenatis vitae nec odio.",
    hero_item2_title: "Conseils juridiques",
    hero_item2_body:
      "Nos juristes vous fournissent assistance et conseil afin que votre entreprise puisse constamment répondre aux exigences légales et réglementaires en vigueur.",
    hero_item3_title: "Gestion d'entreprise",
    hero_item3_body:
      "Notre équipe vous accompagne et vous assiste lors de la création de votre entreprise et tout au long de votre activité.",
    hero_item4_title: "Gestion du personnel",
    hero_item4_body:
      "Nos spécialistes RH vous aident à recruter de nouveaux collaborateurs et s’occupent de la gestion salariale de votre entreprise en vous garantissant le respect de la législation sociale en vigueur.",

    services_pre_title: "Nos domaines d'expertise",
    services_title_beginning: "L'excellence dans",
    services_title_highlighted_end: "les services",
    services_body:
      "Nous sommes spécialisés dans la prestation de services de conseil grâce à un ensemble de technologies de pointe et à une équipe de professionnels expérimentés. Voici un aperçu des options que vous pouvez engager.",
    services_title_1: "Audit & Assurance",
    services_body_1: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_2: "Conseil financier",
    services_body_2: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_3: "Fiscalité",
    services_body_3: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_4: "Marketing",
    services_body_4: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_5: "Conseil juridique",
    services_body_5: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    services_title_6: "Gestion des risques",
    services_body_6: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",

    team_pre_title: "Notre équipe d'experts",
    team_title_beginning: "Rencontrez-",
    team_title_highlighted_end: "nous",
    team_body:
      "L'éthique et l'intégrité sont les bases sur lesquels notre équipe repose. Ce sont des principes fondamentaux qui deviennent des attitudes quotidiennes.",
    team_founders_speech_title: "Le mot des fondateurs",
    team_founders_speech_body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.\n\nVivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.\n\nDuis ut hendrerit mauris. Phasellus faucibus ut enim vel tincidunt. Nunc venenatis a dui et laoreet.",
    team_founders_speech_signature: "Bilal & Jean-David",
    team_member_first_name_1: "Jean-David",
    team_member_last_name_1: "Lukandu",
    team_member_job_title_1: "Legal advisor & co-founder",
    team_member_first_name_2: "Bilal",
    team_member_last_name_2: "Ismail",
    team_member_job_title_2: "Fiscal advisor & co-founder",

    study_cases_pre_title: "Nos cas d'étude",
    study_cases_title_beginning: "Leurs projets,",
    study_cases_title_highlighted_end: "notre expertise",
    study_cases_body:
      "Chaque mois, nous publions une étude de cas afin de vous faire découvrir comment notre expertise a contribué au développement et à la croissance de ceux qui nous ont fait confiance.",
    study_cases_cta_more: "Découvrez nos cas d'étude",

    newsletter_pre_title: "Newsletter",
    newsletter_title_beginning: "Apprenez-en ",
    newsletter_title_highlighted_end: "plus",
    newsletter_body:
      "Grâce à nos newsletters, recevez nos cas d'étude, découvrez nos conseils en matière de gestion d'entreprise et gardez un oeil sur les dernières nouveautés en termes de fiscalité et législation.",
    newsletter_form_name_placeholder: "Nom",
    newsletter_form_email_address_placeholder: "Adresse e-mail",
    newsletter_form_cta_subscribe: "S'abonner",

    testimonials_pre_title: "Témoignages de nos clients",
    testimonials_title_beginning: "Ils nous font déjà",
    testimonials_title_highlighted_end: "confiance",
    testimonials_body:
      "Nous travaillons intensément à la recherche d'idéaux et de solutions qui peuvent avoir un effet positif sur la vie de nos clients. C'est ce qui nous anime et nous sommes sensibles à toute cette reconnaissance.",
    testimonials_cta_more: "Découvrez nos cas d'étude",

    contact_pre_title: "Écrivez-nous",
    contact_title_beginning: "Dites-nous ",
    contact_title_highlighted_end: "tout",
    contact_body:
      "Dites-nous en plus sur votre situation et vos projets. Nous accorderons une attention particulière à votre message et vous répondrons dans les meilleurs délais.",

    contact_form_name_placeholder: "Nom",
    contact_form_email_address_placeholder: "Adresse e-mail",
    contact_form_phone_number_placeholder: "Numéro de téléphone",
    contact_form_message_placeholder: "Message",
    contact_form_subject: "Sujet",
    contact_form_subject_option_1: "Audit & Assurance",
    contact_form_subject_option_2: "Conseil financier",
    contact_form_subject_option_3: "Fiscalité",
    contact_form_subject_option_4: "Marketing",
    contact_form_subject_option_5: "Conseil juridique",
    contact_form_subject_option_6: "Gestion des risques",
    contact_form_subject_option_7: "Autre",
    contact_form_succes: "Uw bericht is succesvol verzonden. Bedankt.",
    contact_form_invalid:
      "Er zijn validatiefouten opgetreden. Gelieve de velden te bevestigen en opnieuw in te dienen.",
    contact_form_error: "Sorry. We konden uw bericht niet verzenden.",

    contact_phone_number: "+32 2 522 08 13",
    contact_email_address: "contact@lbpartners.be",
    contact_office_address: "Av. Reine Astrid 59b", //Kon. Astridlaan 59b, 1780 Wemmel

    document_privacy_policy: "Politique de confidentialité",
    document_terms_and_conditions: "Conditions générales d'utilisation",
    copyright: "© 2023 Legal and Business Partners SRL - Tous droits réservés.",
    backlink: "Fièrement réalisé par ",

    common_company_name: "Legal & Business Partners",
    common_legal_company_name: "Legal and Business Partners SRL",
    common_company_vat: "BE 0792.288.476",
    common_company_address_street_and_house: "Av. Reine Astrid 59b",
    common_company_address_city_country: "1780 Wemmel, Belgique",
    common_company_tagline: "Votre partenaire de confiance pour la croissance.",

    common_cta_get_in_touch: "Prenez contact",
    common_cta_more_info: "En savoir plus",
    common_cta_view_map: "Afficher sur Google Maps ©",
    common_cta_submit: "Soumettre",
  };

  function changeLanguage(lng) {
    window.localStorage.setItem("current-locale", lng);
    window.languagesResources = translations[lng];

    $("[data-translation-key]").each(function (i, elt) {
      $(elt).text(
        window.languagesResources[$(elt).attr("data-translation-key")]
      );
    });
    $("[placeholder-translation-key]").each(function (i, elt) {
      $(elt).attr(
        "placeholder",
        window.languagesResources[$(elt).attr("placeholder-translation-key")]
      );
    });
  }

  $(document).ready(function () {
    const initialLanguage = window.localStorage.getItem("current-locale");
    if (initialLanguage === null) {
      const potentialLng = (
        navigator.languages.find((language) => {
          const isoLng = language.slice(0, 2);
          return isoLng == "fr" || isoLng == "nl" || isoLng == "en";
        }) ||
        navigator.userLanguage ||
        navigator.language
      )
        .slice(0, 2)
        .toLowerCase();
      console.log(potentialLng);

      changeLanguage(potentialLng);
    } else {
      changeLanguage(initialLanguage);
    }
    $(document).on("click", "#locale-fr", function () {
      changeLanguage("fr");
      window.location.reload();
    });
    $(document).on("click", "#locale-nl", function () {
      changeLanguage("nl");
      window.location.reload();
    });
    $(document).on("click", "#locale-en", function () {
      changeLanguage("en");
      window.location.reload();
    });
  });
});
