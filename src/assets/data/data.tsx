import { MasterCategoryId, SoldOutOptionType } from '../../models/Menus'
import { Merchants, OpeningType, Weekday } from '../../models/Merchants'

export const dummyData: Merchants = {
  id: 12058,
  code: 'v5cd',
  accepts_instructions: true,
  address:
    'Shop B, G/F, Lucky Commercial Centre, 103 Des Voeux Road West, Sai Ying Pun, Western District',
  address_line2: '',
  budget: 1,
  chain: {
    id: 3804,
    is_accepting_global_vouchers: true,
    main_vendor_code: 'v5cd',
    main_vendor_id: 12058,
    name: 'Bluebird Coffee',
    url_key: 'bluebird-coffee',
    code: 'cg3fi'
  },
  city: {
    id: 14397,
    name: 'Hong Kong',
    url_key: 'hong-kong',
    is_top_city: false,
    is_main_city: true,
    is_express_delivery_enabled: false,
    latitude: 22.280323,
    longitude: 114.158344,
    timezone: 'Asia/Hong_Kong'
  },
  constraints: null,
  cuisines: [
    {
      id: 53,
      name: 'Drinks',
      url_key: 'beverages',
      main: false
    },
    {
      id: 115,
      name: 'Western',
      url_key: 'western',
      main: true
    }
  ],
  custom_location_url: '',
  customer_phone: '+85296693972',
  customer_type: 'all',
  delivery_box: '',
  delivery_conditions: [
    {
      delivery_fee: 0,
      delivery_fee_type: 'amount',
      minimum_order_amount: 0,
      maximum_order_amount: 0
    }
  ],
  delivery_fee_type: 'amount',
  delivery_fee_source: 'disco',
  delivery_provider_id: 0,
  description: '',
  discounts: [
    {
      id: 8158,
      name: 'Save 20% on Pick-up',
      description: 'Skip the line and save 20% when you order by Pick-up!',
      start_date: '2020-08-15',
      end_date: '2021-12-31',
      opening_time: '00:00',
      closing_time: '23:59',
      condition_type: 'multiple_vendors',
      condition_object: 0,
      condition_object_array: [],
      minimum_order_value: 0,
      maximum_discount_amount: 0,
      discount_type: 'percentage',
      discount_amount: 20,
      bogo_discount_unit: '',
      discount_text: '',
      vendor_id: 0,
      promotional_limit: 0,
      file_name: '',
      bogo_product_blocks: [],
      banner_title: '',
      daily_limit: 0,
      platform_ratio: 100,
      additional_info: {}
    }
  ],
  distance: 0.07831282,
  experiments: [
    {
      experiment_id: 'recommendation-products-elements',
      experiment_variation: 'Control',
      is_participating: false
    },
    {
      experiment_id: 'recommendation-products-quantity',
      experiment_variation: 'Control',
      is_participating: false
    }
  ],
  food_characteristics: [
    {
      id: 242,
      name: 'Dine-in Price',
      is_halal: false,
      is_vegetarian: false
    },
    {
      id: 265,
      name: 'Coffee',
      is_halal: false,
      is_vegetarian: false
    },
    {
      id: 185,
      name: 'Pastry',
      is_halal: false,
      is_vegetarian: false
    }
  ],
  favorite_data: null,
  has_delivery_provider: true,
  hero_image: 'https://images.deliveryhero.io/image/fd-hk/LH/v5cd-hero.jpg',
  hero_listing_image:
    'https://images.deliveryhero.io/image/fd-hk/LH/v5cd-listing.jpg',
  is_active: true,
  is_busy: false,
  is_best_in_city: false,
  is_checkout_comment_enabled: true,
  is_delivery_enabled: true,
  is_express_delivery_available: false,
  is_express_delivery_enabled: false,
  is_new: false,
  is_new_until: '2019-03-27T00:00:00Z',
  is_pickup_enabled: true,
  is_premium: false,
  premium_position: 0,
  is_preorder_enabled: true,
  is_promoted: false,
  is_replacement_dish_enabled: false,
  is_service_fee_enabled: false,
  is_service_tax_enabled: false,
  is_service_tax_visible: false,
  is_test: false,
  is_vat_disabled: false,
  is_vat_included_in_product_price: false,
  is_vat_visible: false,
  is_vat_included: false,
  is_voucher_enabled: true,
  latitude: 22.288068,
  location_event: null,
  logo: '',
  longitude: 114.145038,
  loyalty_percentage_amount: 0,
  loyalty_program_enabled: false,
  maximum_express_order_amount: 0,
  toppings: {
    25139984: {
      id: 25139984,
      name: 'Beverages - Add Flavour',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30587154,
          product_id: 2230183,
          name: 'Vanilla',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30587155,
          product_id: 2230184,
          name: 'Caramel',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30587156,
          product_id: 2230185,
          name: 'Hazelnut',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30587157,
          product_id: 2230186,
          name: 'Salted Caramel',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30587158,
          product_id: 2230187,
          name: 'Toffee Nut',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25365209: {
      id: 25365209,
      name: 'Beverages - Hot or Iced',
      description: '',
      quantity_minimum: 1,
      quantity_maximum: 1,
      options: [
        {
          id: 30597269,
          product_id: 4335667,
          name: 'Hot',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597270,
          product_id: 4335669,
          name: 'Iced',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25365210: {
      id: 25365210,
      name: 'Beverages - Change Milk',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30601990,
          product_id: 4168469,
          name: 'Skimmed Milk',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30601991,
          product_id: 4320593,
          name: 'Soy Milk',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30601992,
          product_id: 4320595,
          name: 'Oat Milk',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25389161: {
      id: 25389161,
      name: 'Choose Sizes - Single, Double & Triple',
      description: '',
      quantity_minimum: 1,
      quantity_maximum: 1,
      options: [
        {
          id: 30597281,
          product_id: 4320590,
          name: 'Single',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597282,
          product_id: 4320592,
          name: 'Double',
          description: '',
          price: 5.6,
          price_before_discount: 7,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597283,
          product_id: 4320594,
          name: 'Triple',
          description: '',
          price: 11.2,
          price_before_discount: 14,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25389594: {
      id: 25389594,
      name: 'Beverages - Change Espresso Bean',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30597284,
          product_id: 4335677,
          name: 'Tyrian House Blend - Fruity',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25389595: {
      id: 25389595,
      name: 'Beverages - Choose Coffee Beans',
      description: '',
      quantity_minimum: 1,
      quantity_maximum: 1,
      options: [
        {
          id: 30597274,
          product_id: 4335664,
          name: 'Cobalt House Blend - Nutty',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597275,
          product_id: 4335668,
          name: 'Tyrian House Blend - Fruity',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25389596: {
      id: 25389596,
      name: 'Choose Sizes - Tall, Grande & Venti',
      description: '',
      quantity_minimum: 1,
      quantity_maximum: 1,
      options: [
        {
          id: 30597271,
          product_id: 4335662,
          name: 'Tall',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597272,
          product_id: 4335666,
          name: 'Grande',
          description: '',
          price: 5.6,
          price_before_discount: 7,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597273,
          product_id: 4335670,
          name: 'Venti',
          description: '',
          price: 11.2,
          price_before_discount: 14,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25389597: {
      id: 25389597,
      name: 'Beverages - Extra/Less Shots',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30597285,
          product_id: 4335676,
          name: 'Less 1 Shot',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597286,
          product_id: 4335678,
          name: 'Extra 1 Shot',
          description: '',
          price: 5.6,
          price_before_discount: 7,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597287,
          product_id: 4335679,
          name: 'Extra 2 Shots',
          description: '',
          price: 11.2,
          price_before_discount: 14,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25389598: {
      id: 25389598,
      name: 'Choose Sizes - Short, Tall & Grande',
      description: '',
      quantity_minimum: 1,
      quantity_maximum: 1,
      options: [
        {
          id: 30597362,
          product_id: 4335681,
          name: 'Short',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597363,
          product_id: 4335685,
          name: 'Tall',
          description: '',
          price: 5.6,
          price_before_discount: 7,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30597364,
          product_id: 4335687,
          name: 'Grande',
          description: '',
          price: 11.2,
          price_before_discount: 14,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25390678: {
      id: 25390678,
      name: 'Beverages - Add Whipped Cream',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30601997,
          product_id: 4342681,
          name: 'Whipped Cream',
          description: '',
          price: 3.2,
          price_before_discount: 4,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25390679: {
      id: 25390679,
      name: 'Beverages - Sweetness',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30601998,
          product_id: 4342682,
          name: 'Less Sweet',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25390680: {
      id: 25390680,
      name: 'Beverages - Change to Ristretto or Lungo',
      description: '',
      quantity_minimum: 0,
      quantity_maximum: 1,
      options: [
        {
          id: 30602014,
          product_id: 4342683,
          name: 'Ristretto',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 30602015,
          product_id: 4342688,
          name: 'Lungo',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    },
    25410079: {
      id: 25410079,
      name: 'Choose Tea',
      description: '',
      quantity_minimum: 1,
      quantity_maximum: 1,
      options: [
        {
          id: 31051615,
          product_id: 4655775,
          name: 'Jasmine Tea',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 31051616,
          product_id: 4655776,
          name: 'Earl Grey Tea',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 31051617,
          product_id: 4655777,
          name: 'English Breakfast Tea',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        },
        {
          id: 31051618,
          product_id: 4655778,
          name: 'Darjeeling Tea',
          description: '',
          price: 0,
          is_sold_out: false,
          is_half_half_applicable: false,
          remote_code: ''
        }
      ]
    }
  },
  metadata: {
    is_delivery_available: true,
    is_pickup_available: true,
    is_express_delivery_available: false,
    is_temporary_closed: false,
    has_discount: true,
    timezone: 'Asia/Hong_Kong',
    events: [],
    close_reasons: [],
    is_flood_feature_closed: false,
    available_in: null
  },
  minimum_delivery_fee: 0,
  minimum_delivery_time: 15,
  minimum_order_amount: 0,
  minimum_pickup_time: 10,
  multiple_toppings: false,
  name: 'Bluebird Coffee (Sai Ying Pun)',
  payment_types: [],
  post_code: 'X',
  primary_cuisine_id: 115,
  rating: 4.5,
  redirection_url: '',
  review_number: 267,
  review_with_comment_number: 0,
  schedules: [
    {
      id: 0,
      weekday: Weekday.MONDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.TUESDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.WEDNESDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.THURSDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.FRIDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.SATURDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.SUNDAY,
      opening_type: OpeningType.DELIVERING,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.MONDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.TUESDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.WEDNESDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.THURSDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.FRIDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.SATURDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    },
    {
      id: 0,
      weekday: Weekday.SUNDAY,
      opening_type: OpeningType.PICKUP,
      opening_time: '08:30',
      closing_time: '17:30'
    }
  ],
  scoreCriteria: {
    vendor_id: 0,
    vendor_code: '',
    coefficients: null,
    vendor_values: null
  },
  service_fee_percentage_amount: 0,
  service_tax_percentage_amount: 0,
  special_days: [],
  tag: 'Save 20% on Pick-up',
  tags: [
    {
      code: 'DEAL',
      text: 'Save 20% on Pick-up'
    }
  ],
  time_picker: null,
  trade_register_number: '69362841',
  url_key: 'bluebird-coffee-sai-ying-pun',
  vat_percentage_amount: 0,
  characteristics: {
    cuisines: [
      {
        id: 53,
        name: 'Drinks',
        url_key: 'beverages',
        main: false
      },
      {
        id: 115,
        name: 'Western',
        url_key: 'western',
        main: true
      }
    ],
    food_characteristics: [
      {
        id: 242,
        name: 'Dine-in Price',
        is_halal: false,
        is_vegetarian: false
      },
      {
        id: 265,
        name: 'Coffee',
        is_halal: false,
        is_vegetarian: false
      },
      {
        id: 185,
        name: 'Pastry',
        is_halal: false,
        is_vegetarian: false
      }
    ],
    primary_cuisine: {
      id: 115,
      name: 'Western',
      url_key: 'western',
      main: true
    }
  },
  vendor_legal_information: {
    legal_name: 'Bluebird Coffee Limited',
    address_line_1:
      'Shop B, G/F, Lucky Commercial Centre, 103 Des Voeux Road West, Sai Ying Pun, Western District',
    trade_register_number: '69362841'
  },
  vendor_points: 3,
  vertical: 'restaurants',
  vertical_segment: 'restaurants',
  vertical_parent: 'Restaurant',
  order_flow: 'food',
  web_path:
    'https://www.foodpanda.hk/restaurant/v5cd/bluebird-coffee-sai-ying-pun',
  website: '',
  has_online_payment: false,
  menu: {
    id: 46827,
    code: '',
    name: 'Main Menu',
    description: '',
    type: 'delivery',
    opening_time: '00:00:00',
    closing_time: '23:59:00',
    menu_categories: [
      {
        id: 638000,
        code: '72cf5d89-3a4d-4dac-be6c-f9c146062684',
        name: 'Salad',
        description: '',
        products: [
          {
            id: 92757081,
            code: '1d3dd033-0075-4ef6-8a9e-570c05d45dde',
            name: 'Chicken and Kimchi Salad',
            description:
              'Slow-cooked chicken, home-made kimchi, cucumber, Parmesan cheese and Caesar dressing',
            display_price: '',
            master_category_id: MasterCategoryId.TWO,
            file_path: '',
            logo_path: '',
            images_urls: [],
            images: [],
            is_prepacked_item: false,
            is_sold_out: true,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 93508542,
                code: 'f092abb5-3140-4621-8fca-0f3127424065',
                remote_code: '',
                container_price: 0,
                price: 78.4,
                price_before_discount: 98,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 92758120,
            code: '6802ca9e-a7df-4702-a142-b962a6480afb',
            name: 'Smoked Salmon and Asparagus Salad',
            description:
              'Smoked salmon wrapped asparagus, melting egg, green leaves, Parmesan cheese and Caesar dressing',
            display_price: '',
            master_category_id: MasterCategoryId.TWO,
            file_path: '',
            logo_path: '',
            images_urls: [],
            images: [],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 93509581,
                code: '81ccf6e5-7f56-401c-bb3c-4af7dc718120',
                remote_code: '',
                container_price: 0,
                price: 78.4,
                price_before_discount: 98,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 447674,
        code: 'a8e2f334-b485-476a-9dba-1b5d6c44049e',
        name: 'Yogurts',
        description: '',
        products: [
          {
            id: 4357540,
            code: 'f774e019-a119-4b8e-b025-380ca2519e84',
            name: 'Blueberry Yogurt',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.TWO,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357540.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357540.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357540.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915259,
                code: '1ad841eb-932e-4cf5-bd6f-e5a36dc2317c',
                remote_code: '',
                container_price: 0,
                price: 25.6,
                price_before_discount: 32,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 447669,
        code: '2e687113-d5c5-42e1-9801-abdf82daae61',
        name: 'Baked Pastry',
        description: '',
        products: [
          {
            id: 4357511,
            code: '2d0e0146-0098-463d-82c7-7038e9296ed1',
            name: 'Chocolate Danish',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.THREE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357511.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357511.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357511.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915229,
                code: '93d19fb0-9e0e-4b85-8cca-4133c857d50f',
                remote_code: '',
                container_price: 0,
                price: 20.8,
                price_before_discount: 26,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357512,
            code: '0a8e14ec-be7b-4205-a8b6-a9ce55aa56f3',
            name: 'Cinnamon Swirl',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.THREE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357512.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357512.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357512.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915230,
                code: 'b0b0995f-7584-4196-80c0-6ed838ad444a',
                remote_code: '',
                container_price: 0,
                price: 24.8,
                price_before_discount: 31,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357513,
            code: '0dedad17-9813-4149-9fd4-6269f32ab701',
            name: 'Apple Turnover',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.THREE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357513.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357513.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357513.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915231,
                code: '66a00401-a53f-4a88-8290-87f77c0a5dc2',
                remote_code: '',
                container_price: 0,
                price: 30.4,
                price_before_discount: 38,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357516,
            code: '81575853-61e4-4dbb-bb92-0f472a1b52ba',
            name: 'Spinach Cheese Lattice',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.THREE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357516.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357516.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357516.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915234,
                code: 'ffc87b6f-085c-4705-9208-8cc836d2a468',
                remote_code: '',
                container_price: 0,
                price: 32.8,
                price_before_discount: 41,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false,
            tags: ['popular']
          },
          {
            id: 4357517,
            code: 'a67c2ce3-176e-4188-984a-b922c44f007b',
            name: 'Classic Croissant',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.THREE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357517.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357517.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357517.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915235,
                code: '5c245bc8-09f3-4853-b205-1cf3cd2e0a4f',
                remote_code: '',
                container_price: 0,
                price: 20.8,
                price_before_discount: 26,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 447671,
        code: '62e06284-02ef-4914-8e6d-f75f51c46a28',
        name: 'Desserts',
        description: '',
        products: [
          {
            id: 4357520,
            code: '9b514702-a4b7-4184-bf7c-15c29dbabde8',
            name: 'Blueberry Cheesecake',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.NINE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357520.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357520.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357520.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915238,
                code: '57b69c12-a2e8-4332-8188-e8e8fcf6308d',
                remote_code: '',
                container_price: 0,
                price: 39.2,
                price_before_discount: 49,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 447673,
        code: 'cb9a7748-57de-4595-8f3e-825c6687692a',
        name: 'Small Cakes',
        description: '',
        products: [
          {
            id: 148009833,
            code: '1151cf90-7bd9-4d06-9de5-88744b3fa6a1',
            name: 'Raisin Scone',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.NINE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/148009833.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/148009833.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/148009833.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 148808732,
                code: 'b693ba69-f93b-48a8-bc17-e28ac4766e07',
                remote_code: '',
                container_price: 0,
                price: 24,
                price_before_discount: 30,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 148009838,
            code: '6fb246cc-c545-48f2-8d98-7f52c03626ec',
            name: 'Peanut Brownie ',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.NINE,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/148009838.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/148009838.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/148009838.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 148808737,
                code: '59916371-05e7-4570-afc2-a449476e254f',
                remote_code: '',
                container_price: 0,
                price: 24,
                price_before_discount: 30,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 245860,
        code: 'c980cf0e-c57f-4a2b-a492-c27e3ea656c9',
        name: 'Espresso',
        description: '',
        products: [
          {
            id: 2230172,
            code: 'b7663a39-25e7-48a0-bfe6-819cb98914af',
            name: 'Latte',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230172.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230172.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230172.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518254,
                code: '0048d711-3cc8-4092-b204-bd2fdcf845fe',
                remote_code: '',
                container_price: 0,
                price: 33.6,
                price_before_discount: 42,
                topping_ids: [
                  25389596, 25365209, 25365210, 25139984, 25389594, 25389597
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false,
            tags: ['popular']
          },
          {
            id: 2230173,
            code: 'f555780a-4939-4f6a-8986-10a6a92b8528',
            name: 'Cappuccino',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230173.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230173.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230173.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518257,
                code: 'bb0abcae-6df4-40b7-b6e2-7f4894c0a3c9',
                remote_code: '',
                container_price: 0,
                price: 33.6,
                price_before_discount: 42,
                topping_ids: [
                  25389596, 25365209, 25365210, 25139984, 25389594, 25389597
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false,
            tags: ['popular']
          },
          {
            id: 2230174,
            code: '3d9fbfc0-00bd-4b9e-9243-5c127a17cd55',
            name: 'Americano',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230174.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230174.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230174.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518260,
                code: '1c943b75-96ad-4120-81f0-7f5aaf456d28',
                remote_code: '',
                container_price: 0,
                price: 31.2,
                price_before_discount: 39,
                topping_ids: [
                  25389596, 25365209, 25365210, 25139984, 25389594, 25389597
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false,
            tags: ['popular']
          },
          {
            id: 2230175,
            code: '0301c78c-1677-4edb-86ae-75e866fe0f85',
            name: 'Latte Macchiato',
            description:
              'Pull steamed milk first at the end pull a espresso on the top of milk',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230175.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230175.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230175.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518263,
                code: 'fa4e4ec9-93fb-4972-b0b1-57f3c93929a5',
                remote_code: '',
                container_price: 0,
                price: 33.6,
                price_before_discount: 42,
                topping_ids: [
                  25389596, 25365209, 25365210, 25139984, 25389594, 25389597
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230176,
            code: 'b9838cad-b3ff-4b52-8f93-c4f382604042',
            name: 'Mocha',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230176.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230176.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230176.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518266,
                code: 'c5a6f9ed-e14d-44ed-96e6-c546a56b5c55',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [
                  25389596, 25365209, 25365210, 25139984, 25389594, 25389597,
                  25390678
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357258,
            code: '19b4f035-7a32-480b-8e1c-35811b88b509',
            name: 'Dark Mocha',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357258.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357258.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357258.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4914926,
                code: '6ece1be1-49ee-450f-8305-8820108eb84b',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [
                  25389596, 25365209, 25365210, 25139984, 25389594, 25389597,
                  25390678
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false,
            tags: ['popular']
          },
          {
            id: 2230177,
            code: '1b548c7b-9d72-4e24-a05c-7f20312164f6',
            name: 'Flat White',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230177.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230177.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230177.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518269,
                code: '51748759-6317-47e2-a027-ebb0e02dcbb0',
                remote_code: '',
                container_price: 0,
                price: 31.2,
                price_before_discount: 39,
                topping_ids: [
                  25389598, 25365209, 25365210, 25139984, 25389594, 25389597
                ],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false,
            tags: ['popular']
          },
          {
            id: 2230178,
            code: 'a3f9a16c-8021-443d-9d77-dbae6f97fead',
            name: 'Piccolo',
            description:
              'A single espresso with 2oz milk, a double espresso with 4oz milk',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230178.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230178.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230178.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518272,
                code: 'd7d2a1a4-cbb2-4dc6-a1cf-f659b2dcff36',
                remote_code: '',
                container_price: 0,
                price: 25.6,
                price_before_discount: 32,
                topping_ids: [25389161, 25365210, 25139984, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230179,
            code: 'a4a00583-9db2-4235-bb06-a8d96606070a',
            name: 'Espresso Macchiato',
            description: 'Espresso with 1 spoon of foam on top',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230179.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230179.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230179.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518275,
                code: '3b60bd30-8ad9-4976-bfba-8a6b7c95e879',
                remote_code: '',
                container_price: 0,
                price: 23.2,
                price_before_discount: 29,
                topping_ids: [25389161, 25365210, 25139984, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230180,
            code: '33e513e0-2802-4207-8120-d34d0b92d1b4',
            name: 'Cortado',
            description: 'Espresso mixed with hot milk | no foam',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230180.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230180.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230180.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518278,
                code: '5fe46d55-3ec0-4ec2-b5c0-b1fe7babff21',
                remote_code: '',
                container_price: 0,
                price: 23.2,
                price_before_discount: 29,
                topping_ids: [25389161, 25365210, 25139984, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230181,
            code: 'f30dcc12-defb-4472-b83e-cedae1aabecd',
            name: 'Con Panna',
            description: 'Espresso with whipped cream on top',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230181.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230181.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230181.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518281,
                code: '4935afed-30da-4caa-92c2-f25a5cb7413a',
                remote_code: '',
                container_price: 0,
                price: 23.2,
                price_before_discount: 29,
                topping_ids: [25389161, 25139984, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230182,
            code: '942fa8cc-a6d5-4318-b425-631c2ddead6c',
            name: 'Espresso',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230182.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230182.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230182.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518284,
                code: '30949e17-5043-4bb0-b9ae-811040a03813',
                remote_code: '',
                container_price: 0,
                price: 20.8,
                price_before_discount: 26,
                topping_ids: [25389161, 25390680, 25139984, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 245863,
        code: 'b3bb5c67-7c12-441c-ac3b-a4cd30c2b930',
        name: 'Hand Crafted',
        description: '',
        products: [
          {
            id: 2230191,
            code: '03f3f9e3-b60e-495b-98e6-dbe406b74116',
            name: 'Hand Drip',
            description: 'Regular beans',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230191.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230191.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230191.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518295,
                code: 'ab15f13e-1078-4f06-94b6-7b65e218c3eb',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389598, 25389595],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230195,
            code: 'c00ff241-df14-4fbb-a029-9d7f9946a037',
            name: 'Ice Drip',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230195.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230195.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230195.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518307,
                code: '0baffef6-d44d-4601-8c99-1eacd187d43d',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389598],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230196,
            code: '2d815b1d-48b4-4daa-8331-43b1ff7d4c76',
            name: 'Cold Brew',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230196.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230196.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230196.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518310,
                code: '26ed9e83-a229-4744-87b9-7ef007bbf3d0',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389598],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 245864,
        code: 'fa75e668-f18f-48cd-8169-3c6c0b862afb',
        name: 'Non-Coffee',
        description: '',
        products: [
          {
            id: 2230198,
            code: '65282993-605d-46e0-8966-219d0b8bee95',
            name: 'Chocolate',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230198.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230198.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230198.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518316,
                code: '9e1fae70-c6da-4bf5-a101-7c48763d02f4',
                remote_code: '',
                container_price: 0,
                price: 33.6,
                price_before_discount: 42,
                topping_ids: [25389596, 25365209, 25365210],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230199,
            code: 'e39913ef-7436-4946-8700-08dcd8ef3ed8',
            name: 'Matcha Latte',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230199.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230199.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230199.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518319,
                code: '4c941b7d-8eea-4599-b92c-8793a8cca221',
                remote_code: '',
                container_price: 0,
                price: 33.6,
                price_before_discount: 42,
                topping_ids: [25389596, 25365209, 25365210],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357270,
            code: '4f26a102-ba09-4476-bbfb-371dd9d3e61d',
            name: 'Tea',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path: '',
            logo_path: '',
            images_urls: [],
            images: [],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4914940,
                code: '91bd9b2c-cd95-4b83-86bd-650e12200ca8',
                remote_code: '',
                container_price: 0,
                price: 25.6,
                price_before_discount: 32,
                topping_ids: [25389596, 25365209, 25410079],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 59857233,
            code: '7cf8d407-3a81-4634-936c-56a774303ae2',
            name: 'Chai Latte',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/59857233.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/59857233.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/59857233.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 60535655,
                code: '7ce6ab66-79f5-46fa-b08f-542e21e07299',
                remote_code: '',
                container_price: 0,
                price: 33.6,
                price_before_discount: 42,
                topping_ids: [25389596, 25365209],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 245865,
        code: '460a0b3a-a22e-402f-81e0-c536811f11a0',
        name: 'Specials',
        description: '',
        products: [
          {
            id: 2230204,
            code: 'b248da9a-a190-4f0e-9fcb-fe4ae4b0cda7',
            name: 'Marshmallow Latte',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230204.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230204.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230204.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518334,
                code: 'f8c47dce-3aba-418c-b03a-73ac14a25e9b',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25365210, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230206,
            code: 'c9c9c0c8-0126-4c46-a97d-5302ba491ece',
            name: 'Peanut Butter Latte',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230206.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230206.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230206.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518340,
                code: 'c7a4cb18-b45b-410b-a2b9-6c102eb099b8',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25365209, 25365210, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230207,
            code: 'bc313971-2417-4c3a-aedc-223344ceba59',
            name: 'Nutella Latte',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230207.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230207.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230207.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518343,
                code: 'c3ba1df2-784b-4782-9c49-9a1a998097c0',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25365209, 25365210, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 2230208,
            code: '24de6a12-d65d-42f3-bc8b-06289d8ab2b6',
            name: 'Espresso Tonic',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230208.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/2230208.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/2230208.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 2518346,
                code: 'f41c99e5-ff52-4ef6-8b69-db5d1b0aa0e0',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 59857234,
            code: '52b25e79-90f7-48f3-b473-87bae6486ece',
            name: 'Dirty Chai',
            description: 'Panna chai with espresso ',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/59857234.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/59857234.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/59857234.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 60535656,
                code: 'f0fbc00a-71af-4dd5-90ed-f2c32533a8c1',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25365209, 25365210, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 245866,
        code: 'f95109c4-0d20-4c85-bd3f-ac28ced16038',
        name: 'Originals',
        description: '',
        products: [
          {
            id: 20962447,
            code: 'e8349852-129e-411e-8357-79d359c85c33',
            name: 'First Light',
            description: 'Hot |  Earl grey honey comb latte  ',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/20962447.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/20962447.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/20962447.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 21567046,
                code: 'ed0caefb-8a0a-4644-8e41-911141959181',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25365210, 25389594, 25389597, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 20962448,
            code: 'c9058eaf-15f9-4580-a9d3-07cb4f802705',
            name: 'Sunset',
            description: 'Iced only | Orange juice tonic water with espresso',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/20962448.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/20962448.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/20962448.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 21567047,
                code: '31fdaf14-215e-4f89-a2d4-43e5a864c01f',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 20970497,
            code: '48e808cf-febd-403d-b8cc-1b1638c12c0f',
            name: 'Midnight ',
            description:
              'Iced only | Butterfly pea flower with mint flavour and espresso',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/20970497.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/20970497.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/20970497.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 21573681,
                code: '2e7696bf-fd0a-44cc-b7ae-716d6aec25b1',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25389594, 25389597],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 447658,
        code: '2c406dc3-cf9f-4280-a0e0-0f75b306fb9b',
        name: 'Frappe',
        description: 'Cold',
        products: [
          {
            id: 4342865,
            code: 'f8015eca-cc7a-4ae4-b70a-6147b76a1600',
            name: 'Peanut Butter Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342865.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342865.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342865.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899874,
                code: '13dea864-d87d-42af-8d52-9060847d8129',
                remote_code: '',
                container_price: 0,
                name: 'Tall',
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342863,
            code: '0a857524-b421-4142-a33f-a3619deba9fc',
            name: 'Dark Mocha Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342863.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342863.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342863.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899872,
                code: '885796e2-40ea-458b-8bbd-5b2837cd2b95',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342866,
            code: 'bd8e9114-1a1d-41d0-a76f-c74235d04aa8',
            name: 'Nutella Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342866.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342866.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342866.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899875,
                code: 'ea4f23e5-de0c-489a-a267-160d423bed59',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342867,
            code: 'a1beb4df-6a30-4238-bd4e-1751ede3ef9e',
            name: 'Espresso Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342867.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342867.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342867.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899877,
                code: '93f8f488-b02e-4fce-9fd2-bf20fd765c23',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342869,
            code: '726ffcc0-430b-4091-a618-6700788d1d61',
            name: 'Matcha Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path: '',
            logo_path: '',
            images_urls: [],
            images: [],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899880,
                code: '0cbf9488-b5d7-4188-9825-39906aec5204',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342870,
            code: '4004dfb8-7067-4416-9d0d-22b372cc48f0',
            name: 'Caramel Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342870.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342870.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342870.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899881,
                code: 'c59489ed-78ad-4a8d-ae41-b14d46cde0da',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342868,
            code: '2a45d344-e45c-4182-b0bb-c27e2d960d6e',
            name: 'Purple Sweet Potato Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342868.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342868.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342868.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899879,
                code: '82080016-356d-412e-9113-5ae3131866af',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342875,
            code: '74306a3f-058a-4970-8f81-497ea205ebcd',
            name: 'Mango Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342875.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342875.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342875.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899886,
                code: '848b09b8-2b76-4de1-9723-07f9789c99e7',
                remote_code: '',
                container_price: 0,
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4342864,
            code: 'f0507018-440f-4b62-b516-826dc05c7599',
            name: 'Chocolate Chip Frappe',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.ELEVEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342864.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4342864.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4342864.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4899873,
                code: '158c4880-e079-4b59-b76c-effbf260c63e',
                remote_code: '',
                container_price: 0,
                name: 'Tall',
                price: 36.8,
                price_before_discount: 46,
                topping_ids: [25389596, 25390679, 25365210, 25390678],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      },
      {
        id: 447672,
        code: '058a442a-67f5-4696-a6ed-b759df91b852',
        name: 'Coffee Bean',
        description: '',
        products: [
          {
            id: 4357523,
            code: '01dfe845-bee6-4ed7-bbe4-eb8dee998048',
            name: 'Cobalt House Blend',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.TEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357523.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357523.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357523.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915242,
                code: '059de3dd-f625-4a40-85d7-f5dbe4b0ca98',
                remote_code: '',
                container_price: 0,
                price: 128,
                price_before_discount: 160,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357524,
            code: '0ec7325c-2b89-4276-a7ae-eb93485d24b8',
            name: 'Tyrian House Blend',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.TEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357524.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357524.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357524.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915243,
                code: '09a7b4b5-b0a9-4814-8152-badf142788fc',
                remote_code: '',
                container_price: 0,
                price: 128,
                price_before_discount: 160,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357525,
            code: '65d5e327-bf42-4ab3-a33e-90db0d83aa0e',
            name: 'Ethiopia Single Origin',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.TEN,
            file_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357525.jpg?width=%s',
            logo_path:
              'https://images.deliveryhero.io/image/fd-hk/Products/4357525.jpg?width=%s',
            images_urls: [],
            images: [
              {
                image_url:
                  'https://images.deliveryhero.io/image/fd-hk/Products/4357525.jpg',
                tags: {}
              }
            ],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915244,
                code: 'a13a10d4-2aab-4cf2-90cd-8d0544b63374',
                remote_code: '',
                container_price: 0,
                price: 192,
                price_before_discount: 240,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          },
          {
            id: 4357526,
            code: '679f2acf-ad86-49d1-a7e1-33c224e0c0f0',
            name: 'Kenya Single Origin',
            description: '',
            display_price: '',
            master_category_id: MasterCategoryId.TEN,
            file_path: '',
            logo_path: '',
            images_urls: [],
            images: [],
            is_prepacked_item: false,
            is_sold_out: false,
            is_express_item: true,
            exclude_dish_information: false,
            additives: [],
            is_alcoholic_item: false,
            sold_out_options: [
              {
                default: true,
                option: SoldOutOptionType.REFUND,
                text: 'NEXTGEN_SoldOutOptions_Refund'
              },
              {
                default: false,
                option: SoldOutOptionType.CANCEL,
                text: 'NEXTGEN_SoldOutOptions_Cancel'
              },
              {
                default: false,
                option: SoldOutOptionType.CALL_CUSTOMER,
                text: 'NEXTGEN_SoldOutOptions_CALL_CUSTOMER'
              }
            ],
            product_variations: [
              {
                id: 4915245,
                code: '1b148ff5-f714-49c2-abf4-42922f4e18f3',
                remote_code: '',
                container_price: 0,
                price: 192,
                price_before_discount: 240,
                topping_ids: [],
                is_vegetarian: false,
                is_non_vegetarian: false,
                spiceness: ''
              }
            ],
            half_type: '',
            is_half_type_available: false
          }
        ],
        is_popular_category: false
      }
    ],
    toppings: {
      25139984: {
        id: 25139984,
        name: 'Beverages - Add Flavour',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30587154,
            product_id: 2230183,
            name: 'Vanilla',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30587155,
            product_id: 2230184,
            name: 'Caramel',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30587156,
            product_id: 2230185,
            name: 'Hazelnut',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30587157,
            product_id: 2230186,
            name: 'Salted Caramel',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30587158,
            product_id: 2230187,
            name: 'Toffee Nut',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25365209: {
        id: 25365209,
        name: 'Beverages - Hot or Iced',
        description: '',
        quantity_minimum: 1,
        quantity_maximum: 1,
        options: [
          {
            id: 30597269,
            product_id: 4335667,
            name: 'Hot',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597270,
            product_id: 4335669,
            name: 'Iced',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25365210: {
        id: 25365210,
        name: 'Beverages - Change Milk',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30601990,
            product_id: 4168469,
            name: 'Skimmed Milk',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30601991,
            product_id: 4320593,
            name: 'Soy Milk',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30601992,
            product_id: 4320595,
            name: 'Oat Milk',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25389161: {
        id: 25389161,
        name: 'Choose Sizes - Single, Double & Triple',
        description: '',
        quantity_minimum: 1,
        quantity_maximum: 1,
        options: [
          {
            id: 30597281,
            product_id: 4320590,
            name: 'Single',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597282,
            product_id: 4320592,
            name: 'Double',
            description: '',
            price: 5.6,
            price_before_discount: 7,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597283,
            product_id: 4320594,
            name: 'Triple',
            description: '',
            price: 11.2,
            price_before_discount: 14,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25389594: {
        id: 25389594,
        name: 'Beverages - Change Espresso Bean',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30597284,
            product_id: 4335677,
            name: 'Tyrian House Blend - Fruity',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25389595: {
        id: 25389595,
        name: 'Beverages - Choose Coffee Beans',
        description: '',
        quantity_minimum: 1,
        quantity_maximum: 1,
        options: [
          {
            id: 30597274,
            product_id: 4335664,
            name: 'Cobalt House Blend - Nutty',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597275,
            product_id: 4335668,
            name: 'Tyrian House Blend - Fruity',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25389596: {
        id: 25389596,
        name: 'Choose Sizes - Tall, Grande & Venti',
        description: '',
        quantity_minimum: 1,
        quantity_maximum: 1,
        options: [
          {
            id: 30597271,
            product_id: 4335662,
            name: 'Tall',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597272,
            product_id: 4335666,
            name: 'Grande',
            description: '',
            price: 5.6,
            price_before_discount: 7,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597273,
            product_id: 4335670,
            name: 'Venti',
            description: '',
            price: 11.2,
            price_before_discount: 14,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25389597: {
        id: 25389597,
        name: 'Beverages - Extra/Less Shots',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30597285,
            product_id: 4335676,
            name: 'Less 1 Shot',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597286,
            product_id: 4335678,
            name: 'Extra 1 Shot',
            description: '',
            price: 5.6,
            price_before_discount: 7,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597287,
            product_id: 4335679,
            name: 'Extra 2 Shots',
            description: '',
            price: 11.2,
            price_before_discount: 14,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25389598: {
        id: 25389598,
        name: 'Choose Sizes - Short, Tall & Grande',
        description: '',
        quantity_minimum: 1,
        quantity_maximum: 1,
        options: [
          {
            id: 30597362,
            product_id: 4335681,
            name: 'Short',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597363,
            product_id: 4335685,
            name: 'Tall',
            description: '',
            price: 5.6,
            price_before_discount: 7,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30597364,
            product_id: 4335687,
            name: 'Grande',
            description: '',
            price: 11.2,
            price_before_discount: 14,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25390678: {
        id: 25390678,
        name: 'Beverages - Add Whipped Cream',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30601997,
            product_id: 4342681,
            name: 'Whipped Cream',
            description: '',
            price: 3.2,
            price_before_discount: 4,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25390679: {
        id: 25390679,
        name: 'Beverages - Sweetness',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30601998,
            product_id: 4342682,
            name: 'Less Sweet',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25390680: {
        id: 25390680,
        name: 'Beverages - Change to Ristretto or Lungo',
        description: '',
        quantity_minimum: 0,
        quantity_maximum: 1,
        options: [
          {
            id: 30602014,
            product_id: 4342683,
            name: 'Ristretto',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 30602015,
            product_id: 4342688,
            name: 'Lungo',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      },
      25410079: {
        id: 25410079,
        name: 'Choose Tea',
        description: '',
        quantity_minimum: 1,
        quantity_maximum: 1,
        options: [
          {
            id: 31051615,
            product_id: 4655775,
            name: 'Jasmine Tea',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 31051616,
            product_id: 4655776,
            name: 'Earl Grey Tea',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 31051617,
            product_id: 4655777,
            name: 'English Breakfast Tea',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          },
          {
            id: 31051618,
            product_id: 4655778,
            name: 'Darjeeling Tea',
            description: '',
            price: 0,
            is_sold_out: false,
            is_half_half_applicable: false,
            remote_code: ''
          }
        ]
      }
    },
    tags: {
      popular: {
        name: 'popular',
        translation_keys: {
          description: 'NEXTGEN_POPULAR_CATEGORY_DESCRIPTION',
          title: 'NEXTGEN_POPULAR_DISH_TAG'
        },
        elements: ['category', 'label'],
        metadata: null
      }
    }
  }
}
