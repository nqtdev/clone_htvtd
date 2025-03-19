import PropTypes from 'prop-types'
import Mail from 'assets/icon_buttons/seenMail.webp'

const ButtonMail = ({emailAddress}) => {
  return (
    <div className='button_mail animate-bounce'>
      <a href={`mailto:${emailAddress}`}>
        <img className='w-[70%] xl:w-[80%]' src={Mail} alt='' />
      </a>
    </div>
  )
}

ButtonMail.propTypes = {
  emailAddress: PropTypes.string.isRequired,
}

export default ButtonMail
