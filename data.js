var massage = function(data) {
  var nowcast = data.states.nowcast[0].states;
  
  var data = {};
  
  for (var state in nowcast) {
    var stateData = nowcast[state];
    var s = {
      initials: stateData[0],
      name: stateData[30].split(" Statewide")[0],
      ev: stateData[2],
      dem: stateData[8],
      rep: stateData[9],
      moe: stateData[31],
      districts: []
    }
    if (_.isNull(stateData[32])) {
      data[s.initials] = s;
    }
    else {
      var parentState = s.name.split(" ")[0];
      _.find(data, function(p){ return p.name === parentState }).districts.push(s);
    }
  }
  
  return data;
}