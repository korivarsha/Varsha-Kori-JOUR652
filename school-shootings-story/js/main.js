//CHART 1
var chart = c3.generate({
  bindto: "#shootingsByYearChart",
  data: {
    x: "x",
    columns: [
      [
        "x",
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018
      ],
      [
        "Number of incidents",
        7,
        12,
        13,
        5,
        11,
        9,
        13,
        15,
        10,
        9,
        9,
        9,
        7,
        11,
        13,
        16,
        7,
        13,
        14,
        12
      ]
    ]
  },
  color: {
    pattern: ["#2a8dc5", "#455380", "#ee6a4b", "#60c4b2", "#973895"]
  }
});

var chart = c3.generate({
  bindto: "#killedByYearChart",
  data: {
    xs: {
      "Killed by Year": "x1",
      "Number of Injuries": "x2",
      "Number of Incidents per Year": "x3"
    },
    columns: [
      [
        "x1",
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018
      ],
      [
        "Killed by Year",
        14,
        4,
        5,
        1,
        5,
        3,
        9,
        9,
        1,
        5,
        1,
        3,
        2,
        32,
        3,
        6,
        0,
        2,
        5,
        21
      ],
      [
        "x2",
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018
      ],
      [
        "Number of Injuries",
        35,
        3,
        22,
        7,
        7,
        9,
        17,
        16,
        17,
        5,
        4,
        6,
        9,
        8,
        13,
        14,
        2,
        18,
        15,
        44
      ],
      [
        "x3",
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018
      ],
      [
        "Number of Incidents per Year",
        7,
        12,
        13,
        5,
        11,
        9,
        13,
        15,
        10,
        9,
        9,
        9,
        7,
        11,
        13,
        16,
        7,
        13,
        14,
        12
      ]
    ]
  },
  color: {
    pattern: ["#2a8dc5", "#455380", "#ee6a4b", "#60c4b2", "#973895"]
  }
});

var chart2 = c3.generate({
  bindto: "#shootingsByTypeChart",
  data: {
    columns: [
      ["Targeted", 130],
      ["indiscriminate", 42],
      ["Accidental", 25],
      ["Targeted and indiscriminate", 5],
      ["Public suicide", 4],
      ["Unclear", 3],
      ["hostage suicide", 2],
      ["Accidental or targeted", 2],
      ["Public suicide (attempted)", 1]
    ],
    type: "bar"
  },
  color: {
    pattern: [
      "#2a8dc5",
      "#455380",
      "#ee6a4b",
      "#60c4b2",
      "#973895",
      "#fae255",
      "#af3d46",
      "#f8bb63",
      "#818281"
    ]
  }
});

var chart3 = c3.generate({
  bindto: "#shooterRaceChart",
  data: {
    // iris data from R
    columns: [
      ["Asian", 0.95],
      ["American Indian", 2.86],
      ["Black", 33.33],
      ["Hispanic", 5.71],
      ["White", 57.14]
    ],
    type: "donut",
    onclick: function(d, i) {
      console.log("onclick", d, i);
    },
    onmouseover: function(d, i) {
      console.log("onmouseover", d, i);
    },
    onmouseout: function(d, i) {
      console.log("onmouseout", d, i);
    }
  },
  color: {
    pattern: ["#2a8dc5", "#455380", "#ee6a4b", "#60c4b2", "#973895"]
  }
});
