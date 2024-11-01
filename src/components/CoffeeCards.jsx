import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Card from './Card'
import { useEffect, useState } from 'react'

const CoffeeCards = () => {
  const navigate = useNavigate()

  const data = useLoaderData()
  const { category } = useParams()
  const [coffees, setCoffees] = useState([])
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        coffee => coffee.category === category
      )
      setCoffees(filteredByCategory)
    } else {
      setCoffees(data.slice(0, 6))
    }
  }, [category, data])
  console.log(data)
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
        {coffees.map(coffee => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <button className='btn btn-warning' onClick={() => navigate('/coffees')}>
        View All
      </button>
    </>
  )
}

export default CoffeeCards
