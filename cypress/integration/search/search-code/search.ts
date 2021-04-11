/* eslint-disable cypress/no-unnecessary-waiting */
/* global cy */
import 'reflect-metadata';
import { injectable } from 'inversify';
import { ISearch } from '../../../interfaces/search';
import 'cypress-xpath'
@injectable()
export class search implements ISearch {
    public nameSearch(name: string) {
        cy.get('#name').type(name)
        cy.get('[type="submit"]').click()
        return this;
    }

    public citySearch(city: string) {
        cy.get('#city').type(city)
        cy.get('[type="submit"]').click()
        return this;
    }

    // the div allows it to target the name only!
    public fullNameAssert (fullName: string) {
        cy.get('.CrewMember-container .CrewMemeber-name div').contains(fullName)
        return this;
    }
}
 