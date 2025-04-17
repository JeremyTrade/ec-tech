// ecommerce.schema.ts

// ---------- User & Account ----------
export interface User {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  updatedAt?: string;
  role: "customer" | "admin" | "vendor";
  profile?: UserProfile;
}

export interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  phone?: string;
  defaultAddressId?: string;
  avatarUrl?: string;
}

export interface Address {
  id: string;
  userId: string;
  label?: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  isDefault: boolean;
}

// ---------- Product & Catalog ----------
export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  description?: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  brand?: string;
  price: number;
  categoryId: string;
  images: ProductImage[];
  specifications?: Record<string, string>;
  averageRating?: number;
  isActive: boolean;
  createdAt: string;
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  altText?: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  color?: string;
  size?: string;
  price: number;
  stock: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment?: string;
  createdAt: string;
}

// ---------- Cart & Checkout ----------
export interface Cart {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt?: string;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  cartId: string;
  productVariantId: string;
  quantity: number;
}

// ---------- Orders & Payments ----------
export interface Order {
  id: string;
  userId: string;
  addressId: string;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  totalAmount: number;
  createdAt: string;
  updatedAt?: string;
  items: OrderItem[];
  paymentId?: string;
  trackingNumber?: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productVariantId: string;
  quantity: number;
  unitPrice: number;
}

export interface Payment {
  id: string;
  orderId: string;
  provider: "stripe" | "paypal" | "manual";
  status: "pending" | "completed" | "failed";
  amount: number;
  transactionId?: string;
  paidAt?: string;
}

export interface Refund {
  id: string;
  paymentId: string;
  amount: number;
  reason: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

// ---------- Logistics & Fulfillment ----------
export interface Shipment {
  id: string;
  orderId: string;
  carrier: string;
  trackingNumber: string;
  shippedAt?: string;
  deliveredAt?: string;
  status: "pending" | "shipped" | "in_transit" | "delivered";
}

// ---------- Wishlist & Support ----------
export interface Wishlist {
  id: string;
  userId: string;
  products: string[]; // array of Product IDs
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  message: string;
  status: "open" | "in_progress" | "resolved";
  createdAt: string;
}

// ---------- Vendor / Marketplace ----------
export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone?: string;
  logoUrl?: string;
  active: boolean;
}

export interface VendorProduct {
  id: string;
  vendorId: string;
  productId: string;
  price: number;
  stock: number;
}

export interface VendorPayout {
  id: string;
  vendorId: string;
  amount: number;
  status: "pending" | "paid";
  payoutDate?: string;
}

// ---------- Miscellaneous ----------
export interface Coupon {
  id: string;
  code: string;
  discountType: "percent" | "fixed";
  value: number;
  usageLimit?: number;
  usedCount: number;
  expiresAt?: string;
  isActive: boolean;
}

export interface Banner {
  id: string;
  imageUrl: string;
  targetUrl?: string;
  placement: "homepage" | "category" | "product";
  isActive: boolean;
}

export interface SEOData {
  id: string;
  pageType: "product" | "category" | "blog";
  pageId: string;
  title: string;
  description?: string;
  keywords?: string[];
}
