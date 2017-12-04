/* eslint max-nested-callbacks:[0], no-magic-numbers:[0] */
'use strict';

const objectIdStringUtils = require('./index');
const assert = require('assert');

describe('object-id-string', () => {
  describe('parse()', () => {
    it('should work', () => {
      assert.deepEqual(objectIdStringUtils.parse('abbacacaabbacacaabbacaca'), {
        increment: 12241610,
        machine: 11254474,
        pid: 51883,
        timestamp: 2881145546,
      });
    });

    describe('should fail', () => {
      it('with non hexa string', () => {
        assert.throws(() => {
          objectIdStringUtils.parse('abbacacaabbacocoabbacaca');
        }, 'E_BAD_OBJECT_ID');
      });

      it('with not enough chars', () => {
        assert.throws(() => {
          objectIdStringUtils.parse('abbacacaabbacacaabbacac');
        }, 'E_BAD_OBJECT_ID');
      });

      it('with too much chars', () => {
        assert.throws(() => {
          objectIdStringUtils.parse('abbacacaabbacacaabbacacaa');
        }, 'E_BAD_OBJECT_ID');
      });

      it('with non string argument', () => {
        assert.throws(() => {
          objectIdStringUtils.parse(0xabbacacaabbacacaabbacaca);
        }, 'E_BAD_OBJECT_ID');
      });
    });
  });

  describe('stringify()', () => {
    it('should work', () => {
      assert.equal(
        objectIdStringUtils.stringify({
          increment: 12241610,
          machine: 11254474,
          pid: 51883,
          timestamp: 2881145546,
        }),
        'abbacacaabbacacaabbacaca'
      );
    });

    it('should work when necessinting padding', () => {
      assert.equal(
        objectIdStringUtils.stringify({
          increment: 0,
          machine: 0,
          pid: 0,
          timestamp: 0,
        }),
        '000000000000000000000000'
      );
    });

    it('should fail', () => {
      assert.throws(() => {
        assert.equal(
          objectIdStringUtils.stringify(
            {
              increment: 12241610000000000000000,
              machine: 11254474,
              pid: 51883,
              timestamp: 2881145546,
            },
            'abbacacaabbacacaabbacaca'
          )
        );
      });
    });
  });
});
