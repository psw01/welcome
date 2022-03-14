//https://stackoverflow.com/questions/8132081/generate-a-random-seeded-hex-color
function genColor(seed) {
    color = Math.floor((Math.abs(Math.sin(seed) * 16777215)));
    color = color.toString(16);
    // pad any colors shorter than 6 characters with leading 0s
    while (color.length < 6) {
        color = '0' + color;
    }

    return '#' + color;
}

//https://stackoverflow.com/questions/40958727/javascript-generate-unique-number-based-on-string
function getHash(input) {
    var hash = 0,
        len = input.length;
    for (var i = 0; i < len; i++) {
        hash = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0; // to 32bit integer
    }
    return hash;
}


var nodes = Array.prototype.slice.call(document.getElementsByClassName('container')[0].children);


$('.item').mouseover(function(e) {
    console.log(nodes.indexOf(this) * 4)
    color = genColor(nodes.indexOf(this) * 2)
        // color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color)
    $('svg').css({ 'fill': color });
})