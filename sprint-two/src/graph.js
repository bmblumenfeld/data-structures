

// Instantiate a new graph
var Graph = function() {
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this[node]) {
    for (var i = 0; i < this[node].length; i++) {
      var connectionArr = this[this[node][i]];
      connectionArr.forEach(function (connection, index) {
        connectionArr.splice(index, 1);
      });
    }
    delete this[node]; 
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode); 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this[fromNode].length) {
    return;
  }
  this[fromNode].forEach(function (connection, index) {
    if (connection === toNode) {
      this[fromNode].splice(index, 1);
    }    
  }, this);
  this[toNode].forEach(function (connection, index) {
    if (connection === fromNode) {
      this[toNode].splice(index, 1);
    }    
  }, this);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function (connectionArray, nodeValue) {
    cb.call(this, nodeValue);
  }, this);
  // _.each(this, cb.bind(this, nodeValue), this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


