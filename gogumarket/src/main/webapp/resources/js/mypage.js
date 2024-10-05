
//구매상품
document.addEventListener("DOMContentLoaded", function() {
    // 구매중 상품 및 구매완료 상품 데이터
    const purchasingProducts = [
        { name: "Gucci leather bag", location: "서초구 서초동", time: "1시간 전", price: "500,000원" },
        { name: "Nike shoes", location: "강남구 역삼동", time: "3시간 전", price: "150,000원" },
        { name: "Adidas T-shirt", location: "송파구 가락동", time: "5시간 전", price: "50,000원" },
        { name: "Gucci leather bag", location: "서초구 서초동", time: "1시간 전", price: "500,000원" },
        { name: "Nike shoes", location: "강남구 역삼동", time: "3시간 전", price: "150,000원" },
        { name: "Adidas T-shirt", location: "송파구 가락동", time: "5시간 전", price: "50,000원" },
        { name: "Gucci leather bag", location: "서초구 서초동", time: "1시간 전", price: "500,000원" },
        { name: "Nike shoes", location: "강남구 역삼동", time: "3시간 전", price: "150,000원" },
        { name: "Adidas T-shirt", location: "송파구 가락동", time: "5시간 전", price: "50,000원" },
    ];

    const purchasedProducts = [
        { name: "Louis Vuitton belt", location: "마포구 망원동", time: "1일 전", price: "300,000원" },
        { name: "Prada sunglasses", location: "종로구 청운동", time: "2일 전", price: "250,000원" },
        { name: "Apple AirPods", location: "중구 신당동", time: "3일 전", price: "200,000원" },
        { name: "Louis Vuitton belt", location: "마포구 망원동", time: "1일 전", price: "300,000원" },
        { name: "Prada sunglasses", location: "종로구 청운동", time: "2일 전", price: "250,000원" },
        { name: "Apple AirPods", location: "중구 신당동", time: "3일 전", price: "200,000원" },
        { name: "Louis Vuitton belt", location: "마포구 망원동", time: "1일 전", price: "300,000원" },
        { name: "Prada sunglasses", location: "종로구 청운동", time: "2일 전", price: "250,000원" },
        { name: "Apple AirPods", location: "중구 신당동", time: "3일 전", price: "200,000원" },
    ];

    let currentPurchaseTab = "all";
    let currentPage = 1;
    const itemsPerPage = 10;

    function displayPurchaseProducts(page) {
        let productsToDisplay = [];

        if (currentPurchaseTab === "all") {
            productsToDisplay = [...purchasingProducts, ...purchasedProducts];
        } else if (currentPurchaseTab === "purchasing") {
            productsToDisplay = purchasingProducts;
        } else if (currentPurchaseTab === "purchased") {
            productsToDisplay = purchasedProducts;
        }

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToShow = productsToDisplay.slice(startIndex, endIndex);

        const productList = document.getElementById("product-list-purchase-history");
        productList.innerHTML = "";

        productsToShow.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            productItem.innerHTML = `
                ${currentPurchaseTab === 'purchased' || (currentPurchaseTab === 'all' && purchasedProducts.includes(product)) ? '<div class="purchased-overlay">구매 완료</div>' : ''}
                <img src="https://via.placeholder.com/250" alt="상품 이미지" class="product-img">
                <div class="product-info">${product.name}<br>${product.location} | ${product.time}</div>
                <div class="product-price">${product.price}</div>
            `;

            productList.appendChild(productItem);
        });

        setupPurchasePagination(productsToDisplay.length);
    }

    function setupPurchasePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById("pagination-purchase-history");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("span");
            pageItem.textContent = i;
            pageItem.className = (i === currentPage) ? "active" : "";
            pageItem.addEventListener("click", function() {
                currentPage = i;
                displayPurchaseProducts(currentPage);
            });

            pagination.appendChild(pageItem);
        }
    }

    function setActivePurchaseTab(tabId) {
        // Remove "active" class from all tabs
        document.querySelectorAll('.tab-menu-purchase div').forEach(tab => {
            tab.classList.remove("active");
        });

        // Set "active" class to the selected tab
        document.getElementById(tabId).classList.add("active");

        // Update current tab and reset to the first page
        currentPurchaseTab = tabId === 'tab-all-purchase' ? 'all' : (tabId === 'tab-purchasing' ? 'purchasing' : 'purchased');
        currentPage = 1;

        // Display products for the selected tab
        displayPurchaseProducts(currentPage);
    }

    // Event listeners for purchase tabs
    document.getElementById('tab-all-purchase').addEventListener('click', () => setActivePurchaseTab('tab-all-purchase'));
    document.getElementById('tab-purchasing').addEventListener('click', () => setActivePurchaseTab('tab-purchasing'));
    document.getElementById('tab-purchased').addEventListener('click', () => setActivePurchaseTab('tab-purchased'));

    // Default section to display on load
    setActivePurchaseTab("tab-all-purchase");
});



// 판매상품
document.addEventListener("DOMContentLoaded", function() {
    const sections = {
        "btn-purchase-history": "section-purchase-history",
        "btn-selling": "section-selling",
        "btn-wishlist": "section-wishlist",
        "btn-offers": "section-offers",
        "btn-transaction-reviews": "section-transaction-reviews"
    };

    // 판매중 상품 및 판매완료 상품 데이터
    const sellingProducts = [
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: true },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: true },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: true },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: true },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2분 전", price: "165,000원", reserved: false },
    ];

    const soldProducts = [
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "1일 전", price: "150,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2일 전", price: "145,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "3일 전", price: "140,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "4일 전", price: "135,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "5일 전", price: "130,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "1일 전", price: "150,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "2일 전", price: "145,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "3일 전", price: "140,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "4일 전", price: "135,000원", reserved: false },
        { name: "Margiela wool sweater", location: "관악구 봉천동", time: "5일 전", price: "130,000원", reserved: false },
    ];

    let currentTab = "all";
    let currentPage = 1;
    const itemsPerPage = 10;

    function displayProducts(page) {
        let productsToDisplay = [];

        if (currentTab === "all") {
            productsToDisplay = [...sellingProducts, ...soldProducts];
        } else if (currentTab === "selling") {
            productsToDisplay = sellingProducts;
        } else if (currentTab === "sold") {
            productsToDisplay = soldProducts;
        }

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToShow = productsToDisplay.slice(startIndex, endIndex);

        const productList = document.getElementById("product-list-selling");
        productList.innerHTML = "";

        productsToShow.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            // 수정된 부분: currentTab === 'all'에서도 판매 완료 상태인 상품에 대한 오버레이 처리
            productItem.innerHTML = `
                ${product.reserved ? '<div class="reserved-overlay">예약 완료</div>' : ''}
                ${(currentTab === 'sold' || (currentTab === 'all' && soldProducts.includes(product))) ? '<div class="sold-overlay">판매 완료</div>' : ''}
                <img src="https://via.placeholder.com/250" alt="상품 이미지" class="product-img">
                <div class="product-info">${product.name}<br>${product.location} | ${product.time}</div>
                <div class="product-price">${product.price}</div>
            `;

            productList.appendChild(productItem);
        });

        setupPagination(productsToDisplay.length);
    }

    function setupPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById("pagination-selling");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("span");
            pageItem.textContent = i;
            pageItem.className = (i === currentPage) ? "active" : "";
            pageItem.addEventListener("click", function() {
                currentPage = i;
                displayProducts(currentPage);
            });

            pagination.appendChild(pageItem);
        }
    }

    function setActiveTab(tabId) {
        // Remove "active" class from all tabs
        document.querySelectorAll('.tab-menu div').forEach(tab => {
            tab.classList.remove("active");
        });

        // Set "active" class to the selected tab
        document.getElementById(tabId).classList.add("active");

        // Update current tab and reset to the first page
        currentTab = tabId === 'tab-all' ? 'all' : (tabId === 'tab-selling' ? 'selling' : 'sold');
        currentPage = 1;

        // Display products for the selected tab
        displayProducts(currentPage);
    }

    // Event listeners for tabs
    document.getElementById('tab-all').addEventListener('click', () => setActiveTab('tab-all'));
    document.getElementById('tab-selling').addEventListener('click', () => setActiveTab('tab-selling'));
    document.getElementById('tab-sold').addEventListener('click', () => setActiveTab('tab-sold'));

    // Set active profile tab and display the respective section
    function setActiveProfileTab(id) {
        // Remove "active" class from all buttons and hide all sections
        Object.keys(sections).forEach(btnId => {
            document.getElementById(btnId).classList.remove("active");
            document.getElementById(sections[btnId]).style.display = "none";
        });

        // Add "active" class to the clicked button and display respective section
        document.getElementById(id).classList.add("active");
        document.getElementById(sections[id]).style.display = "block";

        // If "판매 상품" tab is clicked, display products and setup pagination
        if (id === 'btn-selling') {
            displayProducts(currentPage);
        }
    }

    // Event listeners for profile buttons
    Object.keys(sections).forEach(btnId => {
        document.getElementById(btnId).addEventListener("click", () => setActiveProfileTab(btnId));
    });

    // Default section to display on load
    setActiveProfileTab("btn-purchase-history");
});


// 찜한 상품
document.addEventListener("DOMContentLoaded", function() {
    // 찜한 상품 데이터
    const wishlistProducts = [
        { name: "Sony Headphones", location: "강남구 논현동", time: "2시간 전", price: "120,000원" },
        { name: "Samsung Galaxy Tab", location: "서초구 반포동", time: "5시간 전", price: "300,000원" },
        { name: "Nike Air Max", location: "송파구 잠실동", time: "1일 전", price: "180,000원" },
        { name: "Sony Headphones", location: "강남구 논현동", time: "2시간 전", price: "120,000원" },
        { name: "Samsung Galaxy Tab", location: "서초구 반포동", time: "5시간 전", price: "300,000원" },
        { name: "Nike Air Max", location: "송파구 잠실동", time: "1일 전", price: "180,000원" },
        { name: "Sony Headphones", location: "강남구 논현동", time: "2시간 전", price: "120,000원" },
        { name: "Samsung Galaxy Tab", location: "서초구 반포동", time: "5시간 전", price: "300,000원" },
        { name: "Nike Air Max", location: "송파구 잠실동", time: "1일 전", price: "180,000원" }
    ];

    let currentWishlistPage = 1;
    const itemsPerPage = 10;

    function displayWishlistProducts(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToShow = wishlistProducts.slice(startIndex, endIndex);

        const productList = document.getElementById("product-list-wishlist");
        productList.innerHTML = "";

        productsToShow.forEach(product => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            productItem.innerHTML = `
                <img src="https://via.placeholder.com/250" alt="상품 이미지" class="product-img">
                <div class="product-info">${product.name}<br>${product.location} | ${product.time}</div>
                <div class="product-price">${product.price}</div>
            `;

            productList.appendChild(productItem);
        });

        setupWishlistPagination(wishlistProducts.length);
    }

    function setupWishlistPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById("pagination-wishlist");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("span");
            pageItem.textContent = i;
            pageItem.className = (i === currentWishlistPage) ? "active" : "";
            pageItem.addEventListener("click", function() {
                currentWishlistPage = i;
                displayWishlistProducts(currentWishlistPage);
            });

            pagination.appendChild(pageItem);
        }
    }

    // Set default tab to display on load
    displayWishlistProducts(currentWishlistPage);
});


// 가격 제안

document.addEventListener("DOMContentLoaded", function() {
    const sellingOffers = [
        { name: "Chanel Handbag", location: "강남구 삼성동", time: "2일 전", price: "3,000,000원" },
        { name: "Rolex Watch", location: "종로구 종로3가", time: "5일 전", price: "8,500,000원" },
        { name: "BMW Keychain", location: "서초구 반포동", time: "1주일 전", price: "150,000원" },
        { name: "Louis Vuitton Scarf", location: "용산구 이태원동", time: "1일 전", price: "500,000원" },
        { name: "Gucci Shoes", location: "마포구 망원동", time: "3일 전", price: "600,000원" },
        { name: "Hermes Bag", location: "강남구 청담동", time: "6일 전", price: "12,000,000원" },
        { name: "Apple MacBook Pro", location: "서초구 서초동", time: "8일 전", price: "3,500,000원" },
        { name: "Panasonic Camera", location: "강북구 수유동", time: "2주일 전", price: "1,000,000원" },
        { name: "Samsung Galaxy S21", location: "은평구 응암동", time: "9일 전", price: "800,000원" },
        { name: "Dyson Vacuum", location: "송파구 석촌동", time: "10일 전", price: "450,000원" },
        { name: "Chanel Handbag", location: "강남구 삼성동", time: "2일 전", price: "3,000,000원" },
        { name: "Rolex Watch", location: "종로구 종로3가", time: "5일 전", price: "8,500,000원" },
        { name: "BMW Keychain", location: "서초구 반포동", time: "1주일 전", price: "150,000원" },
        { name: "Louis Vuitton Scarf", location: "용산구 이태원동", time: "1일 전", price: "500,000원" },
        { name: "Gucci Shoes", location: "마포구 망원동", time: "3일 전", price: "600,000원" },
        { name: "Hermes Bag", location: "강남구 청담동", time: "6일 전", price: "12,000,000원" },
        { name: "Apple MacBook Pro", location: "서초구 서초동", time: "8일 전", price: "3,500,000원" },
        { name: "Panasonic Camera", location: "강북구 수유동", time: "2주일 전", price: "1,000,000원" },
        { name: "Samsung Galaxy S21", location: "은평구 응암동", time: "9일 전", price: "800,000원" },
        { name: "Dyson Vacuum", location: "송파구 석촌동", time: "10일 전", price: "450,000원" },
    ];

    const purchaseOffers = [
        { name: "Sony PlayStation 5", location: "송파구 잠실동", time: "3일 전", price: "500,000원" },
        { name: "iPad Air", location: "영등포구 영등포동", time: "1주일 전", price: "700,000원" },
        { name: "Apple Watch", location: "마포구 합정동", time: "10일 전", price: "400,000원" },
        { name: "Nintendo Switch", location: "강서구 화곡동", time: "5일 전", price: "350,000원" },
        { name: "LG OLED TV", location: "노원구 상계동", time: "2일 전", price: "2,000,000원" },
        { name: "Beats Headphones", location: "서대문구 신촌동", time: "1주일 전", price: "300,000원" },
        { name: "KitchenAid Mixer", location: "중구 명동", time: "8일 전", price: "600,000원" },
        { name: "Canon DSLR", location: "성북구 성북동", time: "3일 전", price: "1,200,000원" },
        { name: "Apple iPhone 13", location: "광진구 구의동", time: "6일 전", price: "1,000,000원" },
        { name: "Samsung Tablet", location: "동작구 흑석동", time: "2주일 전", price: "350,000원" },
        { name: "Sony PlayStation 5", location: "송파구 잠실동", time: "3일 전", price: "500,000원" },
        { name: "iPad Air", location: "영등포구 영등포동", time: "1주일 전", price: "700,000원" },
        { name: "Apple Watch", location: "마포구 합정동", time: "10일 전", price: "400,000원" },
        { name: "Nintendo Switch", location: "강서구 화곡동", time: "5일 전", price: "350,000원" },
        { name: "LG OLED TV", location: "노원구 상계동", time: "2일 전", price: "2,000,000원" },
        { name: "Beats Headphones", location: "서대문구 신촌동", time: "1주일 전", price: "300,000원" },
        { name: "KitchenAid Mixer", location: "중구 명동", time: "8일 전", price: "600,000원" },
        { name: "Canon DSLR", location: "성북구 성북동", time: "3일 전", price: "1,200,000원" },
        { name: "Apple iPhone 13", location: "광진구 구의동", time: "6일 전", price: "1,000,000원" },
        { name: "Samsung Tablet", location: "동작구 흑석동", time: "2주일 전", price: "350,000원" },
    ];

    let currentOffersTab = "selling";
    let currentOffersPage = 1;
    const itemsPerPage = 10;

    function displayOffersProducts(page) {
        let offersToDisplay = currentOffersTab === "selling" ? sellingOffers : purchaseOffers;

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const offersToShow = offersToDisplay.slice(startIndex, endIndex);

        const productList = document.getElementById("product-list-offers");
        productList.innerHTML = "";

        offersToShow.forEach(offer => {
            const productItem = document.createElement("div");
            productItem.className = "product-item";

            productItem.innerHTML = `
                <img src="https://via.placeholder.com/250" alt="상품 이미지" class="product-img">
                <div class="product-info">${offer.name}<br>${offer.location} | ${offer.time}</div>
                <div class="product-price">${offer.price}</div>
            `;

            productList.appendChild(productItem);
        });

        setupOffersPagination(offersToDisplay.length);
    }

    function setupOffersPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById("pagination-offers");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("span");
            pageItem.textContent = i;
            pageItem.className = (i === currentOffersPage) ? "active" : "";
            pageItem.addEventListener("click", function() {
                currentOffersPage = i;
                displayOffersProducts(currentOffersPage);
            });

            pagination.appendChild(pageItem);
        }
    }

    function setActiveOffersTab(tabId) {
        document.querySelectorAll('.tab-menu-offers div').forEach(tab => {
            tab.classList.remove("active");
        });

        document.getElementById(tabId).classList.add("active");
        currentOffersTab = tabId === "tab-all-offers" ? "selling" : "purchase";
        currentOffersPage = 1;
        displayOffersProducts(currentOffersPage);
    }

    document.getElementById('tab-all-offers').addEventListener('click', () => setActiveOffersTab('tab-all-offers'));
    document.getElementById('tab-purchase-offers').addEventListener('click', () => setActiveOffersTab('tab-purchase-offers'));

    // Default section to display on load
    setActiveOffersTab("tab-all-offers");
});


// 거래후기
document.addEventListener("DOMContentLoaded", function() {
    const salesReviews = [
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
        { name: "황금호감", level: "Lv. 1", text: "클래식 좋아요 좋아요~", time: "7일 전", product: "판매한 상품: 클래식 CD", productLink: "#" },
    ];

    const purchaseReviews = [
        { name: "철수", level: "Lv. 2", text: "정말 좋은 구매였어요!", time: "5일 전", product: "구매한 상품: 전자책 리더기", productLink: "#" },
        { name: "영희", level: "Lv. 3", text: "만족합니다!", time: "4일 전", product: "구매한 상품: 블루투스 스피커", productLink: "#" },
        { name: "민수", level: "Lv. 1", text: "빠른 거래 감사합니다.", time: "3일 전", product: "구매한 상품: 무선 마우스", productLink: "#" },
        { name: "철수", level: "Lv. 2", text: "정말 좋은 구매였어요!", time: "5일 전", product: "구매한 상품: 전자책 리더기", productLink: "#" },
        { name: "영희", level: "Lv. 3", text: "만족합니다!", time: "4일 전", product: "구매한 상품: 블루투스 스피커", productLink: "#" },
        { name: "민수", level: "Lv. 1", text: "빠른 거래 감사합니다.", time: "3일 전", product: "구매한 상품: 무선 마우스", productLink: "#" },
        { name: "철수", level: "Lv. 2", text: "정말 좋은 구매였어요!", time: "5일 전", product: "구매한 상품: 전자책 리더기", productLink: "#" },
        { name: "영희", level: "Lv. 3", text: "만족합니다!", time: "4일 전", product: "구매한 상품: 블루투스 스피커", productLink: "#" },
        { name: "민수", level: "Lv. 1", text: "빠른 거래 감사합니다.", time: "3일 전", product: "구매한 상품: 무선 마우스", productLink: "#" },
    ];

    let currentReviewTab = "sales";
    let currentPage = 1;
    const itemsPerPage = 5;

    function displayReviews(page) {
        let reviewsToDisplay = currentReviewTab === "sales" ? salesReviews : purchaseReviews;

        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const reviewsToShow = reviewsToDisplay.slice(startIndex, endIndex);

        const reviewList = document.getElementById("review-list");
        reviewList.innerHTML = "";

        reviewsToShow.forEach(review => {
            const reviewItem = document.createElement("div");
            reviewItem.className = "review-item";

            reviewItem.innerHTML = `
                <div class="review-time">${review.time}</div>
                <div class="review-img">
                    <img src="https://via.placeholder.com/50" alt="사용자 이미지">
                </div>
                <div class="review-content">
                    <div class="review-name">${review.name}<span class="review-level">${review.level}</span></div>
                    <div class="review-text">${review.text}</div>
                    <a href="${review.productLink}" class="review-product-link">${review.product}</a>
                </div>
                <div class="review-button">
                    <button>후기 남기기</button>
                </div>
            `;

            reviewList.appendChild(reviewItem);
        });

        setupPagination(reviewsToDisplay.length);
    }

    function setupPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById("pagination-reviews");
        pagination.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("span");
            pageItem.textContent = i;
            pageItem.className = (i === currentPage) ? "active" : "";
            pageItem.addEventListener("click", function() {
                currentPage = i;
                displayReviews(currentPage);
            });

            pagination.appendChild(pageItem);
        }
    }

    function setActiveReviewTab(tabId) {
        document.querySelectorAll('.review-tab div').forEach(tab => {
            tab.classList.remove("active");
        });

        document.getElementById(tabId).classList.add("active");
        currentReviewTab = tabId === "tab-sales-review" ? "sales" : "purchase";
        currentPage = 1;
        displayReviews(currentPage);
    }

    document.getElementById('tab-sales-review').addEventListener('click', () => setActiveReviewTab('tab-sales-review'));
    document.getElementById('tab-purchase-review').addEventListener('click', () => setActiveReviewTab('tab-purchase-review'));

    // Default section to display on load
    displayReviews(currentPage);
});


// 신뢰지수 막대 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    const trustScoreValue = parseInt(document.getElementById("trust-score-value").innerText);
    const trustBarInner = document.getElementById("trust-bar-inner");

    // 애니메이션 효과를 위한 setInterval 사용
    let currentValue = 0;
    const maxScore = 1000;
    const interval = setInterval(() => {
        if (currentValue >= trustScoreValue) {
            clearInterval(interval);
        } else {
            currentValue += 2; // 증가 속도 조절 가능
            const widthPercentage = (currentValue / maxScore) * 100;
            trustBarInner.style.width = widthPercentage + "%";
        }
    }, 10); // 증가 간격 조절 가능
});