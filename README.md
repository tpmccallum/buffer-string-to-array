# buffer-string-to-array
Convert Nodejs `Buffer.toString()` output to an array.

# Usage
This is used in situations where you have saved an array to a database LONGBLOG i.e. using [mysqljs/mysql](https://github.com/mysqljs/mysql/issues/2360) whereby the database stores your original array as the hex string Buffer of the original array's string representation.

Installation on system
```
npm install buffer-string-to-array
```

In-code usage
```
var converter = require(buffer-string-to-array);

// Use the Buffer's toString() method to get the hex string Buffer's string representation of the data
var the_string = database_result[0].original_array.toString();
var newArray = Uint8Array.from(converter.convert(the_string));
```

# Background

In this sort of situation what we want to do is use the (returnd by the DB) Buffer's `.toString()` function to get the actual / literal Uint8Array numbers and then we want to do the equivalent of `split(",")` so we can pack each string representation of each number into a separate index of an array.

In this specific (unique) situation, we already have our Uint8Array/Buffer, it is just that we have it in the form of a hex string and we want the literal numbers to use in our application.

In this specific situation converting the Buffer to ArrayBuffer (a.k.a view) will just give us a view of each of the hex string values i.e. `48, 49, 46`. For example
```
let my_array_buffer = database_result[0].original_array.buffer.slice(database_result[0].original_array.byteOffset, database_result[0].original_array.byteOffset + database_result[0].original_array.byteLength);
```
Even creating a typed array will give that same result. For example
```
let uint8array = new Uint8Array(database_result[0].original_array.buffer, database_result[0].original_array.byteOffset, database_result[0].original_array.byteLength / Uint8Array.BYTES_PER_ELEMENT);

```

We don't want that, we want the original data i.e. `[0, 50, 100, 200, 245]`

For more excellent information about `Buffer`/`ArrayBuffer`/`DataView`/`Uint8Array` etc. in Node.js, see [this very useful stackoverflow answer](https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer/31394257#31394257).