export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((ac, at) => {
    if (at.prices.current) {
      return (ac += at.prices.current)
    }

    return 0
  }, 0)
}
