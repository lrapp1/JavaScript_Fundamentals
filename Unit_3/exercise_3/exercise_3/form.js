

window.addEventListener('load', (event) =>{
		
    const h2TextPhrase = document.querySelector('h2'); //Targets first H2 tag and adds text upon laod
    h2TextPhrase.textContent = 'Video Game Cost Calculator'

    const EmptyPText = document.getElementById('gameList') //Targets and replaces text in P tag upon load
    EmptyPText.textContent = 'To calculate the cost of the game, type the price of the game within the prompt.'

    document.getElementById('logo').src = 'img/logo.png'; // Changes img upon load
     });