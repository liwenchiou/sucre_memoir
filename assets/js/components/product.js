const notification = document.getElementById('notification');
const closeBtn = document.getElementById('closeBtn');
const productsList = document.querySelector('.p-dessert-cards');
let hideTimeout;

        // 商品資料
        const products = [
            { id: 1, name: '抹茶雲端Matcha Cloud Cake', price: 560, img:'/assets/images/desserts/dessert_01.png' },
            { id: 2, name: '深夜可可Midnight Cocoa', price: 450, img: '/assets/images/desserts/dessert_01.png'},
            { id: 3, name: '夏日檸光Lemon Light', price: 480 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 4, name: '伯爵奶香Earl Grey Cream', price: 460 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 5, name: '香草晨霧Vanilla Morning Mist', price: 650 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 6, name: '覆盆莓月夜Berry Moonlight', price: 570 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 7, name: '太妃糖布朗尼Toffee Brownie Bite', price: 560 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 8, name: '海鹽焦糖乳酪Sea Salt Caramel Cheesecake', price: 570 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 9, name: '蜂蜜柚香Honey Yuzu Bloom', price: 520 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 10, name: '玫瑰白巧Rose White Chocolate', price: 600 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 11, name: '椰香星河Coconut Galaxy', price: 540 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 12, name: '芒果曙光Mango Sunrise', price: 490 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 13, name: '榛果金秋Hazelnut Autumn Delight', price: 570 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 14, name: '藍莓仲夏Blueberry Midsummer', price: 530 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 15, name: '桂花蜜茶Osmanthus Honey Tea Cake', price: 500 , img:'/assets/images/desserts/dessert_01.png'},
            { id: 16, name: '黑芝麻雪峰Black Sesame Snow Peak', price: 550 , img:'/assets/images/desserts/dessert_01.png'}
        ];

        // 生成商品卡片
        function renderProducts() {
            productsList.innerHTML = products.map(product => `
               
                <div class="p-dessert__card">
                  <span class="--tag">新商品</span>
                  <a href="" class="p-dessert__card-link">
                    <div class="p-dessert__card-pic-box"><img class="p-dessert__card-pic" src="${product.img}" alt=""></div>
                    <div class="p-dessert__card-text">
                      <span class="p-dessert__card-name">${product.name}</span>
                      <div class="p-dessert__card-price">
                        <span class="--currency">NT$</span>
                        <span class="--num">${product.price}</span>
                      </div>
                    </div>
                    
                  </a>
                  <button class="p-dessert__add-btn" data-product-id="${product.id}"><span class="--img"><img src="/assets/images/desserts/icon/cart.svg" alt="加入購物車"></span><span>加入購物車</span></button>  
                </div>
            `).join('');

            // 為所有加入購物車按鈕添加事件監聽
            document.querySelectorAll('.p-dessert__add-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = e.target.dataset.productId;
                    const product = products.find(p => p.id == productId);
                    addToCart(product);
                });
            });
        }

        // 顯示通知
        function showNotification() {
            // 清除之前的計時器
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }

            // 移除隱藏動畫類別
            notification.classList.remove('hiding');
            
            // 顯示通知
            notification.classList.add('show');

            // 3秒後自動隱藏
            hideTimeout = setTimeout(() => {
                hideNotification();
            }, 3000);
        }

        // 隱藏通知
        function hideNotification() {
            notification.classList.add('hiding');
            
            // 等待動畫完成後移除顯示類別
            setTimeout(() => {
                notification.classList.remove('show', 'hiding');
            }, 300);

            // 清除計時器
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        }

        // 顯示加入購物車訊息
        function addToCart(product) {
            showNotification();
            console.log('商品已加入購物車:', product.name);
        }

        // 關閉按鈕點擊事件
        closeBtn.addEventListener('click', () => {
            hideNotification();
        });

        // 初始化商品
        renderProducts();
