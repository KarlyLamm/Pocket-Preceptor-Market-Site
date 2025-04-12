# Pocket Preceptor Marketing Website

A modern, responsive marketing website for Pocket Preceptor, a real-time nurse support platform.

## Overview

Pocket Preceptor is a comprehensive support system for nurses, providing AI-powered guidance, peer support, and a thriving community. This marketing website showcases the platform's features and benefits to potential hospital clients.

## Technologies Used

- **React**: Frontend framework
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **Formspree**: For handling contact form submissions ([formspree.io](https://formspree.io/))
- **Vercel**: For hosting and deployments ([vercel.com](https://vercel.com))

## Features

- Responsive design that works on all devices
- Interactive UI with smooth transitions
- Contact form integration with Formspree
- Video demo showcase
- Feature and benefit highlights

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pocket-preceptor-marketing.git
   cd pocket-preceptor-marketing
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is deployed on Vercel. Any push to the main branch will automatically trigger a new deployment.

To deploy manually:

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```
   vercel
   ```

## Form Handling

We use [Formspree](https://formspree.io/) to handle all contact form submissions. The form endpoint is configured in the `ContactForm` component in `src/App.tsx`.

## Project Structure

```
pocket-preceptor-marketing/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, videos, and other media
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Entry point
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any inquiries about this project, please contact the development team. 