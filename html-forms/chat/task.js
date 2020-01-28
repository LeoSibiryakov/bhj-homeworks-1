'use strict'

let robotMessage = ['Hello', "No, I don't speak Rusian", 'Please, speake English', 'Why yoy are so stupid?', 'Goodbye, looser']

let widgetSide = document.querySelector('.chat-widget__side');
let widget = document.querySelector('.chat-widget');
let input = document.getElementById('chat-widget__input');

widgetSide.addEventListener('click', function() {
	widget.classList.toggle('chat-widget_active');
});

widget.addEventListener('keydown', function(event) {
	let message = input.value;
	if (event.key === "Enter" && input.checkValidity()) {
		let time = new Date().getHours() + ":" + new Date().getMinutes();
		let messages = document.querySelector( '.chat-widget__messages' );
		messages.innerHTML += `
			<div class="message message_client">
				<div class="message__time"> ${time} </div>
				<div class="message__text">
				  ${message}
				</div>
			</div>
			<div class="message">
				<div class="message__time"> ${time} </div>
				<div class="message__text">` + robotMessage[Math.floor(Math.random() * robotMessage.length)] +`
				  
				</div>
			</div>
		`;
		input.value = "";
	}
});