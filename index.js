exports.convert = function(_string){
    temp = '';
    array = [];
    for (c of _string) {
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
