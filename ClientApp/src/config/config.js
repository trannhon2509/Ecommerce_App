import Home from '../pages/Home'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'
import FilterLayout from '../layouts/FilterLayout/FilterLayout'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Chat from '../pages/Chat'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contract'
import Shop from '../pages/Shop'
import Team from '../pages/Team'
import Willist from '../pages/Willist'
import HomeLayout from '../layouts/HomeLayout/HomeLayout'
import Login from '../pages/Login'
import EmptyLayout from '../layouts/EmptyLayout/EmptyLayout'
import DashBoard from '../pages/Admin/DashBoard'
import ManageBlog from '../pages/Admin/ManageBlog'
import ManageOrder from '../pages/Admin/ManageOrder'
import ManageUser from '../pages/Admin/ManageUser'
import ChatAdmin from '../pages/Admin/Chat'
import ManageProduct from '../pages/Admin/ManageProduct'
import ProductDetail from '../pages/ProductDetail'
// Route paths for navigation
const RoutePaths = {
    // User path
    about: '/about', // About page
    blog: '/blog', // Blog page
    chat: '/chat', // Chat page
    checkout: '/checkout', // Checkout page
    contact: '/contact', // Contact page
    home: '/', // Home page
    shop: '/shop', // Shop page
    team: '/team', // Team page
    willist: '/willist', // Willist page
    productDetail: '/product-detail', // Product detail page
    // Admin path
    admin: '/admin', // Admin dashboard
    adminBlog: '/admin/blog', // Admin blog page
    adminChat: '/admin/chat', // Admin chat page
    adminOrder: '/admin/order', // Admin order page
    adminUser: '/admin/user', // Admin user page
    adminProduct: '/admin/product',
    login: '/login', //  login page
}

// Public routes accessible to all users
const PublicRoutes = [
    {path: RoutePaths.home, component: Home, layout: HomeLayout}, // Home page with default layout
    {path: RoutePaths.about, component: About, layout: DefaultLayout}, // About page with default layout
    {path: RoutePaths.blog, component: Blog, layout: FilterLayout}, // Blog page with filter layout
    {path: RoutePaths.chat, component: Chat, layout: DefaultLayout}, // Chat page with default layout
    {path: RoutePaths.checkout, component: Checkout, layout: DefaultLayout}, // Checkout page with default layout
    {path: RoutePaths.contact, component: Contact, layout: DefaultLayout}, // Contact page with default layout
    {path: RoutePaths.shop, component: Shop, layout: FilterLayout}, // Shop page with filter layout
    {path: RoutePaths.team, component: Team, layout: DefaultLayout}, // Team page with default layout
    {path: RoutePaths.willist, component: Willist, layout: DefaultLayout}, // Willist page with default layout
    {path: RoutePaths.login, component: Login, layout: EmptyLayout},
    {path: RoutePaths.productDetail, component: ProductDetail, layout: DefaultLayout},
]

// Private routes accessible to admin users
const PrivateRoutes = [
    {path: RoutePaths.admin, component: DashBoard, layout: AdminLayout}, // Admin dashboard with admin layout
    {path: RoutePaths.adminBlog, component: ManageBlog, layout: AdminLayout}, // Admin blog page with admin layout
    {path: RoutePaths.adminChat, component: ChatAdmin, layout: AdminLayout}, // Admin chat page with admin layout
    {path: RoutePaths.adminOrder, component: ManageOrder, layout: AdminLayout}, // Admin order page with admin layout
    {path: RoutePaths.adminUser, component: ManageUser, layout: AdminLayout}, // Admin user page with admin layout
    {path: RoutePaths.adminProduct, component: ManageProduct, layout: AdminLayout},
]

export {RoutePaths, PublicRoutes, PrivateRoutes}