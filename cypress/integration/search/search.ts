/* eslint-disable new-cap */
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'; // eslint-disable-line import/no-unresolved
import { TYPES } from '../../../types';
import { ioc } from '../inversify.config';
import { ISearch } from '../../interfaces/search';
const search = ioc.get<ISearch>(TYPES.search);
import { ICrewMemberContainer } from '../../interfaces/crewMemberContainer';
const crewMember = ioc.get<ICrewMemberContainer>(TYPES.CrewmemberContainer);

Given('I search {string} in names', name => {
  crewMember.visit();
  search.nameSearch(name);
});

Given(`I search {string} in city`, city => {
  crewMember.visit();
  search.citySearch(city)
});

Then(`I should see {string}`, fullName => {
  search.fullNameAssert(fullName)
});