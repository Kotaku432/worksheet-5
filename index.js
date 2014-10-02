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
 	while (number < 5)
 	    v_list[number]= roll_die();
 	    number = number +1;
 	return v_list;
 }
 five_die();