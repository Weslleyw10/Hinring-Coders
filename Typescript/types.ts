// https://www.typescriptlang.org/docs/handbook/basic-types.html

// Boolean
const invoice: boolean = true;

// Number
const age: number = 24;
const review: number = 4.5;

// String
const namePerson: string = 'Weslley L Silva'

// Array
const ages: number[] = [23, 24, 25]
const age2: Array<number> = [23, 24, 25]

// Tuple
let players: [string, string, string]
players = ['player1','player2','player3']

// Enum
enum statusApproved {
    approved = '001',
    pending = '002',
    rejected = '003'
}

const statusOfApproved: statusApproved = statusApproved.approved

// Any
const returnApi: any[] = [123, true]

// Void
function printOnScreen(msg: string): void {}

// Null & Undefined
const un: undefined = undefined
const nu: null = null

// Object
function create(obj: object) {}

// Never
function loopInfinite(): never {
    while (true) {}
}

function error(mensage: string): never {
    throw new Error(mensage)
}

// Union types
function showGoals(nota: number | string) {
    console.log()
}

// Alias
type Employees = Array<string>
const employees: Employees = ['weslley', 'bruno']

type Employees2 = {
    name: string,
    lastname: string,
    birthdate: Date
}

const employees2: Employees2[] = [{
    name: 'Weslley',
    lastname: 'L Silva',
    birthdate: new Date
}]

// Null
let height: number | null = 1.60
height = null

// Type Assertion
// const input = document.getElementById("n1") as HTMLInputElement
const input = <HTMLInputElement>document.getElementById("n1")
console.log(input.value)
