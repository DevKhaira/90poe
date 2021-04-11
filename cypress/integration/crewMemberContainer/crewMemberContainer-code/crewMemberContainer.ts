/* eslint-disable cypress/no-unnecessary-waiting */
/* global cy */
import 'reflect-metadata';
import { injectable } from 'inversify';
import { ICrewMemberContainer } from '../../../interfaces/crewMemberContainer';
import 'cypress-xpath'
@injectable()
export class crewmember implements ICrewMemberContainer {
    public visit() {
        cy.visit('/');
        return this;
    };

    public moveOnePosition(direction, position) {
        let directionElement;
        if (direction === 'right') {
            directionElement = '.CrewMember-up';
        } else {
            directionElement = 'div.CrewMember-toolbar button';
        }
        cy.get('.App-column')
          .contains(position)
          .get('.CrewMember-container .CrewMemeber-name div')
          // this will grab the text for later us 'as' is a powerful too
          .then( names => cy.wrap(names[0].innerText).as('name'))

        cy.get('.App-column')
          .contains(position)
          .get(directionElement)
          .then(elements => {
              elements[0].click()
          })
    
        return this;
    };

    public checkCrewmemberContainerAssets() {
        cy.get('.CrewMember-container .CrewMemeber-photo')
           .should('be.visible')
        cy.get('.CrewMember-container .CrewMemeber-name')
           .should('be.visible')
        return this;
    };

    public assertAssetOn(position, direction) {
        // we need to check what area we are asserting
        if( position === 'Applied') {
            cy.get('.App-column')
                .filter(`:contains("Applied")`).should('not.contain', '.CrewMember-up');
        } else {
            cy.get('.App-column')
            .filter(`:contains("Hired")`).should('not.contain', '.CrewMember-up');
        }
        return this;
    };

    public assetInColumn(asset) {
        // the filter will fail if nothing is there which will make it an obvious failure
        const name = cy.get('@name').then(element => {
            cy.get('.App-column')
                .filter(`:contains("${asset}")`)
                .filter(`:contains("${element}")`)
        })

        return this;
    };
}
 