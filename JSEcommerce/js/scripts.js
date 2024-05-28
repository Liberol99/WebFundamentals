let products = [];
let myCart = [];

async function getProducts() {
    try {
        const url = 'https://dummyjson.com/products';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json();
        return responseData.products;
    } catch (error) {
        console.error('Hata:', error);
    }
}

(async () => {
    products = await getProducts();
    let productBox = document.querySelector('.product-box');
    if (products !== null && products.length > 0) {
        products.forEach((product, index) => {
            productBox.innerHTML += `
        <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="${product.images[0]}" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${product.title}</h5>
                                <!-- Product price-->
                                <span>
                                ${product.price} 
                                </span>   
                                <span> TL </span>                             
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                                <button class="btn btn-outline-dark mt-auto add-card" onclick="addToCart(event)">Sepete Ekle</button>
                            </div>
                        </div>
                    </div>
        </div>
        `;
        });
    }
    else {
        productBox.innerHTML = 'Yükleniyor...';
    }
})();

async function addToCart(event) {
    let productPrice = event.target.parentElement.parentElement.previousElementSibling.children[0].children[1].innerText;
    let productName = event.target.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
    let productPicture = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.src;
    let cartItem = { "name": productName, "price": productPrice, "picture": productPicture };
    myCart.push(cartItem);
    await getPrice(cartItem);
    await showCart();
}

async function showCart() {
    if (myCart !== null && myCart.length > 0) {
        let cartRow;
        myCart.forEach(item => {
            cartRow = document.createElement('div');
            cartRow.classList.add('card');
            cartRow.classList.add('custom-card');
            cartRow.classList.add('col-lg-3');
            cartRow.innerHTML += `
                <img src="${item.picture}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-dark">${item.name}</h5>
                    <p class="card-text text-dark">${item.price}</p>
                    <input type="number" class="form-control" onchange="changePrice(event)" value="1" min="1"/>
                </div>
            `
        });
        document.querySelector('.fw-bolder').append(cartRow);
    }
}

let total = 0;
async function getPrice(cartItem) {
    total = total + parseFloat(cartItem.price);
    console.log(total);
}
async function changePrice(event) {
    // Etkilenen ürünün fiyatını ve miktarını al
    let quantity = parseInt(event.target.value) - 1;
    let price = parseFloat(event.target.previousElementSibling.innerText);

    // Etkilenen ürünün eski toplam fiyatını hesapla
    let oldSubtotal = parseFloat(event.target.dataset.subtotal || 0);

    // Yeni toplam fiyatı hesapla
    let newSubtotal = quantity * price;

    // Toplam fiyatı güncelle: Eski alt toplamı çıkar, yeni alt toplamı ekle
    total = total - oldSubtotal + newSubtotal;

    // Değişiklik yapılan ürünün yeni alt toplamını sakla
    event.target.dataset.subtotal = newSubtotal;

    // Toplam negatif olamaz
    if (total < 0) {
        total = 0;
    }

    // Toplamı konsola yazdır
    console.log(total);
}
