console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Maxwell',
  lastName: 'Chrysler',
  hasSiblings: true,
  shoeCount: 4, //pairs 
  favFoods: ['ribs', 'Sushi', 'Sandwhiches']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName+ ' ' + me.lastName;// I think its correct to have the ' ' space in there when im defining fullName
console.log('My full name is ' + fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(me.favFoods[0]);
console.log(me.favFoods[2]);// I tried using me.favFoods[favFoods.length-1] but that seemed 
//to give me the error of favFoods not defined. same was true when I did me.favFoods.length


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('I have ',me.shoeCount,' pairs of shoes');
me.shoeCount++; // I think this is going to be the easiest way to do it but I don't want it to be too "hard coded"
console.log('I now have ',me.shoeCount,' pairs of shoes');



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'grayish blue'; // grey
console.log(me.favoriteColor);
