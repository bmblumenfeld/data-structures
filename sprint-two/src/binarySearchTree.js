var BinarySearchTree = function(value) {
  this.value = value;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  var compareNode = function(comparison) {
    if (value > comparison.value) {
      if (comparison.right) {
        compareNode(comparison.right);
      } else {
        comparison.right = newNode;
      }
    } else {
      if (comparison.left) {
        compareNode(comparison.left);
      } else {
        comparison.left = newNode;
      }
    }
  };
  compareNode(this);
};

BinarySearchTree.prototype.contains = function(value) {

  var searchNode = function(comparison) {
    if (value === comparison.value) {
      return true;
    } else if (value > comparison.value) {
      if (comparison.right) {
        return searchNode(comparison.right);
      } else {
        return false;
      }
    } else {
      if (comparison.left) {
        return searchNode(comparison.left);
      } else {
        return false;
      }
    }
  };
  return searchNode(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var log = [];
  var pathsStorage = {};
  //var depthCt = 0;

  var mapDepths = function(node, pathObj) {
    if (node.right) {
      var depthCt;      
      if (!pathObj) {
        depthCt = 0;
      } else {
        depthCt = pathObj.depth;
      }
      // var depthCt = pathObj[depthCt] || 0;
      depthCt++;
      var pathObj = pathObj || {};
      pathObj.depth = depthCt;
      //path.sequence = pathObj[sequence] ? pathObj[storage].push(node.value) : [node.value];
      if (pathObj.hasOwnProperty('sequence')) {
        pathObj['sequence'].push(node.value);
      } else {
        pathObj['sequence'] = [];
        pathObj['sequence'].push(node.value);
      }
      //pathsStorage[node.value] = pathObj;

      mapDepths(node.right, pathObj);
      pathObj = null;
    }
    if (node.left) {
      var depthCt;      
      if (!pathObj) {
        depthCt = 0;
      } else {
        depthCt = pathObj.depth;
      }
      // var depthCt = pathObj[depthCt] || 0;
      depthCt++;
      pathObj = pathObj || {};
      pathObj.depth = depthCt;
      //path.sequence = pathObj[sequence] ? pathObj[storage].push(node.value) : [node.value];
      if (pathObj.hasOwnProperty('sequence')) {
        pathObj['sequence'].push(node.value);
      } else {
        pathObj['sequence'] = [];
        pathObj['sequence'].push(node.value);
      }
      //pathsStorage[node.value] = pathObj;

      mapDepths(node.left, pathObj);
      pathObj = null;
    }

    if (!node.left && !node.right) {
      var depthCt;      
      if (!pathObj) {
        depthCt = 0;
      } else {
        depthCt = pathObj.depth;
      }
      // var depthCt = pathObj[depthCt] || 0;
      depthCt++;
      pathObj = pathObj || {};
      pathObj.depth = depthCt;
      //path.sequence = pathObj[sequence] ? pathObj[storage].push(node.value) : [node.value];
      if (pathObj.hasOwnProperty('sequence')) {
        pathObj['sequence'].push(node.value);
      } else {
        pathObj['sequence'] = [];
        pathObj['sequence'].push(node.value);
      }
      pathsStorage[node.value] = pathObj;
      depthCt = 0;
      pathObj = null;
    }

  };
  
  mapDepths(this);

  var outputPath = function() {
    var maxDepth = 0;
    var outputFirst;
    var keyOfMax;
    for (var key in pathsStorage) {
      if (pathsStorage[key].depth > maxDepth) {
        maxDepth = pathsStorage[key].depth;
        outputFirst = pathsStorage[key].sequence;
        keyOfMax = key;
      }
    }
    outputFirst.forEach(function(item) {
      log.push(item);
    });
    delete pathsStorage[keyOfMax];
    // outputPath();
    if (Object.keys(pathsStorage).length) {
      outputPath(); 
    }
  };

  outputPath();

  var finalPath = _.uniq(log);
  finalPath.forEach(function(element) {
    cb(element);
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */










