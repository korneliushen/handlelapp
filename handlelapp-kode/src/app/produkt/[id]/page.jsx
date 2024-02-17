export default async function productPage({ params }) {
    const id = params.id 

    async function getProduct() {
        const res = await fetch(` https://kassal.app/api/v1/products/id/${id} `, {
          headers: { authorization: process.env.API_KEY },
        })
        return res.json()
      }
      const data = await getProduct()
    return <><div>{id}, {data.name}</div></>
}