import Form from './form'

const LayoutForm = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
    <div className="mx-auto w-full max-w-4xl">
      <section className="bg-gray-100 w-full">
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <Form/>
        </div>
      </section>
    </div>
  </main>
  )
}

export default LayoutForm