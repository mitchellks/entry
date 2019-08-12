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

2. Create a variable named actors and assign to it an array. This array should
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
                  |        | girls.

3. Write the following two functions, both of which use the actors array to
determine what to return.

    getActorByFullName - this function expects a string as a parameter and
    returns the object in the actors array whose fullName property is equal to
    the string that is passed to it (if there is one).

    getOscarWinnerNames - this function returns an array containing the names of
    only those actors in the actors array who have at least one oscar.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

var leo = getActorByFullName('Leonardo DiCaprio');
var meryl = getActorByFullName('Meryl Streep');

meryl.hasMoreOscarsThan(leo);

meryl.sayLine();

getOscarWinnerNames();

*/

/*Declare the function 'createActor' */
function createActor(fullName, oscars, line) {
        var obj = {
            fullName: fullName,
            oscars: oscars,
            line: line,
            sayLine: sayLine
          };
          return obj;



function sayLine() {
  console.log(this.line)
}

function hasMoreOscars(actor2) {
if (this.oscars < actor2.oscars) {
return false;
} else {
return true;
}
}
    
    function GreaterOrEqual(actor) {
      if (this.oscars >= 1) {
        return (this.fullName) };


let actors = [

actors = actors.concat(createActor("Leonardo Di Caprio",1,"w"))
actors = actors.concat(createActor("Samuel L Jackson",0,"D"))
actors = actors.concat(createActor("Meryl Steep",3,"h"))
actors = actors.concat(createActor("Oscar Isaac",0,"q"))
actors = actors.concat(createActor("Lucy Liu",0,"e"))
actors = actors.concat(createActor("Kate Winslett",1,"m"))
]

/*let actors = [

    leonardo = {
      fullName: "Leonardo DiCaprio",
      oscars: 1,
      sayLine: function sayLine() {
        console.log("I'm the king of the world!")
      },
      hasMoreOscarsThan: function hasMoreOscarsThan(actorObject) {
        if (this.oscars > actorObject.oscars) {
          return true
        } else {
          return false
        }
      }
    },

    samuel = {
      fullName: "Samuel L. Jackson",
      oscars: 0,
      sayLineline: function sayLine() {
        console.log("Do you know what they call a Quarter Pounder with Cheese in France?")
      },
      hasMoreOscarsThan: function hasMoreOscarsThan(actorObject) {
        if (this.oscars > actorObject.oscars) {
          return true
        } else {
          return false
        }
      }
    },


    meryl = {
      fullName: "Meryl Streep",
      oscars: 3,
      sayLine: function sayLine() {
        console.log("The dingo took my baby!")
      },
      hasMoreOscarsThan: function hasMoreOscarsThan(actorObject) {
        if (this.oscars > actorObject.oscars) {
          return true
        } else {
          return false
        }
      }
    },

    oscar = {
      fullName: "Oscar Isaac",
      oscars: 0,
      sayLine: function sayLine() {
        console.log("That droid has a map that leads straight to Luke Skywalker")
      },
      hasMoreOscarsThan: function hasMoreOscarsThan(actorObject) {
        if (this.oscars > actorObject.oscars) {
          return true
        } else {
          return false
        }
      }
    },

    lucy = {
      fullName: "Lucy Liu",
      oscars: 0,
      sayLine: function sayLine() {
        console.log("Silly rabbit, tricks are for kids.")
      },
      hasMoreOscarsThan: function hasMoreOscarsThan(actorObject) {
        if (this.oscars > actorObject.oscars) {
          return true
        } else {
          return false
        }
      }
    },



    kate = {
      fullName: "Kate Winslet",
      oscars: 1,
      sayLine: function sayLine() {
        console.log("I want you to draw me like one of your French girls!")
      },
      hasMoreOscarsThan: function hasMoreOscarsThan(actorObject) {
        if (this.oscars > actorObject.oscars) {
          return true
        } else {
          return false
        }
      },


    function GreaterOrEqual(actorObject) {
      if (actorObject.oscars >= 1) {
        return "Kate Winslett };



        function getActorByFullName(string) {
          string = actors.fullName;
          if (actors.fullName == string) {
            return fullName;
          } else {
            return "None";



          };
*/
