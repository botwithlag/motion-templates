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
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics.

Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous
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
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics.

Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous
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
        <p className="text-[10px]  text-gray-700">
         Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics.

Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous
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
        <p className="text-[10px] text-gray-700">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her haunting voice and introspective lyrics.

Her songs often explore themes of tragic romance, glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career that has seen numerous
        </p>
      </div>
    ),
  },
];

export  default cardSeedData