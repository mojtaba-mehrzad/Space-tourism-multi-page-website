
export default function TwoColumnLayout({one, two}) {
  return (
    <section className='flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:py-[132px] sm:max-w-lg lg:max-w-full lg:h-[734px]'>
        <div className='flex-1 lg:h-full'>{one}</div>
        <div className='flex-1 lg:h-full'>{two}</div>
    </section>
  )
}