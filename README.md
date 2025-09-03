
# Hotel System

Hotel System is a backend application for managing hotel rooms and users, built with Node.js, Express, and MongoDB (MERN stack backend). It provides RESTful APIs for room management, user registration, and authentication. The project is designed to be easily extendable with an admin panel and custom APIs.

## Features

- User registration and login
- Room listing and details
- MongoDB integration for persistent data storage
- Modular code structure (models, routes)
- Ready for frontend integration (API endpoints)

## Project Structure

```
hotel-system/
├── db.js                # MongoDB connection setup
├── server.js            # Express server entry point
├── package.json         # Project dependencies and scripts
├── models/              # Mongoose models (Room, User)
│   ├── room.js
│   ├── user.js
│   └── room.json        # Sample room data
├── routes/              # Express route handlers
│   ├── roomRoutes.js
│   └── userRoutes.js
└── client/              # (Empty, for future frontend)
```

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm (Node package manager)
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository:**
	 ```sh
	 git clone <repository-url>
	 cd hotel-system
	 ```
2. **Install dependencies:**
	 ```sh
	 npm install
	 ```
3. **Configure MongoDB:**
	 - The connection string is set in `db.js`. Update it if needed:
		 ```js
		 var mongoURL = 'mongodb+srv://<username>:<password>@<cluster-url>/<dbname>';
		 ```
4. **Start the server:**
	 ```sh
	 node server.js
	 ```
	 Or, for development with auto-reload:
	 ```sh
	 npx nodemon server.js
	 ```

The server will run on `http://localhost:5000` by default.

## API Documentation

### User APIs

#### Register a New User
`POST /api/users/register`

**Request Body:**
```
{
	"name": "John Doe",
	"email": "john@example.com",
	"password": "yourpassword"
}
```
**Response:**
```
Usr registered successfully
```

#### User Login
`POST /api/users/login`

**Request Body:**
```
{
	"email": "john@example.com",
	"password": "yourpassword"
}
```
**Response:**
```
{
	"name": "John Doe",
	"email": "john@example.com",
	"isAdmin": false,
	"_id": "..."
}
```

### Room APIs

#### Get All Rooms
`GET /api/rooms/getallrooms`

**Response:**
```
[
	{
		"_id": "...",
		"name": "Deluxe Double Room",
		...
	},
	...
]
```

#### Get Room by ID
`POST /api/rooms/getroombyid`

**Request Body:**
```
{
	"roomid": "<room_id>"
}
```
**Response:**
```
{
	"_id": "...",
	"name": "Deluxe Double Room",
	...
}
```

## Models

### Room
- `name` (String, required)
- `maxCount` (Number, required)
- `phoneNumber` (Number, required)
- `rentPerDay` (Number, required)
- `type` (String, required)
- `imagesUrl` (Array)
- `currentBookings` (Array)
- `description` (String, required)

### User
- `name` (String, required)
- `email` (String, required)
- `password` (String, required)
- `isAdmin` (Boolean, default: false)

## Sample Data

Sample room data is available in `models/room.json` for reference or seeding.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the ISC License.

## Contact

For questions or suggestions, please open an issue or contact the maintainer.
