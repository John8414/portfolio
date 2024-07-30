import { ColLeft, ColRight, Footer, Header } from './components'

const page = () => {
  return (
    <div className='container max-w-[1200px] mx-auto lg:px-16 px-4'>
      <Header />
      <div className='grid grid-cols-12 gap-8'>
        <div className='lg:col-span-5 col-span-12'>
          <ColLeft />
        </div>
        <div className='lg:col-span-7 col-span-12'>
          <ColRight />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page