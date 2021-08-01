import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import BusinessIcon from '@material-ui/icons/Business';
import './NavBar.css';
export default function NavBar() {
  return (
    <div className='navbar'>
      <AppBar position="static">
        <Toolbar>
          <div className='contactinfo'>
            <div className='emailinfo'>
              <a href="mailto:myemailaddress@gmail.com">
                <EmailIcon/>
              </a>
              <p className='email'>: e.seifert@thevenueartscenter.org</p>
            </div>
            <div className='phoneinfo'>
              <a href='tel:360-850-8586'>
                <PhoneAndroidIcon/>
              </a>
              <p className='phoneNumber'>: (360) 865-8586</p>
            </div>
            <div className='addressinfo'>
              <BusinessIcon tabIndex={0} onClick={() => {navigator.clipboard.writeText('116 N Callow Ave, Bremerton, WA 98312')}}/>
              <p className='address'>
                 : 116 N Callow Ave, Bremerton, WA 98312
              </p>
            </div>
          </div>
          <Typography variant="h6">
            The Venue Arts Center
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
