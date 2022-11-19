console.log("quadratic equation is of the form: ax2+bx+c=0");

let root1, root2;

// take input from the user
let a = parseInt(prompt("Enter first coefficient: "));
let b = parseInt(prompt("Enter second coefficient: "));
let c = parseInt(prompt("Enter third coefficient: "));

// calculate discriminant
let d = b * b - 4 * a * c;

// for real and distinct roots
if (d > 0) {
    root1 = -b + Math.sqrt(d) / (2*a);
    root2 = -b - Math.sqrt(d) / (2*a);
    
    document.write("your roots are: ");
    document.write(root1, root2);
}

// for real and equal roots
else if (d == 0) {
    root = -b / (2 * a);

    document.write("your root is: ");
    document.write(root);
}
// for non real roots
else {
    let realHalf = (-b / (2 * a)).toFixed(2);
    let imaginaryHalf = Math.sqrt(-d) / (2 * a).toFixed(2);

    document.write("your imaginary roots are: ");
    document.write(`${realHalf} + ${imaginaryHalf}i, ${realHalf} - ${imaginaryHalf}i`);
}