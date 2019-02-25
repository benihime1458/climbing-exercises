// FINAL CATEGORIES NOT BASED ON JUST WARMUPS
// const categories = [
//   'warm ups',
//   'climbing',
//   'training',
//   'conditioning',
// ];

// ONLY WARMUPS AND ITS GROUP PROPERTIES AS STAND IN CATEGORIES
// REVERT BACK TO FINAL CATEGORIES EVENTUALLY. 
//CURRENTLY USED FOR TESTING REACT COMPONENTS AND STATES

const categories = [
  'machines',
  'bodyweight',
  'on the wall',
  'rotation',
  'arms',
  'wrists and fingers',
  'wall warm ups'
];

const warmups = {
  'CARDIO': [{
    id: 'row',
    title: 'Row',
    description: 'Rowing Exercises...',
    group: 'machines'
  },
  {
    id: 'treadmill run',
    title: 'Treadmill Run',
    description: 'Treadmill Running...',
    group: 'machines'
  },
  {
    id: 'spin',
    title: 'Spin Bike',
    description: 'Spin Bike Exercises',
    group: 'machines'
  },
  {
    id: 'elliptical',
    title: 'Elliptical',
    description: 'Elliptical Exercises',
    group: 'machines'
  },
  {
    id: 'high knees',
    title: 'High Knees',
    description: 'High Knees',
    group: 'bodyweight'
  },
  {
    id: 'mountain climbers',
    title: 'Mountain Climbers',
    description: 'Mountain Climbers...',
    group: 'bodyweight'
  },
  {
    id: 'butt kickers',
    title: 'Butt Kickers',
    description: 'Butt Kickers...',
    group: 'bodyweight'
  },
  {
    id: 'lunges',
    title: 'Lunges',
    description: 'Lunges...',
    group: 'bodyweight'
  }],
  'STRETCH': [{
    id: 'flags',
    title: 'Flags',
    description: 'Flagging...',
    group: 'on the wall'
  },
  {
    id: 'spiderman',
    title: 'Spiderman',
    description: 'Spiderman...',
    group: 'on the wall'
  },
  {
    id: 'dropknee',
    title: 'Drop Knee',
    description: 'Drop Knee...',
    group: 'on the wall'
  },
  {
    id: 'high step',
    title: 'High Step',
    description: 'High Step Exercises',
    group: 'on the wall'
  },
  {
    id: 'wrist circles',
    title: 'Wrist Circles',
    description: 'Wrist Circles...',
    group: 'rotation'
  },
  {
    id: 'ankle circles',
    title: 'Ankle Circles',
    description: 'Ankle Circles...',
    group: 'rotation'
  },
  {
    id: 'knee circles',
    title: 'Knee Circles',
    description: 'Knee Circles...',
    group: 'rotation'
  },
  {
    id: 'arm circles',
    title: 'Arm Circles',
    description: 'Arm Circles...',
    group: 'rotation'
  },
  {
    id: 'hip circles',
    title: 'Hip Circles',
    description: 'Hip Circles...',
    group: 'rotation'
  },
  {
    id: 'sun salutes',
    title: 'Sun Salutes',
    description: 'Sun Salutes...',
    group: 'arms'
  },
  {
    id: 'cross body reach',
    title: 'Cross Body Reach',
    description: 'Cross Body Reach...',
    group: 'arms'
  },
  {
    id: 'shoulder blade taps',
    title: 'Shoulder Blade Taps',
    description: 'Shoulder Blade Taps...',
    group: 'arms'
  },
  {
    id: 'wrist tendon glides',
    title: 'Wrist Tendon Glides',
    description: 'Wrist Tendon Glides',
    group: 'wrists and fingers'
  },
  {
    id: 'finger tendon glides',
    title: 'Finger Tendon Glides',
    description: 'Finger Tendon Glides',
    group: 'wrists and fingers'
  }],
  'WALL': [{
    id: 'traverse',
    title: 'Traverse',
    description: 'Traverse Exercises...',
    group: 'wall warm ups'
  },
  {
    id: 'pyramid',
    title: 'Easy Pyramid',
    description: 'Pyramid...',
    group: 'wall warm ups'

  },
  {
    id: 'sloth',
    title: 'Sloth Climbing',
    description: 'Sloth Climbing...',
    group: 'wall warm ups'

  },
  {
    id: 'monkey',
    title: 'Monkey Climbing',
    description: 'Monkey Climbing',
    group: 'wall warm ups'
  }]
};

const training = {
  'CORE': [],
  'FOREARMS': [],
  'BICEPS': [],
  'BACK': [],
  'LEGS': [],
};

const climbing = {
  'POWER': [],
  'ENDURANCE': [],
  'POWER ENDURANCE': [],
  'TECHNIQUE': [],
  'RECOVERY': [],
};

const conditioning = {
  'ANTAGONIST': [],
  'ENDURANCE': [],
  'FLEXIBILITY': [],
  'CARDIO': []
};

export { categories, warmups, training, climbing, conditioning };
