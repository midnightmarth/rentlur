import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

// components
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import SavedRentals from './components/SavedRentals.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import NavBar from './components/NavBar.jsx';
import Details from './components/Details.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: [],
      savedRentals:[
        {
            "category": "austin.craigslist.org",
            "date": "2018-10-24 11:04",
            "hasPic": true,
            "location": "(South Central)",
            "pid": "6716480754",
            "price": "$1070",
            "title": "Massive Closets ~ Hardwoods ~ Close To St. Ed's University!",
            "url": "https://austin.craigslist.org/apa/d/massive-closets-hardwoods/6716480754.html"
        },
        {
            "category": "austin.craigslist.org",
            "date": "2018-10-24 11:04",
            "hasPic": true,
            "location": "(3011 Whitis Ave)",
            "pid": "6726748723",
            "price": "$1150",
            "title": "Parks and Recreation, Walkabilty 100%",
            "url": "https://austin.craigslist.org/apa/d/parks-and-recreation/6726748723.html"
        }
      ],
      details: [],
      cities: ['auburn','bham','dothan','shoals','gadsden','huntsville','mobile','montgomery','tuscaloosa','anchorage','fairbanks','kenai','juneau','flagstaff','mohave','phoenix','prescott','showlow','sierravista','tucson','yuma','fayar','fortsmith','jonesboro','littlerock','texarkana','bakersfield','chico','fresno','goldcountry','hanford','humboldt','imperial','inlandempire','losangeles','mendocino','merced','modesto','monterey','orangecounty','palmsprings','redding','sacramento','sandiego','sfbay','slo','santabarbara','santamaria','siskiyou','stockton','susanville','ventura','visalia','yubasutter','boulder','cosprings','denver','eastco','fortcollins','rockies','pueblo','westslope','newlondon','hartford','newhaven','nwct','delaware','washingtondc','miami','daytona','keys','fortlauderdale','fortmyers','gainesville','cfl','jacksonville','lakeland','miami','lakecity','ocala','okaloosa','orlando','panamacity','pensacola','sarasota','miami','spacecoast','staugustine','tallahassee','tampa','treasure','miami','albanyga','athensga','atlanta','augusta','brunswick','columbusga','macon','nwga','savannah','statesboro','valdosta','honolulu','boise','eastidaho','lewiston','twinfalls','bn','chambana','chicago','decatur','lasalle','mattoon','peoria','rockford','carbondale','springfieldil','quincy','bloomington','evansville','fortwayne','indianapolis','kokomo','tippecanoe','muncie','richmondin','southbend','terrehaute','ames','cedarrapids','desmoines','dubuque','fortdodge','iowacity','masoncity','quadcities','siouxcity','ottumwa','waterloo','lawrence','ksu','nwks','salina','seks','swks','topeka','wichita','bgky','eastky','lexington','louisville','owensboro','westky','batonrouge','cenla','houma','lafayette','lakecharles','monroe','neworleans','shreveport','maine','annapolis','baltimore','easternshore','frederick','smd','westmd','boston','capecod','southcoast','westernmass','worcester','annarbor','battlecreek','centralmich','detroit','flint','grandrapids','holland','jxn','kalamazoo','lansing','monroemi','muskegon','nmi','porthuron','saginaw','swmi','thumb','up','bemidji','brainerd','duluth','mankato','minneapolis','rmn','marshall','stcloud','gulfport','hattiesburg','jackson','meridian','northmiss','natchez','columbiamo','joplin','kansascity','kirksville','loz','semo','springfield','stjoseph','stlouis','billings','bozeman','butte','greatfalls','helena','kalispell','missoula','montana','grandisland','lincoln','northplatte','omaha','scottsbluff','elko','lasvegas','reno','nh','cnj','jerseyshore','newjersey','southjersey','albuquerque','clovis','farmington','lascruces','roswell','santafe','albany','binghamton','buffalo','catskills','chautauqua','elmira','fingerlakes','glensfalls','hudsonvalley','ithaca','longisland','newyork','oneonta','plattsburgh','potsdam','rochester','syracuse','twintiers','utica','watertown','asheville','boone','charlotte','eastnc','fayetteville','greensboro','hickory','onslow','outerbanks','raleigh','wilmington','winstonsalem','bismarck','fargo','grandforks','nd','akroncanton','ashtabula','athensohio','chillicothe','cincinnati','cleveland','columbus','dayton','limaohio','mansfield','sandusky','toledo','tuscarawas','youngstown','zanesville','lawton','enid','oklahomacity','stillwater','tulsa','bend','corvallis','eastoregon','eugene','klamath','medford','oregoncoast','portland','roseburg','salem','altoona','chambersburg','erie','harrisburg','lancaster','allentown','meadville','philadelphia','pittsburgh','poconos','reading','scranton','pennstate','williamsport','york','providence','charleston','columbia','florencesc','greenville','hiltonhead','myrtlebeach','nesd','csd','rapidcity','siouxfalls','sd','chattanooga','clarksville','cookeville','jacksontn','knoxville','memphis','nashville','tricities','abilene','amarillo','austin','beaumont','brownsville','collegestation','corpuschristi','dallas','nacogdoches','delrio','elpaso','galveston','houston','killeen','laredo','lubbock','mcallen','odessa','sanangelo','sanantonio','sanmarcos','bigbend','texoma','easttexas','victoriatx','waco','wichitafalls','logan','ogden','provo','saltlakecity','stgeorge','burlington','charlottesville','danville','fredericksburg','norfolk','harrisonburg','lynchburg','blacksburg','richmond','roanoke','swva','winchester','bellingham','kpr','moseslake','olympic','pullman','seattle','skagit','spokane','wenatchee','yakima','charlestonwv','martinsburg','huntington','morgantown','wheeling','parkersburg','swv','wv','appleton','eauclaire','greenbay','janesville','racine','lacrosse','madison','milwaukee','northernwi','sheboygan','wausau','wyoming','micronesia','puertorico','virgin','brussels','bulgaria','zagreb','copenhagen','bordeaux','rennes','grenoble','lille','loire','lyon','marseilles','montpellier','cotedazur','rouen','paris','strasbourg','toulouse','budapest','reykjavik','dublin','luxembourg','amsterdam','oslo','bucharest','moscow','stpetersburg','ukraine','bangladesh','micronesia','jakarta','tehran','baghdad','haifa','jerusalem','telaviv','ramallah','kuwait','beirut','malaysia','pakistan','dubai','vietnam','auckland','christchurch','wellington','buenosaires','lapaz','belohorizonte','brasilia','curitiba','fortaleza','portoalegre','recife','rio','salvador','saopaulo','caribbean','santiago','colombia','costarica','santodomingo','quito','elsalvador','guatemala','managua','panama','lima','puertorico','montevideo','caracas','virgin','cairo','addisababa','accra','kenya','casablanca','tunis'],

    };
    this.searchProperties = this.searchProperties.bind(this);
    this.retrieveDetails = this.retrieveDetails.bind(this);
  }
 
  // to be completed later
  componentDidMount() {

  }

  // requires routes
  searchProperties(searchQuery) {

 
   console.log(searchQuery);
    axios.post('/api/search', {city: searchQuery}).then((response) => {
      this.setState({ rentals: response.data });
    });
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  retrieveDetails(listing){
    axios.post('/api/search/details',{listing}).then(details => {
      console.log('Details returned client-side', details);
      const combined = Object.assign(listing, details.data);
      this.setState({details: combined});
      this.changeView('details');
    });
  }

  renderMain() {
    if (this.state.view === 'rentals') {
      return (
        <div>
         <Search search={this.searchProperties} /> 
         <List retrieve={this.retrieveDetails} details={this.state.details} rentals={this.state.rentals} /> 
        </div>
      )
        
    }
    if (this.state.view === 'savedRentals') {
      return <SavedRentals saved={this.state.savedRentals} />
    }

    if (this.state.view === 'login') {
      return (
        <div>
          <Login />
          <div onClick={() => this.changeView('signup')}>Signup!</div>
        </div>
      )
    }

    if (this.state.view === 'signup') {
      return <Signup/>
    }

    if(this.state.view === 'details'){
      return <Details details={this.state.details} />
    }

  }

  render() {
    return (

      <BrowserRouter>
      <div>
        <NavBar/>
        <div className='main'> 
        <Switch>
          <Route exact path='/' render={(props) => { 
            return (
              <div>
                <Search {...props} search={this.searchProperties}/>
                <List {...props} retrieve={this.retrieveDetails} details={this.state.details} rentals={this.state.rentals}/>
              </div>
            )
          }} />
          <Route path='/saved-rentals' render={(props) => <SavedRentals {...props} saved={this.state.savedRentals}/>}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/details' render={(props) => <Details {...props} details={this.state.details} />}/>
        </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
