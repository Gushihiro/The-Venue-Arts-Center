import './Header.css'
import Logo from '../../images/venueartslogo.png'

export default function header() {
  return (
    <div className='header'>
      <img src={Logo} alt='The Venue Arts Center' />
    </div>
  )
}
