export default function PageHeader({ number, title }) {
  return (
    <header className="page-title">
      <h1>
        <span className="page-title-number">{number}</span>
        {title}
      </h1>
    </header>
  );
}
