// DOM Elements
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselIndicators = document.querySelectorAll('.indicator');
const carouselPrev = document.querySelector('.carousel-control.prev');
const carouselNext = document.querySelector('.carousel-control.next');
const carouselPause = document.querySelector('.carousel-pause');

const activityTabs = document.querySelectorAll('.activity-tab');
const tabContents = document.querySelectorAll('.tab-content');

const socialTabs = document.querySelectorAll('.social-tab');
const socialFeeds = document.querySelectorAll('.social-feed');

const quizCarousel = document.querySelector('.quiz-carousel');
const podcastCarousel = document.querySelector('.podcast-carousel');

// Carousel functionality
let currentSlide = 0;
let carouselInterval;
let isPaused = false;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    carouselIndicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === index) {
            indicator.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentSlide);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

// Event listeners for carousel
if (carouselNext) {
    carouselNext.addEventListener('click', () => {
        nextSlide();
        stopCarousel();
        if (!isPaused) startCarousel();
    });
}

if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
        prevSlide();
        stopCarousel();
        if (!isPaused) startCarousel();
    });
}

carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        stopCarousel();
        if (!isPaused) startCarousel();
    });
});

if (carouselPause) {
    carouselPause.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
            stopCarousel();
            carouselPause.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            startCarousel();
            carouselPause.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
}

// Start carousel on page load
startCarousel();

// Activity Tabs functionality
activityTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        activityTabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        if (tabContents[index]) {
            tabContents[index].classList.add('active');
        }
    });
});

// Social Tabs functionality
socialTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const socialType = tab.dataset.social;

        // Remove active class from all tabs and feeds
        socialTabs.forEach(t => t.classList.remove('active'));
        socialFeeds.forEach(f => f.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding feed
        const feed = document.getElementById(`${socialType}-feed`);
        if (feed) {
            feed.classList.add('active');
        }
    });
});

// Quiz Carousel scroll functionality
if (quizCarousel) {
    const quizPrev = quizCarousel.parentElement.querySelector('.carousel-nav.prev');
    const quizNext = quizCarousel.parentElement.querySelector('.carousel-nav.next');

    if (quizNext) {
        quizNext.addEventListener('click', () => {
            quizCarousel.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        });
    }

    if (quizPrev) {
        quizPrev.addEventListener('click', () => {
            quizCarousel.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        });
    }
}

// Podcast Carousel scroll functionality
if (podcastCarousel) {
    const podcastWrapper = podcastCarousel.parentElement;
    const podcastPrev = podcastWrapper.querySelector('.carousel-nav.prev');
    const podcastNext = podcastWrapper.querySelector('.carousel-nav.next');

    if (podcastNext) {
        podcastNext.addEventListener('click', () => {
            podcastCarousel.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        });
    }

    if (podcastPrev) {
        podcastPrev.addEventListener('click', () => {
            podcastCarousel.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        });
    }
}

// Dropdown functionality for navigation
document.querySelectorAll('.nav-item.dropdown').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown-content');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown-content');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});

// Language Selector
const languageSelector = document.querySelector('.language-selector');
if (languageSelector) {
    languageSelector.addEventListener('click', () => {
        // This would open a language selection modal/dropdown in a real implementation
        console.log('Language selector clicked');
    });
}

// Search functionality
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        // This would open a search modal/overlay in a real implementation
        console.log('Search button clicked');
    });
}

// Profile functionality
const profileBtn = document.querySelector('.profile-btn');
if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        // This would open a profile dropdown/modal in a real implementation
        console.log('Profile button clicked');
    });
}

// Floating Action Buttons
const fabButtons = document.querySelectorAll('.fab-btn');
fabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Add functionality for floating action buttons
        console.log('FAB clicked');
    });
});

// View All Buttons
const viewAllButtons = document.querySelectorAll('.view-all-btn');
viewAllButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // This would navigate to a listing page in a real implementation
        console.log('View All clicked');
    });
});

// Activity Cards hover effect
const activityCards = document.querySelectorAll('.activity-card, .focus-card, .quiz-card, .podcast-card, .blog-card, .state-card, .group-card');
activityCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Watch Live Button
const watchLiveBtn = document.querySelector('.watch-live-btn');
if (watchLiveBtn) {
    watchLiveBtn.addEventListener('click', () => {
        // This would open a video player or redirect to a live stream
        console.log('Watch Live clicked');
    });
}

// Watch Now Button
const watchNowBtn = document.querySelector('.watch-now-btn');
if (watchNowBtn) {
    watchNowBtn.addEventListener('click', () => {
        // This would play Mann Ki Baat video
        console.log('Watch Now clicked');
    });
}

// Take Pledge Button
const takePledgeBtns = document.querySelectorAll('.take-pledge-btn');
takePledgeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // This would open a pledge form/modal
        console.log('Take Pledge clicked');
    });
});

// WhatsApp Join Button
const whatsappJoin = document.querySelector('.whatsapp-join');
if (whatsappJoin) {
    whatsappJoin.addEventListener('click', (e) => {
        e.preventDefault();
        // This would redirect to WhatsApp group/channel
        console.log('WhatsApp join clicked');
    });
}

// Social Media Links
const socialLinks = document.querySelectorAll('.social-icons a, .footer-social a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // In a real implementation, these would redirect to actual social media pages
        console.log('Social media link clicked:', link.getAttribute('aria-label'));
    });
});

// App Download Buttons
const appButtons = document.querySelectorAll('.app-btn');
appButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // This would redirect to app stores
        console.log('App download clicked');
    });
});

// Periodical Action Buttons
const periodicalButtons = document.querySelectorAll('.periodical-actions button');
periodicalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // This would open PDF viewer or e-book reader
        console.log('Periodical action clicked:', btn.textContent);
    });
});

// PDF and E-Book Buttons
const pdfBtn = document.querySelector('.pdf-btn');
const ebookBtn = document.querySelector('.ebook-btn');

if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
        // This would open PDF viewer
        console.log('PDF button clicked');
    });
}

if (ebookBtn) {
    ebookBtn.addEventListener('click', () => {
        // This would open e-book reader
        console.log('E-book button clicked');
    });
}

// Video Cards Click
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        // This would play the video
        console.log('Video card clicked');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add loading animation to cards when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';

            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
const allCards = document.querySelectorAll('.activity-card, .focus-card, .quiz-card, .podcast-card, .blog-card, .state-card, .group-card, .periodical-card, .pledge-card');
allCards.forEach(card => {
    observer.observe(card);
});

// Accessibility: Keyboard navigation for tabs
document.addEventListener('keydown', (e) => {
    const activeElement = document.activeElement;

    // Tab navigation with arrow keys
    if (activeElement.classList.contains('activity-tab')) {
        const tabs = Array.from(activityTabs);
        const currentIndex = tabs.indexOf(activeElement);

        if (e.key === 'ArrowRight') {
            const nextIndex = (currentIndex + 1) % tabs.length;
            tabs[nextIndex].focus();
            tabs[nextIndex].click();
        } else if (e.key === 'ArrowLeft') {
            const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            tabs[prevIndex].focus();
            tabs[prevIndex].click();
        }
    }
});

// Handle carousel keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        stopCarousel();
        if (!isPaused) startCarousel();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopCarousel();
        if (!isPaused) startCarousel();
    }
});

// Accessibility button
const accessibilityBtn = document.querySelector('.accessibility-btn');
if (accessibilityBtn) {
    accessibilityBtn.addEventListener('click', () => {
        // This would open accessibility options
        console.log('Accessibility options clicked');
    });
}

// Font size button
const fontSizeBtn = document.querySelector('.font-size-btn');
if (fontSizeBtn) {
    let fontSize = 100;
    fontSizeBtn.addEventListener('click', () => {
        fontSize = fontSize === 100 ? 120 : fontSize === 120 ? 140 : 100;
        document.documentElement.style.fontSize = fontSize + '%';
        console.log('Font size changed to:', fontSize + '%');
    });
}

// Skip to main content
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('.get-involved');
        if (mainContent) {
            mainContent.scrollIntoView({ behavior: 'smooth' });
            mainContent.focus();
        }
    });
}

// Handle form submissions (dummy handlers)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');
        alert('This is a demo. Form submission is disabled.');
    });
});

// State card interactions
const stateCards = document.querySelectorAll('.state-card');
stateCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('State card clicked:', card.querySelector('h4').textContent);
    });
});

// Group card interactions
const groupCards = document.querySelectorAll('.group-card');
groupCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Group card clicked:', card.querySelector('h4').textContent);
    });
});

// Handle quiz card clicks
const quizCards = document.querySelectorAll('.quiz-card');
quizCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Quiz card clicked');
        // This would navigate to quiz page
    });
});

// Handle podcast card clicks
const podcastCards = document.querySelectorAll('.podcast-card');
podcastCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Podcast card clicked');
        // This would play podcast
    });
});

// Lazy load images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Prevent right-click on images (optional, for demo purposes)
// Commented out for better UX
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => {
//         e.preventDefault();
//     });
// });

// Console log for debugging
console.log('MyGov India Clone - Frontend Loaded Successfully');
console.log('All interactive features initialized');
console.log('Note: This is a frontend-only clone. All links and forms are non-functional.');

// Add a visual indicator when interactive elements are clicked
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        // Create keyframes for ripple animation
        if (!document.getElementById('ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.innerHTML = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized');
        // Reinitialize carousels if needed
    }, 250);
});

// Handle scroll events
let lastScrollTop = 0;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
}, false);

// Initialize tooltips (if any)
const tooltipElements = document.querySelectorAll('[data-tooltip]');
tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = e.target.dataset.tooltip;
        tooltip.style.position = 'absolute';
        tooltip.style.background = '#333';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '12px';
        tooltip.style.zIndex = '10000';

        document.body.appendChild(tooltip);

        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

        e.target.addEventListener('mouseleave', () => {
            tooltip.remove();
        }, { once: true });
    });
});

// Print functionality
const printButtons = document.querySelectorAll('[data-print]');
printButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        window.print();
    });
});

// Share functionality
const shareButtons = document.querySelectorAll('[data-share]');
shareButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'MyGov India',
                    text: 'Check out this amazing government portal!',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            console.log('Web Share API not supported');
        }
    });


});
