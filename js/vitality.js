/*!
 * Vitality v2.0.2 (http://themes.startbootstrap.com/vitality-v2.0.2)
 * Copyright 2013-2017 Start Bootstrap
 * Purchase a license to use this theme at (https://wrapbootstrap.com)
 */
/*!
 * Vitality v2.0.0 (http://themes.startbootstrap.com/vitality-v2.0.0)
 * Copyright 2013-2017 Start Bootstrap
 * Purchase a license to use this theme at (https://wrapbootstrap.com)
 */

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
  if (isPhoneDevice) {
    //mobile
  } else {
    //desktop
    // Initialize WOW.js
    wow = new WOW({
      offset: 50
    })
    wow.init();
  }
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 69)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Activates floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  //Modal information object
  var portfolioInfo = {
    ArtisanDate: {
      title: 'ArtisanDate',
      image: 'img/creative/portfolio/grid/artisandate.png',
      description: `<p>Application designed to provide live and useful date itinerary. Used ReactJS/Redux for creation of all clients facing pages and routing. Node.js, Express, MySQL stack on AWS Ubuntu server. </p>`,
      links: ["http://artisandate.com", "https://github.com/seanbae115/c12.17_datenight"]
    },
    SpotiConcert: {
      title: 'SpotiConcert',
      image: 'img/creative/portfolio/grid/spoticoncert.png',
      description: `<p>Developed a concert finding app upon user’s Spotify preferences in 48 hours with team. •	Utilized 3rd party API calls to get live datas (Spotify, Google Maps, TicketMaster)</p>`,
      links: ["", "https://github.com/seanbae115/c12.17Hackathon2"]
    },
    SharePosts: {
      title: 'SharePosts',
      image: 'img/creative/portfolio/grid/sharepost.png',
      description: `<p>Application desigend to share posts with other users</p><p>Built a complete MVC framework using OOP PHP. Full suer authentication and database built in using Session, MySQL.</p>`,
      links: ["http://shareposts.bae-sw.us", "https://github.com/seanbae115/shareposts"]
    }
  }

  function presentModalInformation() {
    var projectInfo = $(this).closest('.portfolio-div').attr('data-title');
    var projectTitle = portfolioInfo[projectInfo].title;
    var projectDescription = portfolioInfo[projectInfo].description;
    var projectImage = portfolioInfo[projectInfo].image;
    var liveLink = portfolioInfo[projectInfo].links[0];
    var gitHubLink = portfolioInfo[projectInfo].links[1];
    $("#portfolioModal").find('.modal-title').text(projectTitle);
    $("#portfolioModal").find('.modal-body .description').html(projectDescription);
    $("#portfolioModal").find('.modal-body img').attr('src', projectImage);
    $("#portfolioModal").find('.modal-body .live').attr('href', liveLink);
    $("#portfolioModal").find('.modal-body .github').attr('href', gitHubLink);
    $('#portfolioModal').modal('show');
  }
  //portfolio Modal Click Handler
  $('.portfolio-wrapper').on('click', presentModalInformation);

})(jQuery); // End of use strict