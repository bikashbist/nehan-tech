document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  const backToTop = document.getElementById("backToTop")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
      backToTop.classList.add("active")
    } else {
      navbar.classList.remove("scrolled")
      backToTop.classList.remove("active")
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Counter animation
  const counters = document.querySelectorAll(".counter")
  const speed = 200

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target")
      const count = +counter.innerText
      const increment = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + increment)
        setTimeout(animateCounters, 1)
      } else {
        counter.innerText = target
      }
    })
  }

  // Intersection Observer for counter animation
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          counterObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  const counterContainer = document.querySelector(".counter-container")
  if (counterContainer) {
    counterObserver.observe(counterContainer)
  }

  // Service card hover effect
  const serviceCards = document.querySelectorAll(".service-card")

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.classList.add("hovered")
    })

    card.addEventListener("mouseleave", function () {
      this.classList.remove("hovered")
    })
  })

  // Testimonial carousel autoplay
  const testimonialCarouselElement = document.getElementById("testimonialCarousel")
  if (testimonialCarouselElement) {
    const testimonialCarousel = new bootstrap.Carousel(testimonialCarouselElement, {
      interval: 5000,
    })
  }

  // Client carousel autoplay
  const clientCarouselElement = document.getElementById("clientCarousel")
  if (clientCarouselElement) {
    const clientCarousel = new bootstrap.Carousel(clientCarouselElement, {
      interval: 3000,
    })
  }

  // Add animation classes on scroll
  const animatedElements = document.querySelectorAll(".service-card, .stat-card, .counter-card, .pricing-card")

  const animateOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp")
          animateOnScroll.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  animatedElements.forEach((element) => {
    animateOnScroll.observe(element)
  })
})
