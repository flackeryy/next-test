// known as Vendor on FoodPanda
import { MenuCategories } from './Menus'

// Another attribute known as expeditionType, which handles the global level for delivery/ pickup/ or order-in.
// TODO check null, [] empty arrays, and string falls for keys to cleanup.
export interface Merchants {
  id: number // 12058,
  code: string // "v5cd",
  accepts_instructions: boolean // true,
  address: string // "Shop B, G/F, Lucky Commercial Centre, 103 Des Voeux Road West, Sai Ying Pun, Western District",
  address_line2: string // "",
  budget: number // 1, // TODO this is related to the the $ sign which is displayed on the frontend, figure out a better way to work with this.
  chain: {
    id: number // 3804,
    is_accepting_global_vouchers: boolean // true,
    main_vendor_code: string // "v5cd",
    main_vendor_id: number // 12058,
    name: string // "Bluebird Coffee",
    url_key: string // "bluebird-coffee",
    code: string // "cg3fi"
  }
  city: {
    id: number // 14397,
    name: string // "Hong Kong",
    url_key: string // "hong-kong",
    is_top_city: boolean // false,
    is_main_city: boolean // true,
    is_express_delivery_enabled: boolean // false,
    latitude: number // 22.280323,
    longitude: number // 114.158344,
    timezone: string // "Asia/Hong_Kong"
  }
  constraints: null // null, TODO
  cuisines: Cuisine[]
  custom_location_url: string // "",
  customer_phone: string // "+85296693972",
  customer_type: string // "all",
  delivery_box: string // "",
  delivery_conditions: [
    {
      // TODO why is this an array?
      delivery_fee: number // 0,
      delivery_fee_type: string // "amount",
      minimum_order_amount: number // 0,
      maximum_order_amount: number // 0
    }
  ]
  delivery_fee_type: string // "amount",
  delivery_fee_source: string // "disco",
  delivery_provider_id: number // 0,
  description: string // "",
  discounts: Discounts[]
  distance: number // 0.07831282,
  experiments: Experiments[]
  food_characteristics: FoodCharacteristics[]
  favorite_data: null // null, TODO
  has_delivery_provider: boolean // true,
  hero_image: string // "https://images.deliveryhero.io/image/fd-hk/LH/v5cd-hero.jpg",
  hero_listing_image: string // "https://images.deliveryhero.io/image/fd-hk/LH/v5cd-listing.jpg",
  is_active: boolean // true,
  is_busy: boolean // false,
  is_best_in_city: boolean // false,
  is_checkout_comment_enabled: boolean // true,
  is_delivery_enabled: boolean // true,
  is_express_delivery_available: boolean // false,
  is_express_delivery_enabled: boolean // false,
  is_new: boolean // false,
  is_new_until: string // "2019-03-27T00:00:00Z",
  is_pickup_enabled: boolean // true,
  is_premium: boolean // false,
  premium_position: number // 0,
  is_preorder_enabled: boolean // true,
  is_promoted: boolean // false,
  is_replacement_dish_enabled: boolean // false,
  is_service_fee_enabled: boolean // false,
  is_service_tax_enabled: boolean // false,
  is_service_tax_visible: boolean // false,
  is_test: boolean // false,
  is_vat_disabled: boolean // false,
  is_vat_included_in_product_price: boolean // false,
  is_vat_visible: boolean // false,
  is_vat_included: boolean // false,
  is_voucher_enabled: boolean // true,
  latitude: number // 22.288068,
  location_event: null // null, TODO
  logo: string // "",
  longitude: number // 114.145038,
  loyalty_percentage_amount: number // 0,
  loyalty_program_enabled: boolean // false,
  maximum_express_order_amount: number //  0,
  toppings: { [key: string]: Toppings }
  menu: {
    id: number // 46827,
    code: string // "",
    name: string // "Main Menu",
    description: string // "",
    type: string // "delivery",
    opening_time: string // "00:00:00",
    closing_time: string // "23:59:00",
    menu_categories: MenuCategories[] // TODO check logic of this.
    toppings: { [key: string]: Toppings }
    tags: {
      // TODO no idea how this works in the macro level perspective.
      popular: {
        name: 'popular'
        translation_keys: {
          description: 'NEXTGEN_POPULAR_CATEGORY_DESCRIPTION'
          title: 'NEXTGEN_POPULAR_DISH_TAG'
        }
        elements: ['category', 'label']
        metadata: null // TODO
      }
    }
  }
  metadata: MetaData
  minimum_delivery_fee: number // 0,
  minimum_delivery_time: number // 15,
  minimum_order_amount: number // 0,
  minimum_pickup_time: number // 10,
  multiple_toppings: boolean // false,
  name: string // "Bluebird Coffee (Sai Ying Pun)",
  payment_types: [] // [], TODO
  post_code: string // "X",
  primary_cuisine_id: number // 115,
  rating: number // 4.5,
  redirection_url: string // "",
  review_number: number // 267,
  review_with_comment_number: number // 0,
  schedules: Schedule[]
  scoreCriteria: ScoreCriteria
  service_fee_percentage_amount: number // 0,
  service_tax_percentage_amount: number // 0,
  special_days: [] // [],
  tag: string // "Save 20% on Pick-up",
  tags: Tags[]
  time_picker: null // null, TODO
  trade_register_number: string // "69362841",
  url_key: string // "bluebird-coffee-sai-ying-pun",
  vat_percentage_amount: number // 0,
  characteristics: {
    cuisines: Cuisine[]
    food_characteristics: FoodCharacteristics[]
    primary_cuisine: Cuisine
  }
  vendor_legal_information: {
    legal_name: string // "Bluebird Coffee Limited",
    address_line_1: string // "Shop B, G/F, Lucky Commercial Centre, 103 Des Voeux Road West, Sai Ying Pun, Western District",
    trade_register_number: string // "69362841"
  }
  vendor_points: number // 3,
  vertical: string // "restaurants",
  vertical_segment: string // "restaurants",
  vertical_parent: string // "Restaurant",
  order_flow: string // "food",
  web_path: string // "https://www.foodpanda.hk/restaurant/v5cd/bluebird-coffee-sai-ying-pun",
  website: string // "",
  has_online_payment: boolean // false,
}

// in FP the Toppings are stored as an object of objects, with the key being the Topping.id.
// It makes more sense to store it as an array of Toppings[], as such.
export interface Toppings {
  id: number // 25139984,
  name: string // "Beverages - Add Flavour",
  description: string // "",
  quantity_minimum: number // 0, // TODO there has to be a better way.
  quantity_maximum: number // 1, // TODO there has to be a better way.
  options: Option[]
}

export interface Option {
  id: number // 30587154,
  product_id: number // 2230183,
  name: string // "Vanilla",
  description: string // "",
  price: number // 3.2, float, treated as an add on.
  // TODO had to manually make this an optional attribute
  price_before_discount?: number // 4,
  is_sold_out: boolean // false,
  is_half_half_applicable: boolean // false,
  remote_code: string // ""
}

interface Cuisine {
  id: number // 53,
  name: string // "Drinks",
  url_key: string // "beverages",
  main: boolean // false
}

interface FoodCharacteristics {
  id: number // 242,
  name: string // "Dine-in Price",
  is_halal: boolean // false,
  is_vegetarian: boolean // false
}

interface Experiments {
  experiment_id: string // "recommendation-products-elements",
  experiment_variation: string // "Control",
  is_participating: boolean // false
}

interface Discounts {
  id: number // 8158,
  name: string // "Save 20% on Pick-up",
  description: string // "Skip the line and save 20% when you order by Pick-up!",
  start_date: string // "2020-08-15",
  end_date: string // "2021-12-31",
  opening_time: string // "00:00",
  closing_time: string // "23:59",
  condition_type: string // "multiple_vendors",
  condition_object: number // 0, TODO
  condition_object_array: [] // [],
  minimum_order_value: number // 0,
  maximum_discount_amount: number // 0,
  discount_type: string // "percentage",
  discount_amount: number // 20,
  bogo_discount_unit: string // "",
  discount_text: string // "",
  vendor_id: number // 0,
  promotional_limit: number // 0,
  file_name: string // "",
  bogo_product_blocks: [] // [], TODO
  banner_title: string // "",
  daily_limit: number // 0,
  platform_ratio: number // 100,
  additional_info: {} // {} TODO
}

interface MetaData {
  is_delivery_available: boolean // true,
  is_pickup_available: boolean // true,
  is_express_delivery_available: boolean // false,
  is_temporary_closed: boolean // false,
  has_discount: boolean // true,
  timezone: string // "Asia/Hong_Kong",
  events: [] // [], TODO
  close_reasons: [] // [], TODO
  is_flood_feature_closed: boolean // false,
  available_in: null // null TODO
}

export enum Weekday {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday'
}

export enum OpeningType {
  DELIVERING = 'delivering',
  PICKUP = 'pickup'
  // todo have to check for all states, currently only ones I've seen are the above two.
  // CLOSED = 'closed',
}

// the way FP handles scheduling and opening closing hours is archaic.
// instead of a switch which explains whether the opening hours and
// closing hours work for both delivering and pickup, they separate it.
// TODO Pain point.

interface Schedule {
  id: number // 0,
  weekday: Weekday // TODO currently stored as 1, on FoodPanda, i've extended it for clarity.
  opening_type: OpeningType // "delivering",
  opening_time: string // "08:30",
  closing_time: string // W"17:30"
}

interface ScoreCriteria {
  vendor_id: number // 0,
  vendor_code: string // "", TODO
  coefficients: null // null, TODO
  vendor_values: null // null TODO
}

interface Tags {
  code: string // "DEAL",
  text: string // "Save 20% on Pick-up"
}
