var countdownInterval;
var audioPlayer; // Adicione a variável audioPlayer

document.addEventListener('DOMContentLoaded', function () {
    var testButton = document.getElementById('testButton');
    testButton.addEventListener('click', function () {
        console.log('Botão de teste pressionado. Iniciando reprodução do áudio...');
        addGifOverlay();
        playAudio();
        showBirthdayMessage(); // Adicione esta linha para exibir a mensagem de aniversário
    });

    startCountdown(); // Inicie a contagem regressiva
});

function startCountdown() {
    var targetDate = new Date('November 21, 2023 00:00:00').getTime();

    countdownInterval = setInterval(function () {
        var currentDate = new Date().getTime();
        var timeDifference = targetDate - currentDate;

        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        var countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Parabéns Mei!';
            console.log('Contagem chegou a zero. Iniciando reprodução do áudio...');
            // A contagem chegou a zero, inicie a reprodução do áudio
            playAudio();
            showBirthdayMessage(); // Adicione esta linha para exibir a mensagem de aniversário
        }
    }, 1000);
}

function addGifOverlay() {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';

    var gifImage = document.createElement('img');
    gifImage.src = 'https://4.bp.blogspot.com/-6fm-0SFWkb4/UjSJs5YSpnI/AAAAAAAAB0Q/PhNGArpcfTM/s1600/o+castelo+animado+4.gif'; // Substitua pelo caminho do seu arquivo GIF
    gifImage.style.transform = 'scale(3.6)'; // Amplia o GIF em 10x
    overlay.appendChild(gifImage);

    document.body.appendChild(overlay);
}

function playAudio() {
    if (!audioPlayer) {
        // Substitua o caminho do arquivo local pelo caminho correto
        audioPlayer = new Audio('SiteSurpresa/Arquivos/KingGnuSPECIALZ.mp3');
        audioPlayer.addEventListener('ended', function () {
            console.log('Áudio terminado de reproduzir. Reiniciando...');
            audioPlayer.currentTime = 0; // Reinicia o áudio
            audioPlayer.play();
        });

        audioPlayer.volume = 0.5; // Defina o volume desejado (de 0 a 1)
        audioPlayer.loop = true; // Repetir em loop
        audioPlayer.autoplay = true; // Auto-play ao iniciar
    } else {
        // Se o player já estiver inicializado, apenas inicie a reprodução
        audioPlayer.play();
    }

    audioPlayer.play().then(function () {
        console.log('Reprodução iniciada com sucesso.');
    }).catch(function (error) {
        console.error('Erro ao iniciar a reprodução:', error);
    });
}

function showBirthdayMessage() {
    var birthdayMessage = document.createElement('div');
    birthdayMessage.className = 'birthday-message';
    birthdayMessage.innerHTML = `
        <div style="font-weight: bold; color: white;">
            <p>Feliz aniversário, Meizinha! 🎉🎂🎈</p>
            <p>Hojé é um dia especial, pois é o seu aniversário! 🎉🎂🎈</p>
            <p>Nós tivemos muitos momentos juntos, mas alguns dos meus favoritos foram:</p>
            <ul>
                <li>As reuniões para jogar e dar tiros em personagens.</li>
                <li>As chamadas aleatórias que fazíamos.</li>
                <li>Os momentos em que ficávamos surtando sobre Jujustu Kaisen, Genshin Impact e Star Rail.</li>
                <li>E muitos outros momentos que compartilhamos juntos.</li>
            </ul>
            <p>Espero que você tenha um dia maravilhoso e que todos os seus desejos se realizem. Você é uma pessoa incrível no qual gosto MUITO e merece tudo de bom que a vida tem a oferecer. Feliz aniversário pandinha! 🎉🎂🎈</p>
        </div>
    `;

    document.body.appendChild(birthdayMessage);
}
