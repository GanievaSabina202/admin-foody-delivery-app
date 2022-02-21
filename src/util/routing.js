import { icons } from "../assets/Icons";

export const CATAGORY = {
    MAIN: {
        HREF: '/',
        ICON: null,
        PANEL: {
            HREF: "/panel",
            ICON: null,
            CHILD: {
                DASHBOARD: {
                    HREF: "/panel/dashboard",
                    ICON: icons.DASHBOARD,
                    NAME: 'Dashboard'
                },
                PRODUCTS: {
                    HREF: "/panel/products",
                    ICON: icons.PRODUCTS,
                    NAME: 'Products',
                },
                RESTAURANTS: {
                    HREF: "/panel/restaurants",
                    ICON: icons.RESTAURANTS,
                    NAME: 'Restaurants',
                },
                CATEGORY: {
                    HREF: "/panel/category",
                    ICON: icons.CATEGORY,
                    NAME: 'Category',

                },
                ORDERS: {
                    HREF: "/panel/orders",
                    ICON: icons.ORDERS,
                    NAME: 'Orders',
                },
                OFFER: {
                    HREF: "/panel/offers",
                    ICON: icons.OFFERS,
                    NAME: 'Offers',
                },
            }
        },

        LOGOUT: {
            HREF: "/login",
            ICON: icons.LOGOUT,
            NAME: 'Logout',
        },
    }
}