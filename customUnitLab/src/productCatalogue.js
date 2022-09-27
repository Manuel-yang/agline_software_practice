class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
    this.reOrder = {};
  }

  findProductById(id) {
    const match = this.products.find(
      function (product) {
        return id === product.id;
      })
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  findProductsByNameLike(subString) {
    const matches = this.products.filter(function(product) {
      const position = product.name.search(subString)
      return position !== -1
    } )
    return matches;
  }

  removeProductById(id) {
    this.products.forEach((item, index) => {
      if (item.id === id) {
        this.products.splice(index, 1)
        return true
      }
      else return false
    })
  }

  checkReorder() {
    let productIds = []
    for(let i = 0; i < this.products.length; i++) {
      if(this.products[i].quantityInStock <= this.products[i].reorderLevel) {
        this.reOrder["type"] = "Reorder"
        productIds.push(this.products[i].id)
      }
    }

    if(productIds.length != 0) {this.reOrder["productIds"] = productIds}
    return this.reOrder
  }

}
module.exports = Catalogue;
