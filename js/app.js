'use strict';

let score=0;

alert ('Hello my number one fan!');

let variable2 =prompt('what is your name?');
alert('Hi there ' + variable2 );

alert('lets see if you will know me or not,ready? set ,gooo!');

alert('please answer with yes or no');


let myName = function()
{
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
  else if(userName.toLowerCase() === 'yes' || userName.toLocaleLowerCase()=== 'y')
  {
    alert('your answer is so correct, happy me!!');
    console.log(userName);
    score++;
  }
};
myName();


let myAge = function()
{
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
};
myAge();

let myCountry = function()
{
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
};
myCountry();

let major = function()
{
  let myMajor =prompt('Am i majored in physics?');
  while((myMajor !== 'yes' && myMajor !== 'y') && (myMajor !== 'no' && myMajor!== 'n'))
  {
    myMajor =prompt('Am i majored in physics?');

  }
  if (myMajor.toLowerCase() === 'no'|| myMajor.toLowerCase() === 'n')
  {
    alert('you got that right!');
    console.log(myMajor);
    score++;
  } else {
    alert('no i hate physics');
    console.log(myMajor);
  }
};
major();


let hobby = function()
{
  let hobby =prompt('do you think i like playing chess?');
  while((hobby !== 'yes' && hobby!== 'y') && (hobby !== 'no' && hobby !== 'n'))
  {
    hobby =prompt('do you think i like playing chess?');

  }
  if (hobby.toLowerCase() === 'no' || hobby.toLowerCase() === 'n')
  {
    alert('actually i do');
    console.log(hobby);

  } else
  {
    alert('so true!');
    console.log(hobby);
    score++;
  }
};
hobby();

let q6=function ()
{
  let number = prompt('Now guess how many movies i love between 5-15?');
  for (let i=4 ; i>1 ; i--)
  {
    if (number === '10')
    {
      alert('You are great');
      console.log(number);
      score++;
      break;
    }
    else if(number>10)
    {
      alert('You are too high');
      console.log(number);
      number = prompt('No guess the number between 5-15 another time ? you have just  ' +i+' time');
    }
    else if(number<10)
    {
      alert('You are too low');
      console.log(number);
      number = prompt('No guess the number between 5-15 another time ? you have just' +i+' time');
    }
  }
};

q6();
let q7 = function()
{
  let arr=[7,10,3];
  alert('can you guess my 3 favorite numbers?');
  let Q= Number(prompt('guess one number of them between 2-20 (you have 6 attempt)'));
  for(let i = 5;i>0;i--)
  {
    for(let w=0 ; w<arr.length;w++)
    {
      if(Q===arr[w])
      {
        alert('you are great');
        console.log(Q);
        score++;
        i=0;
      }
    }
    if(i!==0)
    {
      Q= Number(prompt('guess one number of them between 2-20 you have '+i+' Ateempt'));
    }
  }
};
q7();
alert('you got  '+score+' out of 7') ;
console.log(score);




