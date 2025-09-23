import { Offer } from '../types/offers';

export const mockedOffers: Offer[] = [
  {
    id: 0,
    businessName: 'BeanBrew Café',
    offerName: 'Buy 2 coffees, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    goal: 'Purchase 2 coffees',
    reward: {
      value: 20,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Fuel your mornings with our special coffee deal! Buy any two handcrafted coffees and enjoy a third one on the house. Perfect for sharing with friends or treating yourself to an extra boost.',
    startDate: '2025-09-01T00:00:00Z',
    endDate: '2025-09-30T23:59:59Z',
  },
  {
    id: 1,
    businessName: 'FreshMart Groceries',
    offerName: 'Spend $50, earn bonus points',
    offerLogo: 'https://images.unsplash.com/photo-1586201375761-83865001e17d',
    goal: 'Spend $50+ in one transaction',
    reward: {
      value: 40,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Stock up on your essentials and get rewarded! Every time you spend $50 or more in a single purchase, you’ll earn bonus loyalty points to use toward future savings.',
    startDate: '2025-10-01T00:00:00Z',
    endDate: '2025-10-31T23:59:59Z',
  },
  {
    id: 2,
    businessName: 'GlowSkin Spa',
    offerName: 'Book 2 treatments, get 1 free facial',
    offerLogo: 'https://images.unsplash.com/photo-1587019155152-6b1c1f1e1c8e',
    goal: 'Book 2 spa treatments',
    reward: {
      value: 60,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Pamper yourself with our spa package! Book any two treatments and receive a complimentary facial to leave your skin glowing and refreshed.',
    startDate: '2025-09-15T00:00:00Z',
    endDate: '2025-10-15T23:59:59Z',
  },
  {
    id: 3,
    businessName: 'FitZone Gym',
    offerName: 'Sign up for 3 months, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1',
    goal: 'Purchase 3-month membership',
    reward: {
      value: 100,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Commit to your fitness journey! Sign up for a 3-month membership and we’ll add an extra month free, plus bonus points to keep you motivated.',
    startDate: '2025-11-01T00:00:00Z',
    endDate: '2025-12-01T23:59:59Z',
  },
  {
    id: 4,
    businessName: 'PageTurner Books',
    offerName: 'Buy 3 books, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    goal: 'Purchase 3 books',
    reward: {
      value: 30,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Expand your library with our special offer! Buy any three books and receive a fourth one free. Perfect for avid readers and gift-givers alike.',
    startDate: '2025-09-10T00:00:00Z',
    endDate: '2025-09-25T23:59:59Z',
  },
  {
    id: 5,
    businessName: 'Urban Wheels',
    offerName: 'Rent 2 bikes, get 1 free hour',
    offerLogo: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231',
    goal: 'Rent 2 bikes',
    reward: {
      value: 25,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Explore the city on two wheels! Rent two bikes and enjoy an extra hour of riding for free, plus bonus points to use on your next adventure.',
    startDate: '2025-09-05T00:00:00Z',
    endDate: '2025-09-20T23:59:59Z',
  },
  {
    id: 6,
    businessName: 'TasteBuds Restaurant',
    offerName: 'Free dessert with 2 entrées',
    offerLogo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    goal: 'Order 2 entrées',
    reward: {
      value: 15,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Dine with us and sweeten your meal! Order any two entrées and receive a complimentary dessert of your choice, plus loyalty points for your next visit.',
    startDate: '2025-09-01T00:00:00Z',
    endDate: '2025-09-30T23:59:59Z',
  },
  {
    id: 7,
    businessName: 'CinemaWorld',
    offerName: 'Buy 2 tickets, get popcorn free',
    offerLogo: 'https://images.unsplash.com/photo-1581905764498-3c7f3b6b6b6f',
    goal: 'Buy 2 movie tickets',
    reward: {
      value: 20,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Enjoy the big screen with a tasty bonus! Buy two tickets and get a free large popcorn, plus loyalty points to use on your next movie night.',
    startDate: '2025-10-01T00:00:00Z',
    endDate: '2025-10-15T23:59:59Z',
  },
  {
    id: 8,
    businessName: 'PetPals Store',
    offerName: 'Buy 2 bags of pet food, get 1 toy free',
    offerLogo: 'https://images.unsplash.com/photo-1558788353-f76d92427f16',
    goal: 'Buy 2 bags of pet food',
    reward: {
      value: 35,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Treat your furry friend! Buy two bags of premium pet food and receive a free toy, plus bonus points to keep your pet happy and healthy.',
    startDate: '2025-09-20T00:00:00Z',
    endDate: '2025-10-20T23:59:59Z',
  },
  {
    id: 9,
    businessName: 'StyleHub Fashion',
    offerName: 'Spend $100, get $20 voucher',
    offerLogo: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47',
    goal: 'Spend $100+ in one purchase',
    reward: {
      value: 50,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Refresh your wardrobe and get rewarded! Spend $100 or more in-store or online and receive a $20 voucher plus loyalty points for future shopping.',
    startDate: '2025-11-01T00:00:00Z',
    endDate: '2025-11-30T23:59:59Z',
  },
  {
    id: 10,
    businessName: 'Techie Electronics',
    offerName: 'Buy a laptop, get free headphones',
    offerLogo: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    goal: 'Purchase 1 laptop',
    reward: {
      value: 120,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Upgrade your tech! Buy any laptop and receive a pair of premium headphones free, plus loyalty points to use on your next gadget purchase.',
    startDate: '2025-09-01T00:00:00Z',
    endDate: '2025-09-30T23:59:59Z',
  },
  {
    id: 11,
    businessName: 'GreenLeaf Organics',
    offerName: 'Buy 3 juices, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1572441710534-8d5a1a1f1f1f',
    goal: 'Purchase 3 organic juices',
    reward: {
      value: 25,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Stay refreshed and healthy with our organic juice deal! Buy three freshly pressed juices and enjoy a fourth one free, plus bonus points to keep you energized.',
    startDate: '2025-09-01T00:00:00Z',
    endDate: '2025-09-15T23:59:59Z',
  },
  {
    id: 12,
    businessName: 'RideAway Car Rentals',
    offerName: 'Rent 3 days, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    goal: 'Rent a car for 3 days',
    reward: {
      value: 70,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Hit the road for less! Rent a car for three days and get an extra day free, plus loyalty points to use on your next trip.',
    startDate: '2025-10-05T00:00:00Z',
    endDate: '2025-10-25T23:59:59Z',
  },
  {
    id: 13,
    businessName: 'HappyFeet Shoes',
    offerName: 'Buy 1 pair, get 20% off second',
    offerLogo: 'https://images.unsplash.com/photo-1528701800489-20be9c1e1e1e',
    goal: 'Buy 1 pair of shoes',
    reward: {
      value: 30,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Step into style! Buy one pair of shoes and get 20% off your second pair, plus loyalty points to keep your wardrobe fresh.',
    startDate: '2025-09-20T00:00:00Z',
    endDate: '2025-10-10T23:59:59Z',
  },
  {
    id: 14,
    businessName: "Gamer's Haven",
    offerName: 'Buy 2 games, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1606813902914-1f1f1f1f1f1f',
    goal: 'Purchase 2 video games',
    reward: {
      value: 50,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Level up your collection! Buy any two video games and receive a third one free, plus bonus points to use on future gaming gear.',
    startDate: '2025-11-01T00:00:00Z',
    endDate: '2025-11-30T23:59:59Z',
  },
  {
    id: 15,
    businessName: 'Bloom & Co. Florist',
    offerName: 'Buy 2 bouquets, get 1 free vase',
    offerLogo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    goal: 'Purchase 2 bouquets',
    reward: {
      value: 20,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Brighten someone’s day! Buy two beautiful bouquets and receive a free decorative vase, plus loyalty points for your next floral surprise.',
    startDate: '2025-09-25T00:00:00Z',
    endDate: '2025-10-25T23:59:59Z',
  },
  {
    id: 16,
    businessName: 'SkyHigh Airlines',
    offerName: 'Book 2 flights, get bonus miles',
    offerLogo: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92',
    goal: 'Book 2 flights',
    reward: {
      value: 150,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Travel more, earn more! Book two flights with us and receive bonus loyalty points to use toward future trips.',
    startDate: '2025-12-01T00:00:00Z',
    endDate: '2025-12-31T23:59:59Z',
  },
  {
    id: 17,
    businessName: 'Zen Yoga Studio',
    offerName: 'Buy 5 classes, get 1 free',
    offerLogo: 'https://images.unsplash.com/photo-1554311884-36d1a3c6a1a1',
    goal: 'Purchase 5 yoga classes',
    reward: {
      value: 40,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Find your balance! Buy five yoga classes and receive a sixth one free, plus loyalty points to keep your practice going strong.',
    startDate: '2025-09-15T00:00:00Z',
    endDate: '2025-10-15T23:59:59Z',
  },
  {
    id: 18,
    businessName: 'SweetTreats Bakery',
    offerName: 'Buy 6 cupcakes, get 2 free',
    offerLogo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    goal: 'Purchase 6 cupcakes',
    reward: {
      value: 15,
      point: 'WAT',
      pointLogo:
        'https://avatars.slack-edge.com/2018-07-07/394090795425_d839ad8427bc10706d5e_512.jpg',
    },
    offerDescription:
      'Indulge your sweet tooth! Buy six cupcakes and get two more free, plus loyalty points to make your next visit even sweeter.',
    startDate: '2025-09-01T00:00:00Z',
    endDate: '2025-09-30T23:59:59Z',
  },
];
