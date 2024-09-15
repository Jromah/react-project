import React from 'react'
import { useParams } from 'react-router'
import { useProductById } from '../hooks';

export const Item = () => {

  const { id } = useParams();

  const { product, loading } = useProductById();

  return (
    <div>Item</div>
  )
}
