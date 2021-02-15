import { PermisoConTag } from './con-tag';

export interface PermisoConChildren {

    permiso: PermisoConTag;
    children?: Array<PermisoConChildren>;

}
