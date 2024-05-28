# My Static Next.js Blog with Markdown

## Getting Started

1.Prerequisites:
Node.js and pnpm (or npm) installed [pnpm installation](https://pnpm.io/installation)

2.Clone the Repository:

```bash
    git clone https://github.com/Ruler45/blog-site.git
```

3.Change Directory:

```bash
    cd blog-site
```

4.Install Dependencies::

```bash
    pnpm install
    # or
    npm install
```

## Repo Structure

```bash
blog-site/
├── public
│   └── images/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   └── blogs/
│   │   │       └── [slug]/
│   │   │           └── page.jsx (Dynamic routing for blog posts)
│   │   │
│   │   ├── globals.scss
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── BlogList/
│   │   ├── BlogPost/
│   │   ├── Footer/
│   │   └── Navbar/
│   ├── content/
│   │   └── posts (Markdown blog post files)
│   └── utils   (for custom utilities)
├── package.json (Lists all the dependencies of the project)
├── pnpm-lock.yaml
├── jsconfig.json
├── .eslintrc.json
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.js
├── .gitignore
└── README.md  (This file)
```

## Explanation:

- **blog-site**: The main directory for this project (Next.js ).
- **src/**: Contains your application code.

  - **app/**: App Router directory
    - **(pages)/**: Contains your App Router pages.
      - **blog/** (Optional - for a dedicated blog section):
        - [...slug].js: Dynamic route for handling blog posts (explained later).
    - _globals.scss_ : It contains the css(scss) that is applied on all pages in this site
    - _layout.js_ : It gives a layout for the page structure that is applied on all pages in this site
    - _page.js_ : It is the homepage (Landing page) of this project. It contains the BlogList Component discussed below.

- **components/** : Reusable React components for UI elements.

  - **BlogList/**: Contains the JSX and module scss file for the reusable component that lists all the blogs present in the project
  - **BlogPost/**: Contains the JSX and module scss file for the reusable component that displays individual blogs on different pages
  - **Footer/**: Contains the JSX and module scss file for the reusable component Footer that is included in the _layout.js_
  - **Navbar/**: Contains the JSX and module scss file for the reusable component Navbar that is included in the _layout.js_

- **content/posts** : Contains the markdown files that stores the blogs for this site.
- **utils** : Contains any reusable/utility function required in this project.

### Structure of the markdown files:

````bash
    ```
    title: "Example blog title"
    summary: "This is an example summary for this blog"
    author: "Some Randome dude"
    date: "2020-12-27"
    ```

    Content...

    This is an example content for the blog that is listed in this page


````

## Test the site

#### Start the development server

```bash
    pnpm dev
    # or
    npm run dev
```

This starts a server on [localhost:3000](http://localhost:3000).Open the link on a browser to enjoy the site.

## Build and Deploy into production

#### Build into production

Run the following command to the production build for the app.

```bash
pnpm build
```
This builds the project into a production build in which individual pages for blogs is generated at build time by the generateStatcParams (since getStaticProps and getStaticPaths are no longer supported in NextJs 13 onwards)

#### Deploy on Vercel

The easiest way to deploy this blog app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
