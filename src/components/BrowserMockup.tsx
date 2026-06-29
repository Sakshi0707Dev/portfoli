interface BrowserMockupProps {
  src: string
  alt: string
}

export default function BrowserMockup({ src, alt }: BrowserMockupProps) {
  return (
    <div className="browser-frame">
      <div className="browser-header">
        <div className="traffic-lights">
          <span className="traffic-dot red" />
          <span className="traffic-dot yellow" />
          <span className="traffic-dot green" />
        </div>
        <div className="browser-address-bar">
          <span className="address-text">{alt.replace('Screenshot of ', '')}</span>
        </div>
      </div>
      <div className="browser-content">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
