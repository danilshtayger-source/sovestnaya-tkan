
(() => {
    "use strict";

    // Telegram продавца — не поддержка.
    const TELEGRAM_USERNAME = "necrolic669";

    // Поддержка магазина.
    const SUPPORT_TELEGRAM_URL = "https://t.me/willyskotina";
    const SUPPORT_VK_URL = "https://vk.com/emoreal228";

    const PRODUCTS_DATA = Array.isArray(PRODUCTS) ? PRODUCTS : [];

    const currency = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0
    });

    const translations = {
        ru: {
            navCatalog: "Каталог",
            navAbout: "О нас",
            navPurchase: "Покупка",
            navSupport: "Поддержка",

            heroEyebrow: "НЕЗАВИСИМЫЙ МАГАЗИН ОДЕЖДЫ",
            heroTitle: "СВОЙ<br><em>СТИЛЬ.</em>",
            heroDescription: "Вещи, которые хочется носить. Без лишних слов.",
            explore: "СМОТРЕТЬ КАТАЛОГ",

            catalogEyebrow: "01 / SHOP",
            catalogTitle: "ВЫБРАННЫЕ<br><em>ВЕЩИ.</em>",
            catalogNote: "Каталог обновляется.<br>Следи за поступлениями.",

            filterAll: "ВСЁ",
            filterTops: "ВЕРХ",
            filterBottoms: "НИЗ",
            filterShoes: "ОБУВЬ",
            filterAccessories: "АКСЕССУАРЫ",
            searchPlaceholder: "Поиск...",

            emptyTitle: "ПОКА НИЧЕГО НЕТ.",
            emptyDescription: "Новые вещи появятся здесь.",

            aboutEyebrow: "02 / ABOUT",
            aboutTitle: "ОДЕЖДА.<br><em>ИНДИВИДУАЛЬНОСТЬ.</em>",
            aboutText: "Магазин для тех, кто сам выбирает, как выглядеть. Свой взгляд. Свой гардероб. Свои правила.",
            aboutLink: "СМОТРЕТЬ ВЕЩИ",

            purchaseEyebrow: "03 / ORDER",
            purchaseTitle: "КАК<br><em>КУПИТЬ.</em>",
            purchaseNote: "Просто выбери вещь<br>и свяжись с продавцом.",

            step1Title: "Выбери вещь",
            step1Text: "Открой товар и посмотри фотографии, размеры и описание.",
            step2Title: "Проверь замеры",
            step2Text: "Сверь указанные размеры перед покупкой.",
            step3Title: "Напиши продавцу",
            step3Text: "Уточни наличие и договорись о покупке в Telegram.",

            supportEyebrow: "04 / CONTACT",
            supportTitle: "НУЖНА<br><em>ПОМОЩЬ?</em>",
            supportNote: "Вопросы по сайту или заказу?<br>Напиши нам.",
            supportTelegram: "Поддержка в Telegram",
            supportTelegramText: "Свяжись с нами по вопросам заказа или сайта.",
            supportVk: "Поддержка во ВКонтакте",
            supportVkText: "Ещё один способ связаться с нами.",
            supportTelegramLink: "НАПИСАТЬ В TELEGRAM ↗",
            supportVkLink: "ОТКРЫТЬ ВКОНТАКТЕ ↗",

            backTop: "НАВЕРХ ↑",

            detailCondition: "СОСТОЯНИЕ",
            detailFit: "ПОСАДКА",
            chooseSize: "ВЫБЕРИ РАЗМЕР",
            sizeGuide: "ЗАМЕРЫ НИЖЕ",
            measurements: "ЗАМЕРЫ В СМ",

            buyTelegram: "КУПИТЬ В TELEGRAM",
            buyFootnote: "Наличие уточняется у продавца.",

            available: "В НАЛИЧИИ",
            sold: "ПРОДАНО",
            noSize: "Сначала выбери размер.",
            noTelegram: "Не удалось открыть Telegram продавца.",
            soldProduct: "Эта вещь уже продана.",
            sizeSelected: "Выбран размер",
            noMeasurements: "Замеры не указаны.",
            noDescription: "Описание пока не добавлено.",
            emptySearch: "По этому запросу ничего не найдено.",

            categoryNames: {
                tops: "ВЕРХ",
                bottoms: "НИЗ",
                shoes: "ОБУВЬ",
                accessories: "АКСЕССУАРЫ"
            },

            measurementNames: {
                Длина: "Длина",
                Ширина: "Ширина",
                Рукав: "Рукав",
                Талия: "Талия",
                Бедро: "Бедро"
            }
        },

        en: {
            navCatalog: "Catalogue",
            navAbout: "About",
            navPurchase: "Ordering",
            navSupport: "Support",

            heroEyebrow: "INDEPENDENT CLOTHING STORE",
            heroTitle: "YOUR<br><em>STYLE.</em>",
            heroDescription: "Pieces worth wearing. Nothing more to say.",
            explore: "EXPLORE SHOP",

            catalogEyebrow: "01 / SHOP",
            catalogTitle: "SELECTED<br><em>PIECES.</em>",
            catalogNote: "The catalogue is updated.<br>Stay tuned.",

            filterAll: "ALL",
            filterTops: "TOPS",
            filterBottoms: "BOTTOMS",
            filterShoes: "SHOES",
            filterAccessories: "ACCESSORIES",
            searchPlaceholder: "Search...",

            emptyTitle: "NOTHING HERE YET.",
            emptyDescription: "New items will appear here.",

            aboutEyebrow: "02 / ABOUT",
            aboutTitle: "CLOTHING.<br><em>INDIVIDUALITY.</em>",
            aboutText: "A store for people who choose how they want to look. Your vision. Your wardrobe. Your rules.",
            aboutLink: "EXPLORE ITEMS",

            purchaseEyebrow: "03 / ORDER",
            purchaseTitle: "HOW TO<br><em>ORDER.</em>",
            purchaseNote: "Choose an item<br>and contact the seller.",

            step1Title: "Choose an item",
            step1Text: "Open the item and check its photos, sizes and description.",
            step2Title: "Check measurements",
            step2Text: "Compare the listed measurements before ordering.",
            step3Title: "Contact the seller",
            step3Text: "Confirm availability and arrange your purchase on Telegram.",

            supportEyebrow: "04 / CONTACT",
            supportTitle: "NEED<br><em>HELP?</em>",
            supportNote: "Questions about the site or an order?<br>Contact us.",
            supportTelegram: "Telegram Support",
            supportTelegramText: "Contact us about your order or the website.",
            supportVk: "VK Support",
            supportVkText: "Another way to contact our support team.",
            supportTelegramLink: "MESSAGE ON TELEGRAM ↗",
            supportVkLink: "OPEN VK ↗",

            backTop: "BACK TO TOP ↑",

            detailCondition: "CONDITION",
            detailFit: "FIT",
            chooseSize: "SELECT A SIZE",
            sizeGuide: "MEASUREMENTS BELOW",
            measurements: "MEASUREMENTS IN CM",

            buyTelegram: "BUY VIA TELEGRAM",
            buyFootnote: "Confirm availability with the seller.",

            available: "AVAILABLE",
            sold: "SOLD",
            noSize: "Please select a size first.",
            noTelegram: "Could not open the seller's Telegram.",
            soldProduct: "This item has been sold.",
            sizeSelected: "Selected size",
            noMeasurements: "No measurements listed.",
            noDescription: "No description yet.",
            emptySearch: "No items match your search.",

            categoryNames: {
                tops: "TOPS",
                bottoms: "BOTTOMS",
                shoes: "SHOES",
                accessories: "ACCESSORIES"
            },

            measurementNames: {
                Длина: "Length",
                Ширина: "Width",
                Рукав: "Sleeve",
                Талия: "Waist",
                Бедро: "Thigh"
            }
        }
    };

    let language = "ru";
    let category = "all";
    let activeProduct = null;
    let selectedSize = "";

    const $ = selector => document.querySelector(selector);

    const productGrid = $("#productGrid");
    const emptyState = $("#emptyState");
    const modal = $("#productModal");

    function t(key) {
        return translations[language][key] ?? key;
    }

    function esc(value) {
        return String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
    }

    function nameOf(product) {
        return language === "ru"
            ? (product.nameRu || product.name || "")
            : (product.name || product.nameRu || "");
    }

    function descriptionOf(product) {
        return language === "ru"
            ? (product.description || "")
            : (product.descriptionEn || product.description || "");
    }

    function formatPrice(price) {
        return currency.format(Number(price) || 0);
    }

    function applyTranslations() {
        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const value = t(element.dataset.i18n);

            if (value.includes("<br>") || value.includes("<em>")) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            element.placeholder = t(element.dataset.i18nPlaceholder);
        });

        $("#languageToggle").textContent = language === "ru" ? "EN" : "RU";

        renderProducts();

        if (activeProduct) {
            renderModal(activeProduct);
        }
    }

    function renderProducts() {
        const query = $("#searchInput").value.trim().toLowerCase();

        const filtered = PRODUCTS_DATA.filter(product => {
            const matchesCategory =
                category === "all" || product.category === category;

            const searchable = [
                product.nameRu,
                product.name,
                product.description,
                product.descriptionEn,
                product.category,
                product.id
            ].join(" ").toLowerCase();

            return matchesCategory && searchable.includes(query);
        });

        $("#productCount").textContent = PRODUCTS_DATA.length;

        productGrid.innerHTML = filtered.map((product, index) => {
            const image = product.images?.[0] || "";
            const isSold = product.status === "sold";

            return `
                <article class="product-card"
                    data-product-id="${esc(product.id)}"
                    tabindex="0">
                    <div class="product-image-wrap">
                        ${image
                            ? `<img class="product-image" src="${esc(image)}" alt="${esc(nameOf(product))}" loading="lazy">`
                            : `<div class="product-image-placeholder"></div>`
                        }
                        <span class="product-badge ${isSold ? "sold" : ""}">
                            ${isSold ? t("sold") : t("available")}
                        </span>
                        <span class="product-index">${String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div class="product-info">
                        <div class="product-meta">
                            <span>${esc(product.id || "ST")}</span>
                            <span>${esc(t("categoryNames")[product.category] || "")}</span>
                        </div>
                        <div class="product-title-row">
                            <h3 class="product-title">${esc(nameOf(product))}</h3>
                            <span class="product-price">${formatPrice(product.price)}</span>
                        </div>
                    </div>
                </article>
            `;
        }).join("");

        emptyState.classList.toggle("hidden", filtered.length > 0);

        const emptyTitle = emptyState.querySelector("[data-i18n='emptyTitle']");
        const emptyDescription = emptyState.querySelector("[data-i18n='emptyDescription']");

        if (emptyTitle && emptyDescription) {
            if (PRODUCTS_DATA.length === 0) {
                emptyTitle.textContent = t("emptyTitle");
                emptyDescription.textContent = t("emptyDescription");
            } else {
                emptyTitle.textContent = t("emptySearch");
                emptyDescription.textContent = "";
            }
        }
    }

    function openModal(product) {
        activeProduct = product;
        selectedSize = "";
        renderModal(product);

        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function renderModal(product) {
        $("#modalTitle").textContent = nameOf(product);
        $("#modalPrice").textContent = formatPrice(product.price);
        $("#modalDescription").textContent = descriptionOf(product) || t("noDescription");

        $("#modalCondition").textContent = language === "ru"
            ? (product.condition || "—")
            : (product.conditionEn || product.condition || "—");

        $("#modalFit").textContent = language === "ru"
            ? (product.fit || "—")
            : (product.fitEn || product.fit || "—");

        $("#modalCategory").textContent =
            t("categoryNames")[product.category] || "PRODUCT";

        const images = Array.isArray(product.images) ? product.images : [];
        const mainImage = $("#modalMainImage");

        mainImage.style.backgroundImage = images[0]
            ? `url("${images[0].replace(/["\\]/g, "")}")`
            : "none";

        $("#modalThumbnails").innerHTML = images.map((image, index) => `
            <button
                class="modal-thumb ${index === 0 ? "active" : ""}"
                data-image="${esc(image)}"
                aria-label="Photo ${index + 1}"
                style="background-image:url('${esc(image)}')">
            </button>
        `).join("");

        $("#modalThumbnails").querySelectorAll(".modal-thumb").forEach(button => {
            button.addEventListener("click", () => {
                mainImage.style.backgroundImage =
                    `url("${button.dataset.image.replace(/["\\]/g, "")}")`;

                $("#modalThumbnails").querySelectorAll(".modal-thumb")
                    .forEach(item => item.classList.toggle("active", item === button));
            });
        });

        const sizes = Array.isArray(product.sizes) ? product.sizes : [];

        $("#sizeOptions").innerHTML = sizes.map(size => `
            <button class="size-option" data-size="${esc(size)}">
                ${esc(size)}
            </button>
        `).join("");

        $("#sizeOptions").querySelectorAll(".size-option").forEach(button => {
            button.addEventListener("click", () => {
                selectedSize = button.dataset.size;

                $("#sizeOptions").querySelectorAll(".size-option")
                    .forEach(item => item.classList.toggle("active", item === button));

                $("#sizeHelp").textContent = `${t("sizeSelected")}: ${selectedSize}`;

                renderMeasurements(product, selectedSize);
            });
        });

        if (sizes.length > 0) {
            $("#sizeHelp").textContent = "";
            renderMeasurements(product, sizes[0]);
        } else {
            $("#sizeHelp").textContent = "";
            renderMeasurements(product, "");
        }

        $("#buyButton").disabled = product.status === "sold";
    }

    function renderMeasurements(product, size) {
        const measurements = product.measurements?.[size] || {};

        const rows = Object.entries(measurements).map(([label, value]) => `
            <div class="measurement-row">
                <span>${esc(t("measurementNames")[label] || label)}</span>
                <strong>${esc(value)} cm</strong>
            </div>
        `).join("");

        $("#measurementRows").innerHTML = rows ||
            `<p class="size-help">${t("noMeasurements")}</p>`;
    }

    function closeModal() {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
        activeProduct = null;
        selectedSize = "";
    }

    function showToast(message) {
        const toast = $("#toast");
        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(showToast.timer);
        showToast.timer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    function buyProduct() {
        if (!activeProduct) return;

        if (activeProduct.status === "sold") {
            showToast(t("soldProduct"));
            return;
        }

        if (!selectedSize) {
            showToast(t("noSize"));
            return;
        }

        const username = TELEGRAM_USERNAME.trim().replace(/^@/, "");

        const message = [
            "Здравствуйте! Хочу купить вещь из «Совестная ткань».",
            `Название: ${nameOf(activeProduct)}`,
            `Артикул: ${activeProduct.id}`,
            `Размер: ${selectedSize}`,
            `Цена: ${formatPrice(activeProduct.price)}`
        ].join("\n");

        // Открываем чат продавца. Сообщение копируется вручную,
        // поскольку Telegram не гарантирует передачу текста через t.me/username.
        const url = `https://t.me/${encodeURIComponent(username)}`;
        window.open(url, "_blank", "noopener,noreferrer");

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(message)
                .then(() => showToast("Чат продавца открыт. Текст заказа скопирован — вставь его в чат."))
                .catch(() => showToast("Чат продавца открыт. Укажи товар и размер вручную."));
        } else {
            showToast("Чат продавца открыт. Укажи товар и размер вручную.");
        }
    }

    $("#filters").addEventListener("click", event => {
        const button = event.target.closest("[data-category]");
        if (!button) return;

        category = button.dataset.category;

        $("#filters").querySelectorAll(".filter-btn").forEach(item => {
            item.classList.toggle("active", item === button);
        });

        renderProducts();
    });

    $("#searchInput").addEventListener("input", renderProducts);

    $("#languageToggle").addEventListener("click", () => {
        language = language === "ru" ? "en" : "ru";
        applyTranslations();
    });

    productGrid.addEventListener("click", event => {
        const card = event.target.closest("[data-product-id]");
        if (!card) return;

        const product = PRODUCTS_DATA.find(item =>
            String(item.id) === card.dataset.productId
        );

        if (product) openModal(product);
    });

    productGrid.addEventListener("keydown", event => {
        if (event.key !== "Enter" && event.key !== " ") return;

        const card = event.target.closest("[data-product-id]");
        if (!card) return;

        event.preventDefault();

        const product = PRODUCTS_DATA.find(item =>
            String(item.id) === card.dataset.productId
        );

        if (product) openModal(product);
    });

    $("#modalClose").addEventListener("click", closeModal);

    modal.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeModal();
    });

    $("#buyButton").addEventListener("click", buyProduct);

    $("#menuToggle").addEventListener("click", () => {
        $("#desktopNav").classList.toggle("open");
    });

    $("#desktopNav").querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            $("#desktopNav").classList.remove("open");
        });
    });

    $("#backTop").addEventListener("click", event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Привязываем адреса поддержки из единого источника.
    const supportTelegramLink = document.querySelector(
        'a[data-i18n="supportTelegramLink"]'
    );
    const supportVkLink = document.querySelector(
        'a[data-i18n="supportVkLink"]'
    );

    if (supportTelegramLink) {
        supportTelegramLink.href = SUPPORT_TELEGRAM_URL;
    }

    if (supportVkLink) {
        supportVkLink.href = SUPPORT_VK_URL;
    }

    applyTranslations();
})();
