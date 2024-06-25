# NextJs 14 + Typescript + TailwindCSS

## Requirements

- Node.js 20+ and yarn/npm

## Tech Stack

- Next v14, Typescript
- React Query, Zustand, Next-Auth
- TailwindCSS, Radix-UI

## Getting started

Run the following command on your local environment

```shell
yarn
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── public                          # Public assets folder (include images, icons and fonts)
├── src
│   ├── components                  # Shared base components
│   ├── containers                  # Containers as modal, form, section,...
│   ├── layouts                     # Layouts
│   ├── app                         # App Routes
│   └── styles                      # Declare common css variables, common css
│   └── libs                        # Include utils and helpers
│   └── constants                   # Variables (enums, constants)
│   └── types                       # Define types
│   └── services                    # Services (apis and queries)
│   └── stores                      # Stores
│   └── schemas                     # Define schemas
│   └── middleware.ts               # Protect private routes with middleware
└── tsconfig.json                   # TypeScript configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
