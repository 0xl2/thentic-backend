import { Router } from 'express';
import { WalletController } from '../../controller';

const router = Router();

router.post(
    '/create_wallet',
    WalletController.createWallet
);

router.get(
    '/show_wallets',
    WalletController.showWallets
);

export const WalletRoute = {
    router,
};
