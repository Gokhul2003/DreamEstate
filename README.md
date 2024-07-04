<div align="center">
  <br />
 <h3>🏡 DreamEstate - A Real Estate Marketplace 🏡</h3>  
 


https://github.com/Gokhul2003/DreamEstate/assets/114300171/8280fe08-fb58-48fd-97ff-5e8024ad2e25




Built with Reactjs. DreamEstate is a Real Estate Marketplace. It enables secure property listing management with JWT, Firebase, and Google OAuth, featuring real-time listings, image uploads, and advanced search functionalities for a seamless user experience.
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=reactjs&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

</div>

## <a name="tech-stack">⚙️ Tech Stack</a>
- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Authentication**: Implemented Jwt, Firebase, and Google OAuth  allowing users to securely log in , while ensuring appropriate access levels and permissions within the platform.

👉**Property Listing**:Allows user to create, read, update and delete property listings according to their requirements.

👉**Image Upload & Search Functionality**:Enhance the user experience with image uploads, property listing management and also provides enhanced search functionalities with
filtering according to your needs for better user experiences.

👉 **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

👉 **Real-time Functionality**: Provides Real time listing of properties 

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites:**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository:**

```bash
git clone https://github.com/Gokhul2003/ZCollab.git
cd zoom-clone
```

**Installation:**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables:**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the [Clerk website](https://clerk.com/) and [getstream website](https://getstream.io/)

**Running the Project:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

