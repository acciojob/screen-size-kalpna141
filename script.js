//your JS code here. If required.
function updateWindowSize() {
      const widthSpan = document.getElementById('width');
      const heightSpan = document.getElementById('height');
      
      widthSpan.textContent = window.innerWidth;
      heightSpan.textContent = window.innerHeight;
    }

    // Initial update
    updateWindowSize();

    // Update on window resize
    window.addEventListener('resize', updateWindowSize);