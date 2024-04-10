import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

// interface Paginacion<TipoDeDato, Tipo2 = any, Tipo3 = any> {
//   datos: TipoDeDato[];
//   page: number;
//   total: number;
// }

// const user: Paginacion<IUser, UserRole> = {
//   datos: [],
// };

@Directive({
  selector: '[appRepetir]',
})
export class RepetirDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    for (let index = 0; index < 5; index++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}