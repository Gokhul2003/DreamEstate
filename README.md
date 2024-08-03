<div align="center">
  <br />
 <h3>🏡 DreamEstate - A Real Estate Marketplace 🏡</h3>  
 
https://github.com/Gokhul2003/DreamEstate/assets/114300171/8280fe08-fb58-48fd-97ff-5e8024ad2e25

DreamEstate🏡 is a Real Estate Marketplace built with Reactjs. It enables secure property listing management with JWT, Firebase, and Google OAuth, featuring real-time listings, image uploads, and advanced search functionalities for a seamless user experience.
  <div>
  <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=white&color=61DAFB" alt="react" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=white&color=47A248" alt="mongodb" />
  <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logo=firebase&logoColor=white&color=FFCA28" alt="firebase" />

  </div>

</div>

## <a name="tech-stack">⚙️ Tech Stack</a>
- React.js
- Tailwindcss
- FireBase
- Mongodb
  

## <a name="features">🔋 Features</a>

👉 **Authentication**: Implemented Jwt, Firebase, and Google OAuth  allowing users to securely log in , while ensuring appropriate access levels and permissions within the platform.

👉**Property Listing**:Allows user to create, read, update and delete property listings according to their requirements.Also added Mail functionality to contact the owner for rental or buying the
property

👉**Image Upload & Search Functionality**:Enhance the user experience with image uploads, property listing management and also provides enhanced search functionalities with
filtering according to your needs for better user experiences.

👉 **Real-time Functionality**: Provides Real time listing of properties.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites:**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) 

**Cloning the Repository:**

```bash
git clone https://github.com/Gokhul2003/DreamEstate.git
cd DreamEstate
```

**Installation:**

Install the project dependencies using npm in the root and Client folder as well:

```bash
npm install
```

**Set Up Environment Variables:**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
MONGO=''
JWT_SECRET='Any Random'
```

Also get a firebase api key from [firebase](https://firebase.google.com/) and add it in `.env ` inside client folder:

```env
VITE_FIREBASE_API_KEY=''
```

**Running the Project:**  Run simultaneously in root and client folder

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

