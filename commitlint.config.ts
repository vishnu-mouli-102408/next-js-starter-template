import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-min-length": [2, "always", 10],
    "header-case-start-capital": [2, "always"],
    "header-end-period": [2, "always"],
    "subject-empty": [0],
    "subject-full-stop": [0],
    "type-empty": [0],
  },
  plugins: [
    {
      rules: {
        "header-case-start-capital": ({ raw }) => {
          return [
            /^[A-Z]/.test(raw || ""),
            "Commit message must start with a capital letter",
          ];
        },
        "header-end-period": ({ header }) => {
          return [
            /\.$/.test(header || ""),
            "Commit message must end with a period",
          ];
        },
      },
    },
  ],
};

export default Configuration;
