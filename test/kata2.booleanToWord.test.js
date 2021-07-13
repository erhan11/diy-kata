const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  
  test("returns returns Yes when passed true", () => {
    expect(booleanToWord('a','a')).toBe('yes');
  });

 
  test("returns returns Yes when passed true", () => {
    expect(booleanToWord('a','b')).toBe('no');
  });
});

