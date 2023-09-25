import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableCard from '../components/TableCard'
import { Container, SimpleGrid, Text } from'@mantine/core'

const Tables = () => {
  const [tables, setTables] = useState([])

  useEffect(() => {
    const getTables = async () => {
      await axios.get('http://127.0.0.1:8000/api/restaurants/1')
        .then((res) => {
          setTables(res.data.tables)
        }).catch((err) => {
          console.log(err)
        })
    }

    getTables();
  }, [])
  
  const cards = tables.map((table) => (
    <TableCard key={table.id} table={table} />
  ))

  return (
    <Container my='md' maw={1200} py='10vh'>
        <Text className='font-bold pb-4'>Tables</Text>
        <SimpleGrid 
            cols={4}
            breakpoints={[
                { maxWidth: '62rem', cols: 3, spacing: 'md' },
                { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                { maxWidth: '36rem', cols: 1, spacing: 'sm' },
              ]}
        >
            {cards}
        </SimpleGrid>
    </Container>
  )
}

export default Tables