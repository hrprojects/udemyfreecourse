const courses = [
    { title: "Core Java Bootcamp from Zero to Hero", link: "https://www.udemy.com/course/2022-core-java-bootcamp-from-zero-to-hero/?couponCode=95008EF04D8B0F18C4D5" },
    { title: "Java and C Complete Course for Beginners", link: "https://www.udemy.com/course/java-and-c-complete-course-for-beginners-2022/?couponCode=D7B68DC5E3843B743FC8" },
    { title: "JavaScript 20 Projects in 20 Days", link: "https://www.udemy.com/course/javascript-20-projects-in-20-days-html-css-javascript/?couponCode=B5A244EB95D2A3365465" },
    { title: "UI/UX Design with Figma", link: "https://www.udemy.com/course/uiux-design-with-figma-5-real-world-projects2022/?couponCode=3275B995A4DEACBAE9D4" },
    { title: "Python for Beginners (In-depth)", link: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=6BDB015AC71F60E56F54" },
    { title: "Canva Masterclass for Social Media", link: "https://www.udemy.com/course/canva-masterclass-for-social-media-and-content-creation/?couponCode=BBC1299C878B4B22A27C" },
    { title: "Master Web & Mobile Design with Figma", link: "https://www.udemy.com/course/master-web-mobile-design-figma-uiux-essentials-more/?couponCode=C511A53D1990A5F3FE1B" },
    { title: "Flutter & Firebase: Build a Chat App", link: "https://www.udemy.com/course/flutter-20-firebase-build-a-chat-app-for-ios-android/?couponCode=6856A6ACB318EF982EC5" },
    { title: "Build a Chat App with Firebase & Flutter", link: "https://www.udemy.com/course/build-a-chat-application-with-firebase-and-flutter/?couponCode=9E59EC405B4835312CFA" },
    { title: "CSS Complete Course for Beginners", link: "https://www.udemy.com/course/css-complete-course-for-beginners/?couponCode=6BF764B3AA2AD5A7CA5F" },
    { title: "Python Programming for Beginners", link: "https://www.udemy.com/course/python-programming-for-beginners-m/?couponCode=1E5E4C2BE8145FF7B1D0" },
    { title: "Complete SQL Bootcamp", link: "https://www.udemy.com/course/2022-complete-sql-bootcamp-from-zero-to-hero-in-sql/?couponCode=8BBEFA3915FACF5AD4C3" },
    { title: "CSS, Bootstrap, JS & Python Stack Course", link: "https://www.udemy.com/course/css-bootstrap-and-javascript-and-python-stack-course/?couponCode=1F10D8DD434D1F2AE4E9" },
    { title: "C & PHP Complete Course", link: "https://www.udemy.com/course/c-and-php-complete-course-2023/?couponCode=CFACB0BA27147C8C17D3" },
    { title: "PHP with MySQL: Build 7 Projects", link: "https://www.udemy.com/course/php-with-mysql-2023-build-7-php-and-mysql-projects/?couponCode=PHP7PROJECTS56" },
    { title: "Build Modern PHP API", link: "https://www.udemy.com/course/build-modern-php-api/?ref=24ehhbbbbx33vher&couponCode=C8A767EA49A87BA73F37" },
    { title: "JavaScript 30 Projects in 30 Days", link: "https://www.udemy.com/course/javascript-30-projects-in-30-days-course-for-beginners/?couponCode=51288B81A52B4C9F8032" },
    { title: "Python Django REST API Bootcamp", link: "https://www.udemy.com/course/the-complete-python-django-rest-api-development-bootcamp/?couponCode=3F798D7195F737684266" },
    { title: "Master Python Web Scraping & Automation", link: "https://www.udemy.com/course/master-python-web-scraping-automation-using-bs4-selenium/?couponCode=C5DAAF1FAF50EDCE58E1" },
    { title: "Boost Portfolio: 20 HTML/CSS/JS Projects", link: "https://www.udemy.com/course/boost-your-portfolio-with-20-html-css-javascript-projects/?couponCode=0F9FA1F06C4FE795A840" },
    { title: "HTML & CSS for Absolute Beginners", link: "https://www.udemy.com/course/html-css-for-absolute-begginers/?couponCode=1081085A9F6AA9E9E417" }
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
  