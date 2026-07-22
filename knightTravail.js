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

  const toKey = ([x, y]) => {
    return `${x},${y}`;
  };
  const queue = [];
  const visited = new Set();

  queue.push([startPos]);
  visited.add(toKey(startPos));

  while (queue.length > 0) {
    const path = queue.shift();

    const current = path[path.length - 1];
    console.log(path);

    if (toKey(current) === toKey(endPos)) {
      console.log("found the spot");
      for (let j = 0; j < path.length; j++) {
        console.log(path[j]);
      }
      return;
    }

    for (let i = 0; i < knightMoves.length; i++) {
      const next = [
        knightMoves[i][0] + current[0],
        knightMoves[i][1] + current[1],
      ];
      if (isValidPos(next) && !visited.has(toKey(next))) {
        visited.add(toKey(next));
        queue.push([...path, next]);
      }
    }
  }
  console.log(queue);
  console.log(visited);
}

console.log(TravelingKnight([0, 0], [7, 7]));
