# 💼 RemoteJobs

RemoteJobs is a remote jobs portal that fetches remote jobs the JSON file. I built this side project for learning
purposes. I have used the latest technologies for this project.

## 📦 Technologies

- `Vite`
- `React.js`
- `Typescript`
- `TailwindCSS`
- `Remotive Jobs API`
- `Miragejs`
- `Picsum API`

## 👩🏽‍🍳 The Process

I started this project because I wanted to learn more about React V18, React Router V6, React hooks and the context API. 
Initially, I thought of using the NextJS because that is what is now recommended by React documentation.
But still, many people use the setup react boilerplate so decided to use that for this project. 
I did set up this project using the Vite boilerplate.
I have installed TailwindCSS because I love using that and resonates with my development workflow.

Initially I tried to use the [Remotive Jobs API](https://remotive.com/api/remote-jobs?limit=40) but it does not allow us to search by different parameters.
It has a lot of limitations. Also that API was not allowing me to fetch the images because of the strict [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy. 
So I wanted to use the images but creating those images via some image manipulation was possible but out of scope for this hobby project.
After some research I found the [Picsum API]https://picsum.photos/ which created the images based on given text and dimensions with specified background colors.
This worked perfectly for my project and I have used that to fetch images based on company name.

Like I said the third party API had some limitation and I wanted to the some filtering on the data and here [MirajJS](https://miragejs.com) comes to the rescue.
Using Mirage I was able to mock the API response for given URL. Miraj has some limitations but it works best for prototyping. 
It exactly simulates the API calls within the web application. You can mock anything including the relationships between the various models.


## 📚 What I Learned
I have used Typescript for this project. 

During this project, I've picked up important skills and a better understanding of React router v6 and React.
Used TailwindCSS for styling the elements.
Fixed the navbar and sidebar and scrollable content area.
Using layout for UI organisation
### 🔤 `Typescript`:
I have learned more about type safety and different types and how it can improve code and reduce errors dramatically.

### 🧠 `useContext` Hook:

### 🎣 React Hooks and Rendering:

## 💭 How can it be improved?

- Add error state
- Fix typescript errors
- Make it responsive for mobile devices.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
3. Run `yarn install` or `npm i` in the project directory to install the required dependencies.
4. Run `yarn dev` or `npm dev` to get the project started.
5. Open [http://localhost:5173/remotejobs#/](http://localhost:5173/remotejobs#/) in your web
   browser to view the app.

## 🍿 Video









