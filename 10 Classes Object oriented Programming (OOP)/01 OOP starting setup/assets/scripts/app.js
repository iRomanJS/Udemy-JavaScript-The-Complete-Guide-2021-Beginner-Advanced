const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl: "https://m.media-amazon.com/images/I/51DOorpA5UL._AC_SX466_.jpg",
      price: 19.99,
      description: "A soft pillows"
    },
    {
      title: "A Carpet",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/G/01/img17/furniture/Rug_Style_Oriental_440x300_hor.jpg",
      price: 89.99,
      description: "A carpet wuch you migth like - or not."
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();