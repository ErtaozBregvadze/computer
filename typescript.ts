let x: number = 5;
console.log(x);




//variable types
function add(num1: number, num2: number) {
    return num1 + num2;
}

let x = add (Number("3"), +"4");
console.log(x);


//object types
const mentor:{
    name: string;
    lastName: string;
    age?: number;
} = {
    name: "ertaoz",
    lastName: "bregvadze",
}

mentor.name = "qristefore";
mentor.lastName = "mgaloblishvili";
mentor.age = 30; //error თუ ზემოთ არაა განსაზღვრული ეს ცვლადი

//მენტორის აღწერა მერე გამოსაყენებლად
type mentor = {
    name: string; 
    lastName: string;
    age?: number;
}

const shedegebi: number[] = [];
const shedegeb: any = [];

test








