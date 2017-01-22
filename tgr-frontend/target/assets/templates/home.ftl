<html lang="en">

    <link href="/css/front-tgr.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="/js/front-tgr.min.js"></script>

    <body>

    <video id="my-video" class="video" autoplay="autoplay" loop="loop" muted="" width="300" height="150">
        <source src="/static/video.mp4" type="video/mp4" />
    </video>

    <div class="story-wrapper">
        <div class="story-content">
           ${stories.story_1.text}
        </div>
    </div>

    <div class="show-wrapper">
        Next Show
        <#list shows.showList as show>
            <div class="show-title">
                ${show.title}
            </div>
            <div class="show-text">
                ${show.text}
            </div>
        </#list>
    </div>

    </body>

</html>