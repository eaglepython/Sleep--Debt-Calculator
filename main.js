/// Sleep Debt Calculator

//The program will determine the actual and ideal hours of sleep for each night of the last week.

///Finally, it will calculate, in hours, how far you are from your weekly sleep

/*
The first problem to solve is determining how many hours of sleep you got each night of the week.

You can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.

Create a function named getSleepHours with a single parameter named day.

2.
The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.
*/

const getSleepHours = day =>{

    /*
    we could have used the if statement method :
    
    if(day === "monaday"){
      return 8;
      }else if (day==="tuesday"){
        return 7
      }
    
      But we we will use the Switch method: 
      */
      switch(day){
        case 'monday':
           return 8
           break;
        case 'tuesday':
           return 12
           break;
        case 'wednesday':
           return 7
           break;
        case 'thursday':
           return 6
           break;
        case 'friday':
           return 10
           break;
        case 'saturday':
           return 8
           break;
        case 'sunday':
           return 10
           break;
           default:
           return "Error"    
    
      }
    
    };
    // console.log(getSleepHours("friday"))....printed:7 : testing ,working just fine 
    
     /* 
    Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.
    */
    const getActualSleepHours =()=> {
      return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    }
    
    console.log(getActualSleepHours())
    
    /* 
    To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.
    
    Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.
    
    You’ll want to multiply by 7 to get the total hours you prefer per week.
    */
    
    const getIdealSleepHours = () =>{
      let idealHours =8;
      return idealHours*7 ;
    }
    
    console.log(getIdealSleepHours())
    
    // Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.
    
    const calculateSleepDebt =()=>{
      const actualSleepHours = getActualSleepHours()
      const idealSleepHours = getIdealSleepHours()
    
      /* Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:
    
    ~ If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
    ~ If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
    ~ If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
    */
    
      if(actualSleepHours > idealSleepHours ){
        console.log( 'You slept ' + (actualSleepHours - idealSleepHours) + ' hours more than expected.')
      }
      else if(actualSleepHours < idealSleepHours ){
        console.log( 'You should rest. You slept ' + ( idealSleepHours - actualSleepHours) + ' hours lesser than expected.')
      }
      else if(actualSleepHours === idealSleepHours ){
        console.log( 'You  got the right amoung of sleep')
      }else {
          console.log("You did a mistake. You should check your code .")
        }
    };
    
    calculateSleepDebt()
    
    // we can play with the program by changing the number of hours you slept every night of the week.