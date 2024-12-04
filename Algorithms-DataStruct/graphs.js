// Problem 1
function hasPath(graph, src, dst) {
  // Takes graph, source node and destination node
  // Return boolean, true if there is a direct path between them
  // Depth First Search

  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;

  // Breath First Search

  //   const queue = [src];

  //   while (queue.length > 0) {
  //     const current = queue.shift();

  //     if (current === dst) return true;

  //     for (let neighbor of graph[current]) {
  //       queue.push(neighbor);
  //     }
  //   }

  //   return false;
}

const test_00 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// console.log(hasPath(test_00, "f", "k"));

function largestComponent(graph) {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = countConectedNodes(graph, node, visited);
    if (size > longest) {
      longest = size;
    }
  }

  return longest;
}

function countConectedNodes(graph, current, visited) {
  if (visited.has(current)) {
    return 0;
  }
  visited.add(current);

  let size = 1;

  for (let neighbor of graph[current]) {
    size += countConectedNodes(graph, neighbor, visited);
  }

  return size;
}

const test_01 = {
  0: ["1", "5", "8"],
  1: ["0"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["2", "3"],
  5: ["0", "8"],
  8: ["0", "5"],
};

// console.log(largestComponent(test_01));

function shortestPath(edges, src, dst) {
  const graph = buildGraph(edges);
  const visited = new Set([src]);
  const queue = [[src, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === dst) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}

function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  //   console.log(graph);

  return graph;
}

const test_02 = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

// console.log(shortestPath(test_02, "w", "z"));

function islandCount(grid) {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
}

function explore(grid, r, c, visited) {
  const rowInBounds = 0 <= r && r < grid.length;
  const columnInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !columnInBounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
}

const grid = [
  ["W", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid));
