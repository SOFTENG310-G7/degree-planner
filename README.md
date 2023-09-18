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

## 🫵 How you can contribute

Thank you for your interest in contributing to degree planner! There are plenty of ways to help us build Degree Planner, only part of which is has to involve writing code. You could help us by providing feedback, reporting bugs, writing documentation, testing, helping with design, or suggesting features and changes you’d like to see.

It can be daunting to contribute to a project you aren’t familiar with. Simply using Degree Planner is a good place to start, and if you’ve got some ideas to contribute, check out our [contributing guidelines](/CONTRIBUTING.md) and [code of conduct](/CODE_OF_CONDUCT.md). Happy contributing!

## 🚀 Deploying locally

### Step 1

```sh
git clone https://github.com/SOFTENG310-G7/degree-planner.git
```

### Step 2

Install Node.js version 18 LTS.

### Step 3

```sh
npm install
```

### Step 4

Create an `.env.local` file in the root directory of your clone and insert with your specific settings:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=

UOA_CLIENT_ID=
UOA_CLIENT_SECRET=
```

The first three can be obtained from the properties of your Supabase instance. The last two will have to be generated [here](https://developer.auckland.ac.nz/prd/dashboard).

### Step 5

```
npm run dev
```

## ☎️ Contact

If you have questions, feel free to [open a new issue](https://github.com/SOFTENG310-G7/degree-planner/issues/new/choose) or [email Dana](mailto:mseo447@aucklanduni.ac.nz), one of the founding contributors.

As new developers join the contributing team, more points of contact will be added here. If you could see yourself listed here, we’d love for you to make yourself known! We’re actively looking for new contributors. Our [contributing guidelines](/CONTRIBUTING.md) are a great place to start.

## 💝 Acknowledgements

- The [Supabase Starter](https://github.com/vercel/next.js/tree/canary/examples/with-supabase) by Vercel, which we’ve used under the MIT license.
- [Dr&nbsp;Kelly Blincoe](https://profiles.auckland.ac.nz/k-blincoe), [Dr&nbsp;James Tizard](https://profiles.auckland.ac.nz/james-tizard) and [Waipapa Taumata Rau](https://www.auckland.ac.nz) (University of Auckland); Degree Planner has its roots in an assignment for [SOFTENG&nbsp;310](https://courseoutline.auckland.ac.nz/dco/course/SOFTENG/310) *Software Evolution and Maintenance*.
- The [developers, testers and contributors](https://github.com/SOFTENG310-G7/degree-planner/wiki/Contributors) who have participated in the development of Degree Planner.
- And you, for your interest in this project!

## ⚖️ License

Degree Planner is distributed under the [MIT license](/LICENSE).

In short, you’re free to use, modify and redistribute project materials, but please keep the copyright notice and licence intact when you do. Our contributors have been gracious to volunteer their time and effort, and they deserve to be credited!
