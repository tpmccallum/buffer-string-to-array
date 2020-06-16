exports.convert = function(_string){
    const re = new RegExp(',');
    return _string.match(re, '$&').input;
}
