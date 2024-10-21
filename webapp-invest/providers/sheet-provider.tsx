"use client"

import React from 'react'
import { useMountedState } from 'react-use'

import NovoAtivoSheet from '@/features/compras-e-orcamentos/accounts/components/new-account-sheet'
import EditAtivoSheet from '@/features/compras-e-orcamentos/accounts/components/edit-account-sheet'
import NewCategorySheet from '@/features/compras-e-orcamentos/categories/components/new-category-sheet'
import EditCategorySheet from '@/features/compras-e-orcamentos/categories/components/edit-category-sheet'
import NewTransactionSheet from '@/features/compras-e-orcamentos/transactions/components/new-transaction-sheet'
import EditTransactionSheet from '@/features/compras-e-orcamentos/transactions/components/edit-transaction-sheet'


const SheetProvider = () => {
  const isMounted = useMountedState()

  if (!isMounted) return null

  return (
    <>
      <NovoAtivoSheet />
      <EditAtivoSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <NewTransactionSheet />
      <EditTransactionSheet />
    </>
  )
}

export default SheetProvider