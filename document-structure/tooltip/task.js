const div = document.createElement('div');
div.setAttribute('class', 'tooltip');
document.body.appendChild(div);

document.body.addEventListener('click', (event) => {
	let target = event.target;
	if (target.className != 'has-tooltip') return;
	event.preventDefault();
	div.innerText = target.getAttribute('title');
	div.style.top = target.getBoundingClientRect().top + 'px';
	div.style.left = target.getBoundingClientRect().left + 'px';
	div.classList.toggle('tooltip_active');
	target.addEventListener('blur', () => {
		div.classList.remove('tooltip_active');
	});
});
