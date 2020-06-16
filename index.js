exports.convert = function(_string){
    const re = new RegExp(',');
    var array = _string.match(re, '$&').input;
    return array;
}
