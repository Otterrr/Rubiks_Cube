//ARRAYS

// FRONT FACE & SIDE MOVE ARRAYS

const frontMoves = [
  43, 44, 45,
  10, 13, 16,
  48, 47, 46,
  36, 33, 30,
];

const frontCW = [
    { from: 1, to: 3 },
    { from: 2, to: 6 },
    { from: 3, to: 9 },
    { from: 4, to: 2 },
    { from: 6, to: 8 },
    { from: 7, to: 1 },
    { from: 8, to: 4 },
    { from: 9, to: 7 },
];

const frontCounterCW = [
    { from: 1, to: 7 },
    { from: 2, to: 4 },
    { from: 3, to: 1 },
    { from: 4, to: 8 },
    { from: 6, to: 2 },
    { from: 7, to: 9 },
    { from: 8, to: 6 },
    { from: 9, to: 3 },
];


// RIGHT FACE & SIDE MOVE ARRAYS

const rightMoves = [
    45, 42, 39,
    19, 22, 25,
    54, 51, 48,
    9, 6, 3
];

const rightCW = [
    { from: 10, to: 12 },
    { from: 11, to: 15 },
    { from: 12, to: 18 },
    { from: 13, to: 11 },
    { from: 15, to: 17 },
    { from: 16, to: 10 },
    { from: 17, to: 13 },
    { from: 18, to: 16 },
];

const rightCounterCW = [
    { from: 10, to: 16 },
    { from: 11, to: 13 },
    { from: 12, to: 10 },
    { from: 13, to: 17 },
    { from: 15, to: 11 },
    { from: 16, to: 18 },
    { from: 17, to: 15 },
    { from: 18, to: 12 },

];


// TOP FACE & SIDE MOVE ARRAYS

const upMoves = [
    30, 29, 28,
    21, 20, 19,
    12, 11, 10,
    3, 2, 1
];

const upCW = [
    { from: 37, to: 39 },
    { from: 38, to: 42 },
    { from: 39, to: 45 },
    { from: 40, to: 38 },
    { from: 42, to: 44 },
    { from: 43, to: 37 },
    { from: 44, to: 40 },
    { from: 45, to: 43 },
];

const upCounterCW = [
    { from: 37, to: 43 },
    { from: 38, to: 40 },
    { from: 39, to: 37 },
    { from: 40, to: 44 },
    { from: 42, to: 38 },
    { from: 43, to: 45 },
    { from: 44, to: 42 },
    { from: 45, to: 39 },
];


// BACK FACE & SIDE MOVE ARRAYS

const backMoves = [
    28, 31, 34,
    52, 53, 54,
    18, 15, 12,
    39, 38, 37
];

const backCW = [
    { from: 19, to: 21 },
    { from: 20, to: 24 },
    { from: 21, to: 27 },
    { from: 22, to: 20 },
    { from: 24, to: 26 },
    { from: 25, to: 19 },
    { from: 26, to: 22 },
    { from: 27, to: 25 },
];

const backCounterCW = [
    { from: 19, to: 25 },
    { from: 20, to: 22 },
    { from: 21, to: 19 },
    { from: 22, to: 26 },
    { from: 24, to: 20 },
    { from: 25, to: 27 },
    { from: 26, to: 24 },
    { from: 27, to: 21 },
];


// LEFT FACE & SIDE MOVE ARRAYS

const leftMoves = [
    1, 4, 7,
    46, 49, 52,
    27, 24, 21,
    37, 40, 43,
];

const leftCW = [
    { from: 28, to: 30 },
    { from: 29, to: 33 },
    { from: 30, to: 36 },
    { from: 31, to: 29 },
    { from: 33, to: 35 },
    { from: 34, to: 28 },
    { from: 35, to: 31 },
    { from: 36, to: 34 },    
];

const leftCounterCW = [
    { from: 28, to: 34 },
    { from: 29, to: 31 },
    { from: 30, to: 28 },
    { from: 31, to: 35 },
    { from: 33, to: 29 },
    { from: 34, to: 36 },
    { from: 35, to: 33 },
    { from: 36, to: 30 },
];


// BOTTOM FACE & SIDE MOVE ARRAYS

const downMoves = [
    7, 8, 9,
    16, 17, 18,
    25, 26, 27,
    34, 35, 36,
];

const downCounterCW = [
    { from: 46, to: 52 },
    { from: 47, to: 49 },
    { from: 48, to: 46 },
    { from: 49, to: 53 },
    { from: 51, to: 47 },
    { from: 52, to: 54 },
    { from: 53, to: 51 },
    { from: 54, to: 48 },
];

const downCW = [
    { from: 46, to: 48 },
    { from: 47, to: 51 },
    { from: 48, to: 54 },
    { from: 49, to: 47 },
    { from: 51, to: 53 },
    { from: 52, to: 46 },
    { from: 53, to: 49 },
    { from: 54, to: 52 },
];


// ON CLICK FUNCTIONS 

//FRONT

const applyFrontClockwiseMoves = () => {
    rotateClockwise(frontMoves);
    applyFaceMoves(frontCW);
};

const applyFrontCounterClockwiseMoves = () => {
    rotateCounterClockwise(frontMoves);
    applyFaceMoves(frontCounterCW);
};


// RIGHT

const applyRightClockwiseMoves = () => {
    rotateClockwise(rightMoves);
    applyFaceMoves(rightCW);    
};

const applyRightCounterClockwiseMoves = () => {
    rotateCounterClockwise(rightMoves);
    applyFaceMoves(rightCounterCW);
};


// TOP

const applyUpClockwiseMoves = () => {
    rotateClockwise(upMoves);
    applyFaceMoves(upCW);
};

const applyUpCounterClockwiseMoves = () => {
    rotateCounterClockwise(upMoves);
    applyFaceMoves(upCounterCW);
};


// BACK

const applyBackClockwiseMoves = () => {
    rotateClockwise(backMoves);
    applyFaceMoves(backCW);
};

const applyBackCounterClockwiseMoves = () => {
    rotateCounterClockwise(backMoves);
    applyFaceMoves(backCounterCW);
};


// LEFT

const applyLeftClockwiseMoves = () => {
    rotateClockwise(leftMoves);
    applyFaceMoves(leftCW);
};

const applyLeftCounterClockwiseMoves = () => {
    rotateCounterClockwise(leftMoves);
    applyFaceMoves(leftCounterCW);
};


// BOTTOM

const applyDownClockwiseMoves = () => {
    rotateClockwise(downMoves);
    applyFaceMoves(downCW);
};

const applyDownCounterClockwiseMoves = () => {
    rotateCounterClockwise(downMoves);
    applyFaceMoves(downCounterCW);
};



// FACE STICKER CLASS ARRAY CREATOR & MOVE FROM/TO FUNCTION

const applyFaceMoves = (faceMoves) => {
    const currentClassList = [];
    faceMoves.forEach((move) => {
        const el = document.getElementById(`sticker${move.from}`);
        currentClassList.push(...el.classList);
    });
    faceMoves.forEach((move, i) => document.getElementById(`sticker${move.to}`).classList = currentClassList[i]);
};


// SIDE STICKER CLASS ARRAY CREATOR BY STICKER ID

const getClassList = (arr) => {
    const currentClassList = [];
    arr.forEach((id) => {
        const el = document.getElementById(`sticker${id}`);
        currentClassList.push(...el.classList);
    });
    return currentClassList;
};

const applyClassListChange = (arr, newClassList) =>
    arr.forEach((id, i) => document.getElementById(`sticker${id}`).classList = newClassList[i]); 


// COUNTER CLOCKWISE MOVE FUNCTION

// moves the first 3 elements to the back of the class list effectively moving the class positions by 3 spaces causing a visual rotation of colors

const rotateCounterClockwise = (arr) => {
    const currentClassList = getClassList(arr);
    const newClassList = [...currentClassList.slice(3), ...currentClassList.slice(0, 3)];
    applyClassListChange(arr, newClassList);
};


// CLOCKWISE MOVE FUNCTION

// moves the first 9 elements to the back of the class list effectively moving the class positions by 9 spaces causing a visual rotation of colors

const rotateClockwise = (arr) => {
    const currentClassList = getClassList(arr);
    const newClassList = [...currentClassList.slice(9), ...currentClassList.slice(0, 9)];
    applyClassListChange(arr, newClassList);
};