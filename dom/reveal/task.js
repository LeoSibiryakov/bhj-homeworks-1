const reveal = document.querySelectorAll('.reveal');
    reveal.forEach(element => {
        document.addEventListener('scroll', () => {
            const viewport = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < viewport) {
            element.classList.add('reveal_active');
        }
      });
    });
    