function display(ourData) {
    var ele = document.getElementById("display");
    ele.innerHTML = " ";
    var a = 0;
    var node = document.createElement("P");
    var textnode = document.createTextNode("Displaying " + (ourData.results.length) + " results in the page");
    node.appendChild(textnode);
    ele.appendChild(node);
    for (var i = 0; i < ourData.results.length; i++) {
        if (i % 3 == 0)
            ele.innerHTML += `<div class="row">\n`;
        var text = `<div class="col-sm-4">\n<div class="card">\n<div class="card-image waves-effect waves-block waves-light">\n<img class="activator" src="https://image.tmdb.org/t/p/w300` +
            ourData.results[i].poster_path + `">\n<a class="btn halfway-fab modal-trigger waves-effect waves-light red" href="#modal4" id="`+ourData.results[i].title+`" onclick="compute(ourData.results[`+i+`])"><i class="material-icons" id="` + ourData.results[i].title + `">add</i></a></div>\n<div class="card-content">\n<span class="card-title activator grey-text text-darken-4">` + ourData.results[i].title + `<i class="material-icons right">
            more_vert</i></span></div><div class="card-reveal">\n
            <span class="card-title grey-text text-darken-4">` + ourData.results[i].title + `<i class="material-icons right">close</i></span>
            <p><br>` + ourData.results[i].overview + `<br><br>Rating: ` + ourData.results[i].vote_average + `/10</p>\n
            </div>`;
        ele.innerHTML += text;
        var text1 = "</div>\n</div>\n";
        ele.innerHTML += text1;
        if (i % 3 == 2)
            ele.innerHTML += `</div>\n`;
        a++;
    }


}