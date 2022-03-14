cheet('w s p', function() {
    alert('hehee boi')
});




function remSt() {
    $("#PP").removeAttr("style")
    $("#SS").removeAttr("style")
    $("#WW").removeAttr("style")
}

cheet("p s w", {
    next: function(str, key, num, seq) {
        console.log(key)
        if (key == "p") {
            $('#PP').css({ "fill": "#3bcc27" })
        }
        if (key == "s") {
            $('#SS').css({ "fill": "#3bcc27" })
        }
        if (key == "w") {
            $('#WW').css({ "fill": "#3bcc27" })
        }

    },

    fail: function() {
        console.log('sequence failed');
        remSt()
    },

    done: function() {

        remSt()
        $('.item').css({ "animation": "wiggle 0.6s infinite" })
        $('.item').css({ "animation-timing-function": "linear" })
        $('.item').css({ "transition": "all 0s" })

        //https://codepen.io/achristian/pen/WbzgMx
        $('.name-svg').css({ "animation": "moveX 2s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate" })
        $('.name-svg').css({ "z-index": 69 })

        function myLoop() {
            setTimeout(function() {
                color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
                // $('svg').css({ 'fill': color });
                $('.item').css({ "background-color": color })
                $('.name-svg').css({ "fill": color2 })
                myLoop();
            }, 69)
        }
        myLoop()
    }
})