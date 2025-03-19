import PosterPage from './Poster'
import ShowDevice from './showDevice'
import ShowDeviceLaptop from './showDeviceLaptop'
import ShowDevicePrint from './showDevicePrint'
const IdPassPage = () => {
  return (
    <div className='container m-auto'>
      <section>
        <PosterPage />
      </section>
      <section>
        <ShowDevice />
      </section>
      <section>
        <ShowDeviceLaptop />
      </section>
      <section>
        <ShowDevicePrint />
      </section>
    </div>
  )
}

export default IdPassPage
