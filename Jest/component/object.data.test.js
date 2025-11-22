import { filter } from "./object.data";

import data from "./db.json";

test("testing the filter object is email on not.",()=>{
  expect(filter(data,4)).toEqual(data[3]);
});
