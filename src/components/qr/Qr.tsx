import Colors from 'assets/colors'
const QRCode = require('qrcode.react')

interface QrProps {
  url: string
  size: 128 | 256 | 512
}

export default function Qr({ url, size }: QrProps) {
  return (
    <QRCode
      value={url}
      size={size}
      bgColor={Colors.WHITE}
      fgColor={Colors.BLACK}
      level="L"
      includeMargin={false}
      renderAs="svg"
      imageSettings={{
        src: '',
        x: null,
        y: null,
        height: 24,
        width: 24,
        excavate: false
      }}
    />
  )
}
