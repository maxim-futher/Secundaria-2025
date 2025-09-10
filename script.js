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
        { type: 'image', src: 'archivos/IMG_20250905_092018_HDR.jpg' },
        { type: 'image', src: 'archivos/IMG_20250905_092021_HDR.jpg' },
        { type: 'image', src: 'archivos/IMG_20250905_092027_HDR.jpg' },
        { type: 'image', src: 'archivos/IMG_20250905_092030_HDR.jpg' },
        { type: 'image', src: 'archivos/IMG_20250905_092225.jpg' },
        { type: 'image', src: 'archivos/P9050004.JPG' },
        { type: 'image', src: 'archivos/P9050005.JPG' },
        { type: 'image', src: 'archivos/P9050006.JPG' },
        { type: 'image', src: 'archivos/P9050007.JPG' },
        { type: 'image', src: 'archivos/P9050008.JPG' },
        { type: 'image', src: 'archivos/P9050009.JPG' },
        { type: 'image', src: 'archivos/P9050010.JPG' },
        { type: 'image', src: 'archivos/P9050011.JPG' },
        { type: 'image', src: 'archivos/P9050012.JPG' },
        { type: 'image', src: 'archivos/P9050013.JPG' },
        { type: 'image', src: 'archivos/P9050014.JPG' },
        { type: 'image', src: 'archivos/P9050015.JPG' },
        { type: 'video', src: 'archivos/P9050016.mp4' },
        { type: 'video', src: 'archivos/P9050017.MOV' },
        { type: 'image', src: 'archivos/P9050018.JPG' },
        { type: 'image', src: 'archivos/P9050021.JPG' },
        { type: 'image', src: 'archivos/P9050024.JPG' },
        { type: 'image', src: 'archivos/P9050025.JPG' },
        { type: 'video', src: 'archivos/P9050026.MOV' },
        { type: 'video', src: 'archivos/P9050028.MOV' },
        { type: 'image', src: 'archivos/P9050029.JPG' },
        { type: 'video', src: 'archivos/P9050030.MOV' },
        { type: 'video', src: 'archivos/P9050033.MOV' },
        { type: 'video', src: 'archivos/VID_20250905_143001.mp4' },
        { type: 'video', src: 'archivos/VID_20250905_145452.mp4' }
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
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('media-item');

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
                // Guarda el estado de la rotación en el elemento
                element.dataset.rotation = 0;

                // Botón de rotación
                const rotateBtn = document.createElement('button');
                rotateBtn.textContent = '⟳';
                rotateBtn.classList.add('rotate-btn');
                rotateBtn.addEventListener('click', () => {
                    let currentRotation = parseInt(element.dataset.rotation);
                    let newRotation = currentRotation + 90;
                    element.style.transform = `rotate(${newRotation}deg)`;
                    element.dataset.rotation = newRotation;
                });
                
                itemDiv.appendChild(element);
                itemDiv.appendChild(rotateBtn);
            }
            galleryContainer.appendChild(itemDiv);
        });
    }
});
