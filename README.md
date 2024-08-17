# PrismaCRUD
ProductManager is a simple CRUD (Create, Read, Update, Delete) application built with [**Prisma**](https://www.prisma.io/) and [**Express.js**](https://expressjs.com/). This application allows users to manage product information efficiently, including details like product name, color, and price. It serves as a foundational tool for inventory management or any system where basic product information needs to be stored, retrieved, and modified.
## Features
- **Create**: Add new products with specific details like name, color, and price.
- **Read**: View a list of all products or individual product details.
- **Update**: Modify existing product information.
- **Delete**: Remove products from the database.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A [MongoDB](https://www.mongodb.com/) database (either a local instance or a MongoDB Atlas cloud database)
## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/ProductManager.git
cd prisma
```
2. **Install dependencies:**

```bash
npm install
```
3. **Set up the environment variables:**
```bash
DATABASE_URL=
PORT=
```
4. **Set up Prisma**
```bash
npx prisma init
```
5. **Define your Prisma schema:**
- Update the prisma/schema.prisma file with your data model:

```bash
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Product {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  name       String
  color      String
  price      Float
  createdAt  DateTime @default(now())
}
```
6. **Generate the Prisma client:**
```bash
npx prisma generate
```
7. **Start the application:**
```bash
npm start
```