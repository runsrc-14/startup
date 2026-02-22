import { faker } from "@faker-js/faker/locale/th";

export function createRandomUser(): User {
  return {
    userId: faker.string.numeric({
      length: { min: 1, max: 2 },
      exclude: ["0"],
    }),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

// export function createRandomProduct(): Product {
//   return {
//     id: faker.string.uuid(),
//     productName: faker.commerce.productName(),
//     productPrice: faker.commerce.price(),
//     productDescription: faker.commerce.productDescription(),
//     productCategory: faker.commerce.department(),
//     productImage: faker.image.urlLoremFlickr({
//       category: "toys",
//     }),
//   };
// }

// export function createRandomProductDetails(): ProductDetails {
//   const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  
//   const images = [
//     faker.image.urlLoremFlickr({ category: "cat" }),
//     faker.image.urlLoremFlickr({ category: "cat" }),
//     faker.image.urlLoremFlickr({ category: "cat" }),
//     faker.image.urlLoremFlickr({ category: "cat" }),
//   ];

//   return {
//     id: faker.string.uuid(),
//     name: faker.commerce.productName(),
//     price: parseFloat(faker.commerce.price()),
//     currency: "USD",
//     description: faker.commerce.productDescription(),
//     sizes,
//     images,
//   };
// }
