import userSlice, { initialState } from "../store/userSlice";

describe("tests for ListSlice", () => {
  test("initialize slice with initialValue", () => {
    const listSliceInit = userSlice(initialState, { type: "unknown" });
    expect(listSliceInit).toBe(initialState);
  });
});