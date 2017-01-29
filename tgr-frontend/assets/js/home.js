$( document ).ready(function() {

    function custom() {
        var storylink = document.getElementById("story-link");
        if(storylink){
            var newtext = "new text";
            storylink.addEventListener("click", function () {
                var storycontent = this.parentNode;
                $.ajax({
                    type: "GET",
                    url: "/story/" + $(this).data("story-title"),
                    //contentType: "text/plain",
                    //dataType: "text"
                }).done(function (data) {
                    console.log(data);
                    storycontent.innerHTML = data.text;
                    //recalling itself
                    custom();
                });

            });
        }

    }

    custom();
});

