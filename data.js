"use strict";

var dices = [
    `url(images//image1.png)`,
    `url(images//image2.png)`,
    `url(images//image3.png)`,
    `url(images//image4.png)`,
    `url(images//image5.png)`,
    `url(images//image6.png)`
]

const arrayWithScore = []

const scores = []

const savedDices = []

var savedDicesOnes = []
var savedDicesTwos = []
var savedDicesThrees = []
var savedDicesFours = []
var savedDicesFives = []
var savedDicesSixes = []


const pair1 = []
const pair2 = []
const pair3 = []
const pair4 = []
const pair5 = []
const pair6 = []

const smallStraight = [1, 2, 3, 4, 5]
const largeStraight = [2, 3, 4, 5, 6]


const yahtzee = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6]
]

const singleNumberScores = [];
const totalScore = [];