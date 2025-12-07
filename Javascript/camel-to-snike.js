function toSnake(camel) 
{
  let newString = "";
  
  for (let i = 0; i < camel.length; i++)
  {
    console.log();
      if (camel[i] === camel[i].toUpperCase())
      {
          newString += "_" + camel[i].toLowerCase();
      }
      else
      {
        newString += camel[i];
      }
  }

  return newString;
}

toSnake("helloWorld")                   // "hello_world".
toSnake("myVariableName")               // "my_variable_name".
toSnake("freecodecampDailyChallenges")  // "freecodecamp_daily_challenges".
