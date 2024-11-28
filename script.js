
        function animateCount(elementId, start, end, duration) {
            let current = start;
            const range = end - start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration / range));
            const element = document.getElementById(elementId);
            
            const timer = setInterval(() => {
                current += increment;
                const span = document.createElement('span');
                span.className = 'counting';
                span.textContent = current + '+';
                
                element.innerHTML = '';
                element.appendChild(span);
                
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }

        window.onload = () => {
            animateCount("collegesCount", 0, 119, 2000);
            animateCount("studentsCount", 0, 198, 2000);
            animateCount("mentorsCount", 0, 79, 2000);
        };
    