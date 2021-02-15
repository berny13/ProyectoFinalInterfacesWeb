import { PermisoKanban } from '../models/permiso-home';

export class PermisoConTag extends PermisoKanban {

    constructor(
        public usuarioId: number,
        public usuarioGrupoId: number,
        public tipo: string,
        public tag: string
    ) {
        super(
            usuarioId,
            usuarioGrupoId,
            tipo
        );
    }

}
