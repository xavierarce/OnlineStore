import ShopData from '../../shopdata.json'

const Shop = ()=>{
  return (
    <div>
      {ShopData.map(({id,name})=>(
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Shop;