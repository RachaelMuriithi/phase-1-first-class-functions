function receivesAFunction (callback) {
    return callback ();
}

receivesAFunction(function(){return 'excercise'});

function returnsANamedFunction() {
    return returnsANamedFunction;
 }
 returnsANamedFunction( function() {return 'Okay'});
 
 let returnsAnAnonymousFunction = function(){
    
    return function(){'Hello'};
 }
 returnsAnAnonymousFunction()
