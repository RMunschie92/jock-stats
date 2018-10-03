const teamData = [
  {
    image:
      "https://res.cloudinary.com/munsch-creative/image/upload/v1530596755/atlanta_u8o8nz.png",
    abbreviation: "atl",
    id: 91,
    city: "Atlanta",
    name: "Hawks",
    conference: "Eastern",
    division: "Southeast",
    established: "1949"
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
    established: "1946"
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
    established: "1976"
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
    established: "1988"
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
    established: "1966"
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
    established: "1970"
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
    established: "1980"
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
    established: "1976"
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
    established: "1948"
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
    established: "1946"
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
    established: "1967"
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
    established: "1976"
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
    established: "1970"
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
    established: "1948"
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
    established: "1995"
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
    established: "1988"
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
    established: "1968"
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
    established: "1989"
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
    established: "2002"
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
    established: "1946"
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
    established: "1967"
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
    established: "1989"
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
    established: "1949"
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
    established: "1968"
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
    established: "1970"
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
    established: "1948"
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
    established: "1976"
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
    established: "1995"
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
    established: "1974"
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
    established: "1961"
  }
];

module.exports = teamData;