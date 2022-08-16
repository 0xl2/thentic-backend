import { Request, Response } from 'express';
import axios from 'axios';
import { wrapRequestAsync } from '../utils/api';
import { uResponse } from '../service/types';
import httpStatus from 'http-status';
import { Config } from '../config/config';

const createWallet = wrapRequestAsync(async (req: Request, res: Response) => {
    const respData = await axios.post(`${Config.api.base_url}wallets/new`, {
        key: Config.api.api_key
    }, Config.req_header);

    uResponse(res, respData, httpStatus.OK);
});

const showWallets = wrapRequestAsync(async (req: Request, res: Response) => {
    const respData = await axios.get(`${Config.api.base_url}wallets/all`, {
        params: {
            key: Config.api.api_key
        },
        ...Config.req_header
    });

    uResponse(res, respData, httpStatus.OK);
});

export const WalletController = {
    createWallet,
    showWallets
}
