var simulate = function(data, runs) {
  var CONST_runs = runs || 1000;
  
  var projected = {
    evDem: 0,
    evRep: 0,
    wDem: 0,
    wRep: 0,
    tied: 0,
    states: {}
  };
  
  for (var state in data) {
    projected.states[data[state].initials] = { name: data[state].name, init: "US-" + data[state].initials, wDem: 0, wRep: 0, vsDem: data[state].dem, vsRep: data[state].rep, pvDem: data[state].dem * data[state].population, pvRep: data[state].rep * data[state].population };
    
    for (var district in data[state].districts) {
      projected.states[data[state].districts[district].initials] = { wDem: 0, wRep: 0 };
    }
  }
  
  for (var iteration = 1; iteration <= CONST_runs; iteration++) {
    var projection = { evDem:0, evRep: 0 }
    
    for (var state in data) {
      var stateData = data[state];

      var vsDem = (stateData.dem);
      var vsRep = (stateData.rep);
      var moe = stateData.moe + 2;

      var pDem = jstat.pnorm((vsDem - vsRep) / moe);
      var pRep = jstat.pnorm((vsRep - vsDem) / moe);

      var roll = Math.random();
      if (roll < pDem) {
        projection.evDem += stateData.ev
        projected.states[stateData.initials].wDem++;
      }
      else {
        projection.evRep += stateData.ev
        projected.states[stateData.initials].wRep++;
      }
      
      for (var district in stateData.districts) {
        var districtData = stateData.districts[district];
        
        var dvsDem = districtData.dem;
        var dvsRep = districtData.rep;
        var dmoe = districtData.moe + 2;

        var dpDem = jstat.pnorm((dvsDem - dvsRep) / moe);
        var dpRep = jstat.pnorm((dvsRep - dvsDem) / moe);

        var droll = Math.random();
        if (roll < dpDem) {
          projection.evDem += districtData.ev
          projected.states[districtData.initials].wDem++;
        }
        else {
          projection.evRep += districtData.ev
          projected.states[districtData.initials].wRep++;
        }
      }
    }
    
    projected.evDem += projection.evDem;
    projected.evRep += projection.evRep;
    (projection.evDem > projection.evRep ? projected.wDem++ : 
      projection.evDem !== projection.evRep ? projected.wRep++ : projected.tied++);
      
    if (iteration % 500 == 0) {
      console.log((iteration/CONST_runs * 100) + "%")
    }
  }
  
  return { 
    runs: CONST_runs,
    evDem: (projected.evDem / CONST_runs), 
    evRep: (projected.evRep / CONST_runs), 
    wDem: (projected.wDem / CONST_runs), 
    wRep: (projected.wRep / CONST_runs), 
    wTied: (projected.tied / CONST_runs),
    pvDem: (_.reduce(projected.states, function(m, s){ return (s.pvDem ? s.pvDem + m : m); }, 0) / 309),
    pvRep: (_.reduce(projected.states, function(m, s){ return (s.pvRep ? s.pvRep + m : m); }, 0) / 309),
    states: projected.states
  };
}