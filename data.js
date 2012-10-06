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
      demo: {},
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
};

var applyDemographics = function(data, demographics) {
  for (var characteristic in demographics) {
    var group = demographics[characteristic];
    if (group.convert) {
      var newGroup = {};
      for (var s in group) {
        if (s !== "convert") {
          var initials = _.find(data, function(i){ return i.name === s }).initials;
          newGroup[initials] = group[s];
        }
      }
      group = newGroup;
    }
    for (var s in group) {
      data[s].demo[characteristic] = group[s];
    }
  }
  for (var state in data) {
    data[state].demo.reg_ind = (1 - (data[state].demo.reg_rep + data[state].demo.reg_dem));
  }
  return data;
};