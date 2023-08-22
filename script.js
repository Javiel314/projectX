import { initWeatherData } from "./weatherData.js";
import { displayCurrentWeather } from "./currentWeather.js";
import { displayCountryFlag } from "./countryFlag.js";

/*** initialize Foto gallery from external library ***/
const splide = new Splide(".splide");
splide.mount();

/*** making nav bar sticky ***/
const stickyNavbar = () => {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const navHeight = nav.getBoundingClientRect().height;

  const stickyNav = (ObserverEntries) => {
    const [entry] = ObserverEntries;

    if (!entry.isIntersecting) nav.classList.add("nav-sticky");
    else {
      nav.classList.remove("nav-sticky");
      resetSectionsEffect();
    }
  };

  const headerObserverOpt = {
    root: null, // no specifc target, just the viewport
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  };

  const headerObserver = new IntersectionObserver(stickyNav, headerObserverOpt);
  headerObserver.observe(header);
};

/*** reset Section Effect when header is reached ***/
const resetSectionsEffect = () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.classList.add("section-hidden");
  });
};

/*** effect movoing over nav links ***/
const hoverEffect = function () {
  const navLinks = document.querySelector(".nav-links");

  navLinks.addEventListener("mouseover", function (e) {
    const link = e.target;
    // to not add the class to the parent element
    if (e.target === e.currentTarget) return;

    link.classList.add("nav-link-hover");
  });

  navLinks.addEventListener("mouseout", function (e) {
    const link = e.target;
    //
    if (e.target === e.currentTarget) return;
    link.classList.remove("nav-link-hover");
  });
};

/*** Effects for scolling trough sections***/
const sectionEffect = () => {
  const sections = document.querySelectorAll(".section");

  const revealSection = (entries, observer) => {
    const [entry] = entries;
    const currentSection = entry.target;

    if (!entry.isIntersecting) return;
    currentSection.classList.remove("section-hidden");
  };

  const sectionObsOpt = {
    root: null,
    threshold: 0.1,
  };

  const sectionObsever = new IntersectionObserver(revealSection, sectionObsOpt);

  sections.forEach((section) => {
    sectionObsever.observe(section);
    section.classList.add("section-hidden");
  });
};

const userInput = () => {
  const cityInput = document.querySelector(".city-form");
  const textField = document.getElementById("city--name");

  initWeatherData();
  cityInput.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent reload of the page
    const cityValue = textField.value;
    textField.value = ""; // clear field after user input
    displayCurrentWeather(cityValue);
  });
};

const initData = () => {
  displayCountryFlag();
  hoverEffect();
  stickyNavbar();
  sectionEffect();
  userInput();
};

(() => {initData()})();
// initData();
