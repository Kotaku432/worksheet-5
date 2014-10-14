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

 
 //Probem 4
 
 function yahtzee(hand){
 	if ( hand[0] === hand[1] && hand[1] === hand[2] && hand[2] === hand[3] && hand[3] === hand[4]) {
 	    return 50;
 	} else {
 		return 0;
 	}
 }
 

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

function scores(rolls, functions){
	var scores_list = [];
	var i = 0;
	while ( i < functions.length ) {
		scores_list[i] = functions[i](rolls);
		i += 1;
	}
	return scores_list;
}

//Problem 10

function maximum(list){
	var max = -(Infinity);
	var i = 0;
	while ( i < list.length ) {
		if ( list[i] > max ) {
			max = list[i];
		}
		i += 1;
	}
	return max;
}


//Problem 11

function play(list){
	var functions = [yahtzee, four_kind, straight];
	var max = maximum(scores(list,functions));
	return max;
}

// play([6,6,6,6,6]) 50, Yahtzee

// play([6,4,3,5,2]) 40, Large Straight

// play([2,2,2,3,2]) 11, Four-of-a-kind

// Problem 12

function go_for_gold(){
	
	var score =  0 ;
	var rolls_taken = 0;
	
	while (score < 25) {
		rolls_taken += 1;
		var rolls = five_die();
		score = play(rolls);
		
	}
	return rolls_taken;
}

//play([6,5,6,6,6])
go_for_gold()











