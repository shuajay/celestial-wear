export interface Product { 
    id: string;
    name: string;
    description: string;
    images: string[];
    price: number;
    sizes: string[];
    colors: Color[];
    category: string;
    inStock: boolean;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Color {
    name: string;
    hex: string;
}