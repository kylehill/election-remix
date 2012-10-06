var filters = {
  all: function(data, vsDemDelta) {
    for (var state in data) {
      this.sticker(data[state], vsDemDelta);
    }
    return data;
  },
  
  mccain08: function(data, vsDemDelta) {
    var states = ["AL", "AK", "AZ", "AR", "GA", "ID", "KS", "KY", "LA", "MS",
                  "MO", "MT", "NE", "ND", "OK", "SC", "SD", "TN", "TX", "UT",
                  "WV", "WY"];
    for (var i in states) {
      data[states[i]] = this.sticker(data[states[i]], vsDemDelta);
    }
    data.NE.districts[1] = this.sticker(data.NE.districts[1], (vsDemDelta * -1));
    return data;
  },
  
  obama08: function(data, vsDemDelta) {
    var states = ["CA", "CO", "CT", "DE", "DC", "FL", "HI", "IL", "IN", "IA",
                  "ME", "MD", "MA", "MI", "MN", "NV", "NH", "NJ", "NM", "NY",
                  "NC", "OH", "OR", "PA", "RI", "VT", "VA", "WA", "WI"];
    for (var i in states) {
      data[states[i]] = this.sticker(data[states[i]], vsDemDelta);
    }
    data.NE.districts[1] = this.sticker(data.NE.districts[1], vsDemDelta);
    return data;
  },
  
  state: function(data, state, vsDemDelta) {
    data[state] = this.sticker(data[state], vsDemDelta);
    return data;
  },
  
  sticker: function(state, delta) {
    state.dem += delta;
    state.rep -= delta;
    for (var d in state.districts) {
      state.districts[d] = this.sticker(state.districts[d], delta);
    }
    return state;
  }
}