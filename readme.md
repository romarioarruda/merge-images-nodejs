**Sharp documentation**:

[Sharp docs link](https://sharp.pixelplumbing.com)


**Merge images with Node.js**:

`Update dependencies`

> $ npm install && npm install commitizen -D

**Commit pattern**:

`To commit your changes, exec only git commit`

> $ git commit

**Folders**:

Create folders

> files/generated
> files/models/back
> files/models/front


`UP API`

> $ npm start

**Request**: `POST`
`http://localhost:3000/merge`

Body request:

```
{
  "frente": {
    "cabelo": "C02",
    "face": "F02",
    "pele": "P04",
    "roupa": "R01"
  },
  "costas": {
    "cabelo": "C02",
    "pele": "P04",
    "roupa": "R01"
  }
}
```