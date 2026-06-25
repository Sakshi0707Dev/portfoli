export default function SectionTitle({ children }) {
  return (
    <h2 className="card-title">
      <div className="corner top left" />
      <div className="corner top right" />
      <div className="corner bottom left" />
      <div className="corner bottom right" />
      {children}
    </h2>
  )
}
