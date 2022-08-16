import { Request, Response } from 'express';
import axios from 'axios';
import { wrapRequestAsync } from '../utils/api';
import { uResponse } from '../service/types';
import httpStatus from 'http-status';
import { Config } from '../config/config';

const mintNFT = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.post(`${Config.api.base_url}nfts/mint`, {
        key: Config.api.api_key,
        chain_id: reqBody.chain,
        contract: reqBody.contract,
        nft_id: reqBody.nft_id,
        nft_data: reqBody.metadata_url,
        to: reqBody.receiver
    }, Config.req_header);

    uResponse(res, respData, httpStatus.OK);
});

const newNFT = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.post(`${Config.api.base_url}nfts/contract`, {
        key: Config.api.api_key,
        chain_id: reqBody.chain,
        name: reqBody.nft_name,
        short_name: reqBody.short_name
    }, Config.req_header);

    uResponse(res, respData, httpStatus.OK);
});

const transferNFT = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.post(`${Config.api.base_url}nfts/transfer`, {
        key: Config.api.api_key,
        chain_id: reqBody.chain,
        contract: reqBody.contract,
        nft_id: reqBody.nft_id,
        from: reqBody.from,
        to: reqBody.receiver,
    }, Config.req_header);

    uResponse(res, respData, httpStatus.OK);
});

const showContracts = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.get(`${Config.api.base_url}contracts`, {
        params: {
            key: Config.api.api_key,
            chain_id: reqBody.chain
        },
        ...Config.req_header
    });

    uResponse(res, respData, httpStatus.OK);
});

const showNFTs = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.get(`${Config.api.base_url}nfts`, {
        params: {
            key: Config.api.api_key,
            chain_id: reqBody.chain
        },
        ...Config.req_header
    });

    uResponse(res, respData, httpStatus.OK);
});

export const NFTController = {
    newNFT,
    mintNFT,
    transferNFT,
    showContracts,
    showNFTs
}
