import { create } from 'zustand'

import { OrderForm } from '../typings/orderform';

interface IStore {
    orderForm?: OrderForm,
    updateOrderForm: (newOrderForm?: OrderForm) => void
}

const use2BStore = create<IStore>((set) => ({
  orderForm: undefined,
  updateOrderForm: (newOrderForm?: OrderForm) => set(() => ({ orderForm: newOrderForm })),
}))

export default use2BStore