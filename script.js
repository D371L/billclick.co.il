// --- Preloader ---
(function () {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const skip = sessionStorage.getItem('bc-seen') === '1';
    const hide = () => {
        preloader.classList.add('fade-out');
        sessionStorage.setItem('bc-seen', '1');
    };

    if (skip) {
        preloader.classList.add('fade-out');
        preloader.style.display = 'none';
        return;
    }

    window.addEventListener('load', () => setTimeout(hide, 120));
    setTimeout(hide, 800);
})();

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');

            const bars = mobileBtn.querySelectorAll('.bar');
            if (nav.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const bars = mobileBtn.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // --- Header Scroll State ---
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- Accordion ---
    document.querySelectorAll('.accordion-header').forEach(acc => {
        acc.setAttribute('aria-expanded', 'false');
        acc.addEventListener('click', function () {
            const isOpen = this.classList.contains('active');
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', String(!isOpen));
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // --- Scroll Reveal ---
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('visible'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }

    // --- Back to Top ---
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('visible', window.scrollY > 300);
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Hero phone stack rotation ---
    (function initHeroPhones() {
        const phones = Array.from(document.querySelectorAll('.hero-phones .hero-phone'));
        if (phones.length < 2) return;

        const roles = ['is-front', 'is-right', 'is-back', 'is-left'];

        const applyRoles = (offset) => {
            phones.forEach((phone, index) => {
                phone.classList.remove(...roles);
                const roleIndex = (index - offset + phones.length) % phones.length;
                phone.classList.add(roles[Math.min(roleIndex, roles.length - 1)]);
            });
        };

        applyRoles(0);

        if (prefersReducedMotion) return;

        let offset = 0;
        let timer = null;

        const stop = () => {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        };

        const start = () => {
            if (timer || document.hidden) return;
            timer = setInterval(() => {
                offset = (offset + 1) % phones.length;
                applyRoles(offset);
            }, 3500);
        };

        start();
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stop();
            else start();
        });
    })();

    // --- Stats Counter ---
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.querySelectorAll('.stat-number').forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    if (prefersReducedMotion) {
                        counter.innerText = target;
                        return;
                    }

                    const duration = 1600;
                    const start = performance.now();

                    const updateCounter = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        counter.innerText = Math.ceil(progress * target);
                        if (progress < 1) requestAnimationFrame(updateCounter);
                        else counter.innerText = target;
                    };

                    requestAnimationFrame(updateCounter);
                });

                statsObserver.unobserve(entry.target);
            });
        }, { threshold: 0.4 });

        statsObserver.observe(statsSection);
    }
});
