var input = 'rect 1x1,rotate row y=0 by 20,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 3,rect 2x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 3,rect 2x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 4,rect 2x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 3,rect 2x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 5,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 6,rect 5x1,rotate row y=0 by 2,rect 1x3,rotate row y=2 by 8,rotate row y=0 by 8,rotate column x=0 by 1,rect 7x1,rotate row y=2 by 24,rotate row y=0 by 20,rotate column x=5 by 1,rotate column x=4 by 2,rotate column x=2 by 2,rotate column x=0 by 1,rect 7x1,rotate column x=34 by 2,rotate column x=22 by 1,rotate column x=15 by 1,rotate row y=2 by 18,rotate row y=0 by 12,rotate column x=8 by 2,rotate column x=7 by 1,rotate column x=5 by 2,rotate column x=2 by 1,rotate column x=0 by 1,rect 9x1,rotate row y=3 by 28,rotate row y=1 by 28,rotate row y=0 by 20,rotate column x=18 by 1,rotate column x=15 by 1,rotate column x=14 by 1,rotate column x=13 by 1,rotate column x=12 by 2,rotate column x=10 by 3,rotate column x=8 by 1,rotate column x=7 by 2,rotate column x=6 by 1,rotate column x=5 by 1,rotate column x=3 by 1,rotate column x=2 by 2,rotate column x=0 by 1,rect 19x1,rotate column x=34 by 2,rotate column x=24 by 1,rotate column x=23 by 1,rotate column x=14 by 1,rotate column x=9 by 2,rotate column x=4 by 2,rotate row y=3 by 5,rotate row y=2 by 3,rotate row y=1 by 7,rotate row y=0 by 5,rotate column x=0 by 2,rect 3x2,rotate column x=16 by 2,rotate row y=3 by 27,rotate row y=2 by 5,rotate row y=0 by 20,rotate column x=8 by 2,rotate column x=7 by 1,rotate column x=5 by 1,rotate column x=3 by 3,rotate column x=2 by 1,rotate column x=1 by 2,rotate column x=0 by 1,rect 9x1,rotate row y=4 by 42,rotate row y=3 by 40,rotate row y=1 by 30,rotate row y=0 by 40,rotate column x=37 by 2,rotate column x=36 by 3,rotate column x=35 by 1,rotate column x=33 by 1,rotate column x=32 by 1,rotate column x=31 by 3,rotate column x=30 by 1,rotate column x=28 by 1,rotate column x=27 by 1,rotate column x=25 by 1,rotate column x=23 by 3,rotate column x=22 by 1,rotate column x=21 by 1,rotate column x=20 by 1,rotate column x=18 by 1,rotate column x=17 by 1,rotate column x=16 by 3,rotate column x=15 by 1,rotate column x=13 by 1,rotate column x=12 by 1,rotate column x=11 by 2,rotate column x=10 by 1,rotate column x=8 by 1,rotate column x=7 by 2,rotate column x=5 by 1,rotate column x=3 by 3,rotate column x=2 by 1,rotate column x=1 by 1,rotate column x=0 by 1,rect 39x1,rotate column x=44 by 2,rotate column x=42 by 2,rotate column x=35 by 5,rotate column x=34 by 2,rotate column x=32 by 2,rotate column x=29 by 2,rotate column x=25 by 5,rotate column x=24 by 2,rotate column x=19 by 2,rotate column x=15 by 4,rotate column x=14 by 2,rotate column x=12 by 3,rotate column x=9 by 2,rotate column x=5 by 5,rotate column x=4 by 2,rotate row y=5 by 5,rotate row y=4 by 38,rotate row y=3 by 10,rotate row y=2 by 46,rotate row y=1 by 10,rotate column x=48 by 4,rotate column x=47 by 3,rotate column x=46 by 3,rotate column x=45 by 1,rotate column x=43 by 1,rotate column x=37 by 5,rotate column x=36 by 5,rotate column x=35 by 4,rotate column x=33 by 1,rotate column x=32 by 5,rotate column x=31 by 5,rotate column x=28 by 5,rotate column x=27 by 5,rotate column x=26 by 3,rotate column x=25 by 4,rotate column x=23 by 1,rotate column x=17 by 5,rotate column x=16 by 5,rotate column x=13 by 1,rotate column x=12 by 5,rotate column x=11 by 5,rotate column x=3 by 1,rotate column x=0 by 1';

function printGrid(grid) {
    var output = '';
    for (var y = 0; y < grid[0].length; y++) {
        for (var x = 0; x < grid.length; x++) {
            output += grid[x][y] + ' ';
        }
        output += '\r\n';
    }
    console.log(output);
}

function countGrid(grid) {
    var counter = 0;
    for (var y = 0; y < grid[0].length; y++) {
        for (var x = 0; x < grid.length; x++) {
            counter += grid[x][y];
        }
    }
    console.log('number lit: ' + counter);
}

var inputs = input.split(',');
var grid = [];
for (var i = 0; i < 50; i++) {
    grid[i] = [];
    for (var ii = 0; ii < 6; ii++) {
        grid[i][ii] = 0;
    }
}

// Go through input
for (var index = 0; index < inputs.length; index++) {
    var command = inputs[index];
    var rectCommand = /rect ([0-9]+)x([0-9]+)/.exec(command);
    if (rectCommand) {
        console.log(rectCommand);
        for (var i = 0; i < parseInt(rectCommand[1]); i++) {
            for (var ii = 0; ii < parseInt(rectCommand[2]); ii++) {
                grid[i][ii] = 1;
            }
        }
    }
    var rotateCommand = /rotate [a-z]+ ([xy])=([0-9]+) by ([0-9]+)/.exec(command);
    if (rotateCommand) {
        console.log(rotateCommand);
        if (rotateCommand[1] == 'x') {
            var x = parseInt(rotateCommand[2]);
            var rotations = parseInt(rotateCommand[3]);
            for (var i = 0; i < rotations; i++) {
                var hold = grid[x][5], temp = 0;
                for (var ii = 0; ii < 6; ii++) {
                    temp = grid[x][ii];
                    grid[x][ii] = hold;
                    hold = temp;
                }
            }
        }
        else if (rotateCommand[1] == 'y') {
            var y = parseInt(rotateCommand[2]);
            var rotations = parseInt(rotateCommand[3]);
            for (var i = 0; i < rotations; i++) {
                var hold = grid[49][y], temp = 0;
                for (var ii = 0; ii < 50; ii++) {
                    temp = grid[ii][y];
                    grid[ii][y] = hold;
                    hold = temp;
                }
            }
        }
    }
}
countGrid(grid);
