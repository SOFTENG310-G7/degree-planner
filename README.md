# Degree Planner

This project is a website for potential or current University of Auckland students to view the list of courses available at the university and plan their degree or trial other potential degrees to their interest. The website provides additional functionality for users such as the ability to save and share degree plans as well as rating courses based on past experiences. Other future features include incorporating university entrance requirements and plans for recommended courses to aspire for a specific occupation.

## Project Purpose

This website will assist potential tertiary education students in selecting their future degree at the University of Auckland and also help current students in assuring they will not deviate from their desired path until graduation. Our website will achieve these criterias by providing a user-friendly and easily accessible interface for users to navigate through efficiently and allow users the ability to achieve maximum progress with minimal actions.

### Technology Stack

This is a web-based project using React, Next.js and TypeScript, Tailwind CSS in conjunction with Supabase.

### How You Can Contribute

Please take a look at the [contributing guidelines](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md)

### Local Repository Deployment

**Step 1**
  ```
  git clone https://github.com/SOFTENG310-G7/degree-planner.git
  ```

**Step 2**
  Install Node.js version 18 LTS.

**Step 3**
  ```
  npm install
  ```

**Step 4**: Create an .env.local file in the root directory and insert with your specific settings:

  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_KEY=

  UOA_CLIENT_ID=
  UOA_CLIENT_SECRET=
  ```

  - The first three can be obtained from the properties of your Supabase instance. The last two will have to be generated [here](https://developer.auckland.ac.nz/prd/dashboard).

**Step 5**
  ```
  npm run dev
  ```

## Licensing

This website is under the MIT license. This allows users almost unrestricted access to use, modification and distribution of the software as long as the copyright notice and license is included in all subsequent releases.

## Releases

Check out all releases along with their notes [here](https://github.com/SOFTENG310-G7/degree-planner/releases/)


## Contact

For more information, please contact the developers who contributed to the creation of this website. To contact the original developers of this project, please email our team leader Dana (mseo447@aucklanduni.ac.nz).

For future developers, please include the contact information of your team leader to ensure ease of communication.

- A1 Team Leader: Dana Seong (mseo447@aucklanduni.ac.nz)
- A2 Team Leader: <insert-name> (<insert-upi>@aucklanduni.ac.nz)
- A3 Team Leader: <insert-name>  (<insert-upi>@aucklanduni.ac.nz)

## Acknowledgements

We've used the [Supabase Starter](https://github.com/vercel/next.js/tree/canary/examples/with-supabase) by Vercel under the MIT license.

Huge credit goes towards all developers, testers and contributors who participated in the development of this website. [](https://github.com/SOFTENG310-G7/degree-planner/wiki/Contributors)
