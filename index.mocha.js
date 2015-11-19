var objectIdStringUtils = require('.');
var assert = require('assert');

describe('object-id-string', function() {

  describe('parse()', function() {

    it('should work', function() {
      assert.deepEqual(objectIdStringUtils.parse('abbacacaabbacacaabbacaca'), {
        increment: 12241610,
        machine: 11254474,
        pid: 51883,
        timestamp: 2881145546,
      });
    });

    describe('should fail', function() {

      it('with non hexa string', function() {
        assert.throws(function() {
          objectIdStringUtils.parse('abbacacaabbacocoabbacaca');
        }, 'E_BAD_OBJECT_ID');
      });

      it('with not enough chars', function() {
        assert.throws(function() {
          objectIdStringUtils.parse('abbacacaabbacacaabbacac');
        }, 'E_BAD_OBJECT_ID');
      });

      it('with too much chars', function() {
        assert.throws(function() {
          objectIdStringUtils.parse('abbacacaabbacacaabbacacaa');
        }, 'E_BAD_OBJECT_ID');
      });

      it('with non string argument', function() {
        assert.throws(function() {
          objectIdStringUtils.parse(0xabbacacaabbacacaabbacaca);
        }, 'E_BAD_OBJECT_ID');
      });

    });

  });

  describe('stringify()', function() {

    it('should work', function() {
      assert.equal(objectIdStringUtils.stringify({
        increment: 12241610,
        machine: 11254474,
        pid: 51883,
        timestamp: 2881145546,
      }), 'abbacacaabbacacaabbacaca');
    });

    it('should work when necessinting padding', function() {
      assert.equal(objectIdStringUtils.stringify({
        increment: 0,
        machine: 0,
        pid: 0,
        timestamp: 0,
      }), '000000000000000000000000');
    });

    it('should fail', function() {
      assert.throws(function() {
        assert.equal(objectIdStringUtils.stringify({
          increment: 12241610000000000000000,
          machine: 11254474,
          pid: 51883,
          timestamp: 2881145546,
        }, 'abbacacaabbacacaabbacaca'));
      });
    });

  });

});
