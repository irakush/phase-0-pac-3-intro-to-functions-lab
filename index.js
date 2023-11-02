function shout(string){
  return string.toUpperCase();
};

function whisper(string){
  return string.toLowerCase();
};

function logShout(string) {
  console.log(string.toUpperCase());
};

function logWhisper(string) {
  console.log(string.toLowerCase());
};

function sayHiToHeadphonedRoommate(string){
  if (string === string.toLowerCase()){
    return "I can\'t hear you!";
  };

  if (string === string.toUpperCase()){
    return "YES INDEED!";
  };

  if (string === "Let's have dinner together!"){
    return "I would love to!";
  };

};

function introduction(name){
  return "Hi, my name is ${name}.";
};

function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
};

function introductionWithLanguage(name, language){
  return "Hi, my name is ${name} and I am learning to program in ${language}.";
};

function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
};

