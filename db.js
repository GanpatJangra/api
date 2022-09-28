const items = require("./data/items");
const tags = require("./data/tags");
const brands = require("./data/brands");
const products = require("./data/products");
const users = require("./data/users");
const itemTypes = require("./data/itemTypes");
const colour = require("./data/colour");
const category = require("./data/category.json");

module.exports = {
  items,
  tags,
  category,
  products,
  users,
  brands,
  colour,
  itemTypes
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
