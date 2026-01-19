

// footer fix js

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const priceBar = document.getElementById("priceBar");

  if (!hero || !priceBar) return;

  function togglePriceBar() {
    if (window.scrollY > hero.offsetHeight) {
      priceBar.classList.remove("translate-y-full");
    } else {
      priceBar.classList.add("translate-y-full");
    }
  }

  window.addEventListener("scroll", togglePriceBar);
  togglePriceBar(); // first load fix
});


// section transiton js

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  console.log("Reveal count:", reveals.length);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => observer.observe(el));
});

// bottom to top js

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // अगर button मौजूद नहीं है तो error न आए
  if (!scrollTopBtn) return;

  // Scroll पर show / hide
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.remove("opacity-0", "invisible");
    } else {
      scrollTopBtn.classList.add("opacity-0", "invisible");
    }
  });

  // Click → smooth top
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// mobile menu

const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // munu click to section 
  document.querySelectorAll('a[data-target]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// modal popup js
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('.open-modal');
const closeBtn = document.getElementById('closeModal');

// Open modal
openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });
});

// Close modal (ONLY button)
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});

$('.open-modal').on('click', function (e) {
  e.preventDefault(); // 🔥 URL me # aane se rokta hai
  openModal();        // modal open function
});



// owl crousal
$(document).ready(function () {

  var owl = $(".owl-carousel");

  owl.owlCarousel({
    loop: true,
    margin: 70,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 40000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: {
        items: 1,
        stagePadding: 150
      }
    }
  });

  // Accessibility add AFTER owl init
  addOwlAccessibility(owl);

});


function addOwlAccessibility(owl) {

  // NAV buttons
  owl.find('.owl-prev')
    .attr('aria-label', 'Previous Slide')
    .attr('aria-labelledby', 'labeldiv')
    .attr('type', 'button');

  owl.find('.owl-next')
    .attr('aria-label', 'Next Slide')
    .attr('aria-labelledby', 'labeldiv')
    .attr('type', 'button');

  // DOTS (delay because owl creates them dynamically)
  setTimeout(function () {

    var dots = owl.find('.owl-dot');
    var total = dots.length;

    dots.each(function (index) {
      $(this)
        .attr('role', 'button')
        .attr(
          'aria-label',
          'Go to slide ' + (index + 1) + ' of ' + total
        );
    });

    dots.removeAttr('aria-current');
    dots.filter('.active').attr('aria-current', 'true');

  }, 300);
}


// Active dot update on slide change
$('.owl-carousel').on('changed.owl.carousel', function () {
  var dots = $(this).find('.owl-dot');
  dots.removeAttr('aria-current');
  dots.filter('.active').attr('aria-current', 'true');
});





        // Light gallery
  document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.light-gallery').forEach(gallery => {
    lightGallery(gallery, {
      plugins: [lgZoom],
      speed: 300,
      zoom: true,
      download: false,
      counter: false,
    });
  });
});







 