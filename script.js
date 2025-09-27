
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
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-07-24/P7240002.JPG"
        }
    ],
    "2025-09-05": [
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050004.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050005.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050006.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050007.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050008.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050009.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050010.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050011.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050012.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050013.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050014.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050015.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050016.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050017.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050018.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050019.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050020.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050021.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050022.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050023.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050024.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050025.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050026.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050027.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050028.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050029.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050030.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050031.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050032.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-05/P9050033.MOV"
        }
    ],
    "2025-09-08": [
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-08/P9080055.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-08/P9080056.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-08/P9080057.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-08/P9080058.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-08/P9080059.MOV"
        }
    ],
    "2025-09-09": [
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090069(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090069.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090070(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090070.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090072(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090072.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090073(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090073.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090074(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090074.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090075(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090075.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090076(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090076.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090077(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090077.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090078(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090078.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090079.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090080(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090080.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090081(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090081.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090082(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090082.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090083.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-09/P9090084.MOV"
        }
    ],
    "2025-09-10": [
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100106.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100107.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100108.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100109.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100110.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100111.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100113(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100113.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100114(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100114.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100115(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100115.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100116(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100116.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100117.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100118(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100118.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-10/P9100118.MOV"
        }
    ],
    "2025-09-12": [
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-12/P9120130.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-12/P9120140.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-12/P9120141.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-12/P9120142.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-12/P9120143.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-12/P9120144.MOV"
        }
    ],
    "2025-09-15": [
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150201.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150202.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150203.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150204.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150205.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150206.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150207.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150208.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150209(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-15/P9150209.JPG"
        }
    ],
    "2025-09-16": [
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160220(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160220.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160220.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160221(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160221.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160221.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160222.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160223.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160224.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160225(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160225.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160225.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160226(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160226.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160226.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160227(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160227.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160227.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160228.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160229.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160230.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160231.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160232.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160233.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160234(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160234.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160234.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160235(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160235.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160235.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160236.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160237.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160238.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160239.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160240.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160241(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160241.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160241.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160242(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160242.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160242.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160243(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160243.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160243.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160244(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160244.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160244.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160245(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160245.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160245.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160246(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160246.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160246.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160247(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160247.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160247.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160248(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160248.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160248.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160249(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160249.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160249.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160250(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160250.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160250.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160251(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160251.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160251.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160252(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160252.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160252.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160253(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160253.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160253.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160254(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160254.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160254.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160255(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160255.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160255.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160256(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160256.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160256.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160257(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160257.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160257.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160258(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160258.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160258.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160259(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160259.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160259.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160260(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160260.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160260.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160261(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160261.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160261.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160262(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160262.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160262.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160263(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160263.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160263.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160264(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160264.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160264.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160265(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160265.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160265.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160266(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160266.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160266.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160267(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160267.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160267.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160268(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160268.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160268.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160269(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160269.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160269.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160270(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160270.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160270.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160271(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160271.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160271.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part1/archivos/2025-09-16/P9160272(1).JPG"
        }
    ],
    "archivos": [
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150210.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150211.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150212.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150213.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150214.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150215.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part10/archivos/P9150216.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part11/archivos/P9150217.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part11/archivos/P9150218.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part11/archivos/P9150219.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160272.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160272.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160273(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160273.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160273.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160274(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160274.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160274.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160275(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160275.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160275.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160276(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160276.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160276.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160277(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160277.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160277.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160278(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160278.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160278.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160279(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160279.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160279.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160280(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160280.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160280.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160281(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160281.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160281.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160282(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160282.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160282.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160283(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160283.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160283.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160284(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160284.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160284.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160285(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160285.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160285.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160286(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160286.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160286.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160287(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160287.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160287.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160288(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160288.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160288.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160289(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160289.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160289.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160290(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160290.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160290.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160291(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160291.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160291.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160292(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160292.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160292.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160293(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160293.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160293.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160294(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160294.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160294.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160295(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160295.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160295.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160296(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160296.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160296.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160297(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160297.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160297.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160298(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160298.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160298.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160299(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160299.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160299.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160300(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160300.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160300.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160301(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160301.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160301.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160302(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160302.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160302.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160303(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160303.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160303.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160304(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160304.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160304.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160305(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160305.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160305.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160306(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160306.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160306.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160307(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160307.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160307.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160308(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160308.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160308.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160309(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160309.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160309.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160310(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160310.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160310.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160311(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160311.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160311.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160312(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160312.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160312.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160313.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160314(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160314.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160314.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160315(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160315.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160315.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160316(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160316.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160316.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160317(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160317.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160317.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160318(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160318.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160318.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160319(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160319.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160319.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160320(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160320.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160320.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160321(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160321.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160321.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160322(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160322.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160322.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160323.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160324(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160324.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160324.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160325(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160325.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160325.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160326(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160326.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160326.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160327(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160327.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160327.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160328(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160328.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160328.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160329(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160329.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160329.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160330(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160330.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160330.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160331(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160331.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160331.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160332(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160332.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160332.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160333(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160333.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160333.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160334(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160334.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160334.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160335(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160335.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160335.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160336(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160336.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160336.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160337(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160337.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160337.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160338(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160338.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160338.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160339(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160339.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160339.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160340(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160340.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160340.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160341(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160341.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160341.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160342(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160342.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160342.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160343(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160343.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160343.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160344(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160344.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160344.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160345.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160346(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160346.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160346.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160347(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160347.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160347.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160348.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160349.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160350.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160351.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160352(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160352.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160353.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160354.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160355.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160356(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160356.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160357(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160357.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160358.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160359.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160360.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160361.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160362(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160362.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160363.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160364.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160365.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160366(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160366.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160367.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160368.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160369.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160370.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160371.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160372.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160373.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160374(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160374.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160375.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160376(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160376.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160377(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160377.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160378(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160378.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160379.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160380.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160381.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160382.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160383(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160383.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160384.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160385(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160385.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160386(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160386.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160387.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part12/archivos/P9160388.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160389(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part12/archivos/P9160389.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part13/archivos/P9160390.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160391(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160391.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160392(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160392.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part13/archivos/P9160393.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part13/archivos/P9160394.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160395(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160395.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160396(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160396.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160397(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160397.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160398(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160398.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160399(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160399.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160400(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part13/archivos/P9160400.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part13/archivos/P9160401.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part13/archivos/P9160402.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part2/archivos/P9080060.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part2/archivos/P9080061(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part2/archivos/P9080061.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part2/archivos/P9080061.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part2/archivos/P9080062(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part2/archivos/P9080062.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part2/archivos/P9080062.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part2/archivos/P9080063.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part2/archivos/P9080064.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part2/archivos/P9080065.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part2/archivos/P9080066(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part2/archivos/P9080066.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part3/archivos/P9090085.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part3/archivos/P9090086.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part3/archivos/P9090087.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part3/archivos/P9090088.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090089.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090090.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090091.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090092.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090093.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090094.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090095.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090096.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090097(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090097.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090098(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090098.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090099(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090099.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090100(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090100.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090101(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090101.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part4/archivos/P9090102.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090103(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090103.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090105(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part4/archivos/P9090105.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part5/archivos/P9100119.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100120.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100121.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100122.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100123.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100124.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100125.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100126.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part6/archivos/P9100127.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part6/archivos/P9100128(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part6/archivos/P9100128.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part6/archivos/P9100129(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part6/archivos/P9100129.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part7/archivos/P9120145.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120146(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120146.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120147(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120147.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120148(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120148.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120149(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120149.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120150(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120150.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120151(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120151.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120152(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120152.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120153(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120153.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120154(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120154.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120155(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120155.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120156(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120156.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120157(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120157.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120158(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120158.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120159(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120159.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120160(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120160.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120161(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120161.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120162(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120162.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120163(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120163.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120164(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120164.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120165(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120165.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120166(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120166.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120167(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120167.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120168(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120168.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120169(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120169.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120170(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120170.JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120171(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120171.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part7/archivos/P9120172.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part7/archivos/P9120173.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part7/archivos/P9120174.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120175(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part7/archivos/P9120175.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part7/archivos/P9120175.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120176.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120177.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120178.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120179.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120180.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120181.MOV"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part8/archivos/P9120189(1).JPG"
        },
        {
            "type": "image",
            "src": "organized/organized_parts/organized_part8/archivos/P9120189.JPG"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120189.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120190.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part8/archivos/P9120196.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part9/archivos/P9120197.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part9/archivos/P9120198.MOV"
        },
        {
            "type": "video",
            "src": "organized/organized_parts/organized_part9/archivos/P9120199.MOV"
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
