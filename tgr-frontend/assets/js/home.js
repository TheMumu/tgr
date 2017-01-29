$( document ).ready(function() {
    var storylink = document.getElementById("story-link");
    var newtext = "new text";
    storylink.addEventListener("click", function() {
        var storycontent = this.parentNode;
        $.ajax({
            type: "GET",
            url: "/story/title3",
            //contentType: "text/plain",
            //dataType: "text"
        }).done(function(data) {
            console.log(data);
            storycontent.innerHTML = data.text;
            //$( this ).addClass( "done" );
        });


    });
});

