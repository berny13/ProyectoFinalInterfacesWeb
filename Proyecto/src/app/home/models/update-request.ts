import { Permiso } from '../models/permiso-home';

export class UpdateRequest {

    constructor(
        public id: number,
        public nombre: string,
        public campoIdColumna: number,
        public campoIdTarjeta: number,
        public campoIdOrden: number,
        public sentidoOrden: boolean,
        public campoIdDescripcion: number,
        public campoIdEtiqueta: number,
        public campoIdFecha: number,
        public campoIdUsuario: number,
        public permisos: Array<Permiso>,
    ) {

    }

}
