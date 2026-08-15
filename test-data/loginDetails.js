import { test as base } from '@playwright/test';
export const test = base.extend({
  loginData: [{
    username: "standard_user",
    password: "secret_sauce"
  },
  {
    "username": "locked_out_user",
    "password": "secret_sauce"
  },
  {
    "username": "problem_user",
    "password": "secret_sauce"
  },
  {
    "username": "performance_glitch_user",
    "password": "secret_sauce"
  }
  ]
}
);
