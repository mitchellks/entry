/*
Write your code for this exercise in this file beneath this long comment. Please
be certain to use only syntax and techniques covered in the assigned
freeCodeCamp courses.
1. Write a function named createActor that expects to receive three arguments:
fullName, oscars, and line. This function should return an object. The object it
returns should have properties that are also named fullName, oscars, and line.
The values assigned to these properties should be the values that are passed to
the function. Additionally, the object that createActor returns should have two
methods:
    hasMoreOscarsThan - a function that accepts one actor object as a parameter
    and returns true if the actor has more oscars than the one that is passed to
    it as an argument and false otherwise.
    sayLine - a function that logs the value of the actor object's line property
    to the console.



/* Declare the function 'createActor' */
function createActor(fullName, oscars, line) {
  var obj = {
    fullName: fullName,
    oscars: oscars,
    line: line,
    sayLine: sayLine,
    hasMoreOscarsThan: hasMoreOscarsThan
  };
  return obj;
}

function sayLine() {
  console.log(this.line)
}

function hasMoreOscarsThan(actor2) {
  return this.oscars > actor2.oscars
}
/* TEST meryl.hasMoreOscarsThan(leo) */


/* 2. Create a variable named actors and assign to it an array. This array should
contain six objects that are created by calling the createActor function. The
values you should pass to the createActor function to create these objects are:
fullName          | oscars | line
--------------------------------------------------------------------------
Leonardo DiCaprio |   1    | I'm the king of the world!
                  |        |
Samuel L. Jackson |   0    | Do you know what they call a Quarter Pounder
                  |        | with Cheese in France?
                  |        |
Meryl Streep      |   3    | The dingo took my baby!
                  |        |
Oscar Isaac       |   0    | That droid has a map that leads straight to
                  |        | Luke Skywalker.
                  |        |
Lucy Liu          |   0    | Silly rabbit, tricks are for kids.
                  |        |
Kate Winslet      |   1    | I want you to draw me like one of your French
                  |        | girls. */

let actors = []
actors = actors.concat(createActor("Leonardo DiCaprio", 1, "I'm the king of the world"))
actors = actors.concat(createActor("Samuel L. Jackson", 0, "Do you know what they call a Quarter Pounder with Cheese in France?"))
actors = actors.concat(createActor("Meryl Streep", 3, "The dingo took my baby"))
actors = actors.concat(createActor("Oscar Isaac", 0, "That droid has a map that leads straight to Luke Skywalker"))
actors = actors.concat(createActor("Lucy Liu", 0, "Silly rabbit, tricks are for kids."))
actors = actors.concat(createActor("Kate Winslet", 1, "I want you to draw me like one of your French girls "))


/* 3. Write the following two functions, both of which use the actors array to
determine what to return.

    getActorByFullName - this function expects a string as a parameter and
    returns the object in the actors array whose fullName property is equal to
    the string that is passed to it (if there is one). */


function getActorByFullName(name) {
  for (i = 0; i < actors.length; i++) {
    if (actors[i].fullName == name) {
      return actors[i]
    }
  }
}

/* define shortname actor2 to actors name
TEST with
var leo = getActorByFullName('Leonardo DiCaprio');
var meryl = getActorByFullName('Meryl Streep');*/

var leo = getActorByFullName("Leonardo DiCaprio");
var sam = getActorByFullName("Samuel L. Jackson");
var mer = getActorByFullName("Meryl Streep");
var osc = getActorByFullName("Oscar Isaac");
var luc = getActorByFullName("Lucy Liu");
var kat = getActorByFullName("Kate Winslet")

/* getOscarWinnerNames - this function returns an array containing the names of
only those actors in the actors array who have at least one oscar. */

function getOscarWinnerNames() {
  let winners = []

  for (i = 0; i < actors.length; i++) {
    if (actors[i].oscars > 0) {
      winners = winners.concat(actors[i].fullName)
    }
  }

  return winners
}

/*

meryl.sayLine();
getOscarWinnerNames();
*/
