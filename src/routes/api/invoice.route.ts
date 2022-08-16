import { Router } from 'express';
import { InvoiceController } from '../../controller';

const router = Router();

router.post(
    '/create_invoice',
    InvoiceController.createInvoice
);

router.post(
    '/cancel_invoice',
    InvoiceController.cancelInvoice
);

router.post(
    '/show_invoices',
    InvoiceController.showInvoices
);

export const InvoiceRoute = {
    router,
};
