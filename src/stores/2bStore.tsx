import { create } from 'zustand'

import { OrderForm } from '../typings/orderform';

interface IStore {
    orderForm?: OrderForm,
    isMiniCartOpen: boolean,
    toggleMiniCart: () => void,
    updateOrderForm: (newOrderForm?: OrderForm) => void
}

const use2BStore = create<IStore>((set) => ({
  orderForm: undefined,
  isMiniCartOpen: false,
  toggleMiniCart: () => set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),
  updateOrderForm: (newOrderForm?: OrderForm) => set(() => ({ orderForm: newOrderForm })),
}))

export default use2BStore