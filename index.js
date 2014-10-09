"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

//Problem 1

function flip_coin() {
	if ( Math.random() < .5 ) {
		return "heads";
	} 
	else { 
		return "tails";
	}
}
		
//Problem 2

function roll_die () {
	var number = Math.random();
	if ( number < 1/6) {
		return 1;
	}
    else if ( number < 1/3 ) {
    	return 2;
    }
    else if ( number < 1/2 ) {
        return 3;
    }
    else if (number < 2/3 ){
    	return 4;
    }
    else if (number < 5/6 ){
    	return 5;
    }
    else {
        return 6;
    }
 }    
 roll_die();
 
 //Problem 3
 
 function five_die () {
 	var v_list=[];
 	var number = 0;
 	while (number < 5) {
 	    v_list[number]= roll_die();
 	    number = number +1;
 	}
 	return v_list;
 }
 five_die();
 
 //Probem 4
 
 function yahtzee(hand){
 	if ( hand[0] === hand[1] && hand[1] === hand[2] && hand[2] === hand[3] && hand[3] === hand[4]) {
 	    return 50;
 	} else {
 		return 0;
 	}
 }
 
yahtzee();

//Problem 5

function return_sum(numbers) {
	var sum = 0;
	var i=0;
	while (i<numbers.length) {
		sum += numbers[i];
		i+=1;
	}
}


//Problem 6

function four_kind(input) {
  var i = 0;
  while (i < input.length) {
    if (input[i] === input[(i + 1) % 5] && input[(i + 1) % 5] === input[(i + 2) % 5] && input[(i + 2) % 5] === input[(i + 3) % 5]) {
      return input[i] + input[(i + 1) % 5] + input[(i + 2) % 5] + input[(i + 3) % 5] + input[(i + 4) % 5];
    }
    i += 1;
  }
  return 0;
}

// Problem 7

function straight(input){
	input.sort();
	if ( input[0] === input[1] - 1 && input[1] === input[2] - 1 && input[2] === input[3] - 1 &&	input[3] === input[4] - 1 ){
		return 40;
	} else {
		return 0;
	}
}

//Problem 8 

function full_house(input) {
  input.sort();
  var i = 0;
  while (i < input.length) {
    if (input[i] === input[(i + 1) % 5] && input[(i + 1) % 5] === input[(i + 2) % 5]) {
      if (input[(i + 3) % 5] === input[(i + 4) % 5]) {
        return 25;
      }
    }
    i += 1;
  }
  return 0;
}

//Problem 9



//Problem 10

function maximum(list){
	var max = 0;
	var i = 0;
	while ( i < list.length ) {
		if ( list[i] > max ) {
			max = list[i];
		}
		i += 1;
	}
	return max;
}
maximum([1,1,2,3,4,10,6,5,7,9]);

//Problem 11

function play(list){
	var max=0;
	var type = " ";
	var i = 0;
	if ( four_kind(list) > max ) {
		max = four_kind(list);
		type = "Four-of-a-kind";
	}
	if ( yahtzee(list) > max ) {
		max = yahtzee(list);
		type = "Yahtzee";
	}
	if ( straight(list) > max ) {
		max = straight(list);
		type = "Large Straight";
	}
	return "The best score is " + max + " by categorizing it as a " + type + ".";
}

// play([6,6,6,6,6]) 50, Yahtzee

// play([6,4,3,5,2]) 40, Large Straight

// play([2,2,2,3,2]) 11, Four-of-a-kind



















