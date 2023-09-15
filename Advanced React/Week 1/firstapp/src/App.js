import './index.css'

const topDesserts = [
  {
  id: "1",
  title: "Tiramasu",
  description: "The best tiramasu in town",
  image: "https://picsum.photos/200/300/?random",
  price: "$5.00",
  }, 
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: "https://picsum.photos/200/300/?random",
    price: "$4.50",
    }, 
    {
      id: "3",
      title: "Chocolate Mousse",
      description: "Unexpected flavor",
      image: "https://picsum.photos/200/300/?random",
      price: "$6.00",
      }, 
];

// const topDesserts = data.map(dessert => {
//   return {
//     content: `${dessert.title} - ${dessert.description}`,
//     price: dessert.price,
//   }
//   })

export default function App() {
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}