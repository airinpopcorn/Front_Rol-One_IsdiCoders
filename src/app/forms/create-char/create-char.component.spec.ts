import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { ApiGame } from 'src/app/services/game.api';
import { initialState } from 'src/app/state/character.reducer/character.reducer';
import Swal from 'sweetalert2';

import { CreateCharComponent } from './create-char.component';

describe('CreateCharComponent', () => {
  const mockGame = {
    title: '',
    creator: '',
    description: '',
    image: '',
    characters: [],
    template: { name: '', intelligence: '' },
  };
  let component: CreateCharComponent;
  let fixture: ComponentFixture<CreateCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCharComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        CreateCharComponent,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When loading create character page', () => {
    it('Should called apiGame.getOneGame', () => {
      spyOn(component.store, 'select').and.returnValue(
        of({ user: {}, token: 'token' })
      );
      component.token = 'token';
      component.idGame = '1';
      spyOn(component.apiGame, 'getOneGame').and.returnValue(of(mockGame));
      spyOn(component.fb, 'group').and.returnValue({} as FormGroup);

      expect(component.characterForm).toBeTruthy();
    });
  });
  describe('When calling handleSubmit method with correct form values', () => {
    it('Should be called apiCharacter.addCharacter and throw a success alert', () => {
      component.characterForm.controls['name'].setValue('testName');
      component.characterForm.controls['intelligence'].setValue('4');
      fixture.detectChanges();
      component.characterForm.valid;
      spyOn(component.apiCharacter, 'addCharacter');
      spyOn(Swal, 'fire');
      fixture.detectChanges();
      component.handleSubmit();
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
