export type DefaultProductType = {
	Id: String;
	Name: String;
	SeName: String;
	ColorVariants: null;
	ShortDescription: null;
	FeaturedImageUrl: String;
	ProductPrice: {
		OldPrice: number;
		Price: number;
	};
};

export type ProductType = {
	productId: string;
	availableQuantity: number;
	productName: string;
	productImage: string;
	price: number;
	previousPrice: number;
	discountedPrice: number;
};

export type CartProductType = {
	productId: string;
	addedQuantity: number;
	productName: string;
	productImage: string;
	price: number;
};

export type ProductListType = ProductType[];

export type CartProductsType = CartProductType[];
