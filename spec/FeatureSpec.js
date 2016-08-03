// 'use strict';

describe('Feature test:', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('takeoff is not allowed when the weather is stromy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(); }).toThrowError('can not take off in bad weather');
    expect(airport.planes()).toContain(plane);
  });

});
