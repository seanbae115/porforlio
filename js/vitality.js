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
      // description: `<p>Live Face Off allows friends and family to connect with one another via webcam and chat to enjoy some time together. The application features two modes of gameplay, with more to come in the future. The mission behind Live Face Off is to give just about anyone the ability to easily login and rekindle old bonds or make new ones. We wanted there to be more than one way of logging in, that way even your grandparents can join in on the fun. Our focus is to take this application to the next level by continuously creating new content for users to try out, and also give more incentives by implementing achievements and an online matchmaking system.</p><p>My contribution to Live Face Off was developing the backend using Node.js and constructing the database using MongoDB. I also helped out with routing some of the React components, and by creating the About page.</p>`,
      links: ["www.artisandate.com", "https://github.com/seanbae115/c12.17_datenight"]
    },
    SpotiConcert: {
      title: 'SpotiConcert',
      image: 'img/creative/portfolio/grid/spoticoncert.png',
      // description: `<p>Student Grade Table is a Content Management System for student courses and grades. It allows users to Create, Read, and Delete from the MySQL database through a PHP backend.</p>`,
      links: ["spoticoncert.bae-sw.us", "https://github.com/seanbae115/c12.17Hackathon2"]
    },
    MemoryMatchGame: {
      title: 'MemoryMatchGame',
      image: 'img/creative/portfolio/grid/Memory.png',
      // description: `<p>Beets & Eats is an on the go event planner that combines restaurants, breweries, and local events for an easy night out. To use: simply input your location or use the geolocation button, choose an event you wish to go to, and then use the map to select a place to grab some food and drinks at.</p><p>My role during this 48-hour hackathon was to gather all the information used to populate the restaurants and breweries from yelp and format it in a way that could be used throughout the entire application. I also helped create the landing page, and put together a few pieces for the google map.`,
      links: ["memorymatch.bae-sw.us", "https://github.com/seanbae115/memory_match"]
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