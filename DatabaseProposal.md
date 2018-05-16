# The Best Game Website in the World

* Zhaoheng Sun
* Xiufu Jiang
* Xiaopeng Yuan



## Users

The user collection will store all users and their profiles. Users will be able to login, update their profile, and post tasks.

```
{
    "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    "sessionId":"b3988882-627f-4c59-8d5d-54b7a43b030e",
    "hashedPassword":"$2a$08$XdvNkfdNIL8Fq7l8xsuIUeSbNOFgK0M0iV5HOskfVn7.PWncShU.O",
    role:"admin"
    "profile":{
        "name":"Zhaoheng Sun",
        "preference":["Simulation","Sports","Card"],
        "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310"
    }
}
```

| Name | Type | Description |
|------|------|-------------|
| _id  | string | A globally unique identifier to represent the user |
| sessionId | string | A globally unique identifier to represent the user's current session |
| hashedPassword | string | A bcrypted string that is a hashed version of the user's password |
| profile | User Profile | The user's profile | 

## User Profile (subdocument; not stored in a collection)

This subdocument is used to describe the user's profile.

```
{
    "name":"Xiufu Jiang",
    "preference":["Action","Adventure","Puzzle"],
    "_id":"c5d0fd67-7977-4fc5-9088-33d0347c932b"
}
```

| Name | Type | Description |
|------|------|-------------|
| name | string | The user's name. | 
| preference | gener array | An array of game genres that user prefered. |
| _id  | string | A globally unique identifier to represent the user |

## Games

The game collection will store all the games.


```
{
    "_id":"5a5c4461-cdc9-4144-84f9-fcb278c5c122",
    "name":"Dragon Ball FighterZ",
    "description":"Goku, Vegeta, Cell, Frieza, and more arrive to battle it out in this new fighting game from the minds behind the Guilty Gear series.",
    "ignRate": 9,
    "releaseDate":  ISODate("2018-03-15T09:00:00+01:00"),
    "developer":"Arc System Words",
    "publisher":"Bandai Namco Games",
    "genres":["Action","2D","Fighting"],
    "comments":[
        {
            "_id":"d7a44a10-0de3-44ad-9c58-5f3fe8f1c0d3",
            "poster":{
                "name":"Zhaoheng Sun",
                "preference":["Simulation","Sports","Card"],
                "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310"
            },
            "createAt":ISODate("2018-03-15T10:00:00+01:00"),
            "comment":"The new combat system is improved compare to last dragon ball fighter game. ",
            "rate": 8
        },
        {
            "_id":"d7a44a10-0de3-44ad-9c58-5f3fe8f1c0d3",
            "poster":{
                 "name":"Xiufu Jiang",
                 "preference":["Action","Adventure","Puzzle"],
                 "_id":"c5d0fd67-7977-4fc5-9088-33d0347c932b"
            },
            "createAt":ISODate("2018-03-15T12:00:00+01:00"),
            "comment":"I don't like the story mode of this game, it's only a pure fighting game.",
            "rate": 6
        },
        {
            "_id":"d7a44a10-0de3-44ad-9c58-5f3fe8f1c0d3",
            "poster":{
                "name":"Xiaopeng Yuan",
                "preference":["Sports","Action","Fighting"],
                "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310"
            },
            "createAt":ISODate("2018-03-16T10:00:00+01:00"),
            "comment":"This game is extremely incredible, I really enjoy the intense fighting in this game.",
            "rate": 9
        }
    ]
}
```

| Name | Type | Description |
|------|------|-------------|
| _id | string | The game ID. | 
|name| string | The game name |
|description| string | A longer description of the game |
|ignRate| double | The IGN rate of the game |
|releaseDate| date | The release date of the game |
|developer| string | The developer of the game |
|publisher| string | The publisher of the game |
|genres| gener array | An array of game geners |
|comments| comment array | An array of comments related to the thread |

## Comment (subdocument; not stored in a collection)

A single comment on a discussion.

```
 {
            "_id":"d7a44a10-0de3-44ad-9c58-5f3fe8f1c0d3",
            "poster":{
                "name":"Zhaoheng Sun",
                "preference":["Simulation","Sports","Card"],
                "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310"
            },
            "createAt":ISODate("2018-03-15T10:00:00+01:00"),
            "comment":"The new combat system is improved compare to last dragon ball fighter game. "
            "rate": 8
        }
```

| Name | Type | Description |
|------|------|-------------|
| _id | string | The comment ID. | 
| poster | User Profile | A profile of the user who made the comment |
| createAt | date | The create time of the comment |
| comment | string | The comment that the user made |
| rate | double | The user rate of the game |

