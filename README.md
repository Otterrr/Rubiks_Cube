# RUBIK'S CUBE

![Rubik's scramble](https://user-images.githubusercontent.com/77677982/182041828-4a01f2e7-352b-4fd9-a177-f5217827ffad.PNG)

### A programmatic Rubik's Cube that can correctly rotate any face. Developed in HTML, CSS & JavaScript.



# Creating the Cube

## Step 1: HTML

The first step to creating a cube, is know what a cube is. A cube is a 3D square made of of 6 sides, or faces. To begin, I created faces that were all positioned on top of each other, each with their own id: face 1-6. 

As per the Rubik's Cube design, each face is divided up into 9 tiles each. I used the phrase sticker, the same as "rubiks-cube-solver.com". Each sticker had their own unique id: from sticker1 to sticker54. 

Each group of 9 stickers within a face were assigned the same colour class from 1-6, each unique to their face.

![Rubik's norotate](https://user-images.githubusercontent.com/77677982/182041756-5319b009-a8bf-441b-be49-d92248f6e226.PNG)

## Step 2: CSS

I chose a cube size of 200px, meaning that at the moment we have 6 200x200px squares on top of each other. In order to turn these squares into a cube we have to translate each face by half of the height/width of the cube - 100px. Then rotate each one uniquely to become the 6 walls or "faces" of the cube. 

To view the cube on a slight angle, a transform rotation must be applied to slightly tilt the cube to one side and down. I chose a similar but more central angle to "rubiks-cuber-solver.com".

![Rubik's no3d](https://user-images.githubusercontent.com/77677982/182041727-96ff4c80-e093-47e6-af1f-433aa05438ce.PNG)

At this point the faces will still be stacked on top of each other as they do not know that they are trying to create a 3D shape. In order to work in a 3D space, we need to apply the "transform-style: preserve-3d" to the cube and the wrapper/scene the cube is within.

![Rubik's nocolor](https://user-images.githubusercontent.com/77677982/182041686-d2d482f0-2c29-4743-b31d-6667c05fb97b.PNG)

Each sticker was coloured accordingly to "rubiks-cube-solver.com", taking the same 6 hexadecimal colour codes and applied to the stickers background-colour. The face was given a black background-colour to create a dark border between stickers.


![Rubik's Cube](https://user-images.githubusercontent.com/77677982/182041857-b377d5c1-1819-4192-ac3c-7fa551a3c28b.PNG)



# Creating the Controls / Buttons

## Step 1: HTML

I created 12 buttons, as per the brief, two for each of the 6 face rotation, one Clockwise and one CounterClockwise. I labelled them F/F', R/R', U/U', B/B', L/L' & D/D' for Front, Right, Up, Back, Left & Down.

Each button was assigned an appropriate onclick function to turn each face. (Clockwise/CounterClockwise)

## Step 2: CSS

Each button's font-size was increase to 25px to make them larger and easier to read and use. The buttons were placed into two columns side by side to more easily differentiate between Clockwise and CounterClockwise rotations.

The buttons were given a slight opacity and a pointer when hovered over to let the user know which button they were about to use.

![Rubik's buttons](https://user-images.githubusercontent.com/77677982/182041901-12d56e57-42c3-4076-8f77-126c3cebb5c2.PNG)



# Rotation The Cube / Moving The Stikers

## Step 1: The Arrays

### Faces VS Sides

When rotating a face of the cube, we need to consider that both the face itself and the sides attached to the face will be moving(rotating). Each face consists of 8 stickers and each face's sides consist of 12 stickers. Each move therefore will have 20 stickers moving at a time. In each rotation, each sticker will move to a new position 3 stickers away. 

On the face sides each line of 3 stickers will move to a new side as they are rotation around the 9 stickers on the face. 3 stickers moving 3 places. Upon 4 rotations they will return to their original position. Whereas, on each face each 3 stickers will move only two places as they are rotating around a single sticker. 3stickers moving 2 places.

Therefore we need a different function for rotation the faces to the sides and therefore a different kind of array.

For the face side stickers an array of all tiles involved was created as it was a linear rotation moving their position in the array by 3 forward or 3 back.
For the face stickers a more specific array was created showing the exact sticker that each sticker would move from and to, for both Clockwise and CounterClockwise rotation. This is because each tile was only moving 2 places and would be reusing a tile already part of the selected 3.


## Step 2: The onclick Functions

### Each Face has two rotations. Each face has two buttons that can be pressed to rotate the face. Clockwise and CounterClockwise

Each onclick Function was passed both arrays appropriate to it, a face and side rotation, depending on which direction needed to be turned.

In total 12 onclick functions were created, one for each button.


## Step 3: Moving the Face Stickers

### To move the faces an array of all original sticker positions was created using (`sticker${move.from}`). Then each to sticker position (`sticker${move.to}`) was moved to the position of the original sticker. As we created two arrays per face, one would move/rotate the stickers Clockwise the other CounterClockwise.


## Step 4: Creating the Side Sticker classList

### Similarly to the above function, this function reads through the array and creates a list of all stickers and their current classes. It then applies this classList to the stickers id's (`sticker${id}`).


## Step 5: Clockwise Move Function

### To rotate the face sides CounterClockwise the position of the classes in the array was sliced 3 positions in. These elements were moved the back of the list of elements, theoretically moving old position 3 to position 0. This caused the stickers classes to shift down the list of stickers, causing a visual CounterClockwise rotation of colours.


## Step 6: CounterClockwise Move Function

### To rotate the face sides Clockwise the opposite of the above function was applied. The last line of the array was targetted, and sliced at position 9. This caused the first 9 elements to move to the end of the list, making element 9 element 0 and causing a shift of 9 positions which is the same as going back 3 places. This caused a visual Clockwies rotation of colours.


# Testing

* With the classList, onclick and rotation functions all created, and every tile on the cube moving/rotation in "a" direction, it seemed that all was working. However, when clicking the buttons in a pre-determined order and replicating this order on "rubiks-cube-solver.com", the final outcome was not the same. Upon deduction, a few of the arrays were listed in a numerical order, lowest to highest, where in fact they needed to be listed in a circular order rotating around a face, i.e. not 1, 2, 3, 4, 5, 6, 7, 8, 9, but 1, 2, 3, 6, 9, 8, 7, 4. 

* This fixed the first problem, but I also noticed that when rotating a face, sometimes the faces and sides would rotate in opposite directions. This was due to the CounterClockwise and Clockwise functions being placed in the wrong functions or the arrays needing to be listed from bottom to top.

# Feedback

Of course, this project was not easy and took many versions to come to a working final product. Initially I tried creating a cube of 27smaller cubes and tried using JavaScript to translate the positions of these cubes to new positions. In the end this proved to difficult for me. The cubes kept leaving their transform origin and making their own rotations. 

I also tried, to instead of moving the classes assigned to each element, to move each sticker id itself, this caused an infinate loop where the function would fire each line of code one by one, causing the last line of code to already have been re-written above , changing the stickers id already. This caused the colours to not change properly and overall did not work. This also meant that when a second rotation was applied it applied the effect to a sticker that had already moved, causing stickers not in the rotation to change colour instead.


# Running the Program

### To run the program, please download all 3 files, the HTML, CSS, and Javascipt files. Open the files/folder in Visual Studio Code. In the commmand terminal type "start index.html". This will open the program in a new browser. Please use Google Chrome as the program uses ES6.
