
export default function TwoColumnLayout({one, two, className="", classNameOne="", classNameTwo=""}) {
  return (
    <section className={`flex flex-col lg:flex-row ${className}`}>
        <div className={`flex-1 lg:h-full ${classNameOne}`} >{one}</div>
        <div className={`flex-1 lg:h-full ${classNameTwo}`} >{two}</div>
    </section>
  )
}