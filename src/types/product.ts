export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  isNew?: boolean;
  discount?: number;
  description: string;
  specifications: {
    [key: string]: string;
  };
  features?: string[];
  benefits?: string[];
  warranty?: {
    type: string;
    duration: string;
    coverage: string;
    details: string;
  };
  shipping?: {
    free: boolean;
    estimated: string;
    return: string;
  };
}

export interface Review {
  id: number;
  user: {
    name: string;
    avatar?: string;
  };
  rating: number;
  title: string;
  content: string;
  date: string;
  likes: number;
  dislikes: number;
  verified: boolean;
  images?: string[];
}

export interface BuyingGuideSection {
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface BuyingGuideData {
  title: string;
  sections: BuyingGuideSection[];
}

export interface ProductReviewsProps {
  productId: number;
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export interface RelatedProductsProps {
  products: Product[];
  currentProductId: number;
}

export interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

export interface QuickViewProps {
  product: Product;
  onClose: () => void;
}

export interface BuyingGuideProps {
  category: string;
} 