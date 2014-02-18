module.exports  = function (num, keys) {
  var ln = '';
  for (var key in keys) {
    if (num % keys[key] === 0) {
      ln += key;
    }
  }
  if (!ln) {
    return 'No fizzes!';
  } else {
    return ln;
  }
}
