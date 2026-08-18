const CREDENTIALS = [
  'KWG Ventures',
  'Namu Robotics',
  'Oilstone Technologies',
  'Rotman School of Management',
  'PMI',
  'Yale SOM',
]

export default function CredentialsStrip() {
  return (
    <section className="credentials-strip">
      <div className="container">
        <div className="label">Founded and led by operators from</div>
        <div className="credentials-row">
          {CREDENTIALS.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
