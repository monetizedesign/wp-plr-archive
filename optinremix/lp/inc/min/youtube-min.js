function onYouTubePlayerAPIReady(){player=new YT.Player("video",{events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerStateChange(e){0===e.data&&($("#step2").velocity({left:"-2000px"}),$("#step3").velocity({right:"0"}),$.backstretch("http://webneel.com/wallpaper/sites/default/files/images/04-2013/indian-beach-wallpaper.jpg"))}function onPlayerReady(e){var t=document.getElementById("play-button");t.addEventListener("click",function(){player.playVideo()});var a=document.getElementById("skipVideo");a.addEventListener("click",function(){player.pauseVideo(),$("#step2").velocity({left:"-2000px"}),$("#step3").velocity({right:"0"}),$.backstretch("http://webneel.com/wallpaper/sites/default/files/images/04-2013/indian-beach-wallpaper.jpg")})}var player,tag=document.createElement("script");tag.src="//www.youtube.com/player_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);