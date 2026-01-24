let adjective, noun, verb, place, adjective2, noun2;
adjective = "overwhelming";
noun = "Julia";
verb = "wrote";
place = "United Kingdom";
adjective2 = "surprising";
noun2= "Marion";
let firstStory;
let str1 = "With only her bags and a mind full of dreams things she wanted to accomplish, ";
let str2 = " moved to the ";
let str3 = " having followed her cousin ";
let str4 = ", she thought her story would be full of happy first moments, trips to the four countries that made up the UK, but not ";
let str5 = " it was the opposite the bills were so ";
let str6 = " and so as to keep afloat she had to do all available jobs so as to break even. One night she ";
let str7 = " to her boyfriend with whom they shared a dream of moving here together how life was hard and how she missed being back home.";
firstStory = str1.concat(
  noun,
  str2,
  place,
  str3,
  noun2,
  str4,
  adjective2,
  str5,
  adjective,
  str6,
  verb,
  str7
);
console.log ("First story: " + firstStory);

adjective = "happy";
noun = "Marion";
verb = "flew";
place = "United Kingdom";
adjective2 = "ethereal";
noun2 = "Julius";

str1 = "Over time, ";
str2 = " changed ";
str3 = "'s life completely. Now living in the ";
str4 = ", she was finally ";
str5 = " and she ";
str6 = " to the Schengen Zone and took ";
str7 = " pictures to send to her boyfriend ";
let str8 = " back at home, who was on the verge of joining her. She now lives a beautiful life and all the pain and struggles were worth it as they helped in her development journey and moulded her into a beautiful person.";
let secondStory = str1.concat(
  noun,
  str2,
  noun2,
  str3,
  place,
  str4,
  adjective,
  str5,
  verb,
  str6,
  adjective2,
  str7,
  noun2,
  str8
);
console.log("Second story: " + secondStory);
