import shorten from "./shorten";

test('shorten "loremipsum" to "lor..." with maxLength 6', () => {
  expect(shorten("loremipsum", 6)).toBe("lor...");
});

test('shorten "loremipsum" to "loremi..." with maxLength 9', () => {
  expect(shorten("loremipsum", 9)).toBe("loremi...");
});

test('shorten "loremipsum" to "loremipsum" with maxLength 10', () => {
  expect(shorten("loremipsum", 10)).toBe("loremipsum");
});
