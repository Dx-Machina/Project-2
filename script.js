document.getElementById('loginBtn').addEventListener('click', function() {
    // Show the quizzes and hide the login
    document.getElementById('quizzes').style.display = 'block';
    document.getElementById('login').style.display = 'none';

    // Add a logout button
    var logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Logout';
    logoutBtn.id = 'logoutBtn';
    logoutBtn.addEventListener('click', function() {
        // Hide the quizzes and show the login
        document.getElementById('quizzes').style.display = 'none';
        document.getElementById('login').style.display = 'block';

        // Remove the logout button
        document.body.removeChild(logoutBtn);
    });

    document.body.appendChild(logoutBtn);

    // Add the event listeners for the quizzes
    document.getElementById('quiz1').addEventListener('click', function() {
        // Code to start Quiz 1 goes here
    });

    document.getElementById('quiz2').addEventListener('click', function() {
        // Code to start Quiz 2 goes here
    });

    document.getElementById('quiz3').addEventListener('click', function() {
        // Code to start Quiz 3 goes here
    });

    // Add event listeners for more quizzes as needed
});

document.getElementById('switchBtn').addEventListener('click', function() {
    // Switch between light and dark mode
    var body = document.body;
    var login = document.getElementById('login');
    var quizzes = document.getElementById('quizzes');
    var textSpan = this.getElementsByTagName('span')[0];

    if (body.className === 'dark') {
        body.className = '';
        login.className = '';
        quizzes.className = '';
        textSpan.textContent = 'Switch to Dark Mode';
    } else {
        body.className = 'dark';
        login.className = 'dark';
        quizzes.className = 'dark';
        textSpan.textContent = 'Switch to Light Mode';
    }

    // Switch the button icon
    var icon = this.getElementsByTagName('i')[0];

    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});