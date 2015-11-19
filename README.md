# objectid-string-utils

Helpers to pars/stringify hexadecimal representation of an ObjectId (MongoDB)


[![NPM version](https://badge.fury.io/js/objectid-string-utils.svg)](https://npmjs.org/package/objectid-string-utils)
[![Build status](https://secure.travis-ci.org/nfroidure/objectid-string-utils.svg)](https://travis-ci.org/nfroidure/objectid-string-utils)
[![Dependency Status](https://david-dm.org/nfroidure/objectid-string-utils.svg)](https://david-dm.org/nfroidure/objectid-string-utils)
[![devDependency Status](https://david-dm.org/nfroidure/objectid-string-utils/dev-status.svg)](https://david-dm.org/nfroidure/objectid-string-utils#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/nfroidure/objectid-string-utils/badge.svg?branch=master)](https://coveralls.io/r/nfroidure/objectid-string-utils?branch=master)



## Modules
<dl>
<dt><a href="#module_objectid-string-utils">objectid-string-utils</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#parse">parse(id)</a> ⇒ <code>Object</code></dt>
<dd><p>Parse an hexadecimal object id and return it parts</p>
</dd>
<dt><a href="#stringify">stringify(parts)</a> ⇒ <code>String</code></dt>
<dd><p>Build an haxadecimal string from the various parts of an ObjectId</p>
</dd>
</dl>
<a name="module_objectid-string-utils"></a>
## objectid-string-utils
<a name="parse"></a>
## parse(id) ⇒ <code>Object</code>
Parse an hexadecimal object id and return it parts

**Kind**: global function  
**Returns**: <code>Object</code> - Hash containing the various parts (timestamp, machine, pid, increment)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The ObjectId to parse |

<a name="stringify"></a>
## stringify(parts) ⇒ <code>String</code>
Build an haxadecimal string from the various parts of an ObjectId

**Kind**: global function  
**Returns**: <code>String</code> - The ObjectId string representation  

| Param | Type | Description |
| --- | --- | --- |
| parts | <code>Object</code> | The given parts |
