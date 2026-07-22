function TravelingKnight(startPos, endPos) {
  const knightMoves = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, -1],
    [-2, 1],
  ];

  const isValidPos = ([x, y]) => {
    return x >= 0 && y >= 0 && x < 8 && y < 8;
  };
  if (isValidPos(startPos) === false) {
    return "not a valid start position";
  }
  if (isValidPos(endPos) === false) {
    return "not a valid end position";
  }
  const toKey = ([x, y]) => {
    return `${x},${y}`;
  };
  const queue = [];
  const visited = new Set();

  queue.push([startPos]);
  visited.add(toKey(startPos));

  while (queue.length > 0) {
    // this grabs the latest path (aka the current testing total path)
    // is a list example:  [[0,0], [1,2], [2,4]]
    const path = queue.shift();

    //this grabs the current position you are on which is the last child of the path array
    //is a position example: [2,4]
    const current = path[path.length - 1];
    console.log(path);

    if (toKey(current) === toKey(endPos)) {
      //Check if the current position is the end position...
      console.log("found the spot");
      for (let j = 0; j < path.length; j++) {
        //display entire path
        console.log(path[j]);
      }
      return;
    }

    //if position not found...
    for (let i = 0; i < knightMoves.length; i++) {
      //add all next positions linked to this position to the list to go eventually (FIFO)
      const next = [
        knightMoves[i][0] + current[0],
        knightMoves[i][1] + current[1],
      ];
      //make sure its valid (on board) and hasn't already been visited
      if (isValidPos(next) && !visited.has(toKey(next))) {
        visited.add(toKey(next));
        //push entire path + the next element to queue
        queue.push([...path, next]);
      }
    }
  }
  //If it makes here it didn't find the position
  console.log(queue);
  console.log(visited);
}

console.log(TravelingKnight([0, 0], [-2, -2]));
