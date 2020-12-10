exports.display = async function (x) { 
  return 'Hello '+ x;
}
exports.add = async function (x,y) { 
  return x + y;
}

exports.sub = async function (x,y) { 
  return x - y;
}

exports.test = async function (x,y) { 
  return  x || y;
}
