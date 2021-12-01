// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

if (Cypress.env("default_type_delay")) {
  Cypress.Commands.overwrite(
    "type",
    (originalFn, subject, text, options = {}) => {
      options.delay = (options.delay || 0) + Cypress.env("default_type_delay");

      return cy
        .wait(Cypress.env("wait_unit_time"))
        .then(() => originalFn(subject, text, options));
    }
  );
}
