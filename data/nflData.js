const nflData = [
  {
    id: 76,
    city: "Arizona",
    name: "Cardinals",
    abbreviation: "ARI",
    conference: "NFC",
    division: "NFC West",
    established: 1898,
    teamColor: "#97233F",
    homeVenue: {
      id: 43,
      name: "University of Phoenix Stadium"
    }
  },
  {
    id: 68,
    city: "Atlanta",
    name: "Falcons",
    abbreviation: "ATL",
    conference: "NFC",
    division: "NFC South",
    established: 1965,
    teamColor: "#A71930",
    homeVenue: {
      id: 44,
      name: "Georgia Dome"
    }
  },
  {
    id: 56,
    city: "Baltimore",
    name: "Ravens",
    abbreviation: "BAL",
    conference: "AFC",
    division: "AFC North",
    established: 1996,
    teamColor: "#241773",
    homeVenue: {
      id: 45,
      name: "M&T Bank Stadium"
    }
  },
  {
    id: 48,
    city: "Buffalo",
    name: "Bills",
    abbreviation: "BUF",
    conference: "AFC",
    division: "AFC East",
    established: 1960,
    teamColor: "#00338D",
    homeVenue: {
      id: 46,
      name: "New Era Field"
    }
  },
  {
    id: 69,
    city: "Carolina",
    name: "Panthers",
    abbreviation: "CAR",
    conference: "NFC",
    division: "NFC South",
    established: 1993,
    teamColor: "#0085CA",
    homeVenue: {
      id: 47,
      name: "Bank of America Stadium"
    }
  },
  {
    id: 60,
    city: "Chicago",
    name: "Bears",
    abbreviation: "CHI",
    conference: "NFC",
    division: "NFC North",
    established: 1919,
    teamColor: "#C83803",
    homeVenue: {
      id: 48,
      name: "Soldier Field" 
    },
  },
  {
    id: 57,
    city: "Cincinnati",
    name: "Bengals",
    abbreviation: "CIN",
    conference: "AFC",
    division: "AFC North",
    established: 1968,
    teamColor: "#FB4F14",
    homeVenue: {
      id: 49,
      name: "Paul Brown Stadium" 
    }
  },
  {
    id: 58,
    city: "Cleveland",
    name: "Browns",
    abbreviation: "CLE",
    conference: "AFC",
    division: "AFC North",
    established: 1946,
    teamColor: "#FF3C00",
    homeVenue: {
      id: 50,
      name: "First Energy Stadium"
    }
  },
  {
    id: 52,
    city: "Dallas",
    name: "Cowboys",
    abbreviation: "DAL",
    conference: "NFC",
    division: "NFC East",
    established: 1960,
    teamColor: "#041E42",
    homeVenue: {
      id: 51,
      name: "AT&T Stadium"
    }
  },
  {
    id: 72,
    city: "Denver",
    name: "Broncos",
    abbreviation: "DEN",
    conference: "AFC",
    division: "AFC West",
    established: 1960,
    teamColor: "#FB4F14",
    homeVenue: {
      id: 52,
      name: "Sports Authority Field at Mile High"
    }
  },
  {
    id: 61,
    city: "Detroit",
    name: "Lions",
    abbreviation: "DET",
    conference: "NFC",
    division: "NFC North",
    established: 1929,
    teamColor: "#0076B6",
    homeVenue: {
      id: 53,
      name: "Ford Field"
    }
  },
  {
    id: 62,
    city: "Green Bay",
    name: "Packers",
    abbreviation: "GB",
    conference: "NFC",
    division: "NFC North",
    established: 1919,
    teamColor: "#203731",
    homeVenue: {
      id: 54,
      name: "Lambeau Field"
    }
  },
  {
    id: 64,
    city: "Houston",
    name: "Texans",
    abbreviation: "HOU",
    conference: "AFC",
    division: "AFC South",
    established: 2002,
    teamColor: "#03202F",
    homeVenue: {
      id: 55,
      name: "NRG Stadium"
    }
  },
  {
    id: 65,
    city: "Indianapolis",
    name: "Colts",
    abbreviation: "IND",
    conference: "AFC",
    division: "AFC South",
    established: 1953,
    teamColor: "#002C5F",
    homeVenue: {
      id: 56,
      name: "Lucas Oil Stadium"
    }
  },
  {
    id: 66,
    city: "Jacksonville",
    name: "Jaguars",
    abbreviation: "JAX",
    conference: "AFC",
    division: "AFC South",
    established: 1993,
    teamColor: "#D7A22A",
    homeVenue: {
      id: 57,
      name: "EverBank Field" 
    }
  },
  {
    id: 73,
    city: "Kansas City",
    name: "Chiefs",
    abbreviation: "KC",
    conference: "AFC",
    division: "AFC West",
    established: 1960,
    teamColor: "#E31837",
    homeVenue: {
      id: 58,
      name: "Arrowhead Stadium"
    }
  },
  {
    id: 75,
    city: "Los Angeles",
    name: "Chargers",
    abbreviation: "LAC",
    conference: "AFC",
    division: "AFC West",
    established: 1960,
    teamColor: "#0080C6",
    homeVenue: {
      id: 140,
      name: "StubHub Center"
    }
  },
  {
    id: 77,
    city: "Los Angeles",
    name: "Rams",
    abbreviation: "LA",
    conference: "NFC",
    division: "NFC West",
    established: 1936,
    teamColor: "",
    homeVenue: {
      id: 74,
      name: "Los Angeles Memorial Coliseum"
    }
  },
  {
    id: 49,
    city: "Miami",
    name: "Dolphins",
    abbreviation: "MIA",
    conference: "AFC",
    division: "AFC East",
    established: 1966,
    teamColor: "#F26A24",
    homeVenue: {
      id: 59,
      name: "Hard Rock Stadium"
    }
  },
  {
    id: 63,
    city: "Minnesota",
    name: "Vikings",
    abbreviation: "MIN",
    conference: "NFC",
    division: "NFC North",
    established: 1961,
    teamColor: "#4F2683",
    homeVenue: {
      id: 141,
      name: "US Bank Stadium"
    }
  },
  {
    id: 50,
    city: "New England",
    name: "Patriots",
    abbreviation: "NE",
    conference: "AFC",
    division: "AFC East",
    established: 1960,
    teamColor: "#002244",
    homeVenue: {
      id: 61,
      name: "Gilette Stadium"
    }
  },
  {
    id: 70,
    city: "New Orleans",
    name: "Saints",
    abbreviation: "NO",
    conference: "NFC",
    division: "NFC South",
    established: 1967,
    teamColor: "#101820",
    homeVenue: {
      id: 62,
      name: "Mercedes-Benz Stadium"
    }
  },
  {
    id: 53,
    city: "New York",
    name: "Giants",
    abbreviation: "NYG",
    conference: "NFC",
    division: "NFC East",
    established: 1925,
    teamColor: "#0B2265",
    homeVenue: {
      id: 63,
      name: "MetLife Stadium"
    }
  },
  {
    id: 51,
    city: "New York",
    name: "Jets",
    abbreviation: "NYJ",
    conference: "AFC",
    division: "AFC East",
    established: 1960,
    teamColor: "#003F2D",
    homeVenue: {
      id: 63,
      name: "MetLife Stadium"
    }
  },
  {
    id: 74,
    city:"Oakland",
    name: "Radiers",
    abbreviation: "OAK",
    conference: "AFC",
    division: "AFC West",
    established: 1960,
    teamColor: "#000000",
    homeVenue: {
      id: 64,
      name: "Oakland-Alameda County Coliseum"
    }
  },
  {
    id: 54,
    city: "Philadelphia",
    name: "Eagles",
    abbreviation: "PHI",
    conference: "NFC",
    division: "NFC East",
    established: 1933,
    teamColor: "#004C54",
    homeVenue: {
      id: 65,
      name: "Lincoln Financial Field"
    }
  },
  {
    id: 59,
    city: "Pittsburgh",
    name: "Steelers",
    abbreviation: "PIT",
    conference: "AFC",
    division: "AFC North",
    established: 1933,
    teamColor: "#FFB612",
    homeVenue: {
      id: 66,
      name: "Heinz Field" 
    }
  },
  {
    id: 78,
    city: "San Francisco",
    name: "49ers",
    abbreviation: "SF",
    conference: "NFC",
    division: "NFC West",
    established: 1946,
    teamColor: "#AA0000",
    homeVenue: {
      id: 68,
      name: "Levi's Stadium"
    }
  },
  {
    id: 79,
    city: "Seattle",
    name: "Seahawks",
    abbreviation: "SEA",
    conference: "NFC",
    division: "NFC West",
    established: 1974,
    teamColor: "#002244",
    homeVenue: {
      id: 69,
      name: "CenturyLink Field"
    }
  },
  {
    id: 71,
    city: "Tampa Bay",
    name: "Buccaneers",
    abbreviation: "TB",
    conference: "NFC",
    division: "NFC South",
    established: 1976,
    teamColor: "#D50A0A",
    homeVenue: {
      id: 71,
      name: "Raymond James Stadium"
    }
  },
  {
    id: 67,
    city: "Tennessee",
    name: "Titans",
    abbreviation: "TEN",
    conference: "AFC",
    division: "AFC South",
    established: 1960,
    teamColor: "#0C2340",
    homeVenue: {
      id: 72,
      name: "Nissan Stadium"
    }
  },
  {
    id: 55,
    city: "Washington",
    name: "Redskins",
    abbreviation: "WAS",
    conference: "NFC",
    division: "NFC East",
    established: 1932,
    teamColor: "#773141",
    homeVenue: {
      id: 73,
      name: "FedEx Field"
    }
  },
];

module.exports = nflData;