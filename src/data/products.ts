export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string | string[];
  description: string;
  ingredients: string[];
}

export const CATEGORIES = [
  { id: 'brunch', name: 'Brunch', icon: '🍳', count: 5, image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=200&h=200' },
  { id: 'burger', name: 'Burger', icon: '🍔', count: 3, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=200&h=200' },
  { id: 'poulet', name: 'Poulet Frit', icon: '🍗', count: 3, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=200&h=200' },
  { id: 'salade', name: 'Salade', icon: '🥗', count: 2, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&h=200' },
  { id: 'jus', name: 'Jus de Fruits', icon: '🍹', count: 3, image: 'https://images.unsplash.com/photo-1536816579748-4fcb3f49a7f4?auto=format&fit=crop&w=200&h=200' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Poulet Rôti Classique',
    price: 15.00,
    rating: 5,
    category: 'poulet',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=400&h=400',
    description: 'Un poulet rôti juteux mariné aux herbes de Provence et servi avec des légumes de saison.',
    ingredients: ['Poulet fermier', 'Herbes de Provence', 'Ail', 'Huile d\'olive', 'Légumes racines']
  },
  {
    id: 'b1',
    name: 'Oeufs Bénédictine au Saumon',
    price: 18.00,
    rating: 5,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=400&h=400',
    description: 'Oeufs pochés sur muffins anglais, saumon fumé d\'Écosse et sauce hollandaise onctueuse.',
    ingredients: ['Oeufs pochés', 'Saumon fumé', 'Muffins anglais', 'Sauce hollandaise', 'Aneth']
  },
  {
    id: 'b2',
    name: 'Avocado Toast Signature',
    price: 14.00,
    rating: 5,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&h=400',
    description: 'Pain de campagne grillé, avocat écrasé au citron vert, graines de courge et piment d\'Espelette.',
    ingredients: ['Pain de campagne', 'Avocat', 'Citron vert', 'Graines de courge', 'Piment d\'Espelette']
  },
  {
    id: 'b3',
    name: 'Pancakes aux Myrtilles',
    price: 12.00,
    rating: 4,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&h=400',
    description: 'Pile de pancakes moelleux, myrtilles fraîches, sirop d\'érable pur et beurre fouetté.',
    ingredients: ['Pancakes', 'Myrtilles', 'Sirop d\'érable', 'Beurre']
  },
  {
    id: 'b7',
    name: 'Granola Bowl Maison',
    price: 11.00,
    rating: 4,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=400&h=400',
    description: 'Yaourt grec, granola croustillant aux noix, fruits de saison et miel de fleurs.',
    ingredients: ['Yaourt grec', 'Granola', 'Fruits frais', 'Miel']
  },
  {
    id: '2',
    name: 'Sauté de Tofu aux Légumes',
    price: 12.00,
    rating: 4,
    category: 'salade',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=400',
    description: 'Un mélange croquant de légumes frais et de tofu ferme, sauté dans une sauce soja légère.',
    ingredients: ['Tofu', 'Brocoli', 'Carottes', 'Poivrons', 'Sauce soja', 'Gingembre']
  },
  {
    id: '3',
    name: 'Nuggets de Poulet & Frites',
    price: 13.00,
    rating: 5,
    category: 'poulet',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&h=400',
    description: 'Nuggets de poulet croustillants faits maison servis avec des frites dorées.',
    ingredients: ['Filet de poulet', 'Chapelure', 'Pommes de terre', 'Sauce barbecue']
  },
  {
    id: '4',
    name: 'Burger Gourmet',
    price: 16.00,
    rating: 5,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&h=400',
    description: 'Bœuf charolais, cheddar affiné, oignons caramélisés et notre sauce secrète.',
    ingredients: ['Bœuf', 'Cheddar', 'Oignons', 'Laitue', 'Pain brioché']
  },
  {
    id: 'bg3',
    name: 'Veggie Burger Deluxe',
    price: 14.00,
    rating: 5,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=400&h=400',
    description: 'Steak de pois chiches et quinoa, avocat, pousses d\'épinards et sauce yaourt-fines herbes.',
    ingredients: ['Steak veggie', 'Avocat', 'Épinards', 'Sauce yaourt', 'Pain complet']
  },
  {
    id: 'b5',
    name: 'Pain Perdu Brioché',
    price: 13.00,
    rating: 5,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&h=400',
    description: 'Tranche épaisse de brioche perdue, caramel au beurre salé et éclats de noisettes.',
    ingredients: ['Brioche', 'Caramel', 'Noisettes', 'Crème chantilly']
  },
  {
    id: '6',
    name: 'Salade Healthy',
    price: 11.00,
    rating: 5,
    category: 'salade',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=400',
    description: 'Un bol d\'énergie avec quinoa, avocat, pois chiches et vinaigrette au citron.',
    ingredients: ['Quinoa', 'Avocat', 'Pois chiches', 'Tomates cerises', 'Citron']
  },
  {
    id: 'j1',
    name: 'Jus d\'Orange Frais',
    price: 6.00,
    rating: 5,
    category: 'jus',
    image: 'https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/JUS%20ORANGE.jpg',
    description: 'Oranges pressées à la minute pour un plein de vitamines.',
    ingredients: ['Oranges']
  },
  {
    id: 'j3',
    name: 'Citronnade Maison',
    price: 5.00,
    rating: 5,
    category: 'jus',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&h=400',
    description: 'Citrons jaunes et verts, menthe fraîche et une pointe de sucre de canne.',
    ingredients: ['Citron', 'Menthe', 'Sucre de canne']
  },
  {
    id: 'bg2',
    name: 'Burger Poulet Croustillant',
    price: 15.00,
    rating: 5,
    category: ['burger', 'poulet'],
    image: 'https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/%C2%A8POULET.jpg',
    description: 'Filet de poulet pané, coleslaw maison, cornichons et sauce spicy.',
    ingredients: ['Poulet', 'Coleslaw', 'Cornichons', 'Sauce spicy', 'Pain brioché']
  },
  {
    id: 'j4',
    name: 'Jus de Fraise Frais',
    price: 7.00,
    rating: 5,
    category: 'jus',
    image: 'https://storage.googleapis.com/novelec_assets/RESTAU%20BRUNCH/Jus%20de%20fraise.png',
    description: 'Fraises fraîches mixées pour un jus onctueux et naturellement sucré.',
    ingredients: ['Fraises']
  },
  {
    id: 's2',
    name: 'Club Sandwich Classique',
    price: 14.00,
    rating: 4,
    category: 'brunch',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&h=400',
    description: 'Dinde fumée, bacon croustillant, laitue, tomate et mayonnaise sur pain toasté.',
    ingredients: ['Dinde', 'Bacon', 'Laitue', 'Tomate', 'Mayonnaise', 'Pain de mie']
  }
];
