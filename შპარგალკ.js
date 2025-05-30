console.log(5 + 5);

let x = 5;

let ინფორმაციის შენახვა ცვლადი
const ინფორმაციის შენახვა უცვლადი

let x = 5;
x += 3;
console.log (x) ამოგდებს 8        მოქმედებს იგივენაირად სხვა არითმეტიკულ მოქმედებებზე                                                      ველიუ ექსფრეშენ სთეითმენთ

let x = 5;
x ++;
console.log (x) ამოგდებს 6       ანუ ცვლადს ზრდის 1-ით


console.log(15 == 15); //true
console.log(15 != 10)  // true არ უდრის ხო?
console.log(10 <= 15); //true




-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

ლოგიკური ოპერატორებიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიი
const barier = 80;
let matResult = 20;
let engResult = 40;
let csResult = 0;
const testResult = matResult + engResult + csResult >= barier; //false ---  failll

&& and და 
let userLoggedIn = true;
let userPaid = true;
const showProducts = userLoggedIn && userPaid;
console.log(showProducts);

|| or ან 
let userPaid = false;
let userIsAdmin = true;
const showProducts = userPaid || userIsAdmin;
console.log(showProducts);


let userLoggedIn = false;
let userPaid = true;
let userIsAdmin = false;
const showProducts = userLoggedIn && (userPaid || userIsAdmin); ჯერ სრულდება ფრჩხილებში ჩასმული ლოგიკა 
console.log(showProducts);


! not არა
const showLoginScreen = !userLoggedIn;
console.log(showLoginScreen); 

const showBuyButton = !(userIsAdmin || userPaid);
console.log(showBuyButton); 

true 1
false 0

falsy value 0
truthy value 0 ის გარდა ყველა

and &&
console.log(true && 10);
console.log(10);

console.log(10 && 20);
console.log(20);

console.log(0 && 20);
console.log(0);

or ||
console.log(true || 10);
console.log(true);

console.log(10 || 20);
console.log(10);

console.log(0 || 20);
console.log(20);

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
ternary პირობითი ოპერატორი

const userIsAdmin = true
const discount = userIsAdmin ? 25 : 0;
console.log(discount);       // ამოაგდებს 25


const userDistance = 45;
const shippingCost = userDistance <= 50 ? 10 : 15;
console.log (shippingCost);  // ამოაგდებს 10



const userIsAdmin = true;
let discount;

if(userIsAdmin) {
    console.log("ადმინი ხარ!");
    discount = 25;    
} else {
    console.log("მომხმარებელი ხარ");
    discount = 0; 
}

console.log(discount);    //ამოაგდებს 25



let y = 2;

{
    let y = 20;
    console.log(y);
    {
        let y = 200;
        console.log(y);        
    }    
}

console.log(y);       // ამოაგდებს ჯერ შვილების თანმიმდევრობის მიხედვით მერე გარეთას


const userIsAdmin = false;
const userIsTudent = true;
let discount;

if(userIsAdmin) {
    console.log("ადმინი ხარ!");
    discount = 25;    
} else if (userIsTudent) {
    console.log("სტუდენტი ხარ");
    discount = 15; 
}
else {
    console.log(მომხმარებელი ხარ);
    discount = 0;              
}

console.log(discount);    //ამოაგდებს 15







--------------------------------------------------------------------------------------------------------------------------
ინფორმაციის ტიპებიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიი

Number - რიცხვები
Boolean - თრუ ფოლს
undefined - ინფორმაციის არარსებობა js 
null - ინფორმაციის არარსებობა dev
BigInt - დიდი რიცხვები
string - ტექსტების შესანახად "" ``template literal=`string ${expression}`
Symbol - სიმბოლო 
Object 

console.log(typeof.x);
 


let x;
let y = 5;
ley z = null;

console.log(typeof x);    //ამოაგდებს undefined
console.log(typeof y);    //ამოაგდებს number
console.log(typeof z);    //ამოაგდებს object



let userFirstName = "ერთაოზ"
console.log("გამარჯობა "+ userFirstName);   // ამოაგდებს გამარჯობა ერთაოზ

let welcomeMessage = `welcome to our website ${userFirstName}`;
console.log(welcomeMessage); // ამოაგდებს welcome to our website ერთაოზ
 




--------------------------------------------------------------------------------------------------------------------------
იტერაციები ლუპები

//while loop 

while(true) {
    console.log("კი");   //infinite loop
}

console.log('არა');



let cxvariN = 0;                                        //ცვლადი
while(cxvariN <= 100) {                                  //პირობა
    console.log(`${cxvariN} ცხვარი`);                   //რა უნდა დაიწეროს
    cxvariN++;                                           //როგორ ვითვლი
}

for (let cxvariN = 0; cxvariN <= 100; cxvariN++) {        //ცვლადი, პირობა, როგორ ვითვლი
    console.log(`${cxvariN} ცხვარი`)                      //რა უნდა დაიწეროს
}


let downloadProgress = 0
while(downloadProgress <= 100) {
    if(downloadProgress < 20) {
        console.log("ჯერ ადრეა");
    } else {           
        console.log(`პროგრესი: ${downloadProgress}%`);
    }
    downloadProgress++;
}





--------------------------------------------------------------------------------------------------------------------------
arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy მასივები


//ნებისმიერი ტიპის ინფორმაცია შეიძლება ჩაიწეროს ერეიში ბრექეთ ნოთეიშენ
let ertaozTestScores = [70, 80, 90, 100]; 
ertaozTestScores [3] = 100 //ანუ შეიძლება შეიცვალოს ინფორმაცია მესამეზე რაც წერია
console.log(ertaozTestScores[0]);   //ამოგდებს 70 ანუ რიგით მერამდენე ინფორმაცია მინდა ამოაგდოს
ertaozTestScores [10] 77 // ასეც შეიძლება წინასწარ მიამატო

console.log(ertaozTestScores.length);   // ამოაგდებს 4 
console.log(ertaozTestScores[ertaozTestScores.length - 1]);   // ამოაგდებს ბოლო აითემს




let testResult = [10, 20, 30, 40];
for (let i = 0; i < testResult.length; i++) {                      //ცვლადი, პირობა(სადამდეც ცვლადი იზრდება), როგორ ვითვლი
    console.log(testResult[i]);                                   //რა უნდა დაიწეროს
    
}

let testResult = [10, 20, 30, 40];
for (let i = testResult.length - 1; i >= 0; i--) {
    console.log(testResult[i]);
}


let message = "Hola";
for(let i = 0; i < message.length; i++) {
    console.log(message[i]);
}
    


let message = "კარგად იყავი!";
const angerLevel = 5;
for (let i = 0; i <= angerLevel; i++) {
    message = message + "!"
}
console.log(message);


//სერჩი
const tecnologies = ["html", "css", "js", "react"];
let search = "js";

for(let i = 0; i < tecnologies.length; i++) {
    console.log(`looking for ${tecnologies[i]}`);
    if (tecnologies[i] == search) {
        console.log(`${tecnologies[i]} found`);
        break; //წყვეტს ლუპს დროზე ადრე
    }    
}


const testResult = [10, 20, 51, 64, 27, 55]; 

for(let i = 0; i < testResult.length; i++) {
    if(testResult[i] < 50) {
        continue; //წყვეტს კონკრეტულ იტერაციას
    }
    console.log("good job");    
}



//ინფორმაიის გადარჩევა
const testResults = [20, 57, 89, 10, 100, 23, 44, 54];
const goodResults = [];

for(let i = 0; i < testResults.length; i++) {
    if(testResults[i] > 50){
        goodResults[goodResults.length] = testResults[i];
    }
}

console.log(goodResults);



//ლუპში ლუპი
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(i, j);
    }
}

//გამეორებადი შედეგების აღმოჩენა
const results = [10, 20, 30, 30, 40, 50, 50, 60, 70]

for(let i = 0; i < results.length; i++) {
    for(let j = i + 1; j < results.length; j++) {
        if (results[i] == results[j]) {
            console.log(`შედეგი ${results[i]} გამეორდა`);
        }        
    }
}



--------------------------------------------------------------------------------------------------------------------------
ალგორითმებიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიი

console.log(performance.now());

for(let i = 0; i < 9999999; i++); 
console.log(performance.now());


const n = 500;
let sum = 0;
for(let i = 1; i <=500; i++) {
    sum += i;
}
//იგივე კოდი მარტივად
const n = 500;
let sum = n * (n + 1) / 2;
console.log(sum);


//ერეიდან უნდა ამოვარჩიო მარტივი რიცხვები და გავაკეთო ახალი მარტივი ერეი
let numbers = [10, 20, 55, 24, 11, 44, 87, 37]

let primeNumbers = []
for(let i = 0; i < numbers.length; i++) {

    const ricxvi = numbers[i];
    if(ricxvi < 2) {
        continue
    }
    let isPrime = true;
    for (let gamyopi = 2; gamyopi <= ricxvi / 2; gamyopi++) {
        if(ricxvi % gamyopi == 0) {
            isPrime = false;
            break
        }        
    }
    if(isPrime) {
        primeNumbers[primeNumbers.length] = ricxvi;
    }
}

console.log(primeNumbers);




--------------------------------------------------------------------------------------------------------------------------
ობიექტებიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიი

const siteSettings = {
    welcomeMessage: "გამარჯობა",
    defaultTheme: "dark",
    isOnline: true,    
};
siteSettings.defaultLanguage = "georgian" //ერეისნაირად შეიძლება ჩამატება

console.log(siteSettings);



// ერეი ობიექტში
const footballer = {
    firstName: "lionel",
    lastName: "messi",
    age: "37",
    team: ["barcelona", "psg", "miami",]
} 

console.log(footballer["lastName"]);
console.log(footballer.lastName); 

console.log(footballer.team[2]); //ამოაგდებს მაიამის


footballer: ["age"] = 38 
footballer.age = 38 

// ობიექტები ერეიში
const footballers = [
    {
        firstName: "lionel",
        lastName: "messi"
    },
    {
        firstName: "luis",
        lastName: "suarez"
    }
]

console.log(`${footballers[0].firstName} ${footballers[0].lastName}`);

//შეიძლება ასევე ობიექტი ობიექტში
//შეიძლება ასევე ობიექტში ერეი და ამ ერეიში ობიექტი




--------------------------------------------------------------------------------------------------------------------------
ფუნქციაააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააააა
                     // პარამეტრები        0 თუ არგუმენტი არ გადმოეცემა ფუნქციას
function welcome (userFirstName = "-" , messages = 0) {
    console.log(`გამარჯობა ${userFirstName}, შენ გაქვს ${messages} მესიჯი`);       
}
welcome("გიორგი", 5);
//არგუმენტები


//function declaration
function welcome(userFirstName = "", messages = 0) {
    return `გამარჯობა ${userFirstName}, შენ გაქვს ${messages} მესიჯი`;       
}    
console.log(welcome("გიორგი", 5));
 

//function expression
const welcome = function(userFirstName = "", messages = 0) {
    return `გამარჯობა ${userFirstName}, შენ გაქვს ${messages} მესიჯი`;       
}    
console.log(welcome("გიორგი", 5));


//arrow function expression
const welcome = (userFirstName = "", messages = 0) => {
    return `გამარჯობა ${userFirstName}, შენ გაქვს ${messages} მესიჯი`;       
}    
console.log(welcome("გიორგი", 5));

//გამარტივებული ვერსია ერთი პარამეტრის შემთხვევაში
const welcome = userFirstName => `გამარჯობა ${userFirstName}, შენ გაქვს ${messages} მესიჯი`;     



function calculateage(birthyear) {
    return 2025 - birthyear;    
}

const averageAge = (person1, person2) => {
    const avgAge = (calculateage(person1) + calculateage(person2)) / 2;
    console.log(`საშუალო ასაკია ${avgAge}`);    
}

averageAge(2013, 2003); 


--------------------------------------------------------------------------------------------------------------------------
js ში ჩაშენებული ობიექტებიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიიი

const x = Number("123123");

//მეთოდი არის ისეთი ფუნქცია რომელიც ობიექტზეა ორიენტირებული

let x = 5.1234;

console.log(x.toFixed(2)); //ამოაგდებს 5.12 ოღონდ არ ცვლის ძირითად ინფორმაციას, განსაზღვრავს წერტილის შემდეგ ციფრების რაოდენობას
console.log(typeof x.toString()); //რიცხვის სტრინგში გადაყვანა
console.log(x.toPrecision(3)); //ამოაგდებს 5.12 ანუ ამრგვალებს და იყენებს სამ ციფრს 



let x = Math.abs(-15); //ამოაგდებს 15ს, ითვლის მოდულს
let x = Math.round(5.95); //ამოაგდებს 6, დამრგვალება
let x = Math.floor(5.95); //ამოაგდებს 5, დამრგვალება ქვედა უახლოეს მთელ რიცხვზე
let x = Math.ceil(5.95); //ამოაგდებს 6, დამრგვალება ზედა უახლოეს მთელ რიცხვზე
let x = Math.pow(5.95, 2); /*ხარისხში აყვანა*/ console.log(5 ** 2); //ხუთის კვადრატი
let x = Math.sqrt(16); //კვ.ფესვის ამოღება 
let x = Math.random(); //რენდომ რიცხვი 0 დან 1 მდე
let x = Math.max(16, 3, 5, 7, 80) //მაქსიმალური რიცხვი იგივენაირადაა min
console.log(x);



const message = "ერთაოზ ბრეგვაძე ძუყნურიდან";
let search = "ერთაოზ";
const found = message.includes(search);
console.log(found);


const ცოტა = "-";
const ბევრი = ცოტა.repeat(7);
console.log(ბევრი);


const welcomeMessage = "გამარჯობა ერთაოზ";
const goodByeMessage = welcomeMessage.replace("გამარჯობა","ნახვამდის")
console.log(welcomeMessage);
console.log(goodByeMessage);


const welcomeMessage = "გამარჯობა ერთაოზ";
const words = welcomeMessage.split(" ");
console.log(words);


const words = ["გამარჯობა", "ერთაოზ"]
const welcomeMessage = words.join(" ");
console.log(welcomeMessage);


startsWith()
endWith()
toUpperCase()
toLowerCase()



const array = [1,2,3,4,5];
array.push(6); //unshift მარცხნიდან ამატებს ინფორმაციას
console.log(array); // ამოაგდებს [1,2,3,4,5,6]; დამატება ერეიში მარჯვნიდან

const array = [1,2,3,4,5];
array.pop(); //shift მარცხნიდან შლის
console.log(array); // ამოაგდებს [1,2,3,4]; ბოლო მონაცემს შლის

const array = [1,2,3,4,5];
array.reverse(); 
console.log(array); // ამოაგდებს [5,4,3,2,1]; აბრუნებს






---------------------------------------------------------------------------------------------------------------
callback ფუნქციაaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
function runXTimes(times, f) {
    for(let i = 0; i<times; i++) {
        f(i);
    }        
}

function gaumarjos(text) {
    console.log(`jos ${text}`);        
}


runXTimes(3, gaumarjos)
runXTimes(3, (text) => {
    console.log(`jos ` + text);        
} );



forEach
const array = [1,2,3,4];
/*/const logger = item => {
    console.log(item);    
};*/
array.forEach((item, idx, arr) => {
    console.log(item, /*idx, arr*/);
});

//1
//2
//3
//4


map ერეიზე მოქმედება რაღაც პრინციპით
const array = [1,2,3,4,5,6,7,8,9,];
const newArray = array.map(item => item * 2);
console.log(newArray);
// [2,4,6,8,10,12,14,16,18]


find მოძებნა
const array = [1,2,3,4,5,6,7,8,9,];
const found = array.find(item => item == 7); 
console.log(found);
//7


filter გაფილტვრა რაღაც პრინციპით
const array = [1,2,3,4,5,6,7,8,9,];
const filtered = array.filter(item => item % 2 == 0);
console.log(filtered);
// [2,4,6,8]


reduce შემცირება რაღაც ლოგიკით, ძირითადად გამოიყენება არითმეტიკული ოპერაციებისთვის
const array = [1,2,3,4,5,6,7,8,9,];
const jami = array.reduce((sum, item) => sum + item);
console.log(jami);
//45



sort ანბანის მიხედვით ალაგებს
const array = [1,2,3,4,5,6,7,8,9,10];
array.sort();
console.log(array);
// [1,10,2,3,4,5,6,7,8,9];



--------------------------------------------------------------------------------------------------------
სხვადასხვა 
//spread აკოპირებს ან აერთებს ერეიებს

const array1 = [1,2,3];
const array2 = [...array1]
const array3 = [...array2, ...array1]

console.log(array3);



JSON.stringify() //ობიექტს სტრინგავს
JSON.parse() //სტრინგიდან აკეთებს ობიექტს
x2 = structuredClone(x) //დაკოპირება

//კონსტში ცვლადს ვერ შეცვლი, შეცვლი მარტო ცვლადის შიგნით მონაცემებს




...rest ოპერატორი // ფუნქციის პარამეტრის გაუსასრულოება
function students(saxeli1, saxeli2, ...danarheni) {
    console.log("danarheni = ", danarcheni); 
}

destructure ცვლადის დაშლა // ერეიზე ოთხკუთხდი ფრჩხილები ობიექტზე კლაკნილი 
const = ["ertaoz", "bregvadze", "30"]
const [firstName, lastName, age] = mentor;


a = 10
b = 20

[a, b] = [b, a]


//ცვლადიდან ერთი ინფორმაციის ამოღება
const mentor = {
    firstName: "ertaoz",
    lastName: "bregvadze",
    age: 30,
    password: "123456"
}

const {password, ...user} = mentor;

console.log("password = ", password);
console.log("user =", user);


//for off for in
const allScores = [10,20,30];

for(const score of allScores) {
    console.log(score);
}

for(const idx in allScores) {
    console.log(idx);
}
















--------------------------------------------------------------------------------------------------------
typescripttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt









