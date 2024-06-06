## Getting Started

First, install all the dependencies

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scaffolding

src/
├── app/                                     # All the pages (Next.js logic)
│   └── page.tsx                             # Home page
│                 
├── components/                              # UI components
│   └── Row/                                 # First custom component
│                 
├── Framework/                               # All the Backend Driven UI logic
│   └── Renderer/                            # The component in charge of Rendering all the components from the Backend JSON
│   └── componentMap.ts                      # The `Map` were all the components need to be defined before being used by the `Renderer` component
│                 
└── types.ts                                 # All the custom typings
