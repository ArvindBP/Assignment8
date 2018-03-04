function indicollecview(name1) {
    var clear1 = document.getElementById("searchbar");
    clear1.innerHTML = '';
    var clear2 = document.getElementById("display");
    clear2.innerHTML = `<form class="example"><a class="waves-effect waves-light btn" id="home">Return Home</a>
    											<a class="waves-effect waves-light btn" id="collections1" onclick="mycollections()">My Collections</a>
    					</form>`;
  	for(var i=0;i<collection.length;i++)
  	{
  		if(collection[i].name == name1)
  		{
  			
  			for(var j=0;j<collection[i].movies.length;j++)
  			{
  				
  				var text = `<div class="col-sm-4">\n<div class="card">\n<div class="card-image waves-effect waves-block waves-light">\n<img class="activator" src="` +
            	collection[i].movies[j].poster_path + `">\n<a class="btn halfway-fab waves-effect waves-light red" id="`+collection[i].movies[j].title+`" onclick="deletefromcollec(`+i+`,`+j+`)"><i class="material-icons">delete</i></a></div>\n<div class="card-content">\n<span class="card-title activator grey-text text-darken-4">` + collection[i].movies[j].title + `<i class="material-icons right">
            	more_vert</i></span></div><div class="card-reveal">\n
            	<span class="card-title grey-text text-darken-4">` + collection[i].movies[j].title + `<i class="material-icons right">close</i></span>
            	<p><br>` + collection[i].movies[j].overview + `<br><br>Rating: ` + collection[i].movies[j].vote_average + `/10</p>\n
            	</div></div>\n</div>\n`;
            	clear2.innerHTML+=text;
            }
  		}
  	}
    var home1 = document.getElementById("home");
    home1.addEventListener("click", home);
}