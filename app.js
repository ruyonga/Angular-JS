(function(){ 
var app = angular.module('store',[]);

app.controller('StoreController', function(){   //declare the StoreController 
this.products = gem;
});


app.controller("PanelController", function(){
	this.tab = 1;   //initialise the tabs

	this.selectTab = function(setTab){   //set the selected tab
		this.tab = setTab;
	};

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};

});

app.controller('ReviewController', function(){
	this.reviews ={};

	this.addReview = function(product){
		product.reviews.push(this.review);
		this.review = {};
	}
});
var gem = [
	{
	name: 'Ruyonga',
	price: 2.56,
	description: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci corporis dolorem, ea eligendi eum illum iure nihil pariatur praesentium, qui quisquam recusandae saepe, tempore temporibus vitae voluptas? Nemo, omnis!',
	canPurchase: true,
	soldOut: false,
	images:[
		{
			full: 'asianfusion.jpg',
 			thumb:'asianfusion.jpg'
 		}
	],
	reviews:
	 [
		 {
			 stars: 5,
			 body: "I love this product!",
			 author: "joe@thomas.com"
		 },
		 {
			 stars: 1,
			 body: "This product sucks",
			 author: "tim@hater.com"
		 }
	 ]
},
{
	name: 'Ruyonga',
	price: 2.56,
	description: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci corporis dolorem, ea eligendi eum illum iure nihil pariatur praesentium, qui quisquam recusandae saepe, tempore temporibus vitae voluptas? Nemo, omnis!',
	canPurchase: true,
	soldOut: true,
	images:[
		{
			full: 'chips.jpg',
 			thumb:'bistro.jpg'
 		},
 		{
			full: 'bistro.jpg',
 			thumb:'bistro.jpg'
 		}
	]
},
{
	name: 'Ruyonga',
	price: 2.56,
	description: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci corporis dolorem, ea eligendi eum illum iure nihil pariatur praesentium, qui quisquam recusandae saepe, tempore temporibus vitae voluptas? Nemo, omnis!',
	canPurchase: true,
	soldOut: false,
	images: [
		{
			full: 'comedy.jpg',
 			thumb:'comedy.jpg'
 		},
 		{
			full: 'bistro.jpg',
 			thumb:'bistrojpg'
 		}
	]

},
]
})();