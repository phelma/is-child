Tests whether a file / folder is the child of another file.

`isChild(parent, child)` returns true or false

Can also be used to test if a folder is the parent of a file / folder (just swap the arguments 😉 )

`npm install is-child`

```javascript
let isChild = require('is-child');

let parent = '/my/path'
let child = '/my/path/child'
let random = '/my/random/path'

isChild(parent, child) // returns true
isChild(parent, random) // returns false
```
