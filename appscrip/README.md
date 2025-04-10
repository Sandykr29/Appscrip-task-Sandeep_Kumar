# Appscrip Task - Sandeep Kumar

This is a product listing web application built using [Next.js](https://nextjs.org). It fetches product data from an external API, provides filtering and sorting options, and displays the products in a responsive grid layout.

## Features

- **Product Listing**: Displays a list of products fetched from the [Fake Store API](https://fakestoreapi.com/).
- **Filtering**: Filter products by categories such as Electronics, Jewelery, Men's Clothing, and Women's Clothing.
- **Sorting**: Sort products by price (low to high, high to low), popularity, and newest first.
- **Responsive Design**: Fully responsive layout for both desktop and mobile devices.
- **Server-Side Rendering (SSR)**: Uses Next.js's `getServerSideProps` for fetching data server-side.

## Live Demo

The application is deployed and accessible at:  
[https://appscrip-task-sandeep-kumar.vercel.app/](https://appscrip-task-sandeep-kumar.vercel.app/)

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm, yarn, pnpm, or bun (any package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url/appscrip-task-sandeep-kumar.git
   cd appscrip-task-sandeep-kumar
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To build the application for production:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

To start the production server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

- **`app/components`**: Contains reusable UI components like `ProductGrid`, `FilterSidebar`, and `SortingDropdown`.
- **`app/pages`**: Contains the main pages of the application, including `landingpage.jsx`.
- **`app/utils`**: Contains utility functions like `api.js` for fetching data.
- **`public`**: Static assets like images and icons.
- **`styles`**: CSS modules for styling components.

## API Integration

The application fetches product data from the [Fake Store API](https://fakestoreapi.com/). The API call is handled in `app/utils/api.js`.

## Deployment

The application is deployed on [Vercel](https://vercel.com/). To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Deploy the project with a single click.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React.
- [Fake Store API](https://fakestoreapi.com/) - API used for fetching product data.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---
Developed by **Sandeep Kumar**
