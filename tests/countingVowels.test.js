const countVowels= require('../countingVowels.js');

describe("countVowels", () => {
//red phase: behavior you want to test
test("counts vowels in 'hello'", () => {
    expect(countVowels("hello")).toBe(2); // 'e' and 'o', hoowever with no function written at this phase the test will fail
  });


//green phase: write the minimum code to pass the test
test("counts vowels in 'aeiou'", () => {
    expect(countVowels("aeiou")).toBe(5); // A basic function was written in countingVowels.js to explain the red phase test case
  });   

  
  //refactoring phase
test("counts vowels in 'rhythm'", () => {
    expect(countVowels("rhythm")).toBe(0); // revisiting the code for scalability& reuseability(refactoring) also providing way to edge case by changing the input string in to lowercase while comparing with vowels string.
  });

});