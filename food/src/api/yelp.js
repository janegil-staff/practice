import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer VHdZASGXTZTBOMCmUGe7mH4T8xcn-GLrr4hn5eLG6PAjUopHeOJ_KUPJUoyctg7JHzSj4P9IVjtmLhbVHnOY_dPAmAyazjDoJIryqeSP7A6mkrGeRy0n7z5eLZWGZXYx",
  },
});
