// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "http://localhost/wp593",
  consumerKey: "ck_1bc1d0546bd827cb585273f36248abb1df760a3f",
  consumerSecret: "cs_0f1aa45a2ca15cf2b5ee0e55e659472f56fef96b",
  version: "wc/v3"
});

// List products
api.get("products", {
  per_page: 20, // 20 products per page
})
  .then((response) => {
    // Successful request
    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
    console.log("Response Data:", response.data);
    console.log("Total of pages:", response.headers['x-wp-totalpages']);
    console.log("Total of items:", response.headers['x-wp-total']);
  })
  .catch((error) => {
    // Invalid request, for 4xx and 5xx statuses
    console.log("Response Status:", error.response.status);
    console.log("Response Headers:", error.response.headers);
    console.log("Response Data:", error.response.data);
  })
  .finally(() => {
    // Always executed.
  });

// // Create a product
// api.post("products", {
//   name: "Premium Quality", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
//   type: "simple",
//   regular_price: "21.99",
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });

// // Edit a product
// api.put("products/1", {
//   sale_price: "11.99", // See more in https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });

// // Delete a product
// api.delete("products/1", {
//   force: true, // Forces to delete instead of move to the Trash
// })
//   .then((response) => {
//     // Successful request
//     console.log("Response Status:", response.status);
//     console.log("Response Headers:", response.headers);
//     console.log("Response Data:", response.data);
//   })
//   .catch((error) => {
//     // Invalid request, for 4xx and 5xx statuses
//     console.log("Response Status:", error.response.status);
//     console.log("Response Headers:", error.response.headers);
//     console.log("Response Data:", error.response.data);
//   })
//   .finally(() => {
//     // Always executed.
//   });