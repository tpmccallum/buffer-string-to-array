exports.convert = function(_string){
    temp = '';
    array = [];
    for (c of result[0].wasm_binary.toString()) {
        if (c == ",") {
            array.push(Number(temp));
            temp = '';
        } else {
            if (temp.length == 0) {
                temp = c;
            } else {
                temp = temp + c;
            }
        }
    }
    if (temp.length > 0){
        array.push(Number(temp));
    }
    return array;
}
