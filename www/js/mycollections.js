function mycollections() {
    var clear1 = document.getElementById("searchbar");
    clear1.innerHTML = '';
    var clear2 = document.getElementById("display");
    clear2.innerHTML = `<form class="example"><a class="waves-effect waves-light btn" id="home">Return Home</a></form>`;
    var text = ` <div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">collections</i>
    </a>
    <ul>
      <li><a class="btn-floating red modal-trigger" id="adder1" href="#modal1"><i class="material-icons">add</i></a></li>
      <li><a class="btn-floating yellow modal-trigger darken-1" href="#modal2"><i class="material-icons">delete</i></a></li>
      <li><a class="btn-floating green modal-trigger" href="#modal3"><i class="material-icons">edit</i></a></li>
    </ul>
  </div>`;
    clear2.innerHTML += text;
    if (collection.length == 0) {
        var text2 = `<h3>No Collection exists. Pls add a collection with the button on the bottom right</h3>`
        clear2.innerHTML+=text2;
    } else {
        var text2 = `<div class="collection" id="collection-main">`;
        for (var i = 0; i < collection.length; i++)
        {
        	text2 += `<a href="#!" onclick="indicollecview(document.getElementById('`+collection[i].name+`').id)" id="`+collection[i].name+`" class="collection-item">`+collection[i].name+`</a>`;
        }
        text2 += `</div>`;
        clear2.innerHTML+=text2;
    }


    var home1 = document.getElementById("home");
    home1.addEventListener("click", home);
}