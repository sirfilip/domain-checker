'use strict';

var dns = require('dns');

module.exports = {
  check_availability: function(domain) {
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
  }
};

