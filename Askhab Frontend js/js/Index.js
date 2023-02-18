
let date = new Date();
console.log(date); // Thu Sep 01 2023 06:46:30 GMT+1200 
        
console.log(date.getFullYear()); // 2023        

let name = prompt('Как тебя зовут');
let address = prompt('Адрес');
let phone = prompt('Номер');

console.log(`Меня зовут ${name}, Я живу ${address}, Мой номер ${phone}`);


let dol = 68
let rub = 12000

console.log(rub/dol);




let a = 5
let b = 8

console.log('start')

if(a < b){
    console.log('Константа меньше 8')
}else if(a > b) {
    console.log('Константа больше 5')
}else{
    console.log('error')
}


console.log(a)

console.log('start');
if(true){
    console.log('code')
}
console.log('end');


let dataLogin = 'Askhab';
let dataPas = 4567

let login = prompt('login?')
let password = prompt('password?')

if(dataLogin === login){
    if(dataPas === password){
    console.log('welcome');
    }
    
}else{
    console.log('error')
}

let code = 'html'

switch(code){
    case 'html': console.log('html');
    case 'css': console.log('css');
    case 'js': console.log('js');
    case 'react': console.log('react');
}
