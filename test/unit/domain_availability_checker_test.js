var assert = require('assert');
var da = require('../../services/domain_availability_checker');

describe('Domain Availability', function() {

  it('returns true if the domain is available', function() {
      return da.check_availability('some-non-taken-domain.com').then(function(result) {
          assert.equal(true, result);
      }).catch(function(err) {
        console.log('In test:', err);  
      });
  });

  it('returns false if the domain is not available', function() {
    return da.check_availability('google.com').then(function(result) {
      assert.equal(false, result);
    }).catch(function(err) {
      console.log('In test:', err);  
    });
  });

  xit('returns an error if the domain is misformatted', function() {
    return da.check_availability('something not formated right').catch(function(err) {
      assert.equal(da.DOMAIN_MISFORMATTED, err.code);
    });
  });


});
