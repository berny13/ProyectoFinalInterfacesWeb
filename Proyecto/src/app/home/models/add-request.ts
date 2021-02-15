import { PermisoKanban } from '@home/models/permiso-kanban';

export class KanbanAddRequest {

    constructor(
        public mantId: number,
        public nombre: string,
        public campoIdColumna: number,
        public campoIdTarjeta: number,
        public campoIdOrden: number,
        public sentidoOrden: boolean,
        public campoIdDescripcion: number,
        public campoIdEtiqueta: number,
        public campoIdFecha: number,
        public campoIdUsuario: number,
        public permisos: Array<PermisoKanban>
    ) {

    }

}
