export interface MenuItem {
  id: number // 92757081,
  code: string // "1d3dd033-0075-4ef6-8a9e-570c05d45dde",
  name: string // "Chicken and Kimchi Salad",
  description: string // "Slow-cooked chicken, home-made kimchi, cucumber, Parmesan cheese and Caesar dressing",
  display_price: string // "",
  master_category_id: MasterCategoryId // TODO have no idea what this means, it was 2 before,
  file_path: string // "",
  logo_path: string // "",
  images_urls: string[] // [], TODO
  images: [] | Image[] // originally [] TODO
  is_prepacked_item: boolean // false,
  is_sold_out: boolean // false,
  is_express_item: boolean // true,
  exclude_dish_information: boolean // false,
  additives: [] // [], TODO
  is_alcoholic_item: boolean // false,
  sold_out_options: [
    {
      default: boolean // true,
      option: SoldOutOptionType // "REFUND",
      text: string // "NEXTGEN_SoldOutOptions_Refund"
    },
    {
      default: boolean // false,
      option: SoldOutOptionType // "CANCEL",
      text: string // "NEXTGEN_SoldOutOptions_Cancel"
    },
    {
      default: boolean // false,
      option: SoldOutOptionType // "CALL_CUSTOMER",
      text: string // "NEXTGEN_SoldOutOptions_CALL_CUSTOMER"
    }
  ]
  product_variations: ProductVariation[]
  half_type: string // "",
  is_half_type_available: boolean // false
  tags?: string[] // ["popular"] TODO
}

export interface ProductVariation {
  id: number // 93508542,
  // TODO one of the items in product_variations had an
  //  optional attribute of Tall so i've made this optional.
  //  this is a manual addition.
  name?: string // "Tall",
  code: string // "f092abb5-3140-4621-8fca-0f3127424065",
  remote_code: string // "",
  container_price: number // 0,
  price: number // 78.4,
  price_before_discount: number // 98,
  topping_ids: number[] // [], // TODO
  is_vegetarian: boolean // false,
  is_non_vegetarian: boolean // false,
  spiceness: string // ""
}

// TODO
export enum MasterCategoryId {
  ONE = 1,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN
}

// TODO used an enum here for clarity.
export enum SoldOutOptionType {
  REFUND = 'refund',
  CANCEL = 'cancel',
  CALL_CUSTOMER = 'call_customer'
}

interface Image {
  image_url: string // 'https://images.deliveryhero.io/image/fd-hk/Products/4357523.jpg',
  tags: {} // {} TODO
}

export interface MenuCategories {
  id: number // 638000
  code: string // "72cf5d89-3a4d-4dac-be6c-f9c146062684"
  name: string // "Salad",
  description: string // "",
  // TODO this was missing in the Merchant Scrape, so i added it back in while I was generating dummy data.
  products: MenuItem[]
  is_popular_category: boolean
}
