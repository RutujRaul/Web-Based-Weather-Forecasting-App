# Weather App

This is a simple Weather App built with **React** for the frontend and **Node.js** for the backend. It allows users to enter the name of a city and fetch the current weather data from the [OpenWeather API](https://openweathermap.org/).

## Features

- Search for weather data by city name.
- Fetch current weather details like temperature, weather description, and more.
- Display weather data dynamically on the webpage.
- Simple and clean user interface with animations and responsive design using **Tailwind CSS**.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js (for API requests to OpenWeather API)
- **API**: OpenWeather API (free API key required)

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:


### 2. Install Dependencies

#### Install Dependencies for the Backend

In the root of the project directory (backend):


#### Install Dependencies for the Frontend

In the `client` directory (frontend):


### 3. Set Up OpenWeather API Key

To use the OpenWeather API, you need to create an API key from [OpenWeather's website](https://openweathermap.org/api).

Once you have the API key, create a `.env` file inside the `client` directory, and add your API key like this:


Make sure to replace `YOUR_API_KEY` with the actual API key.

### 4. Start the Application

#### Start the Backend

In the `server` directory, run the following command to start the backend server:


This will start the backend server and listen for API requests.

#### Start the Frontend

In the `client` directory, run the following command to start the frontend application:


The application will be available at `http://localhost:3000`. You can now enter a city name and see the weather data displayed on the page.

### 5. Folder Structure

The project structure is as follows:


## License

MIT License
