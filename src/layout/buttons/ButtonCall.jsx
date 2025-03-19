import PropTypes from 'prop-types'
import Call from 'assets/icon_buttons/Call.webp'

const ButtonCall = ({phoneNumber}) => {
  return (
    <div className='button_call animate-wiggle-more animate-duration-[2000ms] animate-infinite animate-ease-in-out'>
      <a href={`tel:${phoneNumber}`}>
        <img className='w-[70%] xl:w-[80%]' src={Call} alt='' />
      </a>
    </div>
  )
}
ButtonCall.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
}
export default ButtonCall
