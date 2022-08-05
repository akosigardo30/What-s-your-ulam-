let btn1 = document.getElementById('btn1');
let output = document.getElementById('output');

let ulamBeef = ['Beef Sinigang', 'Beef Nilaga', 'Beef Brocoli', 'Beef Mechado', 'Beef Caldereta', 'Beef Steak'];
let ulamPork = ['Pork Sinigang', 'Pork Nilaga', 'Pork Brocoli', 'Pork Mechado', 'Pork Caldereta', 'Pork Adobo', 'Pork Menudo', 'Crispy Pata', 'Pork Salpicao', 'Pork Guisantes', 'Pork Bistek', 'Igado', 'Binagoongang Baboy', 'Sweet and Sour Pork', 'Pork Estofado', 'Lechon Paksiw', 'Pork Dinuguan', 'Humba', 'Pochero', 'Tokwat Baboy', 'Pork Sisig', 'Lechon Kawali', 'Bicol Express', 'Pork Barbecue', 'Bopis', 'Bagnet'];
let ulamChicken = ['Chicken Sinampalukan', 'Chicken Tinola', 'Chicken Afritada', 'Chicken Adobo', 'Chicken Caldereta', 'Chicken-Ala-King', 'Chicken Fillet', 'Chicken White Sauce', 'Pininyahang Manok', 'Chicken Curry', 'Lechon Manok', 'Chicken Asado', 'Fried Chicken', 'Chicken Salpicao', 'Chicken Binacol', 'Chicken Inasal', 'Chicken Sotanghon Soup', 'Chicken Mami Noodle Soup', 'Chicken Steak'];
let ulamFish = ['Fish Fillet', 'Sinigang na Bangus', 'Sweet and Sour Fish', 'Fried GG', 'Fried Tilapia', 'Fried Bangus', 'Fried Tuyo', 'Fried Daing', 'Sinigang na Hipon', 'Baked Tahong'];
let ulamVegetables = ['Chopsuey', 'Ginisang Munggo', 'Ginisang Pechay', 'Ginisang Sayote', 'Ginisang Ampalaya', 'Adobong Sitaw', 'Adobong Kangkong', 'Ginataang Sitaw Kalabasa', 'Tortang Talong', 'Ginisang Upo', 'Ginataang Langka'];

btn1.addEventListener('click', function() {
    var randomUlam = ulamBeef[Math.floor(Math.random() * ulamBeef.length)]
    output.innerHTML = randomUlam;
})

btn2.addEventListener('click', function() {
    var randomUlam = ulamPork[Math.floor(Math.random() * ulamPork.length)]
    output.innerHTML = randomUlam;
})

btn3.addEventListener('click', function() {
    var randomUlam = ulamChicken[Math.floor(Math.random() * ulamChicken.length)]
    output.innerHTML = randomUlam;
})

btn4.addEventListener('click', function() {
    var randomUlam = ulamFish[Math.floor(Math.random() * ulamFish.length)]
    output.innerHTML = randomUlam;
})

btn5.addEventListener('click', function() {
    var randomUlam = ulamVegetables[Math.floor(Math.random() * ulamVegetables.length)]
    output.innerHTML = randomUlam;
})