var container = document.querySelector(".container");
var keyword = document.querySelectorAll(".keyword");
var height = container.offsetHeight;
var width = container.offsetWidth;
var keywordH = keyword[0].offsetHeight;
var keywordW = keyword[0].offsetWidth;

    console.log(keywordW);


keyword.forEach(function(keyword) {
    var top = Math.random() * ( height - keywordH );
    var left = Math.random() * ( width - keywordW );
    var hue = getRandomInt(0, 360)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    keyword.style.marginTop = top + 'px';
    keyword.style.marginLeft = left + 'px';
    keyword.style.color = 'hsl(H, 100%, 40%)'.replace(/H/g, hue);
})
