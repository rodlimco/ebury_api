const express = require('express');
const app = express();
const port = 3000;

const wallets = [
    {
        "account_id": "3230bd7e-cb4c-553c-bcd3-607f3a3f8e20",
        "company_name": "Business Example LTD",
        "amount": { "amount": "198395.37", "currency": "USD" },
        "credit_debit_indicator": "Credit",
        "datetime": "2022-08-08T15:44:45.294"
    },
    {
        "account_id": "5259846c-1d53-d9e0-1865-9d3815c42c16",
        "company_name": "Business Example LTD",
        "amount": { "amount": "2608.12", "currency": "EUR" },
        "credit_debit_indicator": "Credit",
        "datetime": "2022-08-08T15:44:45.294"
    },
    {
        "account_id": "827bc986-8b16-4f68-a0d3-6de342b03b0d",
        "company_name": "Business Example LTD",
        "amount": { "amount": "123456.78", "currency": "GBP" },
        "credit_debit_indicator": "Debit",
        "datetime": "2022-08-08T15:44:45.294"
    },
    {
        "account_id": "7d9a1d2e-7bb7-4e12-83e7-4d4f9f2f8a7c",
        "company_name": "Business Example LTD",
        "amount": { "amount": "98765.43", "currency": "JPY" },
        "credit_debit_indicator": "Credit",
        "datetime": "2022-08-08T15:44:45.294"
    },
    {
        "account_id": "a9f1d6b8-3e52-4a4d-8c72-f1c9f1c6e8a1",
        "company_name": "Business Example LTD",
        "amount": { "amount": "54321.1234", "currency": "CHF" },
        "credit_debit_indicator": "Debit",
        "datetime": "2022-08-08T15:44:45.294"
    }
];

app.get('/wallets', (req, res) => {
    res.json(wallets);
});

app.get('/wallets/:id', (req, res) => {
    const walletId = req.params.id;
    const wallet = wallets.find(w => w.account_id === walletId);

    if (wallet) {
        res.json(wallet);
    } else {
        res.status(404).json({
            error: {
                statusCode: 404,
                message: "Wallet not found"
            }
        });
    }
});

app.listen(port, () => {
    console.log(`Mock API running on http://localhost:${port}`);
});