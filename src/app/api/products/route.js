export async function GET(req, res, next) {
  try {
    let products = [
      {
        id: 1,
        name: "Product 1",
        price: 10000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        id: 2,
        name: "Product 2",
        price: 20000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
    ]
    let data = JSON.stringify(products)
    return new Response(data, { status: 200 })
  }
  catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}