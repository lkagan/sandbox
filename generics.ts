// Tutorial from https://www.typescriptlang.org/docs/handbook/2/generics.html

// Basic type
function identity(arg: number): number {
    return arg;
}

// More expansive
function identity2(arg: any): any {
    return arg;
}

// Use the same argument type as return type. Any function that captures the
// type of input is called a 'generic'.
function identity3<Type>(arg: Type): Type {
    return arg;
}

// We call generics in one of two ways.

// Explicitly set the arguments type
let output = identity3<string>("myString");

// Let the compiler set the argument type.
output = identity3("myString");

