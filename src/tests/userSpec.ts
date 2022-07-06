import userModel from "../models/user.model";
const user = new userModel();

describe("Test basic endpoint server", () => {
  it("should have All Users method", async () => {
    expect(user.getAllUsers).toBeDefined();
  });
  it("should have a User by ID method", async () => {
    expect(user.getUser).toBeDefined();
  });
  it("should have a delete user method", async () => {
    expect(user.deleteUser).toBeDefined();
  });
  it("should have add user method", async () => {
    expect(user.addUser).toBeDefined();
  });
  it("should have update user method", async () => {
    expect(user.updateUser).toBeDefined();
  });
});
