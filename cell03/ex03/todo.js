function ft_newlist(){
	const nlist = window.prompt('Quel est le nouveau to do?');
	if (nlist != NULL)

}
window.onload = () => {
}

var myNodelist = document.getElementsByTagName("P");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
	var div = this.parentElement;
	div.style.display = "none";
}
}

var list = document.querySelector('p');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'P') {
	ev.target.classList.toggle('checked');
}
}, false);
