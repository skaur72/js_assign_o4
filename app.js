
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("delete");
  span.className = "delete";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var deleterow = document.getElementsByClassName("deleterow");
var i;
for (i = 0; i < deleterow.length; i++) {
  deleterow[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ol');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('select');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addTodoItem").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
 
  document.getElementById("todoList").appendChild(li);
  
  document.getElementById("addTodoItem").value = "";
 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("delete");
 
  span.className = "deleterow";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < deleterow.length; i++) {
    deleterow[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

