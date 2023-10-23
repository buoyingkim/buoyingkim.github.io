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

    keyword.style.marginTop = top + 'px';
    keyword.style.marginLeft = left + 'px';
})
