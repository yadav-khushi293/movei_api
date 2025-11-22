import { searchParams } from "./param";

test("test the search param",()=>{
    expect(
      searchParams(
 `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=4`,`_limit`
      )
    ).toBe("10");
});