/* eslint-disable new-cap */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'; // eslint-disable-line import/no-unresolved
import { TYPES } from '../../../types';
import { ioc } from '../inversify.config';
import { ICrewMemberContainer } from '../../interfaces/crewMemberContainer';
const crewMember = ioc.get<ICrewMemberContainer>(TYPES.CrewmemberContainer);

Given('I am on the homepage', () => {
  crewMember.visit();
});

When(`I press {string} on the {string} section`, (direction, position) => {
  crewMember.moveOnePosition(direction, position);
});

Then(`I should see the crewmember container with all its assets`, () => {
  crewMember.checkCrewmemberContainerAssets();
});

Then(`I should see that asset on {string}`, asset => {
  crewMember.assetInColumn(asset);
});

Then(`the {string} assets should not show a {string} button`, (position, direction) => {
  crewMember.assertAssetOn(position, direction);
});