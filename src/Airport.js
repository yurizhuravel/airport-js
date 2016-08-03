function Airport(){
  this._hangar = [];
}

Airport.prototype.planes = function () {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error ('can not take off in bad weather');
  }
  this._hangar = [];
};

Airport.prototype.isStormy = function() {
  return false;
};
