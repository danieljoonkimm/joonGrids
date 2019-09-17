# What is this?

Creates columns for images for developers.

# Installation

# Must have Bootstrap installed

`npm install bootstrap --save`

Then..

`npm install joonGrids --save`

```
NumberOfImages (number) and the number of imageURLs (string separated by commas) must be the same, must specify the number of grid columns.

import {joonGrids} from "joonGrids"

joonGrids({
  numberOfImages: 4,
  imageURLs: "https://dummyimage.com/300, https://dummyimage.com/300, https://dummyimage.com/300, https://dummyimage.com/300",
  gridColumns: 3
})
```