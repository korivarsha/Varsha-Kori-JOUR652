  //chart 1
  var chart1 = c3.generate({
    bindto: '#disabilityType',
    data: {
      columns: [
        ['Any Disability', 40890900],
        ['Visual Disability', 7675600],
        ['Hearing Disability', 11445600],
        ['Ambulatory Disability', 21246400],
        ['Cognitive Disability', 15507300],
        ['Self-Care Disability', 8134300],
        ['Independent Living Disability', 14788800],

      ],
      type: 'bar'
    },
    color: {
      pattern: ['#EFEE69', '#9DDC79', '#59C28F', '#31A49B', '#3E8295', '#53607C', '#564058', '#603129']
    }
  });

  //chart 2
  var chart2 = c3.generate({
    bindto: '#disabilityGender',
    data: {
      columns: [
        ['Female', 21087300],
        ['Male', 19803600],

      ],
      type: 'donut'
    },
    color: {
      pattern: ['#3E8295', '#9DDC79']
    }
  });

  //chart 3
  var chart3 = c3.generate({
    bindto: '#disabilityEmployment',
    data: {
      columns: [
        ['Any Disability', 7262500],
        ['Visual Disability', 1658600, 43000],
        ['Hearing Disability', 2051300],
        ['Ambulatory Disability', 2493800],
        ['Cognitive Disability', 2218300],
        ['Self-Care Disability', 552500],
        ['Independent Living Disability', 1221200],

      ],
      type: 'bar'
    },

    color: {
      pattern: ['#EFEE69', '#9DDC79', '#59C28F', '#31A49B', '#3E8295', '#53607C', '#564058', '#603129']
    }
  });

  //chart 4
  var chart4 = c3.generate({
    bindto: '#disabilityEarnings',
    data: {
      columns: [
        ['No Disability', 45300],
        ['Any Disability', 40300],
        ['Visual Disability', 38500],
        ['Hearing Disability', 46300],
        ['Ambulatory Disability', 39300],
        ['Cognitive Disability', 35000],
        ['Self-Care Disability', 38300],
        ['Independent Living Disability', 35300],
      ],
      type: 'bar'
    },
    color: {
      pattern: ['#EFEE69', '#9DDC79', '#59C28F', '#31A49B', '#3E8295', '#53607C', '#564058', '#603129']
    }
  });

  //chart 5
  var chart5 = c3.generate({
    bindto: '#disabilityEducation',
    data: {
      columns: [
        ['High School Diploma or Equivalent', 6849800],
        ['Some College or an Associate Degree', 6313900],
        ['Bachelor Degree or More', 2890200]
      ],
      type: 'pie'
    },
    color: {
      pattern: ['#9DDC79', '#3E8295', '#564058']
    }
  });
