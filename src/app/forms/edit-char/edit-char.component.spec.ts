import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { iCharacter } from 'src/app/models/character';
import Swal from 'sweetalert2';

import { EditCharComponent } from './edit-char.component';

describe('EditCharComponent', () => {
  const mockCharacter: iCharacter = {
    name: 'testName',
    life: 'testLife',
    strength: 'testStrength',
    intelligence: 'testIntelligence',
    constitution: 'testConstitution',
    idGame: '1',
  };
  let mockInitialState = {
    users: {
      user: {
        name: '',
        email: '',
        password: '',
        role: '',
        characters: [],
        games: [],
      },
      token: '',
    },
    characters: {
      characters: [],
    },
    games: {
      games: [],
    },
  };
  let initialState = mockInitialState;
  let component: EditCharComponent;
  let fixture: ComponentFixture<EditCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        EditCharComponent,
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
      declarations: [EditCharComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When loading edit character page', () => {
    it('Should called apiGame.getOneGame', () => {
      const fixture = TestBed.createComponent(EditCharComponent);
      const component = fixture.componentInstance;
      spyOn(component.apiCharacter, 'getOneCharacter').and.returnValue(
        of(mockCharacter)
      );

      fixture.detectChanges();
      expect(component.apiCharacter.getOneCharacter).toHaveBeenCalled();
    });
  });
  describe('When calling handleEdit method', () => {
    it('Should called Swal.fire and store.dispatch', () => {
      component.characterForm.setValue({
        name: 'testName',
        life: 'testLife',
        strength: 'testStrength',
        intelligence: 'testIntelligence',
        constitution: 'testConstitution',
        idGame: '1',
      });
      spyOn(component.apiCharacter, 'updateCharacter').and.returnValue(
        of(mockCharacter)
      );
      spyOn(Swal, 'fire');
      spyOn(component.store, 'dispatch');
      component.handleEdit();
      expect(Swal.fire).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalled();
    });
  });
});
