import { Request, Response } from 'express';
import axios from 'axios';
import { wrapRequestAsync } from '../utils/api';
import { uResponse } from '../service/types';
import httpStatus from 'http-status';
import { Config } from '../config/config';

const createInvoice = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.post(`${Config.api.base_url}invoices/new`, {
        key: Config.api.api_key,
        chain_id: reqBody.chain,
        amount: reqBody.amount,
        to: reqBody.receiver
    }, Config.req_header);

    uResponse(res, respData, httpStatus.OK);
});

const cancelInvoice = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.body;
    const respData = await axios.delete(`${Config.api.base_url}invoices/cancel`, {
        params: {
            key: Config.api.api_key,
            chain_id: reqBody.chain,
            request_id: reqBody.request_id
        },
        ...Config.req_header
    });

    uResponse(res, respData, httpStatus.OK);
});

const showInvoices = wrapRequestAsync(async (req: Request, res: Response) => {
    const reqBody = req.query;
    const respData = await axios.get(`${Config.api.base_url}invoices/all`, {
        params: {
            key: Config.api.api_key,
            chain_id: reqBody.chain
        },
        ...Config.req_header
    });

    uResponse(res, respData, httpStatus.OK);
});

export const InvoiceController = {
    createInvoice,
    cancelInvoice,
    showInvoices
}
