# AirCloudy Play Bar Module

A fixed-position song playback center

## Server Routes

### GET /songs/:songid

Get a specific song by song_id. The response returns a JSON object of song data.

**Response**

| Name  | Type | Description |
| ----- | ---- | ----------- |
| `song_id` | `integer` | _Required_. Identifier for the song. |
| `length` | `integer` | _Required_. Song length in seconds. |
| `time_stamp` | `integer` | _Required_. Song timestamp. |
| `is_liked` | `integer` | _Required_. Boolean integer of if song is liked. |
| `song_data_url` | `string` | _Required_. URL of the song audio file. |
| `title` | `string` | _Required_. Name of the song. |
| `artist` | `string` | _Required_. Astist name. |
| `album` | `string` | _Required_. Identifier for the song album. |
| `thumbnail_url` | `string` | _Required_. URL of the song art file. |

### POST /songs/

Insert a new song record into the database. Data should be sent as a JSON object in the body of the request.

**Body**

| Name  | Type | Description |
| ----- | ---- | ----------- |
| `song_id` | `integer` | _Required_. Identifier for the song. |
| `length` | `integer` | _Required_. Song length in seconds. |
| `time_stamp` | `integer` | _Required_. Song timestamp. |
| `is_liked` | `integer` | _Required_. Boolean integer of if song is liked. |
| `song_data_url` | `string` | _Required_. URL of the song audio file. |
| `title` | `string` | _Required_. Name of the song. |
| `artist` | `string` | _Required_. Astist name. |
| `album` | `string` | _Required_. Identifier for the song album. |
| `thumbnail_url` | `string` | _Required_. URL of the song art file. |

### PUT /songs/

Update a song record in the database. Data should be sent as a JSON object in the body of the request.

**Body**

| Name  | Type | Description |
| ----- | ---- | ----------- |
| `song_id` | `integer` | _Required_. Identifier for the song. |
| `length` | `integer` | _Required_. Song length in seconds. |
| `time_stamp` | `integer` | _Required_. Song timestamp. |
| `is_liked` | `integer` | _Required_. Boolean integer of if song is liked. |
| `song_data_url` | `string` | _Required_. URL of the song audio file. |
| `title` | `string` | _Required_. Name of the song. |
| `artist` | `string` | _Required_. Astist name. |
| `album` | `string` | _Required_. Identifier for the song album. |
| `thumbnail_url` | `string` | _Required_. URL of the song art file. |

### DELETE /songs/

Removes a song record from the database, and removes any comment records related to the song. Song data is sent as an object in the body.

### GET /likes/:song_id/:user_id

Update like for a song. The response returns a SUCCESS/FAILURE string.

**Parameters**

| Name  | Type | Description |
| ----- | ---- | ----------- |
| `song_id` | `integer` | _Required_. Identifier for the song. |
| `user_id` | `integer` | _Required_. Identifier for the user liking the song. |

### PUT /likes/

Update like for a song. Song data is sent as an object in the request body. The response is a boolean true/false.

**Parameters**

| Name  | Type | Description |
| ----- | ---- | ----------- |
| `song_id` | `integer` | _Required_. Identifier for the song. |
| `user_id` | `integer` | _Required_. Identifier for the user liking the song. |

**Response**

| Text |
| ---- |
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
