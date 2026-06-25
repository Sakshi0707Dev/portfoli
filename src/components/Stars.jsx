export default function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className="star" />
      ))}
    </div>
  )
}
