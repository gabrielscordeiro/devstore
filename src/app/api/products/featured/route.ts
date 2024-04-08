import data from '../data.json'

export async function GET() {
    const featuredProduts = data.products.filter((product) => product.featured)

    return Response.json(featuredProduts)
}