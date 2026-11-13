// Live Clock Matrix
function runClock() {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toTimeString().split(' ')[0] + ' UTC';
}
setInterval(runClock, 1000);

// Auth Toggle Function
function toggleAuthMode(mode) {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    const title = document.getElementById('authTitle');

    if (mode === 'signin') {
        signUpForm.classList.add('hidden');
        signInForm.classList.remove('hidden');
        title.innerText = "VERIFY OPERATOR";
    } else {
        signInForm.classList.add('hidden');
        signUpForm.classList.remove('hidden');
        title.innerText = "CREATE SOC ACCOUNT";
    }
}

// Form Handlers
function handleSignUp(event) {
    event.preventDefault();
    SOCStore.registeredUser = {
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value
    };
    alert("Sign Up Done! Please Login.");
    toggleAuthMode('signin');
    document.getElementById('loginEmail').value = SOCStore.registeredUser.email;
}

function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;

    if (SOCStore.registeredUser && email === SOCStore.registeredUser.email && pass === SOCStore.registeredUser.password) {
        loadDashboard();
    } else {
        alert("Access Denied!");
    }
}

function handleGoogleAuth() {
    alert("Google Tokens Authenticated.");
    loadDashboard();
}

function loadDashboard() {
    document.getElementById('authScreen').classList.add('hidden');
    document.getElementById('dashboardContainer').classList.remove('hidden');
    initializeDashboardPage();
}

function logOut() {
    stopSimulation();
    document.getElementById('incident-table-body').innerHTML = '';
    document.getElementById('terminal').innerHTML = '';
    document.getElementById('dashboardContainer').classList.add('hidden');
    document.getElementById('authScreen').classList.remove('hidden');
    toggleAuthMode('signup');
}

// Bridge function for the simulator to talk to visual UI modules
function renderNewIncident() {
    const now = new Date();
    const timestamp = now.toTimeString().split(' ')[0];
    const ip = SOCStore.ips[Math.floor(Math.random() * SOCStore.ips.length)];
    const attack = SOCStore.attackTypes[Math.floor(Math.random() * SOCStore.attackTypes.length)];

    addRowToTable(timestamp, ip, attack);
    addLogToTerminal(timestamp, ip, attack);
}