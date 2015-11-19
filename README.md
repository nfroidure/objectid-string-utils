# object-id-string

Helpers to pars/stringify hexadecimal representation of an ObjectId (MongoDB)

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
