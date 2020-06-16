exports.convert = function(_string){
    const re = new RegExp(',');
    return Uint8Array.from(_string.match(re, '$&').input);
}
