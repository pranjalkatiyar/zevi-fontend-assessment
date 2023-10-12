import { faker } from "@faker-js/faker";

export interface LatestTrendType {
  productImage: string;
  productName: string;  
}

export interface SuggestionType {
  productName: string;
}

export interface ProductType {
  productImage: string;
  productName: string;
  productOriginalPrice: number;
  productDiscountPrice: number;
  productsReviews: number;
  productRating: number;
}

export const fetchLatestTrendData = () => {
  const latestTrends: LatestTrendType[] = [];

  for (let i = 1; i <= 5; i++) {
    latestTrends.push({
      productImage: faker.image.people(400,500,true),
      productName: faker.commerce.productName(),
    });
  }

  return latestTrends;
};

export const fetchSuggestionData = () => {
  const suggestionData: SuggestionType[] = [];

  for (let i = 1; i <= 5; i++) {
    suggestionData.push({
      productName: faker.commerce.productName(),
    });
  }

  return suggestionData;
};

export const fetchProducts = () => {
  const products: ProductType[] = [];

  for (let i = 0; i <= 100; i++) {
    const productImage = faker.image.url({
      height: 400,
      width: 300,
    });
    const productName = faker.commerce.productName();
    const productRating = faker.number.int({ min: 1, max: 5 });
    const productOriginalPrice = Number(
      faker.commerce.price({ min: 300, max: 5000 })
    );
    const productDiscountPrice = Number(
      faker.commerce.price({
        min: 300,
        max: Number(productOriginalPrice),
      })
    );
    const productsReviews = faker.number.int({ min: 10, max: 40 });

    products.push({
      productImage,
      productName,
      productRating,
      productOriginalPrice,
      productDiscountPrice,
      productsReviews,
    });
  }

  return products;
};
