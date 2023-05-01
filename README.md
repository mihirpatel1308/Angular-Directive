npm i bootstrap

"node_modules/bootstrap/dist/css/bootstrap.min.css"

ng g c attribute-directive-demo

---------------------------------------
Attribute component html : 

<p [class.paragraph]="flag">This is Paragraph.</p>

<p [style.border]="'6px solid red'">This is inline style .</p>

<p [ngStyle]="{ 'font-weight': applyStyle ? 'bold' : 'normal' }">
    This is inline style condition bas.
</p>
<button (click)="applyStyle = !applyStyle">Click Me</button>

<p [ngClass]="getClass()">This is function use class biding.</p>
<button (click)="setClassFlag = !setClassFlag">Click Me</button>

<p [ngStyle]="getStyle()">This is using function bash style collection.</p>
<button (click)="setStyleFlag = !setStyleFlag">Click Me</button>

<p [ngClass]="setTextClass ? 'text-primary ' : 'text-danger paragraph'">
    This is conditions bas class biding.
</p>
<button (click)="setTextClass = !setTextClass">Click Me</button>

<hr />
<h4>NgClass with multiple conditions</h4>
<ul *ngFor="let person of people">
    <li *ngIf="true" [ngClass]="{
      'text-success': person.country === 'UK',
      'text-primary': person.country === 'USA',
      'text-danger': person.country === 'HK' || person.country === 'UAE'
    }">
        {{ person.name }} ({{ person.country }})
    </li>
</ul>
<hr />

---------------------------------------------------------
Attribute component ts : 

public flag: boolean = true;
  public setClassFlag: boolean = false;
  public setStyleFlag: boolean = false;
  public applyStyle: boolean = true;
  public setTextClass:boolean=false;
  constructor() {

  }
  getClass() {
    return { 'paragraph anotherParagraph': this.setClassFlag };
  }

  getStyle() {
    let styles = {
      // CSS property names
      'font-style': this.setStyleFlag ? 'italic' : 'normal',// italic
      'font-weight': this.setStyleFlag ? 'bold' : 'normal',// normal
      'color':  this.setStyleFlag ? 'red' : 'green',
    };
    return styles;
  }

 people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'UAE'
    }
  ];

  ----------------------------------------------------
  Attribute css - 

  .paragraph {
    color: red;
    font-size: 25px;
  }
  
  .anotherParagraph {
    background-color: red;
    color: white;
    padding: 3px;
  }
  
  p {
    font-size: 18px;
  }
  
  button {
    height: 40px;
    width: 142px;
    background-color: #008080;
    color: white;
    border: 1px solid #008080;
    padding: 2px;
    font-weight: bold;
    border-radius: 5px;
  }

  -------------------------------------------------------------

  ng g c structural-directive-demo

Import FormsModule
  --------------------------------------------------------

  Structural ts file : 

   public selectItem: string = '';
  public items: any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { id: 1, name: 'success' },
      { id: 2, name: 'info' },
      { id: 3, name: 'warning' },
      { id: 4, name: 'danger' },
      { id: 5, name: 'other' }


    ]
  }

---------------------------------------------------------------

Structural html  : 

<h1 *ngIf="true">Labels</h1>

<hr>
<h2>NgSwitch Binding</h2>

<div>
    <label *ngFor="let i of items">
        <div class="label"><input type="radio" class="label" name="items" [(ngModel)]="selectItem"
                [value]="i.name">{{i.name}} <br />
        </div> <br />
    </label>
</div>

<div [ngSwitch]="selectItem">
    <span class="label success" *ngSwitchCase="'success'">Success</span>
    <span class="label info" *ngSwitchCase="'info'">Info</span>
    <span class="label warning" *ngSwitchCase="'warning'">Warning</span>
    <span class="label danger" *ngSwitchCase="'danger'">Danger</span>
    <span class="label other" *ngSwitchCase="'other'">Other</span>
    <span class="label other" *ngSwitchDefault="'other'"> Default Other</span>


</div>

---------------------------------------------------------------------------

structural css - 

.label {
    color: black;
    padding: 8px;
    font-family: Arial;
    margin: 0 2px;
  }
  .success {background-color: #04AA6D;} /* Green */
  .info {background-color: #2196F3;} /* Blue */
  .warning {background-color: #ff9800;} /* Orange */
  .danger {background-color: #f44336;} /* Red */ 
  .other {background-color: #e7e7e7; color: black;} /* Gray */ 

  .custom-control {
    margin-bottom: 5px;
  }
  
  .custom-control label {
    font-weight: 400;
  }

  input[type="radio"] {
    &:checked {
      + label {
        border-color: blue;
        background-color: blue;
        color: white;
        margin: 0 2px;
      }
    }
  }

-------------------------------------------------------------------------------------

ng g c custom-directive-demo

---------------------------------------------

custom directive ts - 

 public color: string;

  constructor() {
    this.color = '';
  }

  public changeColor(ColorName: string) {
    this.color = ColorName;
  }

-----------------------------------------------

Custom directive html - 

<h2>Pick a highlight color</h2>
<div>
    <input type="radio" name="colors" (click)="changeColor('lightgreen')" />Green
    <input type="radio" name="colors" (click)="changeColor('yellow')" />Yellow
    <input type="radio" name="colors" (click)="changeColor('cyan')" />Cyan
</div>

<p [appHighlight]="color">Highlight me!</p>

<p [appHighlight]="color" defaultColor="violet">Highlight me too!</p>

-----------------------------------------------------------------------

ng g d directives/highlight/highlight

---------------------------------------

Highlight directive code - 

  constructor(private el: ElementRef) { }

  @Input() defaultColor = '';

  @Input('appHighlight') highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    debugger
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

-------------------------------------------------------------------

