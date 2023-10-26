// var pages = [
//       {
//             image: "assets/images/02.jpg",
//             title: "កម្លាំងប៉ុស្ដិ៍នគរបាលរដ្ឋបាលមិត្តភាព",
//             description: "រាជធានីភ្នំពេញ ៖ ដោយអនុវត្តតាមការណែនាំពីឯកឧត្តម ឧត្តមសេនីយ៍ទោ ជួន ណារិន្ទ អគ្គស្នងការរង និងជាស្នងការនគរបាលរាជធានីភ្នំពេញ។",
//             time: "ព្រហស្បតិ៍, ២៦ តុលា ២០២៣ ១៣:៥៩",
//             views: 5
//       },
//       {
//             image: "assets/images/02.jpg",
//             title: "កម្លាំងប៉ុស្ដិ៍នគរបាលរដ្ឋបាលមិត្តភាព",
//             description: "រាជធានីភ្នំពេញ ៖ ដោយអនុវត្តតាមការណែនាំពីឯកឧត្តម ឧត្តមសេនីយ៍ទោ ជួន ណារិន្ទ អគ្គស្នងការរង និងជាស្នងការនគរបាលរាជធានីភ្នំពេញ។",
//             time: "ព្រហស្បតិ៍, ២៦ តុលា ២០២៣ ១៣:៥៩",
//             views: 6
//       },
//       {
//             image: "assets/images/02.jpg",
//             title: "កម្លាំងប៉ុស្ដិ៍នគរបាលរដ្ឋបាលមិត្តភាព",
//             description: "រាជធានីភ្នំពេញ ៖ ដោយអនុវត្តតាមការណែនាំពីឯកឧត្តម ឧត្តមសេនីយ៍ទោ ជួន ណារិន្ទ អគ្គស្នងការរង និងជាស្នងការនគរបាលរាជធានីភ្នំពេញ។",
//             time: "ព្រហស្បតិ៍, ២៦ តុលា ២០២៣ ១៣:៥៩",
//             views: 7
//       },
//       {
//             image: "assets/images/02.jpg",
//             title: "កម្លាំងប៉ុស្ដិ៍នគរបាលរដ្ឋបាលមិត្តភាព",
//             description: "រាជធានីភ្នំពេញ ៖ ដោយអនុវត្តតាមការណែនាំពីឯកឧត្តម ឧត្តមសេនីយ៍ទោ ជួន ណារិន្ទ អគ្គស្នងការរង និងជាស្នងការនគរបាលរាជធានីភ្នំពេញ។",
//             time: "ព្រហស្បតិ៍, ២៦ តុលា ២០២៣ ១៣:៥៩",
//             views: 8
//       },
//       // Add more pages here
// ];
// var currentPageIndex = 0;

// function showPage(pageIndex) {
//       var page = pages[pageIndex];
//       var imageElement = document.getElementById("image");
//       var titleElement = document.getElementById("title");
//       var descriptionElement = document.getElementById("description");
//       var timeElement = document.getElementById("time");
//       var viewsElement = document.getElementById("views");

//       imageElement.src = page.image;
//       titleElement.textContent = page.title;
//       descriptionElement.textContent = page.description;
//       timeElement.textContent = page.time;
//       viewsElement.textContent = page.views;
// }

// function showPreviousPage() {
//       if (currentPageIndex > 0) {
//             currentPageIndex--;
//             showPage(currentPageIndex);
//       }
// }

// function showNextPage() {
//       if (currentPageIndex < pages.length - 1) {
//             currentPageIndex++;
//             showPage(currentPageIndex);
//       }
// }

// showPage(currentPageIndex);

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
                  } else {
                        $(this).removeClass("show");
                  }
            });
      }

      $(window).scroll(checkVisibility);
      checkVisibility();
});






// var data = [
//       {
//             image: "assets/images/01.jpg",
//             title: "Data Entry 1",
//             description: "This is the description for Data Entry 1.",
//             time: "October 26, 2023",
//             views: 10
//       },
//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },

//       {
//             image: "assets/images/02.jpg",
//             title: "Data Entry 2",
//             description: "This is the description for Data Entry 2.",
//             time: "October 27, 2023",
//             views: 8
//       },
//       // Add more data entries here
// ];

// var cardContainer = document.getElementById("cardContainer");
// var previousButton = document.getElementById("showPreviousPage");
// var nextButton = document.getElementById("showNextPage");
// var currentIndex = 0;

// function renderCard(index) {
//       var currentDetail = details[index];
//       var cardHTML =
//             `
//         <div class="card">
//           <div class="card-content">
//             <div class="image">
//               <img src="${currentDetail.img}" alt="">
//             </div>
//             <div class="content">
//               <div class="name" id="name">
//                 <h1>${currentDetail.name}</h1>
//               </div>
//               <div class="position">
//                 <span>${currentDetail.position}</span>
//               </div>
//               <div class="details">
//                 <table>
//                   <tr>
//                     <td class="left">Gender</td>
//                     <td width="30px"></td>
//                     <td class="right">${currentDetail.sex}</td>
//                   </tr>
//                   <tr>
//                     <td class="left">RelationShip</td>
//                     <td width="30px"></td>
//                     <td class="right">${currentDetail.relation}</td>
//                   </tr>
//                   <tr>
//                     <td class="left">Skills</td>
//                     <td width="30px"></td>
//                     <td class="right">${currentDetail.skills}</td>
//                   </tr>
//                   <tr>
//                     <td class="left">Contact</td>
//                     <td width="30px"></td>
//                     <td class="right"><a href="${currentDetail.contact}" target="_blank" rel="noopener noreferrer">FacebookLink</a></td>
//                   </tr>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         `;

//       cardContainer.innerHTML = cardHTML;
// }

// function updateNavigationButtons() {
//       previousButton.disabled = currentIndex === 0;
//       nextButton.disabled = currentIndex === details.length - 1;
// }

// previousButton.addEventListener("click", function () {
//       if (currentIndex > 0) {
//             currentIndex--;
//             renderCard(currentIndex);
//             updateNavigationButtons();
//       }
// });

// nextButton.addEventListener("click", function () {
//       if (currentIndex < details.length - 1) {
//             currentIndex++;
//             renderCard(currentIndex);
//             updateNavigationButtons();
//       }
// });

// renderCard(currentIndex);
// updateNavigationButtons();