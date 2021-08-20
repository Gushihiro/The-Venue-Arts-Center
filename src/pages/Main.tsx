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
        <h1>About Us</h1>
      </div>
      <div className='missiontext'>
        <h2>The "Venue Arts Center". When you say it slowly, it actually depicts and embraces the essence, of both the Organization and the Facility. The Venue Arts Center or The V. A. C., is an Instructional and Learning Facility, based around and on, a minimum, 1,000+ seat capacity, Performance Venue.
          When completed, it then becomes more than a Concept. This facility will have the outward appearance of a Broad Scale Performing Arts Center.
          It will be equipped with the ability to show 70 millimeter movie productions, Live Theater, and Music as well as other types of Stage Performances, with Full Production capabilities. In addition, there will be a state of the art, Gourmet Cooking and Serving Facility to accomodate the Culinary Arts. The facility will be one big Training and Learning Center, and every position will be a paid Internship. Wall space and some limited floor space will be available for Student Artists to display works.
          When constructing the Center from the ground up, and completion of the Performance and Culinary areas are ready to be Occupied, this will be the first component or Phase #1 of the Center's developing process. Performing Arts and associated arts like Stage Crafting and Sound and Light Engineering, along with Culinary, and all kinds of Graphic Arts training, will be conducted in this Main facility. All other forms of The Arts will be taught in a seperate, yet to be determined Off Premise Campus. Some stages and phases of Film Production will be allowed in the facility based on availability. Film work, will eventually require it's own facility, in the future and maybe even a Sound Stage. Also, an A-List worthy Recording Studio will be incorporated into Phase #1 as an added service to incoming National Performers.
          One main goal of the VAC is to make Educational Opportunities available, in the form of, "Hands On" Internships, in the various Fields of Creativity that the VAC will offer.
          We want to bring everyday, real time experience, to the On-Line concept, of 1 stop shopping, when comes to offering Live Courses, but In Person, in, whatever form of The Arts, a person is interested in learning.
          One additional goal, is to become an accredited Learning and Instructional Center, with Nationally recognized, Valid Certification using the famous Julliard, as a Bar for Excellence. Eventually we would like to offer Scholarships as well.
          Enrollment will be open to anyone over 18, and financial assistance programs will be in place, for those that may require them. Handicapped, Disabled, DAV, Ex Military, Seniors, and the Financially Challenged will 
          be encouraged to apply.
          We intend to set up a special dept to process and monitor, "Job Placement" activities and "Financial" assistance. A typical course is 1 year, which includes 6 months of Training and 6 months of Internship, with Job Placement at completion of the Course. Not all Arts classes will come with Job Placement. In other words, if you want to learn how to Paint or Juggle, you'll have the Skills to make your own way.
          The Motto and Mission Statement of The Venue Arts Center is to "Restore, Preserve, Perpetuate, Protect and Perform all forms of The Arts wherever needed or deemed to be Required.
          Restore could mean anything from bringing back Lost Arts, to Restoring Old Theaters and Venues, or to play, repair or build Vintage Instruments. Preserving could mean, not letting certain Art Forms become extinct. Perpetuating, is reinforcing all The Arts for 
          " Life" and future generations.
          We are the "Archivists" and the "Ressurectors". We will take The Smithsonian, one step further. In essence, we want to Preserve Our Heritage, because someone has to.
          The Arts represent the story of our lives as humans, and how we have grown and changed, and influenced each other. The Arts is our Fabric, keeps us warm and make us feel cool too.
          We are The Venue Arts Center and we want to see The Arts stick around, this is our Pilot Project, and we want to see a Venue Arts Center in every corner of this Country.
          We are Proud and Honored to announce we will be building our Pilot Project in Oak Harbor Washington on Whidbey Island and slowly transitioning from our temporary home office in Bremerton to a new location Oak Harbor over the next few months.
          This move will make us new residents and put us closer to the Music Festival we have postponed til next summer.
          We will be VAC Presents and we hope to see you sooner than later.
        </h2>
        <h2>Greetings To All of You</h2>
        <h2>Ed Seifert CEO & Scot Jones CFO</h2>
      </div>
      <div className='missionbottom'/>
      <div className='aboutusCont'>
        {/* <div className='aboutustext'>
          <h1>About Us</h1>
          <h3>
            The Venue Arts Center is a fund-raising non-profit festival group explicitly focused on raising funds for other non-profits. In exchange for our services, 
            we collect our fair percentage. Each event is a 100% fundraising event.
            Our current focus is establishing annual Events.

          </h3>
        </div> */}
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
