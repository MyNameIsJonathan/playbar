# AirCloudy Play Bar Module

A fixed-position song playback center

## Server Routes

### GET /songs/:songid

Get a specific song by songId. The response returns a JSON object of song data.

**Response**

| Name           | Type      | Description                             |
| -------------- | --------- | --------------------------------------- |
| `songId`       | `integer` | Identifier for current song.            |
| `likeCount`    | `integer` | Number of total likes for current song. |
| `isLiked`      | `integer` | Boolean integer of if song is liked.    |
| `songDataURL`  | `string`  | URL of the song audio file.             |
| `songName`     | `string`  | Name of the song.                       |
| `artist`       | `string`  | Astist name.                            |
| `album`        | `string`  | Identifier for the song album.          |
| `thumbnailURL` | `string`  | URL of the song art file.               |

### POST /songs

Insert a new song record into the database. Data should be sent as a JSON object in the body of the request.

**Body**

| Name           | Type     | Description                                |
| -------------- | -------- | ------------------------------------------ |
| `songName`     | `string` | _Required_. Name of the song.              |
| `artist`       | `string` | _Required_. Astist name.                   |
| `album`        | `string` | _Required_. Identifier for the song album. |
| `songDataURL`  | `string` | _Required_. URL of the song audio file.    |
| `thumbnailURL` | `string` | _Required_. URL of the song art file.      |

### PUT /songs

Update a song record in the database. Data should be sent as a JSON object in the body of the request.

**Body**

| Name           | Type      | Description                                      |
| -------------- | --------- | ------------------------------------------------ |
| `songId`       | `integer` | _Required_. Identifier for the song.             |
| `length`       | `integer` | _Optional_. Song length in seconds.              |
| `isLiked`      | `integer` | _Optional_. Boolean integer of if song is liked. |
| `songDataURL`  | `string`  | _Optional_. URL of the song audio file.          |
| `songName`     | `string`  | _Optional_. Name of the song.                    |
| `artist`       | `string`  | _Optional_. Astist name.                         |
| `album`        | `string`  | _Optional_. Identifier for the song album.       |
| `thumbnailURL` | `string`  | _Optional_. URL of the song art file.            |

### DELETE /songs/:songId

Removes a song record from the database, and removes any comment records related to the song.

**Parameters**

| Name     | Type      | Description                          |
| -------- | --------- | ------------------------------------ |
| `songId` | `integer` | _Required_. Identifier for the song. |

### GET /likes/:songId/:userId

Get current user's like status for a song. Returns true if user has liked song, else false

**Parameters**

| Name     | Type      | Description                                          |
| -------- | --------- | ---------------------------------------------------- |
| `songId` | `integer` | _Required_. Identifier for the song.                 |
| `userId` | `integer` | _Required_. Identifier for the user liking the song. |

**Response**

| Name            | Type      | Description                                |
| --------------- | --------- | ------------------------------------------ |
| `userLikesSong` | `boolean` | Current user like status for song === true |

### PUT /likes/

Update like for a song. Song data is sent as an object in the request body. The response is a boolean true/false.

**Parameters**

| Name     | Type      | Description                                          |
| -------- | --------- | ---------------------------------------------------- |
| `songId` | `integer` | _Required_. Identifier for the song.                 |
| `userId` | `integer` | _Required_. Identifier for the user liking the song. |

**Response**

| Text    |
| ------- |
| SUCCESS |

## Installing Dependencies

From within the root directory:

```bash
npm install
```

## Development

From within the root directory, do each of the following:

- Run webpack to build bundle.js

```bash
npm run build
```

- Start the server at port 3000

```bash
npm start
```

```bash
npm run db
```
