# Shop-Inventory-System

## Project Overview

This project is a backend system for managing inventory and sales for a small shop. It provides functionality to:

- Add items to the inventory
- Create and manage sales bills
- Update inventory automatically when a bill is created
- Retrieve inventory and bill details

Built with Node.js, Express, and MongoDB, this system ensures seamless integration between inventory management and sales tracking.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Usage](#usage)

## Features

- **Inventory Management**:

  - Add new inventory items
  - Retrieve all items
  - Update item details
  - Get details of specific inventory item
  - Delete items

- **Sales Management**:

  - Create sales bills
  - Retrieve all bills
  - Get details of specific bills

- **Automatic Inventory Update**:
  - Automatically subtract sold items from inventory

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ishasinghh/Shop-Inventory-System.git

   ```

2. **Navigate to the project directory**:

   ```bash
   cd shop-inventory-system

   ```

3. **Install dependencied**

   ```bash
   npm install

   ```

4. **Create a `.env` file:**

   - Copy `.env.example` to `.env` and update with your environment variables.

5. **Run the application**:
   ```bash
   npm start
   ```
6. ## API Documentation

   Swagger documentation is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs) for a detailed overview of the API endpoints and their usage.

7. ## Usage

   Once the application is running, you can access the API endpoints at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Inventory

- `POST /inventories` - Add a new item
- `GET /inventories` - Retrieve all items
- `GET /inventories/:id` - Retrieve all items
- `PUT /inventories/:id` - Update an item
- `DELETE /inventories/:id` - Delete an item

### Bills

- `POST /bills` - Create a new bill
- `GET /bills` - Retrieve all bills
- `GET /bills/:id` - Retrieve a specific bill
