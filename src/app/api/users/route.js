export async function GET(req, res, next) {
  try {
    let users = [
      {
        id: 1,
        name: "John Doe",
        email: "KZJzK@example.com",
        password: "password123"
      }
    ]
    let data = JSON.stringify(users)
    return new Response(data, { status: 200 })

  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}