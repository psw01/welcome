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

        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 106,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "https://i.ibb.co/8j6mLLW/image.png",
                        "width": 9999,
                        "height": 9999
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 1.603412060865523,
                    "direction": "bottom",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 481.0236182596568,
                        "rotateY": 160.3412060865523
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 4,
                        "duration": 0.3,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

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