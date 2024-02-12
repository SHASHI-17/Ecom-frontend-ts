
export type User = {
    name: string,
    email: string,
    photo: string,
    gender: string,
    role: string,
    dob: string,
    _id: string
}

export type Product = {
    name: string,
    _id: string,
    category: string,
    photo: string,
    price: number,
    stock: number
}

export type ShippingInfo = {
    address: string,
    city: string,
    state: string,
    country: string,
    pincode: number,
}

export type CartItem = {
    productId: string,
    photo: string,
    name: string,
    price: number,
    stock: number,
    quantity: number
}

export type OrderItem = Omit<CartItem, 'stock'> & { _id: string };

export type Order = {
    orderItems: OrderItem[],
    shippingInfo: ShippingInfo,
    subtotal: number,
    total: number,
    tax: number,
    discount: number,
    shippingCharges: number,
    status: string,
    _id: string,
    user: {
        name: string,
        _id: string,
    }
}

type CountAndChange = {
    revenue: number;
    product: number;
    user: number;
    order: number;
}

type LatestTransaction = {
    _id: string;
    amount: number;
    discount: number;
    quantity: number;
    status:string;
}

export type Stats = {
    categoryCount: Record<string, number>[],
    // categoriesCount,
    changePercent: CountAndChange,
    counts: CountAndChange,
    chart: {
        order: number[],
        revenue: number[]
    },
    userRatio: {
        male: number;
        female: number;
    },
    latestTransactions: LatestTransaction[],
}

export type Pie = {
    orderFullfillment:{
        processing: number;
        shipped: number;
        delivered: number;
    },
    productCategories: Record<string, number>[],
    stockAvailability:{
        inStock: number;
        outOfStock: number;
    },
    revenueDistribution:{
        netMargin: number;
        discount: number;
        productionCost: number;
        burnt: number;
        marketingCost: number;
    },
    usersAgeGroup:{
        teen: number;
        adult: number;
        old: number;
    },
    adminCustomer:{
        admin: number;
        customer: number;
    }
}