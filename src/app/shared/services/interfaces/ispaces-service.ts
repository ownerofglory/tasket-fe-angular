import { Observable } from 'rxjs';
import { Space } from '../../models/space.model';

export interface ISpacesService {
    getSpaces(): Observable<Space[]>;
}
