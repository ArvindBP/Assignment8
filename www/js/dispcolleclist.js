function dispcolleclist(addul) {
    addul.innerHTML = '';
    var text='';
    if(collection.length!=0)
    {
    
    for (var i = 0; i < collection.length; i++) {
        text += `<li><a href="#!" onclick="compute1(document.getElementById('` + collection[i].name + `').id)" id="` + collection[i].name + `">` + collection[i].name + `</a></li>`;
    }
    addul.innerHTML += text;
    }
}