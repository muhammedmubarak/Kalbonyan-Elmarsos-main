// /*operator precedence*/
// var now = 2022;
// var maybirth = 1997;
// var fullage = 25;
// //multiple operators
// var isfullage = now - maybirth >= fullage;
// console.log(isfullage);
// //grouping
// var agemuhammed = now - maybirth;
// var ageahmed = 35;
// var average = (agemuhammed + ageahmed) / 2;
// console.log(average);
// //multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 //32 - 6 //26
// console.log(x, y);
// //2 + 4 + 5
// //more operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x)

// ////
// var massmark = 78; //kg
// var heightmark = 1.69; //meters
// var massjohn = 92;
// var heightjohn = 1.95;
// var bmijohn = massmark / (heightjohn * heightjohn);
// var bmiMark = massjohn / (heightmark * heightmark);
// console.log(bmijohn, bmiMark);
// var markHigherBMI = bmiMark > bmijohn;
// console.log('is mark\'s BMI higher than john\'s? ' + markHigherBMI);

// // if else statements
// var firstName = 'John';
// var civilStatus = 'single';
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is single');
// };


// ///if else if else statements
// var firstName = 'muhammed';
// var fathername = 'mubarak';
// if (fathername === 'mubarak') {
//     console.log(firstName + fathername);
// } else {
//     console.log(firstName + 'not finind fTHER NAME');
// }
// ////if else if else statements
// var ismarred = true;
// if (ismarred) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + 'will hopefully marry soon');
// }
// //bollean logic

// var firstName = 'mohammed';
// var age = 20;
// if (age < 13) {
//     console.log(firstName + ' is boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + 'is aman.');
// };
// /*the ternary opreator and switch statemets*/
// var firstName = 'john ';
// var age = 16;
// age >= 18 ?
//     console.log(firstName + 'drinks beer.') :
//     console.log(firstName + 'drinks juice.');
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// if (age >= 18) {
//     var drink = 'beer';
// } {
//     var drink = 'juice';
// }
// console.log(drink);

// //switch statements
// var job = 'instructor';
// switch (job) {
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + 'drives an uber in Lisbon.')
//         break;
//     case 'designer':
//         console.log(firstName + 'designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + 'does something else.');
// };
// age = 19;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' isa boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break
//     default:
//         console.log(firstName + ' is a man.');
// }
// /*************
//  *truth and  falsy value and equality  operators
//  */
// // falsy values :undfined ,null ,0, '', NaN
// //truthy values: NOT falsy values
// var height;
// height = 8;
// if (height || height === 0) {
//     console.log('variable is defined');
// } else {
//     console.log('variable has not been defined');
// }
// //
// var scoregon = (30 + 40 + 20) / 2;
// var scoreahmed = (30 + 40 + 20) / 2;
// var scoreosam = (30 + 40 + 22) / 2;
// console.log(scoregon, scoreahmed, scoreosam);
// if (scoregon > scoreahmed && scoregon > scoreosam) {
//     console.log('Gon wins with ' + scoregon + ' points');
// } else if (scoreahmed > scoregon && scoreahmed > scoreosam) {
//     console.log('Ahmed wins with ' + scoreahmed + ' points');
// } else if (scoreosam > scoregon && scoreosam > scoreahmed) {
//     console.log('Osam wins with ' + scoreosam + ' points');
// }
// //equality operators
// console.log(scoregon, scoreahmed);
// if (scoreahmed > scoregon) {
//     console.log('team ahmed is wins ' + scoreahmed);
// } else if (scoregon > scoreahmed) {
//     console.log(' team gon is  wins ' + scoregon);
// } else {
//     console.log('ther is  a draw');
// }


// //functions
// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }
// var agemohameed = calculateAge(1997);
// var ageahmed = calculateAge(1991);
// var ageosam = calculateAge(1994);
// console.log(agemohameed, ageahmed, ageosam);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 60 - age;
//     if (retirement >= 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }
// yearsUntilRetirement(1997, 'mohammed');
// yearsUntilRetirement(1991, 'ahmed');
// yearsUntilRetirement(1994, 'osam');


// //function statements and expressions

// var whatDoYouDo = function(job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a uber in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beauiful websites.';
//         default:
//             return firstName + ' does something else.';
//     }
// }
// console.log(whatDoYouDo('teacher', 'mohammed'));
// console.log(whatDoYouDo('designer', 'osam'));
// console.log(whatDoYouDo('driver', 'ahmed'));

// var calkage = function(birthYear, firstName) {
//     switch (birthYear) {
//         case '1997':
//             return firstName + ' is a' + calculateAge(1997) + 'years old.';
//         case '1991':
//             return firstName + ' is a' + calculateAge(1991) + 'years old.';
//         case '1994':
//             return firstName + ' is a' + calculateAge(1994) + 'years old.';
//         default:
//             return 'this old.';
//     }
// }
// console.log(calkage('1997', 'mohammed'));
// console.log(calkage('1991', 'osam'));
// console.log(calkage('1994', 'ahmed'));


/*arrays*/
// var names = ['mohammed', 'osam', 'ahmed'];
// var years = new Array(1997, 1991, 1994);
// console.log(names[2]);
// console.log(names.length);
// names[1] = 'osam';
// console.log(names);
// names.pop()
// console.log(names);
// names.push('mohammed');
// console.log(names);
// names.shift();
// console.log(names);
// names.unshift('mohammed');
// console.log(names);
// console.log(names.indexOf('osam'));
// console.log(names.indexOf(222));


/*coding challenge2*/
/*joan and his family went on  a */



// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])];
// console .log(tips)

////object and properties
// var muhammed = {
//     firstName: 'muuhammed',
//     lastName: 'mubarak',
//     birthYear: 1997,
//     family: ['osam', 'ahmed', 'mohammed'],
//     job: 'teacher',
//     isMarried: false,
// }
// console.log(muhammed);


//// bmi calculator
// var wall = {
//     fullName: 'wall smith',
//     mass: 110,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }

// }
// var mark = {
//     fullName: 'mark adaword',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }

// }
// if (wall.calcBMI() > mark.calcBMI()) {
//     console.log(wall.fullName + ' has a higher BMI of ' + wall.bmi);
// } else if (mark.calcBMI() > wall.calcBMI()) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('they have the same BMI');
// }
////forloop



/*for (var i = 1; i <= 2 ** 4 - 2; i++) {
    console.log(i);
}
var muhammed = ['muuhammed', 'mubarak', 1997, 'teacher', false, 'blue'];
for (var i = 0; i < muhammed.length; i++) {
    console.log(muhammed[i]);
}
////while loop
var i = 0;
while (i < muhammed.length) {
    console.log(muhammed[i]);
    i++;
}
*/


//////continue and break statements

// var muhammed = ['muuhammed', 'mubarak', 1997, 'teacher', false, 'blue'];
// for (var i = 0; i < muhammed.length; i++) {
//     if (typeof muhammed[i] !== 'string') continue;
//     console.log(muhammed[i]);
// }


// var muhammed = ['muuhammed', 'mubarak', 1997, 'teacher', false, 'blue'];
// for (var i = 0; i < muhammed.length; i++) {
//     if (typeof muhammed[i] !== 'string') break;
//     console.log(muhammed[i]);
// }

//////looping backwards
// for (var i = muhammed.length - 0; i >= 0; i--) {
//     console.log(muhammed[i]);
// }


//////Coding Challenge 5: Solution, Part 2
var john = {
        fullName: 'john smith',
        bills: [124, 48, 268, 180, 42],
        calcTips: function() {
            this.tips = [];
            this.finalValues = [];
            for (var i = 0; i < this.bills.length; i++) {
                var percentage;
                var bill = this.bills[i];
                if (bill < 50) {
                    percentage = .2;
                } else if (bill >= 50 && bill < 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }
                this.tips[i] = bill * percentage;
                this.finalValues[i] = bill + bill * percentage;
            }
        }

    }
    //     //// Coding Challenge 5: Solution, Part 2
    // var mark = {
    //     fullName: 'mark smith',
    //     bills: [77, 475, 110, 45, 42],
    //     calcTips: function() {
    //         this.tips = [];
    //         this.finalValues = [];
    //         for (var i = 0; i < this.bills.length; i++) {
    //             var percentage;
    //             var bill = this.bills[i];
    //             if (bill < 100) {
    //                 percentage = .2;
    //             } else if (bill >= 100 && bill < 300) {
    //                 percentage = .1;
    //             } else {
    //                 percentage = .25;
    //             }
    //             this.tips[i] = bill * percentage;
    //             this.finalValues[i] = bill + bill * percentage;
    //         }
    //     }

// }


// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < this.tips.length; i++) {
//         sum += this.tips[i];
//     }
//     return sum / this.tips.length;
// }
// john.calcTips();
// mark.calcTips();
// john.average = john.calcaverage();
// mark.average = mark.calcaverage();
// console.log(mark, john);
// if (john.average > mark.average) {
//     console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
// }
// if (mark.average > john.average) {
//     console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
// }
////////////////////////////////////
////lectuer:hoisting