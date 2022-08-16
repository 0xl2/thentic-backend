import { Router } from 'express';
import { NFTController } from '../../controller';

const router = Router();

router.post(
    '/create_contract',
    NFTController.newNFT
);

router.post(
    '/mint_nft',
    NFTController.mintNFT
);

router.post(
    '/transfer_nft',
    NFTController.transferNFT
);

router.get(
    '/show_contracts',
    NFTController.showContracts
);

router.get(
    '/show_nfts',
    NFTController.showNFTs
);

export const NFTRoute = {
    router,
};
