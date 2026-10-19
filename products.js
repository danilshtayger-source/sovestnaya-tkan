
const PRODUCTS = [];

/*
Пример добавления собственной вещи:

Вместо PRODUCTS = [] можно будет написать:

const PRODUCTS = [
    {
        id: "001",
        nameRu: "Название вещи",
        name: "Item name",
        price: 2500,
        category: "tops",
        status: "available",
        images: [
            "assets/item-front.jpg",
            "assets/item-back.jpg"
        ],
        sizes: ["S", "M", "L"],
        description: "Описание вещи",
        descriptionEn: "Item description",
        condition: "Хорошее",
        conditionEn: "Good",
        fit: "Свободная",
        fitEn: "Relaxed",
        measurements: {
            S: { "Длина": 65, "Ширина": 54 },
            M: { "Длина": 68, "Ширина": 57 },
            L: { "Длина": 71, "Ширина": 60 }
        }
    }
];

Категории:
tops — верх
bottoms — низ
shoes — обувь
accessories — аксессуары

Для фотографий создай папку assets рядом с файлами сайта.
*/
