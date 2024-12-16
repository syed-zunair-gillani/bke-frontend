export const equipmentData = {
  flatbed: {
    id: 'flatbed',
    title: 'Standard Flatbed Trailer',
    shortDescription: 'Versatile 48\' and 53\' flatbed trailers for general freight.',
    fullDescription: 'Our standard flatbed trailers are the backbone of the transportation industry, offering versatility and reliability for a wide range of cargo types. These trailers provide easy loading and unloading access from all sides and are compatible with various securing methods.',
    image: '/images/equipment/flatbed.jpg',
    specs: [
      '48\' and 53\' lengths available',
      'Up to 48,000 lbs capacity',
      'Rub rails and winch track',
      'Steel or aluminum construction',
      'Air-ride suspension'
    ],
    features: [
      'Multiple tie-down points',
      'Anti-slip decking',
      'Reinforced deck structure',
      'Compatible with tarping systems',
      'DOT-approved lighting'
    ],
    applications: [
      'Construction materials',
      'Steel and metal products',
      'Machinery',
      'Lumber and building supplies',
      'Industrial equipment'
    ],
    history: 'Flatbed trailers have been a fundamental part of freight transportation since the early days of trucking. Their design has evolved to incorporate stronger materials, improved safety features, and greater load-bearing capacity.',
    technicalDetails: {
      dimensions: {
        length: '48\' or 53\'',
        width: '102 inches',
        height: 'Variable based on load'
      },
      capacity: '48,000 lbs maximum',
      specialFeatures: [
        'Multiple securing points',
        'Reinforced deck structure',
        'Optional coil packages available'
      ]
    }
  },
  stepdeck: {
    id: 'stepdeck',
    title: 'Step Deck Trailer',
    shortDescription: 'Specialized trailers for tall and oversized loads.',
    fullDescription: 'Step deck trailers, also known as drop deck trailers, are designed to accommodate taller freight while maintaining legal height requirements. The lower deck height provides additional clearance for oversized loads.',
    image: '/images/equipment/stepdeck.jpg',
    specs: [
      '48\' to 53\' total length',
      'Upper deck: 11\' length',
      'Lower deck: 37\' to 42\' length',
      'Up to 48,000 lbs capacity',
      'Multiple tie-down points'
    ],
    features: [
      'Two-level deck design',
      'Removable rear bridge plate',
      'Multiple securing options',
      'Air-ride suspension',
      'Optional beaver tail'
    ],
    applications: [
      'Tall machinery',
      'Construction equipment',
      'Agricultural equipment',
      'Oversized cargo',
      'Manufacturing equipment'
    ],
    history: 'Step deck trailers were developed to address the growing need for transporting taller cargo while complying with height restrictions. Their innovative design has made them essential for specialized freight transportation.',
    technicalDetails: {
      dimensions: {
        length: '48\' to 53\'',
        width: '102 inches',
        height: 'Upper deck: 5\', Lower deck: 3\' 6"'
      },
      capacity: '48,000 lbs maximum',
      specialFeatures: [
        'Gradual transition between decks',
        'Multiple tie-down points',
        'Optional ramps available'
      ]
    }
  },
  rgn: {
    id: 'rgn',
    title: 'Removable Gooseneck (RGN) Trailer',
    shortDescription: 'Specialized trailers for heavy equipment and machinery.',
    fullDescription: 'RGN trailers feature a detachable gooseneck that creates a gentle loading angle, perfect for heavy equipment and oversized machinery. These trailers offer maximum versatility and loading ease for challenging cargo.',
    image: '/images/equipment/rgn.jpg',
    specs: [
      'Multiple deck lengths available',
      'Detachable gooseneck',
      'Up to 150,000 lbs capacity',
      'Hydraulic controls',
      'Air-ride suspension'
    ],
    features: [
      'Ground-level loading',
      'Adjustable deck height',
      'Multiple axle configurations',
      'Heavy-duty construction',
      'Integrated loading ramps'
    ],
    applications: [
      'Heavy construction equipment',
      'Large industrial machinery',
      'Military equipment',
      'Mining equipment',
      'Agricultural machinery'
    ],
    history: 'RGN trailers revolutionized heavy equipment transport by introducing the detachable gooseneck design, allowing for ground-level loading and unloading of heavy machinery without the need for external ramps or loading docks.',
    technicalDetails: {
      dimensions: {
        length: 'Variable configurations',
        width: '102 inches standard',
        height: 'Adjustable deck height'
      },
      capacity: 'Up to 150,000 lbs',
      specialFeatures: [
        'Hydraulic detaching system',
        'Multiple axle configurations',
        'Custom deck lengths available'
      ]
    }
  }
};

export type EquipmentType = keyof typeof equipmentData;