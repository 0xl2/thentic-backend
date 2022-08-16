import { Router } from 'express';
import { NFTRoute } from './nft.route';
import { InvoiceRoute } from './invoice.route';
import { WalletRoute } from './wallet.route';

const router = Router();

const publicRoutes = [
    {
        path: '/nft',
        route: NFTRoute.router
    },
    {
        path: '/invoice',
        route: InvoiceRoute.router
    },
    {
        path: '/wallet',
        route: WalletRoute.router
    }
];

publicRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
