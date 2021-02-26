import { Component, OnInit, EventEmitter, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatBottomSheet, MatBottomSheetRef, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public _replyForm!: NgForm;
  public _replyInput!: ElementRef;
  public _replyInput1!: ElementRef;
  public _replyForm1!: NgForm;
  public _replyForm2!: NgForm;
  public _replyInput2!: ElementRef;
  public tasks!: [];
  private _replyFormSuscription!: Subscription;

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

 


  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  inProgress = [
    'arranca proyecto',
    'estudiar mas',
    'hacer nada'

  ];

  drop(event: CdkDragDrop<string[], string[]>) {
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
  ngOnInit() {
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

   /*agregarCard1(){
     this.card = this.card;
     
   } */
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {

      }
    });

    this.tasks = [];
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
    if (!this._replyForm1.form.value.message || (this._replyForm1.form.value.message === '')) {
      
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
}










