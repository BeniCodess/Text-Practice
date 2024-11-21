import { addUp, myName, objData, newStudent } from "..";

describe("do unit test", () => {
  test("to test function addUp is working ", () => {
    let res = addUp(1, 5);
    expect(res).toBe(6);
  });

  test("my name will be Benita", () => {
    let res = myName("Benita");

    expect(res).toBe("Benita");
    expect(res).not.toBe("");
    expect(res).toBeDefined();
  });

  test("Peter exit in the object", () => {
    let obj = objData("Benita");

    expect(obj).toEqual({ name: "Benita", id: 3 });
  });

  test("Benita exit in object", () => {
    let obj = ["man", "bar", "boy"];

    expect(obj).toContain("man");
    expect(obj).toEqual(["man", "bar", "boy"]);
  });

  test("testing for the increment of student list", () => {
    let obj = newStudent("Faith");
    let value = obj.length;
    expect(obj).toContain("Faith");
    expect(value).toBeGreaterThan(value - 1);
  });
});
