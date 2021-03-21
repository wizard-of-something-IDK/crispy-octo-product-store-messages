var products = [
	{
		id: 0,
		name: "Apples",
		price: "2.99",
		image:
			"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
		color: "red"
	},
	{
		id: 1,
		name: "Bananas",
		price: "2.50",
		image:
			"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
		color: "gold"
	},
	{
		id: 2,
		name: "oranges",
		price: "3.50",
		image:
			"https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
		color: "orange"
	}
];

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

function warmProduce(items) {
	var that = this;

	this.product = document.createElement("div");
	this.product.classList.add("product");
	this.eleImage = document.createElement("img");
	this.eleImage.src = items.image;
	this.product.appendChild(this.eleImage);
	this.eleName = document.createElement("div");
	this.eleName.innerHTML = "Name: " + items.name;
	this.product.appendChild(this.eleName);
	this.elePrice = document.createElement("div");
	this.elePrice.innerHTML = "Price: $" + items.price;
	this.product.appendChild(this.elePrice);

	this.product.clr = items.color;
	this.product.addEventListener("mouseover", function () {
		var that = this;
		this.style.borderColor = items.color;
	});
	this.product.addEventListener("mouseout", function () {
		var that = this;
		this.style.borderColor = "black";
	});

	this.product.addEventListener("click", function () {
		popUpCreator(items.image, items.name, items.price);
	});

	document.body.appendChild(this.product);
}

function popUpCreator(image, name, price) {
	var popupDiv = document.createElement("div");
	popupDiv.classList.add("popUp");

	popImage = document.createElement("img");
	popImage.src = image;
	popName = document.createElement("div");
	popName.innerHTML = "Name: " + name;
	popPrice = document.createElement("div");
	popPrice.innerHTML = "Price: $" + price;

	popupDiv.appendChild(popImage);
	popupDiv.appendChild(popName);
	popupDiv.appendChild(popPrice);
	popupDiv.addEventListener("click", function () {
		popupDiv.style.display = "none";
	});

	document.body.appendChild(popupDiv);
}

function itemRendering() {
	for (var i = 0; i < products.length; i++) {
		warmProduce(products[i]);
	}
}

itemRendering();