function makeGrid(numColumns, numRows) {
    var grid = []
    for(let i=0; i<numRows; i++) {
        grid[i] = [];
        for(let j=0; j<numColumns; j++) {
            grid[i][j] = j+1;
        }
    }
    return grid;
}