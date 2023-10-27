
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

