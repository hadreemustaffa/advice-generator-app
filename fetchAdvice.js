const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const button = document.getElementById('btn');
const url = 'https://api.adviceslip.com/advice';

// fetch advice from api, returns an id & an advice
async function fetchAdvice() {
	try {
		// make every call unique by adding timestamp
		const response = await fetch(`${url}?timestamp=${new Date().getTime()}`);
		const data = await response.json();

		adviceId.textContent = `${data.slip.id}`;
		adviceText.textContent = `${data.slip.advice}`;
	} catch (error) {
		adviceId.textContent = '!!';
		adviceText.textContent = 'This is not an advice, this is an error message.';
	}
}

// call if user clicks button
button.addEventListener('click', () => {
	fetchAdvice();
});

// call everytime page loads
fetchAdvice();
