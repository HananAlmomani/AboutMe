'use strict';

alert ('Hello my number one fan!');

let variable2 =prompt('what is your name?');
alert('Hi there ' + variable2 );

alert('lets see if you will know me or not,ready? set ,gooo!');

alert('please answer with yes or no');

let userName =prompt('Is my name Hanan?');
while((userName !== 'yes' && userName !== 'y') && (userName !== 'no' && userName !== 'n'))
{
  userName =prompt('Is my name Hanan?');

}
if (userName.toLowerCase() === 'no'|| userName.toLowerCase() === 'n')
{
  alert('your answer is wrong, im sad!');
  console.log(userName);
}
else if(userName.toLowerCase() === 'yes')
{
  alert('your answer is so correct, happy me!!');
  console.log(userName);
}



let age =prompt('Do you think im older than 40?');
while((age !== 'yes' && age !== 'y') && (age !== 'no' && age !== 'n'))
{
  age =prompt('Do you think im older than 40?');

}
if (age.toLowerCase() === 'no'|| age.toLowerCase() === 'n')
{
  alert('yes yes good answer');
  console.log(age);
} else {
  alert('now im mad im not that old');
  console.log(age);
}

let country=prompt('Do i live in maldives?');
while((country !== 'yes' && country !== 'y') && (country !== 'no' && country !== 'n'))
{
  country =prompt('Do i live in maldives?');

}
if (country.toLowerCase() === 'no'|| country.toLowerCase() === 'n')
{
  alert('yes im poor');
  console.log(country);

} else {
  alert('i really wish that!');
  console.log(country);
}

let myMajor =prompt('Am i majored in physics?');
while((myMajor !== 'yes' && myMajor !== 'y') && (myMajor !== 'no' && myMajor!== 'n'))
{
  myMajor =prompt('Am i majored in physics?');

}
if (myMajor.toLowerCase() === 'no'|| myMajor.toLowerCase() === 'n')
{
  alert('you got that right!');
} else {
  alert('no i hate physics');
}


let hobby =prompt('do you think i like playing chess?');
while((hobby !== 'yes' && hobby!== 'y') && (hobby !== 'no' && hobby !== 'n'))
{
  hobby =prompt('do you think i like playing chess?');

}
if (hobby.toLowerCase() === 'no' || hobby.toLowerCase() === 'n')
{
  alert('actually i do');
} else
{
  alert('so true!');
}
