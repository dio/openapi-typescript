import swaggerToTS from "../src/index";

describe("rawSchema", () => {
  it("v2", () => {
    expect(
      swaggerToTS(
        {
          User: {
            type: "object",
            properties: {
              name: { type: "string", description: "user name" },
              email: { type: "string", description: "user email" },
            },
            required: ["name", "email"],
          },
        },
        { version: 2, rawSchema: true }
      )
    ).toBe(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface definitions {
  User: {
    /** user name */
    name: string;
    /** user email */
    email: string;
  };
}\n`);
  });

  it("v3", () => {
    expect(
      swaggerToTS(
        {
          User: {
            type: "object",
            properties: {
              name: { type: "string", description: "user name" },
              email: { type: "string", description: "user email" },
            },
            required: ["name", "email"],
          },
        },
        { version: 3, rawSchema: true }
      )
    ).toBe(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface schemas {
  User: {
    /** user name */
    name: string;
    /** user email */
    email: string;
  };
}\n`);
  });
});
