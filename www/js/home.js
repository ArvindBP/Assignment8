function home() {
    var text = document.getElementById("searchbar");
    text.innerHTML = `<form class="example">
        	<input class="form-control" type="text" placeholder="Search for a movie" name="Search" id="inputbar">
        	<button type="button" id="submitbutton">Submit</button>
            <a class="waves-effect waves-light btn" id="collections" onclick="mycollections()">My Collections</a>
        </form>`;
    var text2 = document.getElementById("display");
    text2.innerHTML='';
    var text1 = document.getElementById("dropdown1");
    text1.innerHTML = '';
    search();
    dispcolleclist(text1);
}