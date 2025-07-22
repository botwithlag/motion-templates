const songs={

}

export interface Card{
    description:string,
    title:string,
    src:string,
    ctaText:string,
    ctaLink:string,
    content:()=>React.ReactNode
}


const cardSeedData: Card[] = [
  {
    title: 'Explore Our Latest Collection',
    description: 'Discover the newest trends in sustainable fashion. From eco-friendly fabrics to timeless designs, find your next favorite piece.',
    src: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
    ctaText: 'Play',
    ctaLink: '/shop/new-arrivals',
    content: () => (
      <div>
        <p className="text-[10px] text-gray-700">
          Our new collection focuses on comfort, style, and environmental responsibility, designed for the conscious consumer.
        </p>
      </div>
    ),
  },
  {
    title: 'Master React with Our New Course',
    description: 'Dive deep into React hooks, context API, and advanced component patterns. Build a complete full-stack application from scratch.',
    src: 'https://assets.aceternity.com/demos/babbu-maan.jpeg',
    ctaText: 'Play',
    ctaLink: '/courses/react-mastery',
    content: () => (
      <div>
        <p className="text-[10px] text-gray-700">
          This comprehensive course will take you from a React beginner to a confident full-stack developer in just weeks.
        </p>
      </div>
    ),
  },
  {
    title: 'Your Guide to Healthy Eating',
    description: 'Transform your diet with simple, delicious, and nutritious recipes. Learn the basics of meal prepping and balanced nutrition.',
    src:"https://assets.aceternity.com/demos/metallica.jpeg",    
    ctaText: 'Play',
    ctaLink: '/recipes/healthy-eating',
    content: () => (
      <div>
        <p className="text-[10px] italic text-gray-700">
          Discover how small changes to your eating habits can lead to significant improvements in your overall well-being.
        </p>
      </div>
    ),
  },
  {
    title: 'Discover Adventure in the Alps',
    description: 'Embark on an unforgettable journey through the majestic Alps. Hiking, skiing, and breathtaking views await every adventurer.',
    src:"https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: 'Play',
    ctaLink: '/destinations/alps',
    content: () => (
      <div>
        <p className="text-sm text-gray-700">
          From thrilling mountain trails to serene alpine lakes, your perfect adventure starts here in the heart of the Alps.
        </p>
      </div>
    ),
  },
];

export  default cardSeedData