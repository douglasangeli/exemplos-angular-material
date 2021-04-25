
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NavegacaoComponent } from './navegacao.component';

describe('NavegacaoComponent', () => {
  let component: NavegacaoComponent;
  let fixture: ComponentFixture<NavegacaoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [NavegacaoComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
