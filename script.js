document.addEventListener('DOMContentLoaded', () => {
    const validPasswords = ["elite", "autismo severo", "autismosevero"];
    const incorrectMessages = [
        "Fallaste, perro",
        "Error 666: ЖОПА УНИЧТОЖЕНА (CULO DESTRUIDO).",
        "Жопометр: 0% точности.",
        "Внимание: твой жопа скоро взорвётся.",
        "КГБ теперь следит за твоим жопой.",
        "JAJAJAJAJAJAJA… ¿EN SERIO PUSISTE ESO?",
        "Gracias por el intento, ahora el gobierno sabe tu ubicación.",
        "Contraseña incorrecta. El FBI ha sido notificado.",
        "Fallaste. Y con cada intento, pierdes una neurona.",
        "Incorrecto. Vuelve cuando aprendas a escribir.",
        "Error. Culómetro: 0% precisión.",
        "JAJAJA, contraseña incorrecta. Culo eliminado.",
        "JAJAJAJA, error fatal. Tu culo será reiniciado.",
        "Пароль провалился, как твои надежды.",
        "Ошибка. Путин не одобряет.",
        "НЕ МОЖЕТ БЫТЬ… ОН ВЕРНУЛСЯ.",
        "Я ТЕБЯ ВИЖУ.",
        "ОСТАВЬ НАДЕЖДУ, ВСЁ ПОТЕРЯНО.",
        "Бип бип боп боп... ХА-ХА-ХА.",
        "Maxim papa eta moy",
        "Маряьна, ничего",
        "*Lucia pone my little pony*",
        "Oriana, que hiciste...",
        "Jade, ¿y pinkie pie?",
        "Lara confundió la realidad con un videojuego y desinstaló tu vida.",
        "Iker! -¿que?, ¡AHHH!"
    ];

    const passwordInput = document.getElementById('password-input');
    const submitBtn = document.getElementById('submit-btn');
    const loginSection = document.getElementById('login-section');
    const gallerySection = document.getElementById('gallery-section');
    const errorMessage = document.getElementById('error-message');
    const galleryContainer = document.getElementById('gallery-container');

    // ESTA LISTA FUE GENERADA AUTOMATICAMENTE
    const mediaFiles = [
        { type: 'image', src: 'archivos/IMG_20250905_092018_HDR.jpg' }
    ];
    // FIN DE LA LISTA GENERADA AUTOMATICAMENTE

    submitBtn.addEventListener('click', () => {
        const enteredPassword = passwordInput.value.toLowerCase();
        if (validPasswords.includes(enteredPassword)) {
            loginSection.classList.add('hidden');
            gallerySection.classList.remove('hidden');
            loadGallery();
        } else {
            const randomIndex = Math.floor(Math.random() * incorrectMessages.length);
            errorMessage.textContent = incorrectMessages[randomIndex];
            errorMessage.classList.remove('hidden');
            passwordInput.value = '';
        }
    });

    function loadGallery() {
        mediaFiles.forEach(file => {
            let element;
            if (file.type === 'image') {
                element = document.createElement('img');
                element.src = file.src;
                element.alt = 'Imagen de la galería';
            } else if (file.type === 'video') {
                element = document.createElement('video');
                element.src = file.src;
                element.controls = true;
                element.autoplay = false;
            }

            if (element) {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('media-item');
                itemDiv.appendChild(element);
                galleryContainer.appendChild(itemDiv);
            }
        });
    }
});