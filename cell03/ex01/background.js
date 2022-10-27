function func()
{
		document.body.style.backgroundColor = getRandomColor();
}
const btn = document.getElementById('butn');
btn.addEventListener('click', function onClick() {
	butn.style.backgroundColor = getRandomColor();
});
document.getElementById('butn').style.backgroundColor = getRandomColor();
function getRandomColor() {
	return '#'+Math.floor(Math.random()*0xFFFFFFFF).toString(16);
}