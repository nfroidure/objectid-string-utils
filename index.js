'use strict';

const YError = require('yerror');

const HEXA_CHARS = '0123456789abcdef'.split('');
const PARTS_NAMES = ['timestamp', 'machine', 'pid', 'increment'];
const PARTS_LENGTHS = [8, 6, 4, 6];
const objectIdStringUtils = {
  parse: objectIdStringUtilsParse,
  stringify: objectIdStringUtilsStringify,
};

/**
 * @module objectid-string-utils
 */
module.exports = objectIdStringUtils;

/**
 * Parse an hexadecimal object id and return it parts
 * @alias parse
 * @param  {String} id The ObjectId to parse
 * @return {Object}    Hash containing the constious parts (timestamp, machine, pid, increment)
 */
function objectIdStringUtilsParse(id) {
  let cursor = 0;

  _check(id);
  return PARTS_NAMES.reduce((parts, partName, index) => {
    parts[partName] = parseInt(id.substr(cursor, PARTS_LENGTHS[index]), 16);
    cursor += PARTS_LENGTHS[index];
    return parts;
  }, {});
}

/**
 * Build an haxadecimal string from the constious parts of an ObjectId
 * @alias stringify
 * @param  {Object} parts The given parts
 * @return {String}       The ObjectId string representation
 */
function objectIdStringUtilsStringify(parts) {
  return _check(PARTS_NAMES.map((partName, index) => {
    let str = parts[partName].toString(16);

    while(!str[PARTS_LENGTHS[index] - 1]) {
      str = 0 + str;
    }
    return str;
  }).join(''));
}

function _check(id) {
  if('string' !== typeof id || 24 !== id.length || !_isHexaString(id)) {
    throw new YError('E_BAD_OBJECT_ID', id, id.length);
  }
  return id;
}

function _isHexaString(str) {
  return str.split('').every(_charIsHexa);
}

function _charIsHexa(char) {
  return -1 !== HEXA_CHARS.indexOf(char);
}
