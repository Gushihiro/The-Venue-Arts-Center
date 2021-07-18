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
              <EmailIcon/><p>: email@email</p>
            </div>
            <div className='phoneinfo'>
             <PhoneAndroidIcon/><p>: (360) 865-8586</p>
            </div>
            <div className='addressinfo'>
              <BusinessIcon/>
              <p>
                 : 116 N Callow Ave, Bremerton, WA 98312
              </p>
            </div>
          </div>
          <Typography variant="h6">
            Venue Arts Center
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
