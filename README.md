# Finance Backend System

## Overview
 A scalable backend system built using Node.js and MongoDB to manage financial transactions with secure role-based access control and real-time analytics.

## Features
- User management (Admin, Analyst, Viewer)
- Transaction CRUD operations
- Filtering transactions
- Dashboard summary (income, expense, balance)
- Category-wise analytics
- Role-based access control (RBAC)

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## Folder Structure
finance-backend\
│── src\
│   ├── controllers\
│   ├── models\
│   ├── routes\
│   ├── middleware\
│   ├── services\
│   └── config\
│── .env\
│── package.json\
│── server.js\

## Role-Based Access Control

- Admin → Full CRUD access
- Analyst → Read + analytics
- Viewer → Read-only access

### Transactions
- POST /api/transactions → Create transaction
- GET /api/transactions → Get all transactions (with filters)
- PUT /api/transactions/:id → Update transaction
- DELETE /api/transactions/:id → Delete transaction

## API Endpoints

### Users
POST /api/users

### Transactions
POST /api/transactions
GET  /api/transactions

### Dashboard
GET /api/dashboard/summary
GET /api/dashboard/categories

## Access Control
- Admin: Full access
- Analyst: View + analytics
- Viewer: Limited access

## Sample Response
'''GET /api/dashboard/summary

{
  "totalIncome": 50000,
  "totalExpense": 20000,
  "balance": 30000
}'''

## Setup
1. Clone repo
2. Install dependencies:
   npm install
3. Create .env:
   MONGO_URI=your_connection_string
4. Run server:
   npm run dev

## Future Improvements
- Add pagination for transactions
- Implement caching (Redis)
- Add unit and integration tests
- Deploy using Docker
- Add frontend dashboard
