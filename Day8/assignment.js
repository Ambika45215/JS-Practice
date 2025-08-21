// //student grade and scholarship eligibility

let marks =Number(prompt("Enter your MARKS:"));

if (marks >= 90){
    let age=Number(prompt("Enter your AGE:"));
    console.log("Grade A");
    if(age<18){
        console.log("You are eligible for scholarship");
    }
    else{
        console.log("Not eligible for scholarship");
    }
}
else if(marks >=70){
    let age=Number(prompt("Enter your AGE:"));
    console.log("Grade B");
    if (age >21){
        console.log("Try again next year");
    }
}
else{
    console.log("FAIL");
}

//login system with device check 

let login=prompt("Did you logged in (Yes or No):");

if (login == "Yes" || login == "yes"){
    let device=prompt("What is your device type Mobile or Desktop:");
    if (device == "Mobile" || device == "mobile"){
        console.log("Mobile Dashboard");
    }
    else if(device == "Desktop" || device == "desktop"){
        console.log("Desktop Dashbaord");
    }
    else{
        console.log("Enter device type correctly from given options");
    }
}
else{
    console.log("Please login");
}


// // nested discount offer 

let cartValue = Number(prompt("Enter your cart value:"));

if (cartValue > 500){
    let primeStatus = prompt("Enter user prime status Yes or No");
    if (primeStatus == "Yes"){
        console.log("You got 20% discount");
    }
    else{
        let coupon = prompt("Enter if coupons applies or not Yes or No");
        if(coupon == "Yes"){
            console.log("You got 10% discount");
        }
        else{
            console.log("You got 5% discount");
        }
    }
}
else{
    console.log("No discount");
}

// temperature analyser

let temp = Number(prompt("Enter temperature of the day:"));

if (temp >= 35) {
    let time = Number(prompt("Is it 1.Morning / 2.Afternoon / 3.Evening, Enter the respective number"));
    if (time == 2) {
        console.log("Extreme Heat Warning");
    }
    else {
        console.log("Hot Weather");
    }
}
else if (temp >= 25) {
    console.log("Normal");
}
else {
    console.log("Cold");
}

// //train ticket flare calculator 

let dest = prompt("Is passenger destination is metro city then say Yes or No ");
let pass = prompt("senior or student");

if (dest == "Yes") {
    if (pass == "senior") {
        console.log("40% off");
    }
    else {
        console.log("Full fare");
    }
}
else {
    if (pass == "student") {
        console.log("50% off");
    }
    else {
        console.log("Full fare");
    }
}

//Smart greeting app

let lang = prompt("Enter your language hindi (hi) , English(en), french (fr):");
let day = prompt("Enter if it is morning or evening");

switch (lang) {
    case "hi":
        if (day == "morning") {
            console.log("shubh prabhaat");
        }
        else {
            console.log("shubh sandhya");
        }
        break;
    case "en":
        if (day == "morning") {
            console.log("good morning");
        }
        else {
            console.log("good evening");
        }
        break;
    case "fr":
        if(day == "morning"){
            console.log("bonjour");
        }
        else{
            console.log("bonne soirée");
        }
        break;
    default:
        console.log("Enter language as per given instructions");
}

//currency converter app

let ct = prompt("Enter currency type usd,eur,inr");
let amount = Number(prompt("Enter amount"));

switch (ct) {
    case "usd":
        if (amount > 1000) {
            console.log("add bonus amount 100");
        }
        else {
            console.log("normal conversion");
        }
        break;
    case "eur":
        if (amount > 1000) {
            console.log("add bonus amount 100");
        }
        else {
            console.log("normal conversion");
        }
        break;
    case "inr":
        if(amount > 1000){
            console.log("add bonus amount 100");
        }
        else{
            console.log("normal conversion");
        }
        break;
    default:
        console.log("enter right currency type");
}

//role and department access control

let role=prompt("enter role admin ,manager,employee");
let dept=prompt("enter department");

switch(role){
    case "admin":
        if(dept == "hr"){
            console.log("Edit access granted");
        }
        else{
            console.log("view only access");
        }
        break;
    
    case "manager":
        if(dept == "hr"){
            console.log("Edit access granted");
        }
        else{
            console.log("view only access");
        }
        break;
    
    case "employee":
        if(dept == "hr"){
            console.log("Edit access granted");
        }
        else{
            console.log("view only access");
        }
        break;
    default:
        console.log("enter right role");
}

// //weather advisory system

let weather = prompt("enter weather tyep rainy ,sunny,snow");
let tem=Number(prompt("enter temp"));

switch(weather){
    case "rainy":
        if(tem <= 15){
            console.log("stay inside");
        }
        else{
            console.log("waer protection");
        }
        break;
    case "sunny":
        if(tem >= 50){
            console.log("stay inside");
        }
        else{
            console.log("waer protection");
        }
        break;
    case "snow":
        if(tem <= 1){
            console.log("stay inside");
        }
        else{
            console.log("waer protection");
        }
        break;
    default:
        console.log("enter right weather");
}


// mobile plan chooser

let plan= prompt("enter plan basic, standard,premium");
let user= prompt("enter user type student or not");

switch(plan){
    case "basic":
        if(user == "student"){
            console.log('extrs student discount applied');
        }
        else{
            console.log("standard pricing applied");
        }
        break;
        
    case "standard":
        if(user == "student"){
            console.log('extrs student discount applied');
        }
        else{
            console.log("standard pricing applied");
        }
        break;
    case "premium":
        if(user == "student"){
            console.log('extrs student discount applied');
        }
        else{
            console.log("standard pricing applied");
        }
        break;
    default:
        console.log("enter right plan");
}

//dynamic offer display

let cv= Number(prompt("enter cart value"));

if(cv > 1000){
    let up=prompt("enter your prime status yes or no");
    if(up == "yes"){
        console.log("free delivery and 20% discount");
    }
    else{
        console.log("free delivery and 10% discount");
    }
}
else if(cv >500){
    let up=prompt("enter your prime status yes or no");
    if(up == "yes"){
        console.log("10% discount");
    }
    else{
        console.log("delivery charge 50 rupees");
    }
}
else{
    console.log("no offers available");
}

//login system

let userName= prompt("enter user name");
let password =prompt("enter password");

if(userName == true || password == true){
    let otp = Number(prompt("enter otp"));
    if(otp == true){
        console.log("login successful");
    }
    else{
        console.log("invalid otp");
    }
}
else{
    console.log("invalid crendentials");
}

//theme selector

let theme=prompt("enter mode light dark auto");

if(theme == "light"){
    console.log("light theme applied");
}
else if(theme == "dark"){
    console.log("dark theme applied");
}
else if(theme == "auto"){
    let t= prompt("time is before 6 then yes or no");
    if(t == "yes"){
        console.log("apply light theme");
    }
    else{
        console.log("dark theme applied");
    }
}
else{
    console.log("enter right theme mode");
}

//course recommendation system

let us= Number(prompt("enter your age"));

if(us <= 18){
    console.log("try begineer bootcamp");
}
else{
    let interest = prompt("enter area of interest coding design marketing");
    switch(interest){
        case "coding":
            console.log("full stack");
            break;
        case "design":
            console.log("ui ux design");
            break;
        case "marketing":
            console.log("digital marketing course");
            break;
        default:
            console.log("enter right one");
    }
}

//language and region selector

let la=prompt("enter language en, hi, fr,es");
let region= prompt("enter region indian or other ");

switch(la){
    case "en":
        if(region == "indian"){
            console.log("hello namaste");
        }
        else{
            console.log("Hello");
        }
        break;
    case "hi":
        if(region == "indian"){
            console.log(" namaste");
        }
        else{
            console.log("Hello");
        }
        break;
    case "fr":
        if(region == "indian"){
            console.log("hello");
        }
        else{
            console.log("bonjour");
        }
        break;
    case "es":
        if(region == "indian"){
            console.log("hello namaste");
        }
        else{
            console.log("Hola");
        }
        break;
    default:
        console.log("enter right language");
}

// delivery time estimator

let pt=prompt("enter produt type fragile,express,standard");
let ctt=prompt("enter city type metro or non-metro");

switch(pt){
    case "fragile":
        if(ctt == "metro"){
            console.log("2 days");
        }
        else{
            console.log("4 days");
        }
        break;
    case "express":
        if(ctt == "metro"){
            console.log("1 days");
        }
        else{
            console.log("2 days");
        }
        break;
    case "standard":
        if(ctt == "metro"){
            console.log("3 days");
        }
        else{
            console.log("5 days");
        }
        break;
    default:
        console.log("enter right type");
}


//bill splitter with promo logic

let bill = Number(prompt("enter bill amoount"));
let nop= Number(prompt("enter number of people"));
let pc= Number(prompt("enter 50 for flat50 and 10 for percent10"));

if(pc == 50){
    console.log("per person amount=",(bill-50)/nop);
}
else if(pc == 10){
    console.log("per person amount=", (bill-0.1*bill)/nop);
}
else{
    console.log("no discount");
}

// multi currency checkout with promo code

let am=Number(prompt("enter bill amoount"));
let cur= prompt("enter currency type inr ,usd ,eur");
let pmc=Number(prompt("enter 100 for flat100 and 10 for percent10"));

switch(cur){
    case "inr":
        if(pmc == 100){
            console.log("final amount=",am-100,"rupees");
        }
        else{
            console.log("final amount=",am-0.1*am,"rupees");
        }
        break;
    case "usd":
        if(pmc == 100){
            console.log("final amount=",am-10,"$");
        }
        else{
            console.log("final amount=",am-0.1*am,"$");
        }
        break;
    case "eur":
        if(pmc == 100){
            console.log("final amount=",am-10,"euros");
        }
        else{
            console.log("final amount=",am-0.1*am,"euros");
        }
        break;
    default:
        console.log("enter right currency type");
}

// student result and feedback generator

let mark= Number(prompt("enter marks"));
let section = prompt("enter section a,b,c");

if(mark >=90){
    if(section == "a"){
        console.log("outstanding performance in section a");
    }
    else if(section == "b"){
        console.log("excellent in scetion b");
    }
    else{
        console.log("very good in section c");
    }
}
else if(mark >= 70){
    console.log("good performance");
}
else{
    console.log("needs improvement");
}

//age group greeting

let agg=Number(prompt("enter your age "));

if(agg <= 13){
    let gg=prompt("enter your gender");
    if(gg == "male"){
        console.log("hey young boy");
    }
    else{
        console.log("hey young girl");
    }
}
else if(agg <=19){
    console.log("hello teen");
}
else{
    console.log("welcome adult");
}