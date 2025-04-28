// script.js - Common JavaScript functions for Qatrah Hayat

document.addEventListener('DOMContentLoaded', () => {
    // --- Update Copyright Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle'); // The hamburger button
    const mainNav = document.querySelector('.main-nav'); // The container for nav links

    if (navToggle && mainNav) {
        // Function to close the nav
        const closeNav = () => {
            mainNav.classList.remove('is-active');
            navToggle.setAttribute('aria-expanded', 'false');
        };

        // Toggle nav on button click
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from immediately closing nav if it propagates to document
            const isActive = mainNav.classList.toggle('is-active');
            navToggle.setAttribute('aria-expanded', isActive);
        });

        // --- Close Mobile Nav When a Link is Clicked ---
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeNav); // Close nav when a link is clicked
        });

        // --- Close Mobile Nav if Clicked Outside ---
        document.addEventListener('click', (event) => {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            // If the nav is active AND the click was NOT inside the nav AND NOT on the toggle button
            if (mainNav.classList.contains('is-active') && !isClickInsideNav && !isClickOnToggle) {
                closeNav();
            }
        });

         // --- Close Mobile Nav on Escape key press ---
         document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mainNav.classList.contains('is-active')) {
                 closeNav();
            }
        });
    }

});

// =======================================
// Supabase Initialization Notes:
// Supabase client initialization remains within the script tags of the
// specific pages that need it (register.html, search.html, suggestions.html)
// for simplicity in this project structure.
// Ensure the Supabase CDN script is loaded *before* these page-specific scripts.
// =======================================