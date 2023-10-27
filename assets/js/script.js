
function updateTime() {
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      var amOrPm = hours >= 12 ? "PM" : "AM";

      if (hours > 12) {
            hours = hours - 12;
      }

      var formattedTime = hours + ":" + minutes + ":" + seconds + " " + amOrPm;
      document.getElementById('time-clock').innerHTML = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);


var dropdown = document.getElementById('dropdown');
var dropdownList = document.getElementById('drop-list');
var changeIcon = document.getElementById('changeIcon');

dropdown.addEventListener('mouseover', function () {
      dropdownList.style.display = "block";
      changeIcon.classList.remove('fa-chevron-down');
      changeIcon.classList.add('fa-chevron-up');
});

dropdown.addEventListener('mouseleave', function () {
      changeIcon.classList.remove('fa-chevron-up');
      changeIcon.classList.add('fa-chevron-down');
      dropdownList.style.display = "none";
});

dropdownList.addEventListener('mouseover', function () {
      changeIcon.classList.remove('fa-chevron-down');
      changeIcon.classList.add('fa-chevron-up');
      dropdownList.style.display = "block";
});

dropdownList.addEventListener('mouseleave', function () {
      changeIcon.classList.remove('fa-chevron-up');
      changeIcon.classList.add('fa-chevron-down');
      dropdownList.style.display = "none";
});

window.onscroll = function () {
      // var windowHeight = window.innerHeight;
      var windowHeight = '120';
      var documentHeight = document.documentElement.scrollHeight;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Show or hide the "Back to Top" button based on scroll position
      var backToTopBtn = document.getElementById('backToTopBtn');
      var stickyContainer = document.getElementById('stickyContainer');
      var originalBackgroundColor = window.getComputedStyle(stickyContainer).backgroundColor;
      if (scrollTop > windowHeight) {
            backToTopBtn.style.display = 'block';
            stickyContainer.style.backgroundColor = "#fad027";
            stickyContainer.style.border = "1px solid #0c247b";
      } else {
            backToTopBtn.style.display = 'none';
            stickyContainer.style.backgroundColor = "#fff";
            stickyContainer.style.border = "none";

      }
};

// var container = document.getElementById('changesize');
// var container = document.querySelector('container');

function checkWindowWidth() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var container = document.getElementById('changesize');
      var removeInMarquee = document.querySelector('.marquee');
      var removeInSlider = document.querySelector('.slider');
      var removeInAdsense = document.querySelector('.adsense-blog');
      var removeInContent = document.querySelector('.content-body');

      if (windowWidth < 990) {
            container.classList.remove('container')
            removeInMarquee.classList.remove('container')
            removeInSlider.classList.remove('container')
            removeInAdsense.classList.remove('container')
            removeInContent.classList.remove('container')
      }
      else {
            container.classList.add('container')
            removeInMarquee.classList.add('container')
            removeInSlider.classList.add('container')
      }
}

// Call the function when the window is resized
window.addEventListener('resize', checkWindowWidth);

// Call the function initially
checkWindowWidth();
// Handle the button click event to scroll back to the top
document.getElementById('backToTopBtn').addEventListener('click', function () {
      window.scrollTo({
            top: 0,
            behavior: 'smooth'
      });
});


$(document).ready(function () {
      function checkVisibility() {
            $(".content-news").each(function () {
                  var position = $(this).offset().top;
                  var scrollPosition = $(window).scrollTop() + $(window).height();

                  if (scrollPosition > position) {
                        $(this).addClass("show");
                  }
                  else {
                        $(this).removeClass("show");
                  }
            });
      }

      $(window).scroll(checkVisibility);
      checkVisibility();
});


var menu = document.querySelector('#pop-menu');
var list = document.querySelector('.menu');
var open = document.querySelector('.toggle');
var close = document.querySelector('.close-button');
open.addEventListener('click', function () {
      menu.style.left = '0'
      list.style.right = '0'
      document.querySelector('body').style.overflowX = 'hidden';
})
close.addEventListener('click', function () {
      menu.style.left = '-100%'
      list.style.right = '100%'
})
menu.addEventListener('click', function () {
      menu.style.left = '-100%'
      list.style.right = '100%'
})


$(document).ready(function() {
      // Add the scroll event listener to the menu body
      $('.menu-body').scroll(function() {
        // Check if the scroll position is at the bottom of the menu
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
          // Disable scrolling when reaching the bottom
          $(this).css('overflow-y', 'hidden');
        } else {
          // Enable scrolling when not at the bottom
          $(this).css('overflow-y', 'auto');
        }
      });
    });