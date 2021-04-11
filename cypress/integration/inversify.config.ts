import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '../../types';

// interfaces
import { ICrewMemberContainer } from '../interfaces/crewMemberContainer';
import { ISearch } from '../interfaces/search';


// implementations
import { crewmember } from './crewMemberContainer/crewMemberContainer-code/crewMemberContainer';
import { search } from '../integration/search/search-code/search';


const ioc = new Container();

ioc.bind<ICrewMemberContainer>(TYPES.CrewmemberContainer).to(crewmember);
ioc.bind<ISearch>(TYPES.search).to(search);


export { ioc };
