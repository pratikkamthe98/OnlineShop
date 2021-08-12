6.times do |i|
  Product.create(
    name: "Product #{i + 1}",
    brand: 'Product Brand',
    price: '$500',
    description: 'Product Description'
  )
end