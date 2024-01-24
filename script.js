$(document).on('ready', function () {
    $(".SliderConsult").slick({
        centerMode: true,
        centerPadding: '60px',
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
    });

    $(".SliderTech").slick({
        centerMode: true,
        centerPadding: '60px',
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 150,
        autoplay: true,
    });

    let value = 0;
    let animationId;

    function scrollToBottom() {
        const scrollHeight = document.body.scrollHeight;
        const scrollStep = Math.PI / (value * 60); // 15 секунд, 60 кадров в секунду
        let count = 0;
        let scrollCount = 0;
      
        function step() {
          if (scrollCount < scrollHeight) {
            window.scrollTo(0, scrollCount);
            scrollCount = scrollHeight * Math.sin(scrollStep * count);
            count++;
            animationId = requestAnimationFrame(step);
          }
        }
      
        function stopScrollAnimation(event) {
            if (event.key === 'Escape') {
              cancelAnimationFrame(animationId);
              window.removeEventListener('keydown', stopScrollAnimation);
            }
          }
        
          window.addEventListener('keydown', stopScrollAnimation);
    
        animationId = requestAnimationFrame(step);
      }


      function scrollToTop() {
        const scrollHeight = document.body.scrollHeight;
        const scrollStep = Math.PI / (value * 60); // 15 секунд, 60 кадров в секунду
        let count = 0;
        let scrollCount = 0;
      
        function step() {
          if (scrollCount > scrollHeight) {
            window.scrollTo(0, scrollCount);
            scrollCount = scrollHeight * Math.sin(scrollStep * count);
            count++;
            animationId = requestAnimationFrame(step);
          }
        }
      
        function stopScrollAnimation(event) {
            if (event.key === 'Escape') {
              cancelAnimationFrame(animationId);
              window.removeEventListener('keydown', stopScrollAnimation);
            }
          }
        
          window.addEventListener('keydown', stopScrollAnimation);
    
        animationId = requestAnimationFrame(step);
      }

      function scrollToDiv(destinationId) {
        const destinationDiv = document.getElementById(destinationId);
        if (destinationDiv) {
          const destinationOffset = destinationDiv.offsetTop;
          const scrollOptions = {
            top: destinationOffset,
            behavior: 'smooth'
          };
          window.scrollTo(scrollOptions);
        }
      }

      document.getElementById('logo').addEventListener('click', function(event) {
        event.preventDefault();
        value = 30;
        scrollToBottom();
      });

      document.getElementById('homes').addEventListener('click', function() {
        scrollToTop();
      });

      document.getElementById('a2').addEventListener('click', function() {
        value = 5;
        const destinationId = 'WWA'; // Здесь вы можете определить id динамически
        scrollToDiv(destinationId);
      });

      document.getElementById('a3').addEventListener('click', function() {
        value = 5;
        const destinationId = 'BuCon'; // Здесь вы можете определить id динамически
        scrollToDiv(destinationId);
      });

      document.getElementById('a4').addEventListener('click', function() {
        value = 5;
        const destinationId = 'TeCon'; // Здесь вы можете определить id динамически
        scrollToDiv(destinationId);
      });

      document.getElementById('a5').addEventListener('click', function() {
        value = 5;
        const destinationId = 'Career'; // Здесь вы можете определить id динамически
        scrollToDiv(destinationId);
      });

      document.getElementById('gets-started').addEventListener('click', function(event) {
        event.preventDefault();
        value = 5;
        const destinationId = 'lets-works'; // Здесь вы можете определить id динамически
        scrollToDiv(destinationId);
      });

      document.getElementById('sendeath').addEventListener('click', function(event) {
        event.preventDefault();
        value = 15;
        scrollToTop();
      });
});

