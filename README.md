# WaEncrypt
a script to securely encode / decode strings
# Usage
you need to instantiate the WaEncrypt class, something like: _const encrypt = new WaEncrypt()_

## To encode something
using the previous example of instantiation we call the _encode_ method of the class, this method takes two arguments in the form of a string, the first is a secret and the second a string that you want to encode: 

<br/>_const encrypt = new WaEncrypt()<br/>
encrypt.encode('<b>mySecret</b>', '<b>my text that i want encode</b>')_

using a secret literally like <b>'mySecret'</b> and the literal text <b>'my string that i want encode'</b>, the class return the string  : </br>
<b> _8G tg)t t0vt 7 dvnt gnu6#g37/735vug85v4vhgqq{8_ </b> 

## To decode a string

Take the previous example, now we can use a method _decode_ of the class, this method take two arguments too, the first is your secret used to encode and the second is the encoded string:

<br/>_const encrypt = new WaEncrypt()_<br/>
_encrypt.decode('<b>mySecret</b>', '<b>_8G tg)t t0vt 7 dvnt gnu6#g37/735vug85v4vhgqq{8_</b>')_

and the return is : _<b>'my text that i want encode'</b>_

# Secret
 It's important that you use a very scrambled string to be your secret
# Errors
If you use the wrong secret an object with an error will be show :
_<b>{message: "Invalid secret"}</b>_
