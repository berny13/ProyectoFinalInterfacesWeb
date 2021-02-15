import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { TEXTOS } from '@const/textos';
import { GLOBAL } from '@general/global';
import { KEYS } from '@general/keys';
import { PeticionesService } from '@general/peticiones.service';
import { VAR_FUNC } from '@general/var-func';
import { KanbanService } from '@home/mant/kanbanComponent/kanban.service';
import { MantService } from '@home/mant/mant.service';
import { SesionService } from '@sesion/sesion.service';
import { ConfKanbanComponent } from '../../../home.';
import { KanbanConfService } from '../../conf.service';
import { KanbanAddRequest } from '../../models/add-request';
import { KanbanDeleteRequest } from '../../models/delete-request';
import { KanbanUpdateRequest } from '../../models/update-request';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
  }

  @ViewChild('menuBorrarTrigger', { read: MatMenuTrigger, static: false }) menuBorrarTrigger: MatMenuTrigger;
  private parent: ConfKanbanComponent;

  constructor(
    public _kanbanConfService: KanbanConfService,
    public _kanbanService: KanbanService,
    private _peticionesService: PeticionesService,
    public _sesionService: SesionService,
    public _mantService: MantService
  ) { }

  add(): void {
    const callback = (response: any) => {
      if (response.error && (response.error !== null)) {
        VAR_FUNC.showSnackBar(response.error);
      }
      else {
        VAR_FUNC.showSnackBar(TEXTOS.kanbanCreadoExito);
        this._kanbanService.confKanbanDialogRef.close();
      }
    };

    this._peticionesService.exec(
      GLOBAL.serviceMantKanbanAdd,

      new KanbanAddRequest(
        this._mantService.sel.id,
        this._kanbanConfService.nombreFormControl.value,
        this._kanbanConfService.kanban.campoIdColumna,
        this._kanbanConfService.kanban.campoIdTarjeta,
        this._kanbanConfService.kanban.campoIdOrden,
        this._kanbanConfService.kanban.sentidoOrden,
        this._kanbanConfService.kanban.campoIdDescripcion,
        this._kanbanConfService.kanban.campoIdEtiqueta,
        this._kanbanConfService.kanban.campoIdFecha,
        this._kanbanConfService.kanban.campoIdUsuario,
        this._kanbanConfService.permisosGrant
      ),

      callback
    );
  }

  update(): void {
    const callback = (response: any) => {
      if (response.error && (response.error !== null)) {
        VAR_FUNC.showSnackBar(response.error);
      }
      else {
        VAR_FUNC.showSnackBar(TEXTOS.kanbanModificadoExito);
        this._kanbanService.confKanbanDialogRef.close();
      }
    };

    this._peticionesService.exec(
      GLOBAL.serviceMantKanbanUpdate,

      new KanbanUpdateRequest(
        this._kanbanConfService.kanban.id,
        this._kanbanConfService.nombreFormControl.value,
        this._kanbanConfService.kanban.campoIdColumna,
        this._kanbanConfService.kanban.campoIdTarjeta,
        this._kanbanConfService.kanban.campoIdOrden,
        this._kanbanConfService.kanban.sentidoOrden,
        this._kanbanConfService.kanban.campoIdDescripcion,
        this._kanbanConfService.kanban.campoIdEtiqueta,
        this._kanbanConfService.kanban.campoIdFecha,
        this._kanbanConfService.kanban.campoIdUsuario,
        this._kanbanConfService.permisosGrant
      ),

      callback

    );
  }

  delete(): void {
    const callback = (response: any) => {
      if (response.error && (response.error !== null)) {
        VAR_FUNC.showSnackBar(response.error);
      }
      else {
        VAR_FUNC.showSnackBar(TEXTOS.kanbanElminiadoExito);
        this._mantService.kanbanSel = undefined;
        this._kanbanService.confKanbanDialogRef.close();
      }
    };

    this._peticionesService.exec(
      GLOBAL.serviceMantKanbanDelete,

      new KanbanDeleteRequest(
        this._mantService.kanbanSel.id
      ),

      callback

    );
  }

  cancelaMenuBorrar(): void {
    this.menuBorrarTrigger.closeMenu();
  }

  clickPreventCloseMenu(ev: Event): void {
    ev.stopPropagation();
  }

  onMenuFinalizarKeydown(ev: KeyboardEvent): void {
    if (ev.key === KEYS.enter) {
      ev.preventDefault();
      this.update();
    }
    else if (ev.key === KEYS.escape) {
      ev.preventDefault();
    }

    ev.stopPropagation();
  }

  onMenuBorrarKeydown(ev: KeyboardEvent): void {
    if (ev.key === KEYS.enter) {
      ev.preventDefault();
      this.delete();
    }
    else if (ev.key === KEYS.escape) {
      ev.preventDefault();
      this.cancelaMenuBorrar();
    }

    ev.stopPropagation();
  }

  cancelar(): void {
    this._kanbanService.confKanbanDialogRef.close();
  }

}


