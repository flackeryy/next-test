import { subDays, subHours, subMinutes } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

interface Customer {
  id: string
  name: string
  image: string | null
  phoneNumber: number
  email: string
  preferredPaymentMethod: PaymentMethod
  orderHistory?: Order[]
  totalOrderCount?: number
  createdAt: Date
  lastUpdated: Date
}

enum OrderStatus {
  OPEN = 'Open',
  COMPLETED = 'Completed'
}

enum PaymentMethod {
  APPLE_PAY = 'Apple Pay',
  GOOGLE_PAY = 'Google Pay',
  VISA = 'Visa',
  MASTERCARD = 'Mastercard',
  AMEX = 'Amex',
  CASH = 'Cash'
}

interface Item {
  id: string
  name: string
  choices: string[]
  quantity: number
  price: number
  customerRequest?: string
}

interface Order {
  id: string
  customerId: string
  confirmationId: number
  tableNumber: number
  status: OrderStatus
  items: Item[]
  serviceCharge: number
  additionalTip: number
  totalPrice: number
  customerRequest: string
  paymentMethod: PaymentMethod
  createdAt: string
  lastUpdated: number
}

// TODO totalPrice should be quantity * price
const items: Item[] = [
  {
    id: uuidv4(),
    name: 'American Cheeseburger',
    choices: ['Savoury Onion', 'Fried Eggs', 'Jalapeños'],
    quantity: 1,
    price: 122 * 100
  },
  {
    id: uuidv4(),
    name: 'Burger Combo',
    choices: ['Deluxe', 'Crispy Bacon', 'Fried Egg'],
    quantity: 1,
    price: 189 * 100,
    customerRequest: 'Extra ketchup please!'
  },
  {
    id: uuidv4(),
    name: 'Iced Tea',
    choices: ['Less Sugar'],
    quantity: 2,
    price: 27.5 * 100
  }
]

const edId = uuidv4()
const philId = uuidv4()
const virenId = uuidv4()

const now = new Date()

const orders: Order[] = [
  {
    id: uuidv4(),
    customerId: edId,
    confirmationId: 1003,
    tableNumber: 11,
    status: OrderStatus.OPEN,
    items,
    serviceCharge: 10 * 100,
    additionalTip: 10 * 100,
    totalPrice: 386 * 100,
    createdAt: '9 min ago',
    // createdAt: subDays(subHours(subMinutes(now, 4), 0), 0).getTime(),
    lastUpdated: subDays(subHours(subMinutes(now, 49), 11), 4).getTime(),
    customerRequest: 'We have a nut allergy at the table',
    paymentMethod: PaymentMethod.APPLE_PAY
  },
  {
    id: uuidv4(),
    customerId: philId,
    confirmationId: 1002,
    tableNumber: 11,
    status: OrderStatus.OPEN,
    items,
    serviceCharge: 10 * 100,
    additionalTip: 10 * 100,
    totalPrice: 386 * 100,
    createdAt: '35 min ago',
    // createdAt: subDays(subHours(subMinutes(now, 30), 0), 0).getTime(),
    lastUpdated: subDays(subHours(subMinutes(now, 0), 1), 0).getTime(),
    customerRequest: 'We have a nut allergy at the table',
    paymentMethod: PaymentMethod.APPLE_PAY
  },
  {
    id: uuidv4(),
    customerId: virenId,
    confirmationId: 1001,
    tableNumber: 11,
    serviceCharge: 10 * 100,
    additionalTip: 10 * 100,
    status: OrderStatus.COMPLETED,
    items,
    totalPrice: 386 * 100,
    createdAt: '2 hours ago',
    // createdAt: subDays(subHours(subMinutes(now, 0), 2), 0).getTime(),
    lastUpdated: subDays(subHours(subMinutes(now, 34), 5), 3).getTime(),
    customerRequest: 'We have a nut allergy at the table',
    paymentMethod: PaymentMethod.APPLE_PAY
  }
]

const customers: Customer[] = [
  {
    id: edId,
    name: 'Ed Michealson',
    image:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y',
    phoneNumber: 59294473,
    email: 'ed@itschowtime.com',
    preferredPaymentMethod: PaymentMethod.AMEX,
    totalOrderCount: 3,
    createdAt: new Date(),
    lastUpdated: new Date()
  },
  {
    id: philId,
    name: 'Phil Kwong',
    image: null,
    phoneNumber: 59294473,
    email: 'phil@itschowtime.com',
    preferredPaymentMethod: PaymentMethod.APPLE_PAY,
    totalOrderCount: 1,
    createdAt: new Date(),
    lastUpdated: new Date()
  },
  {
    id: virenId,
    name: 'Viren Mohindra',
    image:
      'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y',
    phoneNumber: 59294473,
    email: 'ed@itschowtime.com',
    preferredPaymentMethod: PaymentMethod.CASH,
    totalOrderCount: 10,
    createdAt: new Date(),
    lastUpdated: new Date()
  }
]

export { OrderStatus, PaymentMethod, items, orders, customers }
export type { Customer, Order, Item }
