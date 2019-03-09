const mlbData = [
  {
    id: 140,
    city: "Arizona",
    name: "Diamondbacks",
    abbreviation: "ARI",
    conference: "National",
    division: "NL West",
    established: 1998,
    teamColor: "#A71930", 
    homeVenue: {
      id: null,
      name: "Chase Field"
    }
  },
  {
    id: 130,
    city: "Atlanta",
    name: "Braves",
    abbreviation: "ATL",
    conference: "National",
    division: "NL East",
    established: 1871,
    teamColor: "#CE1141", 
    homeVenue: {
      id: null,
      name: "SunTrust Park"
    }
  },
  {
    id: 111,
    city: "Baltimore",
    name: "Orioles",
    abbreviation: "BAL",
    conference: "American",
    division: "AL East",
    established: 1894,
    teamColor: "#DF4601", 
    homeVenue: {
      id: null,
      name: "Oriole Park at Camden Yards"
    }
  },
  {
    id: 113,
    city: "Boston",
    name: "Red Sox",
    abbreviation: "BOS",
    conference: "American",
    division: "AL East",
    established: 1901,
    teamColor: "#BD3039", 
    homeVenue: {
      id: null,
      name: "Fenway Park"
    }
  },
  {
    id: 131,
    city: "Chicago",
    name: "Cubs",
    abbreviation: "CHC",
    conference: "National",
    division: "NL Central",
    established: 1876,
    teamColor: "#0E3386", 
    homeVenue: {
      id: null,
      name: "Wrigley Field"
    }
  },
  {
    id: 119,
    city: "Chicago",
    name: "White",
    abbreviation: "CWS",
    conference: "American",
    division: "AL Central",
    established: 1901,
    teamColor: "#27251F", 
    homeVenue: {
      id: null,
      name: "Guaranteed Rate Field"
    }
  },
  {
    id: 135,
    city: "Cincinnati",
    name: "Reds",
    abbreviation: "CIN",
    conference: "National",
    division: "NL Central",
    established: 1881,
    teamColor: "#C6011F", 
    homeVenue: {
      id: null,
      name: "Great American Ball Park"
    }
  },
  {
    id: 116,
    city: "Cleveland",
    name: "Indians",
    abbreviation: "CLE",
    conference: "American",
    division: "AL Central",
    established: 1915,
    teamColor: "#0C2340", 
    homeVenue: {
      id: null,
      name: "Progressive Field"
    }
  },
  {
    id: 138,
    city: "Colorado",
    name: "Rockies",
    abbreviation: "COL",
    conference: "National",
    division: "NL West",
    established: 1991,
    teamColor: "#33006F", 
    homeVenue: {
      id: null,
      name: "Coors Field"
    }
  },
  {
    id: 117,
    city: "Detroit",
    name: "Tigers",
    abbreviation: "DET",
    conference: "American",
    division: "AL Central",
    established: 1894,
    teamColor: "#0C2340", 
    homeVenue: {
      id: null,
      name: "Comerica Park"
    }
  },
  {
    id: 122,
    city: "Houston",
    name: "Astros",
    abbreviation: "HOU",
    conference: "American",
    division: "AL West",
    established: 1962,
    teamColor: "#002D62", 
    homeVenue: {
      id: null,
      name: "Minute Maid Park"
    }
  },
  {
    id: 118,
    city: "Kansas City",
    name: "Royals",
    abbreviation: "KC",
    conference: "American",
    division: "AL Central",
    established: 1969,
    teamColor: "#004687", 
    homeVenue: {
      id: null,
      name: "Kauffman Park"
    }
  },
  {
    id: 124,
    city: "Los Angeles",
    name: "Angels of Anaheim",
    abbreviation: "LAA",
    conference: "American",
    division: "AL West",
    established: 1961,
    teamColor: " #003263", 
    homeVenue: {
      id: null,
      name: "Angel Stadium"
    }
  },
  {
    id: 137,
    city: "Los Angeles",
    name: "Dodgers",
    abbreviation: "LAD",
    conference: "National",
    division: "NL West",
    established: 1883,
    teamColor: "#005A9C", 
    homeVenue: {
      id: null,
      name: "Dodger Stadium"
    }
  },
  {
    id: 128,
    city: "Miami",
    name: "Marlins",
    abbreviation: "MIA",
    conference: "National",
    division: "NL East",
    established: 1991,
    teamColor: "#00A3E0", 
    homeVenue: {
      id: null,
      name: "Marlins Park"
    }
  },
  {
    id: 134,
    city: "Milwaukee",
    name: "Brewers",
    abbreviation: "MIL",
    conference: "National",
    division: "NL Central",
    established: 1969,
    teamColor: "#0A2351", 
    homeVenue: {
      id: null,
      name: "Miller Park"
    }
  },
  {
    id: 120,
    city: "Minnesota",
    name: "Twins",
    abbreviation: "MIN",
    conference: "American",
    division: "AL Central",
    established: 1901,
    teamColor: "#002B5C", 
    homeVenue: {
      id: null,
      name: "Target Field"
    }
  },
  {
    id: 127,
    city: "New York",
    name: "Mets",
    abbreviation: "NYM",
    conference: "National",
    division: "NL East",
    established: 1962,
    teamColor: "#FF5910", 
    homeVenue: {
      id: null,
      name: "Citi Field"
    }
  },
  {
    id: 114,
    city: "New York",
    name: "Yankees",
    abbreviation: "NYY",
    conference: "American",
    division: "AL East",
    established: 1901,
    teamColor: "#0C2340", 
    homeVenue: {
      id: null,
      name: "Yankee Stadium"
    }
  },
  {
    id: 125,
    city: "Oakland",
    name: "Athletics",
    abbreviation: "OAK",
    conference: "American",
    division: "AL West",
    established: 1901,
    teamColor: "#003831", 
    homeVenue: {
      id: null,
      name: "Oakland Coliseum"
    }
  },
  {
    id: 129,
    city: "Philadelphia",
    name: "Phillies",
    abbreviation: "PHI",
    conference: "National",
    division: "NL East",
    established: 1883,
    teamColor: "#E81828", 
    homeVenue: {
      id: null,
      name: "Citizens Bank Park"
    }
  },
  {
    id: 132,
    city: "Pittsburgh",
    name: "Pirates",
    abbreviation: "PIT",
    conference: "National",
    division: "NL Central",
    established: 1882,
    teamColor: "#27251F", 
    homeVenue: {
      id: null,
      name: "PNC Park"
    }
  },
  {
    id: 133,
    city: "St. Louis",
    name: "Cardinals",
    abbreviation: "STL",
    conference: "National",
    division: "NL Central",
    established: 1882,
    teamColor: "#C41E3A", 
    homeVenue: {
      id: null,
      name: "Busch Stadium"
    }
  },
  {
    id: 139,
    city: "San Diego",
    name: "Padres",
    abbreviation: "SD",
    conference: "National",
    division: "NL West",
    established: 1969,
    teamColor: "#002D62", 
    homeVenue: {
      id: null,
      name: "Petco Park"
    }
  },
  {
    id: 136,
    city: "San Francisco",
    name: "Giants",
    abbreviation: "SF",
    conference: "National",
    division: "NL West",
    established: 1883,
    teamColor: "#FD5A1E", 
    homeVenue: {
      id: null,
      name: "Oracle Park"
    }
  },
  {
    id: 123,
    city: "Seattle",
    name: "Mariners",
    abbreviation: "SEA",
    conference: "American",
    division: "AL West",
    established: 1977,
    teamColor: "#0C2C56", 
    homeVenue: {
      id: null,
      name: "T-Mobile Park"
    }
  },
  {
    id: 115,
    city: "Tampa Bay",
    name: "Rays",
    abbreviation: "TB",
    conference: "American",
    division: "AL East",
    established: 1998,
    teamColor: "#092C5C", 
    homeVenue: {
      id: null,
      name: "Tropicana Field"
    }
  },
  {
    id: 121,
    city: "Texas",
    name: "Rangers",
    abbreviation: "TEX",
    conference: "American",
    division: "AL West",
    established: 1961,
    teamColor: "#003278", 
    homeVenue: {
      id: null,
      name: "Globe Life Park in Arlington"
    }
  },
  {
    id: 112,
    city: "Toronto",
    name: "Blue Jays",
    abbreviation: "TOR",
    conference: "American",
    division: "AL East",
    established: 1977,
    teamColor: "#134A8E", 
    homeVenue: {
      id: null,
      name: "Rogers Centre"
    }
  },
  {
    id: 126,
    city: "Washington",
    name: "Nationals",
    abbreviation: "WAS",
    conference: "National",
    division: "NL East",
    established: 1969,
    teamColor: "#AB0003", 
    homeVenue: {
      id: null,
      name: "Nationals Park"
    }
  },
];

module.exports = mlbData;