///*js*/
//var vid = document.getElementById("bgvid"),
//pauseButton = document.getElementById("vidpause");
//function vidFade() {
//    vid.classList.add("stopfade");
//}
//vid.addEventListener('ended', function() {
//    // only functional if "loop" is removed
//     vid.pause();
//	// to capture IE10
//	vidFade();
//});
//pauseButton.addEventListener("click", function() {
//    vid.classList.toggle("stopfade");
//	if (vid.paused) {
//vid.play();
//		pauseButton.innerHTML = "Pause";
//	} else {
//        vid.pause();
//        pauseButton.innerHTML = "Paused";
//	}
//});

$( document ).ready(function() {
    var storylink = document.getElementById("story-link");
    var newtext = "new text";
    storylink.addEventListener("click", function() {

        var storycontent = this.parentNode;
        //$.ajax({
        //    url: "test.html",
        //    context: document.body
        //}).done(function() {
        //    $( this ).addClass( "done" );
        //});
        console.log("CLICKED");
        console.log(storycontent);
        storycontent.innerHTML = "new text";
    });
});

