'use strict';

var dns = require('dns');

module.exports = {
  
  check: function check(domain) {
    return new Promise(function(resolve, reject) {
      dns.resolve(domain, function(err, addresses) {
        if (err) {
          switch(err.code) {
            case dns.NOTFOUND:
              resolve(true);
            default:
              reject(err);
          }
        } else {
          resolve(false);
        }
      });
    });
  },
  
  checkAll: function checkAll() {
    var domains = Array.prototype.slice.call(arguments);
    return Promise.all(domains.map(function(domain) {
      return this.check(domain);
    }.bind(this)));
  }
  
};

