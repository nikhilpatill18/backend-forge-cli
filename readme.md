# Backend Forge CLI

A powerful CLI tool to quickly generate a secure Node.js + Express + Mongoose backend template with built-in security best practices.

---

## Features

- **Express 5** setup
- **MongoDB + Mongoose** integration
- **Security middlewares included**:
  - Helmet
  - Express Rate Limiter
  - HPP (HTTP Parameter Pollution)
  - XSS Clean
  - MongoDB Sanitize
- Preconfigured folder structure:
  - `controllers/`, `routes/`, `models/`, `utils/`, `config/`
- Global error handler
- Ready-to-run scripts:
  - `npm run start`
  - `npm run debug` (if using ndb)

---

## Installation

Install globally using npm:

```bash
npm install -g backend-forge
