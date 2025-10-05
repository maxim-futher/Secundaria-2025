
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
    const mediaByDate = {
    "2025-07-24": [
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-07-24/P7240001.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part9/archivos/P9120200.MOV"
        }
    ]
};
    const sortedDates = [
    "2025-07-24",
    "2025-09-05",
    "2025-09-08",
    "2025-09-09",
    "2025-09-10",
    "2025-09-12",
    "2025-09-15",
    "2025-09-16",
    "archivos"
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
        sortedDates.forEach(date => {
            const dateHeader = document.createElement('h2');
            dateHeader.textContent = date;
            galleryContainer.appendChild(dateHeader);

            const dateContainer = document.createElement('div');
            dateContainer.classList.add('date-container');

            mediaByDate[date].forEach(file => {
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
                    element.dataset.rotation = 0;
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
                dateContainer.appendChild(itemDiv);
            });

            galleryContainer.appendChild(dateContainer);
        });
    }
});
