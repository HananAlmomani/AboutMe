'use strict';

let score=0;

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
  score++;
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
  score++;
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
  score++;

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
  score++;
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
  score++;
}

let number = prompt('Now guess how many movies i love between 5-15?');
for (let i=4 ; i>1 ; i--)
{
  if (number === '10')
  {
    alert('You are great');
    score++;
    break;
  }
  else if(number>10)
  {
    alert('You are too high');
    number = prompt('No guess the number between 5-15 another time ? you have just  ' +i+' time');
  }
  else if(number<10)
  {
    alert('You are too low');
    number = prompt('No guess the number between 5-15 another time ? you have just' +i+' time');
  }
}


let marr=[7,10,3];
alert('can you guess my 3 favorite numbers?');
let fav = prompt('guess one number of them between 2-20 (you have 6 attemp)');
for (let h=5 ;h>0 ; h--)
{
  if (fav == marr[0] || fav == marr[1] || fav ==marr[2] )
  {
    alert('you are great');
    score++;
    h=0;
  }
  else
  {
    fav = prompt('guess one number of them between 2-20 you have just ' +h+ ' attemp');
  }
}

alert('you got  '+score+' out of 7') ;



