// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Initialize Lottie animations
    initAnimations();
    
    // Initialize particle.js if available
    if (typeof particlesJS !== 'undefined') {
        initParticles();
    }
    
    // Initialize testimonial carousel
    initTestimonialCarousel();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Initialize Lottie animations
function initAnimations() {
    // Hero animation
    if (document.getElementById('hero-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('hero-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/animations/hero.json'
        });
    }
    
    // Mode animations
    if (document.getElementById('permanent-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('permanent-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/animations/permanent.json'
        });
    }
    
    if (document.getElementById('frequent-animation')) {
        lottie.loadAnimation({
            container: document.getElementById('frequent-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'assets/animations/frequent.json'
        });
    }
    
    // Success animation
    if (document.getElementById('successAnimation')) {
        lottie.loadAnimation({
            container: document.getElementById('successAnimation'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'assets/animations/success.json'
        });
    }
}

// Initialize particle.js
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// Testimonial Carousel
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (testimonials.length > 1) {
        let currentIndex = 0;
        
        // Show first testimonial
        testimonials[0].classList.add('active');
        
        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                testimonials[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % testimonials.length;
                testimonials[currentIndex].classList.add('active');
            });
        }
        
        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                testimonials[currentIndex].classList.remove('active');
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                testimonials[currentIndex].classList.add('active');
            });
        }
    }
}

// Scroll Animations
function initScrollAnimations() {
    const featureCards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    featureCards.forEach(card => {
        observer.observe(card);
    });
    
    // Animate elements when they come into view
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(element => {
        animateOnScroll.observe(element);
    });
}
