const birth_day = document.getElementById("birth-day");
const birth_month = document.getElementById("birth-month");
const birth_year = document.getElementById("birth-year");

const months = ["Jan","Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"];

for (let i=1;i<=31;i++){
    birth_day.innerHTML += `
    <option value="${i}">${i}</option>`
}

for (let i=0;i<months.length;i++){
    birth_month.innerHTML += `
    <option value="${months[i]}">${months[i]}</option>`
}

for (let i=2022;i>=1905;i--){
    birth_year.innerHTML += `
    <option value="${i}">${i}</option>`
}