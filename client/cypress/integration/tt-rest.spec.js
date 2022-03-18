/* eslint-disable no-undef */

describe('tt-rest ', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', function() {
    cy.contains('tt-rest primes');
    cy.contains('Select action above');
  });

  it('a single integer can be submitted and result is correct', function() {
    cy.contains('Checkprime').click();
    cy.get('#check').type(12);
    cy.contains('Submit').click();

    cy.contains('{"integer":12,"isPrime":false}');
  });

  it('a string of integers can be submitted and result is correct', function() {
    cy.contains('Sumandcheck').click();
    cy.get('#sum').type('7,3,2,1');
    cy.contains('Submit').click();

    cy.contains('{"sum":13,"isPrime":true}');
  });

  it('a string of nonsense is handled', function() {
    cy.contains('Sumandcheck').click();
    cy.get('#sum').type('lorem, ipsum, 123, 7e2');
    cy.contains('Submit').click();

    cy.contains('Select action above');
  });
});