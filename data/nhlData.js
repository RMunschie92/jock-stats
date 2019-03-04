const nhlData = [
  {
    id: 29,
    city: "Anahiem",
    name: "Ducks",
    abbreviation: "ANA",
    conference: "Western",
    division: "Pacific",
    established: 1993,
    teamColor: "#F47A38", 
    homeVenue: {
      id: 8,
      name: "Honda Center"
    }
  },
  {
    id: 30,
    city: "Arizona",
    name: "Coyotes",
    abbreviation: "ARI",
    conference: "Western",
    division: "Pacific",
    established: 1972,
    teamColor: "#8C2633",
    homeVenue: {
      id: 6,
      name: "Gila River Arena"
    }
  },
  {
    id: 11,
    city: "Boston",
    name: "Bruins",
    abbreviation: "BOS",
    conference: "Eastern",
    division: "Atlantic",
    established: 1924,
    teamColor: "#FFB81C",
    homeVenue: {
      id: 27,
      name: "TD Garden"
    }
  },
  {
    id: 15,
    city: "Buffalo",
    name: "Sabres",
    abbreviation: "BUF",
    conference: "Eastern",
    division: "Atlantic",
    established: 1970,
    teamColor: "#FCB514",
    homeVenue: {
      id: 10,
      name: "KeyBank Center"
    }
  },
  {
    id: 23,
    city: "Calgary",
    name: "Flames",
    abbreviation: "CGY",
    conference: "Western",
    division: "Pacific",
    established: 1971,
    teamColor: "#C8102E",
    homeVenue: {
      id: 18,
      name: "Scotiabank Saddledome"
    }
  },
  {
    id: 3,
    city: "Carolina",
    name: "Hurricanes",
    abbreviation: "CAR",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1972,
    teamColor: "#CC0000",
    homeVenue: {
      id: 21,
      name: "PNC Arena"
    }
  },
  {
    id: 20,
    city: "Chicago",
    name: "Blackhawks",
    abbreviation: "CHI",
    conference: "Western",
    division: "Central",
    established: 1926,
    teamColor: "#CF0A2C",
    homeVenue: {
      id: 28,
      name: "United Center"
    }
  },
  {
    id: 22,
    city: "Colorado",
    name: "Avalanche",
    abbreviation: "COL",
    conference: "Western",
    division: "Central",
    established: 1995,
    teamColor: "#6F263D",
    homeVenue: {
      id: 19,
      name: "Pepsi Center"
    }
  },
  {
    id: 19,
    city: "Colombus",
    name: "Blue Jackets",
    abbreviation: "CBJ",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1997,
    teamColor: "#CE1126",
    homeVenue: {
      id: 17,
      name: "Nationwide Arena"
    }
  },
  {
    id: 27,
    city: "Dallas",
    name: "Stars",
    abbreviation: "DAL",
    conference: "Western",
    division: "Central",
    established: 1966,
    teamColor: "#006847",
    homeVenue: {
      id: 2,
      name: "American Airlines Center"
    }
  },
  {
    id: 16,
    city: "Detroit",
    name: "Red Wings",
    abbreviation: "DET",
    conference: "Eastern",
    division: "Atlantic",
    established: 1926,
    teamColor: "#CE1126",
    homeVenue: {
      id: 145,
      name: "Little Caesars Arena"
    }
  },
  {
    id: 24,
    city: "Edmonton",
    name: "Oilers",
    abbreviation: "EDM",
    conference: "Western",
    division: "Pacific",
    established: 1971,
    teamColor: "#FF4C00",
    homeVenue: {
      id: 22,
      name: "Rogers Place"
    }
  },
  {
    id: 4,
    city: "Florida",
    name: "Panthers",
    abbreviation:"FLO",
    conference: "Eastern",
    division: "Atlantic",
    established: 1993,
    teamColor: "#C8102E",
    homeVenue: {
      id: 3,
      name: "BB&T Center" 
    }
  },
  {
    id: 28,
    city: "Los Angeles",
    name: "Kings",
    abbreviation: "LAK",
    conference: "Western",
    division: "Pacific",
    established: 1966,
    teamColor: "#A2AAAD",
    homeVenue: {
      id: 25,
      name: "Staples Center"
    }
  },
  {
    id: 25,
    city: "Minnesota",
    name: "Wild",
    abbreviation: "MIN",
    conference: "Western",
    division: "Central",
    established: 1997,
    teamColor: "#154734",
    homeVenue: {
      id: 30,
      name: "Xcel Energy Center"
    }
  },
  {
    id: 14,
    city: "Montreal",
    name: "Canadiens",
    abbreviation: "MTL",
    conference: "Eastern",
    division: "Atlantic",
    established: 1909,
    teamColor: "#AF1E2D",
    homeVenue: {
      id: 4,
      name: "Bell Centre"
    }
  },
  {
    id: 18,
    city: "Nashville",
    name: "Predators",
    abbreviation: "NSH",
    conference: "Western",
    division: "Central",
    established: 1998,
    teamColor: "#FFB81C",
    homeVenue: {
      id: 15,
      name: "Bridgestone Arena"
    }
  },
  {
    id: 7,
    city: "New Jersey",
    name: "Devils",
    abbreviation: "NJD",
    conference: "Eastern",
    division: "Metropolitan",
    teamColor: "#CE1126",
    established: 1974,
    homeVenue: {
      id: 37,
      name: "Prudential Center"
    }
  },
  {
    id: 8,
    city: "New York",
    name: "Islanders",
    abbreviation: "NYI",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1972,
    teamColor: "#F47D30",
    homeVenue: {
      id: 16,
      name: "Nassau Veterans Memorial Coliseum"
    }
  },
  {
    id: 9,
    city: "New York",
    name: "Rangers",
    abbreviation: "NYR",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1926,
    teamColor: "#CE1126",
    homeVenue: {
      id: 12,
      name: "Madison Square Garden"
    }
  },
  {
    id: 13,
    city: "Ottawa",
    name: "Senators",
    abbreviation: "OTT",
    conference: "Eastern",
    division: "Atlantic",
    established: 1990,
    teamColor: "#CE1126",
    homeVenue: {
      id: 23,
      name: "Canadian Tire Centre"
    }
  },
  {
    id: 6,
    city: "Philadelphia",
    name: "Flyers",
    abbreviation: "PHI",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1967,
    teamColor: "#F74902",
    homeVenue: {
      id: 29,
      name: "Wells Fargo Center"
    }
  },
  {
    id: 10,
    city: "Pittsburgh",
    name: "Penguins",
    abbreviation: "PIT",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1967,
    teamColor: "#FCB514",
    homeVenue: {
      id: 40,
      name: "PPG Paints Arena"
    }
  },
  {
    id: 17,
    city: "St. Louis",
    name: "Blues",
    abbreviation: "STL",
    conference: "Western",
    division: "Central",
    established: 1967,
    teamColor: "#002F87",
    homeVenue: {
      id: 24,
      name: "Enterprise Center" 
    }
  },
  {
    id: 26,
    city: "San Jose",
    name: "Sharks",
    abbreviation: "SJS",
    conference: "Western",
    division: "Pacific",
    established: 1991,
    teamColor: "#006D75",
    homeVenue: {
      id: 9,
      name: "SAP Center at San Jose"
    }
  },
  {
    id: 1,
    city: "Tampa Bay",
    name: "Lightning",
    abbreviation: "TBL",
    conference: "Eastern",
    division: "Atlantic",
    established: 1992,
    teamColor: "#002868",
    homeVenue: {
      id: 26,
      name: "Amalie Arena" 
    }
  },
  {
    id: 12,
    city: "Toronto",
    name: "Maple Leafs",
    abbreviation: "TOR",
    conference: "Eastern",
    division: "Atlantic",
    established: 1917,
    teamColor: "#003E7E",
    homeVenue: {
      id: 1,
      name: "Scotiabank Arena"
    }
  },
  {
    id: 21,
    city: "Vancouver",
    name: "Canucks",
    abbreviation: "VAN",
    conference: "Western",
    division: "Pacific",
    established: 1945,
    homeVenue: {
      id: 7,
      name: "Rogers Arena"
    }
  },
  {
    id: 142,
    city: "Vegas",
    name: "Golden Knights",
    abbreviation: "VGK",
    conference: "Western",
    division: "Pacific",
    established: 2017,
    teamColor: "#B4975A",
    homeVenue: {
      id: 139,
      name: "T-Mobile Arena"
    }
  },
  {
    id: 5,
    city: "Washington",
    name: "Capitals",
    abbreviation: "WSH",
    conference: "Eastern",
    division: "Metropolitan",
    established: 1974,
    teamColor: "#C8102E",
    homeVenue: {
      id: 13,
      name: "Capital One Arena"
    }
  },
  {
    id: 2,
    city: "Winnipeg",
    name: "Jets",
    abbreviation: "WPJ",
    conference: "Western",
    division: "Central",
    established: 1972,
    teamColor: "#AC162C",
    homeVenue: {
      id: 39,
      name: "Bell MTS Place"
    }
  }
];

module.exports = nhlData;