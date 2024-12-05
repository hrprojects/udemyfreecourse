const courses = [
    { title: "Core Java Bootcamp from Zero to Hero", link: "https://www.udemy.com/course/2022-core-java-bootcamp-from-zero-to-hero/?couponCode=" },
    { title: "Java and C Complete Course for Beginners", link: "https://www.udemy.com/course/java-and-c-complete-course-for-beginners-2022/?couponCode=" },
    { title: "JavaScript 20 Projects in 20 Days", link: "https://www.udemy.com/course/javascript-20-projects-in-20-days-html-css-javascript/?couponCode=" },
    { title: "UI/UX Design with Figma", link: "https://www.udemy.com/course/uiux-design-with-figma-5-real-world-projects2022/?couponCode=" },
    { title: "Python for Beginners (In-depth)", link: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=" },
    { title: "Canva Masterclass for Social Media", link: "https://www.udemy.com/course/canva-masterclass-for-social-media-and-content-creation/?couponCode=" },
    { title: "Master Web & Mobile Design with Figma", link: "https://www.udemy.com/course/master-web-mobile-design-figma-uiux-essentials-more/?couponCode=" },
    { title: "Flutter & Firebase: Build a Chat App", link: "https://www.udemy.com/course/flutter-20-firebase-build-a-chat-app-for-ios-android/?couponCode=" },
    { title: "Build a Chat App with Firebase & Flutter", link: "https://www.udemy.com/course/build-a-chat-application-with-firebase-and-flutter/?couponCode=" },
    { title: "CSS Complete Course for Beginners", link: "https://www.udemy.com/course/css-complete-course-for-beginners/?couponCode=" },
    { title: "Python Programming for Beginners", link: "https://www.udemy.com/course/python-programming-for-beginners-m/?couponCode=" },
    { title: "Complete SQL Bootcamp", link: "https://www.udemy.com/course/2022-complete-sql-bootcamp-from-zero-to-hero-in-sql/?couponCode=" },
    { title: "CSS, Bootstrap, JS & Python Stack Course", link: "https://www.udemy.com/course/css-bootstrap-and-javascript-and-python-stack-course/?couponCode=" },
    { title: "C & PHP Complete Course", link: "https://www.udemy.com/course/c-and-php-complete-course-2023/?couponCode=" },
    { title: "PHP with MySQL: Build 7 Projects", link: "https://www.udemy.com/course/php-with-mysql-2023-build-7-php-and-mysql-projects/?couponCode=" },
    { title: "Build Modern PHP API", link: "https://www.udemy.com/course/build-modern-php-api/?ref=24ehhbbbbx33vher&couponCode=" },
    { title: "JavaScript 30 Projects in 30 Days", link: "https://www.udemy.com/course/javascript-30-projects-in-30-days-course-for-beginners/?couponCode=" },
    { title: "Python Django REST API Bootcamp", link: "https://www.udemy.com/course/the-complete-python-django-rest-api-development-bootcamp/?couponCode=" },
    { title: "Master Python Web Scraping & Automation", link: "https://www.udemy.com/course/master-python-web-scraping-automation-using-bs4-selenium/?couponCode=" },
    { title: "Boost Portfolio: 20 HTML/CSS/JS Projects", link: "https://www.udemy.com/course/boost-your-portfolio-with-20-html-css-javascript-projects/?couponCode=" },
    { title: "HTML & CSS for Absolute Beginners", link: "https://www.udemy.com/course/html-css-for-absolute-begginers/?couponCode=" }
  ];
  
  const container = document.querySelector('.container');
  
  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'card';
  
    const title = document.createElement('h3');
    title.textContent = course.title;
  
    const button = document.createElement('button');
    button.textContent = 'Enroll Now';
    button.onclick = () => window.open(course.link, '_blank');
  
    card.appendChild(title);
    card.appendChild(button);
    container.appendChild(card);
  });
  
