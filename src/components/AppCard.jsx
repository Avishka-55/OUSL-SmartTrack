export default function AppCard({ href, icon, tag, name, desc, features }) {
  return (
    <a href={href} className="app-card">
      <div className="card-top">
        <div className="card-icon-wrap">{icon}</div>
        <span className="card-tag">{tag}</span>
      </div>
      <div className="card-name">{name}</div>
      <div className="card-desc">{desc}</div>
      <div className="card-features">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-item">
            <div className="feature-dot"></div>
            {feature}
          </div>
        ))}
      </div>
    </a>
  );
}
