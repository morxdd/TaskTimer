const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const sec = document.getElementById('sec');

let currentTime = new Date();

// console.log(hours);



hours.innerText = currentTime.getHours();
mins.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
