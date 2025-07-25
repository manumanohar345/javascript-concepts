Object
.prototype.toString = function() {
  if (this === null) {
    return 'null';
  }
  if (this === undefined) {
    return 'undefined';
  }
  if (typeof this === 'object' || typeof this === 'function') {
    return '[object Object]';
  }
  return String(this);
}
// };
