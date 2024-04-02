document.getElementById('loginBtn').addEventListener('click', function() 
{
    // Show the quizGrid and hide the login
    document.getElementById('quizGrid').style.display = 'block';

    document.getElementById('login').style.display = 'none';
    console.log('Logged in');

    // Add a logout button
    var logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Logout';
    logoutBtn.id = 'logoutBtn';
    logoutBtn.addEventListener('click', function() 
    {
        // Hide the quizGrid and show the login
        document.getElementById('quizGrid').style.display = 'none';
        document.getElementById('questionDiv').style.display = 'none';
        document.getElementById('login').style.display = 'block';

        // Remove the logout button
        document.body.removeChild(logoutBtn);
    });
    document.body.appendChild(logoutBtn);

    // Add the event listeners for the quizCards
    document.getElementById('quiz1').addEventListener('click', function() 
    {
        document.getElementById('quizGrid').style.display = 'none';
        console.log('clicked quiz1');
        startQuiz(questions, 10);

    });
    document.getElementById('quiz2').addEventListener('click', function() 
    {
        document.getElementById('quizGrid').style.display = 'none';
        console.log('clicked quiz2');
        startQuiz(questions, 20);
    });
    document.getElementById('quiz3').addEventListener('click', function() 
    {
        document.getElementById('quizGrid').style.display = 'none';
        console.log('clicked quiz3');
        startQuiz(questions, 30);
    });
    // Add event listeners for more quizCards as needed
});

document.getElementById('switchBtn').addEventListener('click', function() {
    // Switch between light and dark mode
    var body = document.body;
    var login = document.getElementById('login');
    var quizGrid = document.getElementById('quizGrid');

    if (body.className === 'dark') 
    {
        body.className = '';
        login.className = '';
        quizGrid.className = '';
    }
    else 
    {
        body.className = 'dark';
        login.className = 'dark';
        quizGrid.className = 'dark';
    }

    // Switch the button icon
    var icon = this.getElementsByTagName('i')[0];

    if (icon.classList.contains('fa-sun')) 
    {  
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else 
    {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});