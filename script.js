document.getElementById('pauseButton').addEventListener('click', function() {
    const box = document.querySelector('.box');
    
    // Quando o botão é clicado, pausamos a animação da caixa
    if (box.style.animationPlayState !== 'paused') {
        box.style.animationPlayState = 'paused';
        document.getElementById('description').innerText = 'Movimento interrompido! Isso é como a inércia reage à mudança de movimento.';
    } else {
        box.style.animationPlayState = 'running';
        document.getElementById('description').innerText = 'Clique no botão para simular uma força sendo aplicada sobre o corpo, alterando seu estado de movimento.';
    }
});
