import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iCharacter } from 'src/app/models/character';
import { initialState } from 'src/app/state/character.reducer/character.reducer';
import Swal from 'sweetalert2';

import { CreateCharComponent } from './create-char.component';

describe('CreateCharComponent', () => {
  const mockCharacter: iCharacter = {
    name: 'testName',
    life: 'testLife',
    strength: 'testStrenght',
    intelligence: 'testIntelligence',
    constitution: 'testConstitution',
  };
  const mockGame = {
    title: '',
    creator: '',
    description: '',
    image: '',
    characters: [],
    template: {
      name: '',
      life: '',
      strength: '',
      intelligence: '',
      constitution: '',
    },
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
      const fixture = TestBed.createComponent(CreateCharComponent);
      const component = fixture.componentInstance;
      spyOn(component.store, 'select').and.returnValue(
        of({ user: {}, token: 'token' })
      );
      component.token = 'token';
      component.idGame = '1';
      spyOn(component.apiGame, 'getOneGame').and.returnValue(of(mockGame));
      fixture.detectChanges();
      expect(component.apiGame.getOneGame).toHaveBeenCalled();
    });
  });
  describe('When calling handleSubmit method with correct form values', () => {
    it('Should be called apiCharacter.addCharacter and throw a success alert', () => {
      const fixture = TestBed.createComponent(CreateCharComponent);
      const component = fixture.componentInstance;
      component.characterForm.setValue({
        name: 'testName',
        life: 'testLife',
        strength: 'testStrenght',
        intelligence: 'testIntelligence',
        constitution: 'testConstitution',
      });
      expect(component.characterForm.valid).toEqual(true);

      spyOn(component.apiCharacter, 'addCharacter').and.returnValue(
        of(mockCharacter)
      );

      spyOn(Swal, 'fire');
      fixture.detectChanges();
      component.handleSubmit();
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
});
