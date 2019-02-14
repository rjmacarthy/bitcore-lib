"use strict";

var should = require("chai").should();
var stratcore = require("../");

describe('#versionGuard', function() {
  it('global._stratcore should be defined', function() {
    should.equal(global._stratcore, stratcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      stratcore.versionGuard('version');
    }).should.throw('More than one instance of stratcore');
  });
});
