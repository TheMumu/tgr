<html lang="en">

<link href="/css/front-tgr.css" rel="stylesheet" />

<body>

<video id="my-video" class="video" autoplay="autoplay" loop="loop" muted="" width="300" height="150">
    <source src="/static/video.mp4" type="video/mp4" />
</video>

<div class="story-wrapper">
	Message: ${stories.story_1.text}
</div>

<div class="show-wrapper">
	Next Show
	<#list shows.showList as show>
        <div class="show-title">
			${show.title}
        <div>
        <div class="show-text">
			${show.text}
        <div>
    </#list>
</div>

</body>

</html>