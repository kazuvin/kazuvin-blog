import { format } from ".";

test("[正常系][yyyy-MM-dd でフォーマットできるか]", () => {
  expect(format(new Date("2000/01/01"), "yyyy-MM-dd")).toBe("2000-01-01");
});

test("[正常系][yyyy-MM でフォーマットできるか]", () => {
  expect(format(new Date("2000/01/01"), "yyyy-MM")).toBe("2000-01");
});

test("[正常系][yyyy でフォーマットできるか]", () => {
  expect(format(new Date("2000/01/01"), "yyyy")).toBe("2000");
});

test("[正常系][yyyy/MM/dd でフォーマットできるか]", () => {
  expect(format(new Date("2000/01/01"), "yyyy/MM/dd")).toBe("2000/01/01");
});

test("[正常系][yyyy年MM月dd日 でフォーマットできるか]", () => {
  expect(format(new Date("2000/01/01"), "yyyy年MM月dd日")).toBe(
    "2000年01月01日",
  );
});

test("[異常系][yyyy, MM, dd を含まないフォーマット]", () => {
  expect(() => format(new Date("2000/01/01"), "hoge")).toThrow(
    /不正な日付フォーマットが指定されています/,
  );
});
