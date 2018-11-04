$( document ).ready(function() {



    function getStory() {
        $.ajax({
            type: "GET",
            url: "/story/kids",
            //contentType: "text/plain",
            //dataType: "text"
        }).done(function (data) {
            console.log(data.text);
            var morseCode = translateToMorseCode(data.text);
            var storyContent = document.getElementById('story-content');
                var typewriter = new Typewriter(storyContent, {
                    loop: false
                });
            typewriter.typeString(morseCode).start();
        });
    }

    getStory();
//
//    typewriter.typeString('Hello World!')
//        .pauseFor(2500)
//        .deleteAll()
//        .typeString('Strings can be removed')
//        .pauseFor(2500)
//        .deleteChars(7)
//        .typeString('<strong>altered!</strong>')
//        .pauseFor(2500)
//        .start();
});

;function translateToMorseCode(value) {
  var output = '';
  for (var i = 0; i < value.length; i++) {
    output += converter[value.charAt(i).toLowerCase()];
  }
  return output;
}

var converter = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
  ' ': ' '
};