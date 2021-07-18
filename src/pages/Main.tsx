import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import image1 from '../images/artsgather.jpg'
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header from '../components/Header';
export default function Main() {
  return (
    <div className='mainpage'>
      <Header />
      <NavBar />
      <div className='missiontop'/>
      <div className='missionheader'>
        <h1>Our Mission ?</h1>
      </div>
      <div className='missiontext'>
        <h2>To Restore Preserve, Perpetuate and Protect All Forms of “The Arts;” Wherever Needed, Necessary, or Required.</h2>
      </div>
      <div className='missionbottom'/>
      <div className='aboutusCont'>
        <div className='aboutustext'>
          <h1>About Us</h1>
          <h3>
            The Venue Arts Center is a fund-raising non-profit festival group explicitly focused on raising funds for other non-profits. In exchange for our services, 
            we collect our fair percentage. Each event is a 100% fundraising event.
            Our current focus is establishing annual Events.

          </h3>
        </div>
        <div className='imagecarousel'>
          <img src={image1} alt='Gathering' />
        </div>
      </div>
      <div className='eventsinfo'>
        <h1>Upcoming Events:</h1>
        <div className='bluesevent'>
          <h2>"I Got the Blues" Festival - By the Evergreen Festival Group</h2>
          <div className='eventdate'>
            <EventIcon /> 
            <h4>When: TBA</h4>
          </div>
          <div className='eventlocation'>
            <LocationOnIcon />
            <h4>
              Where: Whidbey Island Windjammer Park, Oak Harbor
            </h4>
          </div>
        </div>
      </div>
      <div className='sponsorinfo'>
        <h1>EVENT SPONSORSHIP</h1>
        <h2>
          We are always looking for and appreciate quality support. Though advertising space is limited, 
          monetary and tangible goods as sponsorship are more than welcome. Join us on this journey to save and promote
          the arts.
        </h2>
      </div>
      <div className='donationinfo'>
        <h1>BE A DONOR</h1>
        <h2>
          Any donations are much appreciated and can be made to 'The Venue Arts Center.' Please save
          your receipts and check stubs.
          As a non-profit with a 501(c)3, you will receive tax credit for your donations.
        </h2>
      </div>
      <div className='volunteerinfo'>
        <h2>
          Volunteers will be needed for a number of tasks, leading up to the festival itself.
          Keep checking this website for updates regarding future volunteer notices.
        </h2>
      </div>
      <Footer />
    </div>
  )
}
