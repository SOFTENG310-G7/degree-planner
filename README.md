# Degree Planner

A website for potential or current University of Auckland students to view the list of courses available at the university and plan their degree or trial other potential degrees to their interest.

Degree Planner will assist potential tertiary education students in selecting their future degree at the University of Auckland and also help current students in assuring they will not deviate from their desired path until graduation.

> [!IMPORTANT]
> **Degree Planner is in alpha.**\
> Degree Planner is not feature complete, and not yet ready for widespread adoption. However, it is important to the contributing community that we develop openly and transparently. If you’re interested in helping us build Degree Planner, we do recommend you use it. Then, check out the [open issues](https://github.com/SOFTENG310-G7/degree-planner/issues), and perhaps [open a new one](https://github.com/SOFTENG310-G7/degree-planner/issues/new/choose) if you see fit!

Planned features include:

- save and share degree plans as well as rating courses based on past experiences;
- incorporate university entrance requirements; and
- recommended course plans tailored for specific occupations.

## 🍔 Technology stack

Degree Planner is a React-based web app build with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org) and [Tailwind CSS](https://tailwindcss.com), backed by a [Supabase](https://supabase.com) data store.

> [!NOTE]
> Degree Planner is tested with the latest **long-term support** version of  Node.js, version&nbsp;18. Though it is likely to work with newer releases, they are not officially supported.

It also uses the University of Auckland’s [Course Catalog Api&nbsp;V3](https://developer.auckland.ac.nz/prd/documentation/api-course-catalog-v3). Access to this API will require a University of Auckland account. If you have ever applied, studied or worked at the University of Auckland, you should already have an account. Otherwise, to sign up:

1. Visit the [University of Auckland website](https://www.auckland.ac.nz).
1. Click **Sign In**.
2. Click **Register for a new account**, and follow the instructions from there.

## 🫵 How you can contribute

Thank you for your interest in contributing to degree planner! There are plenty of ways to help us build Degree Planner, only part of which is has to involve writing code. You could help us by providing feedback, reporting bugs, writing documentation, testing, helping with design, or suggesting features and changes you’d like to see.

It can be daunting to contribute to a project you aren’t familiar with. Simply using Degree Planner is a good place to start, and if you’ve got some ideas to contribute, check out our [contributing guidelines](/CONTRIBUTING.md) and [code of conduct](/CODE_OF_CONDUCT.md). Happy contributing!

## 🚀 Deploying locally

### Prerequisite

> [!IMPORTANT]
> You’ll need to have [Node.js **version 18**](https://nodejs.org) and [npm](https://www.npmjs.com) installed on your system to build and run Degree Planner.

For most users, the easiest way to install Node.js is via [the Node.js website](https://nodejs.org/en/download); this will also install an appropriate version of npm.

If you use the [Homebrew](https://brew.sh) package manager (macOS and Linux only), you may wish to use the following commands to install Node.js and npm.

```sh
# If you use Homebrew
brew install node@18
brew install npm
```

### Step 1

```sh
# Clone the repository
git clone https://github.com/SOFTENG310-G7/degree-planner.git

# Navigate to its root
cd degree-planner/
```

If you are contributing code, then [create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of this repository and clone that instead. We use the [fork and pull model](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models) to accept code contributions from the community.

### Step 2

```sh
# Install dependencies
npm install
```

### Step 3

Create an `.env.local` file in the root directory of your clone and insert your API keys for [Supabase](https://supabase.com) and the University of Auckland [Course Catalog Api&nbsp;V3](https://developer.auckland.ac.nz/prd/documentation/api-course-catalog-v3):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=

UOA_CLIENT_ID=
UOA_CLIENT_SECRET=
```

The first three can be obtained from the properties of your Supabase instance.

The last two API keys need to be generated from the [University of Auckland Developer Portal](https://developer.auckland.ac.nz):

1. Log into the [University of Auckland Developer Portal](https://developer.auckland.ac.nz) with your University of Auckland account.
3. Go to [your dashboard](https://developer.auckland.ac.nz/prd/dashboard) (accessible by hovering over your username/email in the header, and clicking **Dashboard**).
4. Under the *API Credentials* section, click **CREATE API CREDENTIAL**.
5. In the modal which appears, give the credentials a name (e.g. `Degree Planner`). Leave the *‌Client\_id* and *Client\_secret* fields empty.
6. Click **CREATE API CREDENTIAL**. This will generate your `CLIENT_ID` and `CLIENT_SECRET` keys, which you can copy and paste into your `/.env.local` file.

> [!NOTE]
> If you get `400 Bad Request` when trying to access the University of Auckland Developer portal, try using private/incognito browsing, or clearing `auckland.ac.nz`’s cookies in your browser settings.

In the root directory, there is [a (non-functional) example](/.env.local.example) of what your env file should look like.

> [!IMPORTANT]
> Do **not** commit your env file to version control. Git has been [configured to ignore it](/.gitignore). It should exist only in your local clone.

### Step 4

```
# Start the development server
npm run dev
```

Look for a line similar to `ready started server on [::]:3000, url: http://localhost:3000`. In this example, you can then load <http://localhost:3000> in your web browser to start using Degree Planner (though the port number may not always be `3000`). Press <kbd>⌃</kbd><kbd>C</kbd> (<kbd>Ctrl</kbd>+<kbd>C</kbd>) in this window to terminate the server.

### Additional tools

This project is configured with [Prettier](https://prettier.io) to ensure a consistent code style. If you are contributing code, then we recommend you:

- configure your code editor to use the Prettier extension; and
- enable your editor’s *format on save* option.

This will help improve the speed and quality of code reviews. The following npm commands may be useful for verifying that your code is consistently formatted with the rest of the project:

```
# Run Prettier to format source code
npm run format

# Run Prettier locally to check if code will pass PR checks
npm run check-formatting
```

## ☎️ Contact

If you have questions, feel free to [open a new issue](https://github.com/SOFTENG310-G7/degree-planner/issues/new/choose) or [email Dana](mailto:mseo447@aucklanduni.ac.nz), one of the founding contributors.

As new developers join the contributing team, more points of contact will be added here. If you could see yourself listed here, we’d love for you to make yourself known! We’re actively looking for new contributors. Our [contributing guidelines](/CONTRIBUTING.md) are a great place to start.

## 💝 Acknowledgements

- The [Supabase Starter](https://github.com/vercel/next.js/tree/canary/examples/with-supabase) by Vercel, which we’ve used under the MIT licence.
- [Dr&nbsp;Kelly Blincoe](https://profiles.auckland.ac.nz/k-blincoe), [Dr&nbsp;James Tizard](https://profiles.auckland.ac.nz/james-tizard) and [Waipapa Taumata Rau](https://www.auckland.ac.nz) (University of Auckland); Degree Planner has its roots in an assignment for [SOFTENG&nbsp;310](https://courseoutline.auckland.ac.nz/dco/course/SOFTENG/310) *Software Evolution and Maintenance*.
- The [developers, testers and contributors](https://github.com/SOFTENG310-G7/degree-planner/wiki/Contributors) who have participated in the development of Degree Planner.
- And you, for your interest in this project!

## ⚖️ Licence

Degree Planner is distributed under the [MIT licence](/LICENSE).

In short, you’re free to use, modify and redistribute project materials, but please keep the copyright notice and licence intact when you do. Our contributors have been gracious to volunteer their time and effort, and they deserve to be credited!
