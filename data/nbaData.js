const nbaTeamData = [
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596755/atlanta_u8o8nz.png",
    abbreviation: "atl",
    id: 91,
    city: "Atlanta",
    name: "Hawks",
    conference: "Eastern",
    division: "Southeast",
    established: "1949",
    teamColor: "#E03A3E", 
    homeVenue: {
      id: null,
      name: "State Farm Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530592566/celtics_fsbgjf.png",
    abbreviation: "bos",
    id: 82,
    city: "Boston",
    name: "Celtics",
    conference: "Eastern",
    division: "Atlantic",
    established: "1946",
    teamColor: "#007A33", 
    homeVenue: {
      id: null,
      name: "TD Garden"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1532982794/brooklyn_wupuzj.png",
    abbreviation: "bkn",
    id: 84,
    city: "Brooklyn",
    name: "Nets",
    conference: "Eastern",
    division: "Atlantic",
    established: "1976",
    teamColor: "#000000", 
    homeVenue: {
      id: null,
      name: "Barclays Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596746/charlotte_tztluy.png",
    abbreviation: "cha",
    id: 93,
    city: "Charlotte",
    name: "Hornets",
    conference: "Eastern",
    division: "Southeast",
    established: "1988",
    teamColor: "#1D1160", 
    homeVenue: {
      id: null,
      name: "Spectrum Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/chicago_rwmo2g.png",
    abbreviation: "chi",
    id: 89,
    city: "Chicago",
    name: "Bulls",
    conference: "Eastern",
    division: "Central",
    established: "1966",
    teamColor: "#CE1141", 
    homeVenue: {
      id: null,
      name: "United Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596747/cleveland_cqybcy.png",
    abbreviation: "cle",
    id: 86,
    city: "Cleveland",
    name: "Cavaliers",
    conference: "Eastern",
    division: "Central",
    established: "1970",
    teamColor: "#6F263D", 
    homeVenue: {
      id: null,
      name: "Quicken Loans Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/dallas_x9b9vy.png",
    abbreviation: "dal",
    id: 108,
    city: "Dallas",
    name: "Mavericks",
    conference: "Western",
    division: "Southwest",
    established: "1980",
    teamColor: "#00538C", 
    homeVenue: {
      id: null,
      name: "American Airlines Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531887480/new_denver_nuggets_logo_cb43ec.png",
    abbreviation: "den",
    id: 99,
    city: "Denver",
    name: "Nuggets",
    conference: "Western",
    division: "Northwest",
    established: "1976",
    teamColor: "#0E2240", 
    homeVenue: {
      id: null,
      name: "Pepsi Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596745/detroit_djf2vw.png",
    abbreviation: "det",
    id: 88,
    city: "Detroit",
    name: "Pistons",
    conference: "Eastern",
    division: "Central",
    established: "1948",
    teamColor: "#C8102E", 
    homeVenue: {
      id: null,
      name: "Little Caesars Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/goldenstate_zhokiy.png",
    abbreviation: "gsw",
    id: 101,
    city: "Golden State",
    name: "Warriors",
    conference: "Western",
    division: "Pacific",
    established: "1946",
    teamColor: "#006BB6", 
    homeVenue: {
      id: null,
      name: "Oracle Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531888009/houston-rockets-logo_kavwl5.png",
    abbreviation: "hou",
    id: 109,
    city: "Houston",
    name: "Rockets",
    conference: "Western",
    division: "Southwest",
    established: "1967",
    teamColor: "#006BB6", 
    homeVenue: {
      id: null,
      name: "Toyota Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/indiana_ogcnxp.png",
    abbreviation: "ind",
    id: 87,
    city: "Indiana",
    name: "Pacers",
    conference: "Eastern",
    division: "Central",
    established: "1976",
    teamColor: "#FDBB30", 
    homeVenue: {
      id: null,
      name: "Bankers Life Fieldhouse"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531887557/new_clippers_logo_bs3pam.png",
    abbreviation: "lac",
    id: 102,
    city: "LA",
    name: "Clippers",
    conference: "Western",
    division: "Pacific",
    established: "1970",
    teamColor: "#1D42BA", 
    homeVenue: {
      id: null,
      name: "Staples Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/losangeles_oi1rax.png",
    abbreviation: "lal",
    id: 105,
    city: "Los Angeles",
    name: "Lakers",
    conference: "Western",
    division: "Pacific",
    established: "1948",
    teamColor: "#552583", 
    homeVenue: {
      id: null,
      name: "Staples Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/memphis_ywhipg.png",
    abbreviation: "mem",
    id: 107,
    city: "Memphis",
    name: "Grizzlies",
    conference: "Western",
    division: "Southwest",
    established: "1995",
    teamColor: "#12173F", 
    homeVenue: {
      id: null,
      name: "FedEx Forum"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531888149/miami-heat-logo-transparent_t9nadr.png",
    abbreviation: "mia",
    id: 92,
    city: "Miami",
    name: "Heat",
    conference: "Eastern",
    division: "Southeast",
    established: "1988",
    teamColor: "#98002E", 
    homeVenue: {
      id: null,
      name: "American Airlines Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/milwaukee_gjjdfi.png",
    abbreviation: "mil",
    id: 90,
    city: "Milwaukee",
    name: "Bucks",
    conference: "Eastern",
    division: "Central",
    established: "1968",
    teamColor: "#00471B", 
    homeVenue: {
      id: null,
      name: "Fiserv Forum"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1532984731/minnesota_baj07r.png",
    abbreviation: "min",
    id: 100,
    city: "Minnesota",
    name: "Timberwolves",
    conference: "Western",
    division: "Northwest",
    established: "1989",
    teamColor: "#0C2340", 
    homeVenue: {
      id: null,
      name: "Target Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/neworleans_lx9gyj.png",
    abbreviation: "nop",
    id: 110,
    city: "New Orleans",
    name: "Pelicans",
    conference: "Western",
    division: "Southwest",
    established: "2002",
    teamColor: "#0C2340", 
    homeVenue: {
      id: null,
      name: "Smoothie King Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/newyork_kg0b69.png",
    abbreviation: "nyk",
    id: 83,
    city: "New York",
    name: "Knicks",
    conference: "Eastern",
    division: "Atlantic",
    established: "1946",
    teamColor: "#F58426", 
    homeVenue: {
      id: null,
      name: "Madison Square Garden"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/okc_vez1ao.png",
    abbreviation: "okc",
    id: 96,
    city: "Oklahoma City",
    name: "Thunder",
    conference: "Western",
    division: "Northwest",
    established: "1967",
    teamColor: "#EF3B24", 
    homeVenue: {
      id: null,
      name: "Chesapeake Energy Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596724/orlando_fefgii.png",
    abbreviation: "orl",
    id: 95,
    city: "Orlando",
    name: "Magic",
    conference: "Eastern",
    division: "Southeast",
    established: "1989",
    teamColor: "#0077C0", 
    homeVenue: {
      id: null,
      name: "Amway Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/philadelphia_yrpi63.png",
    abbreviation: "phi",
    id: 85,
    city: "Philadelphia",
    name: "76ers",
    conference: "Eastern",
    division: "Atlantic",
    established: "1949",
    teamColor: "#006BB6", 
    homeVenue: {
      id: null,
      name: "Wells Fargo Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/phoenix_hjpiub.png",
    abbreviation: "phx",
    id: 104,
    city: "Phoenix",
    name: "Suns",
    conference: "Western",
    division: "Pacific",
    established: "1968",
    teamColor: "#1D1160", 
    homeVenue: {
      id: null,
      name: "Talking Stick Resort Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531888663/trailblazers_logo_shuasw.png",
    abbreviation: "por",
    id: 97,
    city: "Portland",
    name: "Trailblazers",
    conference: "Western",
    division: "Northwest",
    established: "1970",
    teamColor: "#E03A3E", 
    homeVenue: {
      id: null,
      name: "Moda Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/sacramento_faskyb.png",
    abbreviation: "sac",
    id: 103,
    city: "Sacramento",
    name: "Kings",
    conference: "Western",
    division: "Pacific",
    established: "1948",
    teamColor: "#5A2D81", 
    homeVenue: {
      id: null,
      name: "Golden 1 Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596723/sanantonio_ngomaf.png",
    abbreviation: "sas",
    id: 106,
    city: "San Antonio",
    name: "Spurs",
    conference: "Western",
    division: "Southwest",
    established: "1976",
    teamColor: "#000000", 
    homeVenue: {
      id: null,
      name: "AT&T Center"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596722/toronto_bxjri1.png",
    abbreviation: "tor",
    id: 81,
    city: "Toronto",
    name: "Raptors",
    conference: "Eastern",
    division: "Atlantic",
    established: "1995",
    teamColor: "#CE1141", 
    homeVenue: {
      id: null,
      name: "Scotiabank Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1531889039/utah_jazz_logo_zrwfri.png",
    abbreviation: "uta",
    id: 98,
    city: "Utah",
    name: "Jazz",
    conference: "Western",
    division: "Northwest",
    established: "1974",
    teamColor: "#002B5C", 
    homeVenue: {
      id: null,
      name: "Vivint Smart Home Arena"
    }
  },
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530597819/washington_xyb7f5.png",
    abbreviation: "was",
    id: 94,
    city: "Washington",
    name: "Wizards",
    conference: "Eastern",
    division: "Southeast",
    established: "1961",
    teamColor: "#E31837", 
    homeVenue: {
      id: null,
      name: "Capital One Arena"
    }
  }
];

module.exports = nbaTeamData;