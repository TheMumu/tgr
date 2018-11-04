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
});

