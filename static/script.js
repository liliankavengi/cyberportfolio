document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect for Hero
    const roles = [
        "Cybersecurity Professional",
        "Penetration Tester",
        "Incident Responder",
        "Security Architect"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        typewriterElement.textContent = currentRole.substring(0, charIndex);
        
        let typingDelay = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500; // Pause before new phrase
        }

        setTimeout(typeWriter, typingDelay);
    }

    setTimeout(typeWriter, 1000); // Initial delay

    // Terminal Output Animation
    const terminalOutput = `
<span class="color-blue">[+]</span> Initializing reconnaissance protocols...
<span class="color-blue">[+]</span> Scanning memory blocks for skills...
<span class="color-blue">[+]</span> 4 key modules detected:

  <span class="color-yellow">-></span> Penetration Testing / Red Teaming
  <span class="color-yellow">-></span> SIEM & Log Analysis (Splunk, ELK)
  <span class="color-yellow">-></span> Cloud Security (AWS, Azure)
  <span class="color-yellow">-></span> Risk Assessment & Compliance

<span class="color-blue">[+]</span> Encryption keys verified.
<span class="color-blue">[+]</span> System status: SECURE. 
Ready for deployment.`;

    const terminalContainer = document.getElementById('skills-output');
    let hasTypedTerminal = false;

    // Intersection Observer to trigger terminal typing when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTypedTerminal) {
                hasTypedTerminal = true;
                terminalContainer.innerHTML = terminalOutput;
                // Optional: For a real typing effect on HTML, a more complex parser is needed.
                // For now, abruptly showing the content mimics a fast script execution.
                terminalContainer.style.opacity = 0;
                setTimeout(() => {
                    terminalContainer.style.transition = "opacity 0.5s ease";
                    terminalContainer.style.opacity = 1;
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    const terminalSection = document.querySelector('.terminal-container');
    if (terminalSection) {
        observer.observe(terminalSection);
    }
    // --- Security & Anti-Sniffing Measures ---

    // 1. Disable Right-Click Context Menu
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // 2. Block common DevTools keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Debugger Trap (slows down DevTools users)
    setInterval(() => {
        const startTime = performance.now();
        debugger;
        const endTime = performance.now();
        if (endTime - startTime > 100) {
            console.warn("Anomalous activity detected. Connection monitored.");
        }
    }, 1000);

    // 4. Content Masking for Email
    const contactLinks = document.querySelector('.contact-links');
    if (contactLinks) {
        const mailBtn = contactLinks.querySelector('a[href^="mailto:"]');
        if (mailBtn) {
            const raw = mailBtn.getAttribute('href');
            mailBtn.setAttribute('href', '#');
            mailBtn.addEventListener('mouseenter', () => {
                mailBtn.setAttribute('href', raw);
            });
            mailBtn.addEventListener('mouseleave', () => {
                mailBtn.setAttribute('href', '#');
            });
        }
    }

    console.log("%c[!] SYSTEM SECURED. Sniffing blocked.", "color: #00ff00; font-weight: bold; font-size: 20px;");
});

