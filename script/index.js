const userName = document.querySelector(".name-input-box");
const userEmail = document.querySelector(".email-input-box");
const userDob = document.querySelector(".dob-input-box");
const userPincode = document.querySelector(".pincode-input-box");
const userPassword = document.querySelector(".password-input-box");
const bulbOff = document.querySelector(".bulb-off");
const bulbOn = document.querySelector(".bulb-on");
const welcomeUserName = document.querySelector(".welcome-user-name");
const switchOnCounts = document.querySelector(".switch-on-count");
const switchOffCounts = document.querySelector(".switch-off-count");
const switchOnButton = document.querySelector(".switch-on-button");
const switchOffButton = document.querySelector(".switch-off-button");

let countOfSwitchOn = 0;
let countOfSwitchOff = 0;

function storeDataToDb(data) {
    localStorage.setItem('bulbUser', JSON.stringify(data));
}

function getDataToDb() {
    const dbData = localStorage.getItem('bulbUser');
    if (dbData) {
        return JSON.parse(dbData);
    }
    return [];
}

const numbersOfUsers = getDataToDb();

function addToDb(userName, userEmail, userDob, userPincode, userPassword) {
    detail = {
        name: userName,
        email: userEmail,
        dob: userDob,
        pincode: userPincode,
        password: userPassword,
        id: new Date().getTime()
    }
    numbersOfUsers.push(detail);
    storeDataToDb(numbersOfUsers);
}

welcomeUserName.innerHTML = numbersOfUsers[numbersOfUsers.length - 1].name;

function buttonOn() {
    bulbOn.classList.remove("hidden");
    bulbOff.classList.add("hidden");
    countOfSwitchOn++;
    switchOnCounts.innerHTML = countOfSwitchOn;
    switchOnButton.disabled = true;
    switchOffButton.disabled = false;
}

function buttonOff() {
    bulbOn.classList.add("hidden");
    bulbOff.classList.remove("hidden");
    countOfSwitchOff++;
    switchOffCounts.innerHTML = countOfSwitchOff;
    switchOnButton.disabled = false;
    switchOffButton.disabled = true;
}

function formSubmit() {
    if (!userName.value || !userEmail.value || !userDob.value || !userPincode.value || !userPassword.value) {
        alert("Please Fill all details");
    }
    else {
        addToDb(userName.value, userEmail.value, userDob.value, userPincode.value, userPassword.value);
        window.location.href = "bulbPage.html";
    }
}

