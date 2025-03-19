const ButtonContact = () => {
  return (
    <>
      <button
        onClick={() => window.open('tel:', '_self')}
        className='mt-5 rounded bg-red-500 px-8 py-2 text-xl font-bold text-white hover:bg-red-700'
      >
        Liên Hệ
      </button>
    </>
  )
}

export default ButtonContact
