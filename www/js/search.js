function search() {
    var searchele = document.getElementById("submitbutton");
    searchele.addEventListener("click", function() {
        var x = document.getElementById("inputbar").value;
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=d4b6a7a60118da99b67c2a169611ace6&language=en-US&query=' + x + '&page=1&include_adult=false');
        request.onload = function() {
            ourData = JSON.parse(request.responseText);
            display(ourData);
        };
        request.send();
    });
}