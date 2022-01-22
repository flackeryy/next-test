import Qr from 'components/qr/Qr'
import * as htmlToImage from 'html-to-image'
import download from 'js-file-download'
import JSZip from 'jszip'

import { jsxToString } from './react'

function createQrNode() {
  const renderNode = document.createElement('div')
  renderNode.setAttribute(
    'style',
    `
    width: fit-content;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -11;
  `
  )
  return renderNode
}

function createQrCover() {
  const renderCover = document.createElement('div')
  renderCover.setAttribute(
    'style',
    `
    width: 500px;
    height: 500px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    background: #f4f5f7;
  `
  )
  return renderCover
}

const styles = {
  root: {
    padding: '2.5rem',
    background: '#fff'
  }
}

async function prepareQr(qr: any): Promise<Blob> {
  const renderNode = createQrNode()
  const renderCover = createQrCover()

  const qrNode = (
    <div style={styles.root}>
      <Qr url={qr.link} size={256} />
    </div>
  )

  renderNode.innerHTML = jsxToString(qrNode)

  document.body.appendChild(renderNode)
  document.body.appendChild(renderCover)

  const blob = await htmlToImage.toBlob(renderNode)

  return blob as Blob
}

function getQrName(area: string, table: string) {
  return `${area} - ${table}.png`
}

export async function downloadQr(
  qrs: any[] = [],
  areas?: any,
  asZip?: boolean
) {
  try {
    if (!asZip) {
      const blob = await prepareQr(qrs[0])
      download(blob, getQrName(qrs[0].area, qrs[0].name))
      return
    }

    const zip = new JSZip()
    const images = zip.folder('qr-codes') as any

    for (const qr of qrs) {
      const blob = await prepareQr(qr)

      const areaName =
        typeof qr.area === 'number' && areas ? areas[qr.area] : qr.area

      images.file(getQrName(areaName, qr.name), blob as Blob)
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      download(content, `${Date.now()}.zip`)
    })
  } catch (e) {
    console.error(e)
  }
}
