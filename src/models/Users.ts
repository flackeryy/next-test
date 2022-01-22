export interface UserAccount {
  uid: string
  personalInfo: {
    fullName: string
    primaryEmail: string
    avatar: string // ImageSourcePropType
    photos: Photos[]
    birthday: Date
    address: {
      streetAddress: string // request location from user, parse into correct format
      locality: string
      district?: HKDistricts
      country: string | 'Hong Kong' // defaults to Hong Kong if not user inputted
      region: string
    }
  }
  createdAt: Date // unix timestamp, from Firebase
  updatedAt: Date // unix timestamp (when user updated profile last)
  lastActive: Date // unix timestamp, heartbeat
}

interface Photos {
  id: string
  image: string // ImageSourcePropType
  isCropped: boolean
  processedFiles: {
    croppedImage: string // ImageSourcePropType
  }[]
}

// https://en.wikipedia.org/wiki/Districts_of_Hong_Kong
enum HKDistricts {
  ISLANDS = 'ISLANDS',
  KWAI_TSING = 'KWAI_TSING',
  NORTH = 'NORTH',
  SAI_KUNG = 'SAI_KUNG',
  SHA_TIN = 'SHA_TIN',
  TAI_PO = 'TAI_PO',
  TSUEN_WAN = 'TSUEN_WAN',
  TUEN_MUN = 'TUEN_MUN',
  YUEN_LONG = 'YUEN_LONG',
  KOWLOON_CITY = 'KOWLOON_CITY',
  KWUN_TONG = 'KWUN_TONG',
  SHAM_SHUI_PO = 'SHAM_SHUI_PO',
  WONG_TAI_SIN = 'WONG_TAI_SIN',
  YAU_TSIM_MONG = 'YAU_TSIM_MONG',
  CENTRAL_AND_WESTERN = 'CENTRAL_AND_WESTERN',
  EASTERN = 'EASTERN',
  SOUTHERN = 'SOUTHERN',
  WAN_CHAI = 'WAN_CHAI'
}
