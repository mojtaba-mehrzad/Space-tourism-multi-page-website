export default function Split({ children, className = "" }) {
  return (
    <section className={`flex flex-col lg:flex-row w-screen ${className}`}>
      {children}
    </section>
  );
}

Split.Left = function Left({ children, className = "" }) {
  return <div className={`flex-1 lg:h-full ${className}`}>{children}</div>;
};

Split.Right = function Right({ children, className = "" }) {
  return <div className={`flex-1 lg:h-full ${className}`}>{children}</div>;
};