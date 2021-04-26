# Toy Robot
https://github.com/KaySeng/ToyRobot

## Environment

This application was developed in React using pure javascript without any other Library.

## How to run this application

To run this application, simply open the command prompt and change the current directory to this path 'REA_toy_robot_v5\toy-robot\robot' and run `npm start`

## Design
Before I started working on this application. I made sure to read the PROBLEM.md and to try and have a clear understanding of the requirements. Once I understood the requirements, I started planning on how and what I needed to do. 

GET USER INPUT
PLACE - update X,Y,F -> can use .includes method to check if user input contains the word place

MOVE - check which way is the robot facing and increment the value accordingly
	NORTH - Y+1
	EAST - X+1
	SOUTH - Y-1
	WEST - X-1

LEFT - check which way is the robot facing.
	NORTH - WEST
	EAST - NORTH
	SOUTH - EAST
	WEST - SOUTH
	
RIGHT - check which way is the robot facing.
	NORTH - EAST
	EAST - SOUTH
	SOUTH - WEST
	WEST - NORTH
	
(only 2 possible options, left or right)
	
REPORT - print out result

The board is 5x5. Have a condition to check if X or Y is greater than 5 OR less than 0. print out error.

## Programming
- I first started working on getting the basic functionlity working such as making sure I am able to store user input, make the Robot move, Turning left and Right. 
- The next step was testing the application for the basic functionlity to see if everything is working as expected. 
- Review code.
- The next step was to find a better to get user input and making sure that user can only enter valid command. This is when I decided to use regex to limit user command. A lot of trail and errors to make sure the regex is working as intended.
- The next step was to make sure that the Robot ignore all command until the Robot is placed on the table. Also created a variable file to store all the variables to clean up the main file a little bit. 
- Review code and testig to make sure everything is still working.
- Refactoring code and add the report command.
- Review Code
- Add error messages to the application where necessary and testing.
- Refactoring and clean up code. 
- Add codition to prevent the Robot from walking off the table.
- Review Code and Testing.

### Testing

Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH