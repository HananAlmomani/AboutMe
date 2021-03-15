'use strict';

alert ('Hello my number one fan!');

let variable2 =prompt('what is your name?');
alert('Hi there ' + variable2 );

alert('lets see if you will know me or not,ready? set ,gooo!');

let userName =prompt('Is my name Hanan?');

if (userName.toLowerCase() === 'no')
{
  alert('your answer is wrong, im sad!');
  console.log(userName);
} else {
  alert('your answer is so correct, happy me!!');
  console.log(userName);
}

let age =prompt('Do you think im older than 40?');
if (age.toLowerCase() === 'no')
{
  alert('yes yes good answer');
  console.log(age);
} else {
  alert('now im mad im not that old');
  console.log(age);
}

let country=prompt('Do i live in maldives?');
if (country.toLowerCase() === 'no') {
  alert('yes im poor');
  console.log(country);

} else {
  alert('i really wish that!');
  console.log(country);
}

let myMajor =prompt('Am i majored in physics?');
if (myMajor.toLowerCase() === 'no')
{
  alert('you got that right!');
} else {
  alert('no i hate physics');
}


let hobby =prompt('do you think i like playing chess?');
if (hobby.toLowerCase() === 'no')
{
  alert('actually i do');
} else
{
  alert('so true!');
}
