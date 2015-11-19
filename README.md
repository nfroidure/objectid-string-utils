# object-id-string

Helpers to pars/stringify hexadecimal representation of an ObjectId (MongoDB)


[![NPM version](https://badge.fury.io/js/object-id-string.svg)](https://npmjs.org/package/object-id-string)
[![Build status](https://secure.travis-ci.org/nfroidure/object-id-string.svg)](https://travis-ci.org/nfroidure/object-id-string)
[![Dependency Status](https://david-dm.org/nfroidure/object-id-string.svg)](https://david-dm.org/nfroidure/object-id-string)
[![devDependency Status](https://david-dm.org/nfroidure/object-id-string/dev-status.svg)](https://david-dm.org/nfroidure/object-id-string#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/nfroidure/object-id-string/badge.svg?branch=master)](https://coveralls.io/r/nfroidure/object-id-string?branch=master)



## Modules
<dl>
<dt><a href="#module_object-id-string">object-id-string</a></dt>
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
<a name="module_object-id-string"></a>
## object-id-string
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
