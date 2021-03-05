import { Component, OnInit, EventEmitter, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { inProgress } from './models/inProgress.model';
import { done } from './models/done.model';
import { todo } from './models/todo.model';
import { Router } from '@angular/router';
import { Login } from '../service/login.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [Login]
})
export class HomeComponent implements OnInit {

  public _replyForm!: NgForm;
  public _replyInput!: ElementRef;
  public _replyInput1!: ElementRef;
  public _replyForm1!: NgForm;
  public _replyForm2!: NgForm;
  public _replyInput2!: ElementRef;
  private _replyFormSuscription!: Subscription;
  public tarjetainProgress!:string;
  public tarjetadone!: string;
  public tarjetatodo!: string;
  public isLogged = false;
  public user$ : Observable<any> = this.authSvc.afAuth.user;

  @ViewChild('replyForm', { static: false })
  set replyForm(content: NgForm) {
    this._replyForm = content;
  }
  @ViewChild('replyForm1', { static: false })
  set replyForm1(content: NgForm) {
    this._replyForm1 = content;
  }

  @ViewChild('replyInput', { static: false })
  set replyInput(content: ElementRef) {
    this._replyInput = content;
  }
  @ViewChild('replyInput1', { static: false })
  set replyInput1(content: ElementRef) {
    this._replyInput1 = content;
  }

  @ViewChild('replyForm2', { static: false })
  set replyForm2(content: NgForm) {
    this._replyForm2 = content;
  }

  @ViewChild('replyInput2', { static: false })
  set replyInput2(content: ElementRef) {
    this._replyInput2 = content;
  }

 


  addtodo: todo[] = [];
  adddone: done[] = [];
  addinprogress: inProgress[] = [];

  tarjetatodoadd(){
    let todos = new todo(this.tarjetatodo);
    this.addtodo.push(todos);
    this.limpiar();
    
  }

  tarjetadoneadd(){
    let donees = new done(this.tarjetadone);
    this.adddone.push(donees);
    this.limpiar2();
    
  }

  tarjetainprogressadd(){
    let inprogresso = new inProgress(this.tarjetainProgress);
    this.addinprogress.push(inprogresso);
    this.limpiar1();
    
  }

  drop(event: CdkDragDrop<string[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }



  control = new FormControl();
  streets: string[] = ['tablero', 'cards', 'usuarios', 'home'];
  filteredStreets!: Observable<string[]>;

  clear() {
    this.streets = [''];
  }

  onLogout(){
    this.authSvc.logout();
  }
 async ngOnInit() {
   

    console.log('Navbar');
    const user =  await this.authSvc.getCurrentUser()
    if (user) {
      this.isLogged = true;
      console.log('user->', user);
      
    }
    
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

limpiar(): void{
 this.tarjetatodo= '';
}
limpiar1(): void{
  this.tarjetainProgress= '';
 }
 limpiar2(): void{
  this.tarjetadone= '';
 }

 deletetodo(tarjetatodo:any){
   this.addtodo.splice(this.addtodo.indexOf(tarjetatodo),1);
 }
 deleteinprogress(tarjetainprogress:any){
  this.addinprogress.splice(this.addinprogress.indexOf(tarjetainprogress),1);
}
deletedone(tarjetadone:any){
  this.adddone.splice(this.adddone.indexOf(tarjetadone),1);
}
  constructor(
    breakpointObserver: BreakpointObserver, 
    private router: Router,
    private authSvc: Login
    ) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {

      }
    });
  }
  
  panelOpenState = false;

  noClick(ev: MouseEvent): void {
    ev.stopPropagation();
  }

  addEmoji($event: any): void {
    const input = this._replyInput.nativeElement;
    (input as HTMLElement).focus();
    if (input.value) {
      this._replyForm.form.value.message = input.value + $event.emoji.native;
      input.value = this._replyForm.form.value.message;
    } else {
      input.value = $event.emoji.native;
      this._replyForm.form.value.message = $event.emoji.native;
    }
  }

  reply(): void{
    if (!this._replyForm.form.value.message || (this._replyForm.form.value.message === '')) {
      
    } return;
  }
  reply1(): void{
    if (!this._replyForm1.form.value.message || (this._replyForm1.form.value.message === '')) {
      
    } return;
  }
  reply2(): void{
    if (!this._replyForm2.form.value.message || (this._replyForm2.form.value.message === '')) {
      
    } return;
  }

  addEmoji1($event: any): void {
    const input = this._replyInput1.nativeElement;
    (input as HTMLElement).focus();
    if (input.value) {
      this._replyForm1.form.value.message = input.value + $event.emoji.native;
      input.value = this._replyForm1.form.value.message;
    } else {
      input.value = $event.emoji.native;
      this._replyForm1.form.value.message = $event.emoji.native;
    }
  }

  addEmoji2($event: any): void {
    const input = this._replyInput2.nativeElement;
    (input as HTMLElement).focus();
    if (input.value) {
      this._replyForm2.form.value.message = input.value + $event.emoji.native;
      input.value = this._replyForm2.form.value.message;
    } else {
      input.value = $event.emoji.native;
      this._replyForm2.form.value.message = $event.emoji.native;
    }
  }
  irprincipal(){
    this.router.navigate(['/']);
  }
}










