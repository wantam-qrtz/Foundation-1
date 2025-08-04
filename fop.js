 // Home Section Management
 const homeLink = document.getElementById('homeLink');
 const homeContent = document.getElementById('homeContent');

 // Content Sections
 const aboutBtn = document.getElementById("aboutBtn");
 const aboutDropdown = document.getElementById("aboutDropdown");
 const visionLink = document.getElementById("visionLink");
 const missionLink = document.getElementById("missionLink");
 const coreValuesLink = document.getElementById("coreValuesLink");
 const eventsBtn = document.getElementById("eventsBtn");
 const eventsDropdown = document.getElementById("eventsDropdown");
 const rewardsLink = document.getElementById("rewardsLink");
 const communityLink = document.getElementById("communityLink");

 const visionContent = document.getElementById("visionContent");
 const missionContent = document.getElementById("missionContent");
 const coreValuesContent = document.getElementById("coreValuesContent");
 const rewardsContent = document.getElementById("rewardsContent");
 const communityContent = document.getElementById("communityContent");

 let activeDropdown = null;

 //home containersss
 // Handle Learn More button click
 document.getElementById('aboutLink').addEventListener('click', function(e) {
     e.preventDefault();
     // Show the about section
     document.getElementById('aboutBtn').click();
     // Scroll to about section
     document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' });
 });

 // Your existing JavaScript for dropdowns and other functionality should remain here
 // This is just the addition for the new Learn More button



 // Carousel Functionality
 const galleryTrack = document.querySelector('.gallery-track');
 const dotsContainer = document.querySelector('.gallery-dots');
 let currentIndex = 0;
 let autoScrollInterval;
 const slides = [];

 // Generate gallery slides and dots
 for (let i = 1; i <= 55; i++) {
     const slide = document.createElement('div');
     slide.className = 'gallery-slide';

     const centerImg = document.createElement('img');
     centerImg.src = `r${i}.jpg`;
     centerImg.alt = `Reward ${i}`;
     centerImg.className = 'gallery-img center';
     slide.appendChild(centerImg);

     const leftImg = document.createElement('img');
     leftImg.src = `r${i === 1 ? 55 : i-1}.jpg`;
     leftImg.alt = `Reward ${i === 1 ? 55 : i-1}`;
     leftImg.className = 'gallery-img left';
     slide.appendChild(leftImg);

     const rightImg = document.createElement('img');
     rightImg.src = `r${i === 55 ? 1 : i+1}.jpg`;
     rightImg.alt = `Reward ${i === 55 ? 1 : i+1}`;
     rightImg.className = 'gallery-img right';
     slide.appendChild(rightImg);

     galleryTrack.appendChild(slide);
     slides.push(slide);

     const dot = document.createElement('div');
     dot.className = 'dot';
     dot.dataset.index = i - 1;
     if (i === 1) dot.classList.add('active');
     dot.addEventListener('click', () => goToSlide(i - 1));
     dotsContainer.appendChild(dot);
 }

 function updateGallery() {
     galleryTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

     document.querySelectorAll('.dot').forEach((dot, index) => {
         dot.classList.toggle('active', index === currentIndex);
     });

     const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
     const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

     const currentSlide = slides[currentIndex];
     const leftImg = currentSlide.querySelector('.left');
     const rightImg = currentSlide.querySelector('.right');

     leftImg.src = `r${currentIndex === 0 ? 55 : currentIndex}.jpg`;
     rightImg.src = `r${currentIndex === slides.length - 1 ? 1 : currentIndex + 2}.jpg`;
 }

 function goToSlide(index) {
     clearInterval(autoScrollInterval);
     currentIndex = index;
     updateGallery();
     startAutoScroll();
 }

 function startAutoScroll() {
     autoScrollInterval = setInterval(() => {
         currentIndex = (currentIndex + 1) % slides.length;
         updateGallery();
     }, 3000);
 }

 updateGallery();
 startAutoScroll();

 const gallery = document.querySelector('.rewards-gallery');
 gallery.addEventListener('mouseenter', () => {
     clearInterval(autoScrollInterval);
 });
 gallery.addEventListener('mouseleave', startAutoScroll);

 // Dropdown Functionality
 function toggleDropdown(dropdown) {
     if (activeDropdown && activeDropdown !== dropdown) {
         activeDropdown.classList.remove("show");
     }
     dropdown.classList.toggle("show");
     activeDropdown = dropdown.classList.contains("show") ? dropdown : null;
 }

 function hideAllContent() {
     document.querySelectorAll('.about-section, .home-section').forEach(section => {
         section.classList.remove("active");
     });
 }

 function showContent(contentElement) {
     hideAllContent();
     contentElement.classList.add("active");
     contentElement.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
     });
 }
 //menu remain intact when switching to other menu
 function switchMenu(menuId) {
     // Hide all sections
     document.querySelectorAll('.home-section, .content-section').forEach(section => {
         section.classList.remove('active');
     });

     // Show selected section
     document.getElementById(menuId).classList.add('active');
 }
 // Event Listeners
 homeLink.addEventListener('click', (e) => {
     e.preventDefault();
     showContent(homeContent);
     if (activeDropdown) activeDropdown.classList.remove("show");
 });

 aboutBtn.addEventListener("click", (e) => {
     e.stopPropagation();
     toggleDropdown(aboutDropdown);
 });

 eventsBtn.addEventListener("click", (e) => {
     e.stopPropagation();
     toggleDropdown(eventsDropdown);
 });

 visionLink.addEventListener("click", (e) => {
     e.preventDefault();
     showContent(visionContent);
     if (activeDropdown) activeDropdown.classList.remove("show");
 });

 missionLink.addEventListener("click", (e) => {
     e.preventDefault();
     showContent(missionContent);
     if (activeDropdown) activeDropdown.classList.remove("show");
 });

 coreValuesLink.addEventListener("click", (e) => {
     e.preventDefault();
     showContent(coreValuesContent);
     if (activeDropdown) activeDropdown.classList.remove("show");
 });

 rewardsLink.addEventListener("click", (e) => {
     e.preventDefault();
     showContent(rewardsContent);
     if (activeDropdown) activeDropdown.classList.remove("show");
 });

 communityLink.addEventListener("click", (e) => {
     e.preventDefault();
     showContent(communityContent);
     if (activeDropdown) activeDropdown.classList.remove("show");
 });

 document.addEventListener("click", (e) => {
     if (!e.target.closest(".dropdown")) {
         if (activeDropdown) {
             activeDropdown.classList.remove("show");
             activeDropdown = null;
         }
     }
 });

 document.querySelectorAll('nav ul li:not(.dropdown) a').forEach(link => {
     link.addEventListener("click", (e) => {
         if (activeDropdown) activeDropdown.classList.remove("show");
     });
 });

 // Initialize Home Content
 window.addEventListener('load', () => {
     hideAllContent();
     homeContent.classList.add('active');
 });