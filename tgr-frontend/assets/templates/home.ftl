<html lang="en">
<head>
    <link href="/css/front-tgr.css" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="/js/front-tgr.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://unpkg.com/typewriter-effect/dist/core.js"></script>

    <audio id="my_audio" src="/static/bg.mp3" loop="loop"></audio>
</head>

<body>


<div class="grid-container">

    <div class="grid-text-container">
        <div class="story-wrapper">
            <div class="story-content">
                ${stories.storyList[0].text}
            </div>
        </div>

        <div class="story-wrapper">
            <div class="story-content">
                ${stories.storyList[0].text}
            </div>
        </div>

        <div class="story-wrapper">
            <div class="story-content">
                ${stories.storyList[0].text}
            </div>
        </div>
    </div>

    <div class="center-image-container">
        <img class="center-image" src="/static/image_1.png">
    </div>
</div>

<!--<video id="my-video" class="video" autoplay="autoplay" loop="loop" muted="" width="" height="">-->
<!--<source src="/static/sicile.mp4" type="video/mp4" />-->
<!--</video>-->

<!--<div class="show-wrapper">-->
<!--<#list shows.showList as show>-->
<!--<div class="show-title">-->
<!--${show.title}-->
<!--</div>-->
<!--<div class="show-text">-->
<!--${show.text}-->
<!--</div>-->
<!--</#list>-->
<!--</div>-->

</body>

</html>