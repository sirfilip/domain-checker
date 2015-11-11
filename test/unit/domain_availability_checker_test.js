var assert = require('assert');
var da = require('../../services/domain_availability_checker');

describe('Domain Availability', function() {
  
  describe('#check', function() {

    it('returns true if the domain is available', function() {
        return da.check('some-non-taken-domain.com').then(function(result) {
            assert.equal(true, result);
        }).catch(function(err) {
          console.log('In test:', err);  
        });
    });

    it('returns false if the domain is not available', function() {
      return da.check('google.com').then(function(result) {
        assert.equal(false, result);
      }).catch(function(err) {
        console.log('In test:', err);  
      });
    });

    xit('returns an error if the domain is misformatted', function() {
      return da.check('something not formated right').catch(function(err) {
        assert.equal(da.DOMAIN_MISFORMATTED, err.code);
      });
    });

  });
  
  describe('#checkAll', function() {

    it('returns a list with information of domains availability', function() {
        return da.checkAll('some-non-taken-domain.com', 'google.com').then(function(result) {
            assert.deepEqual([true, false], result);
        }).catch(function(err) {
          console.log('In test:', err);  
        });
    });

  });

});
