import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import Swal from 'sweetalert2';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  const mockCharacter = {
    _id: '1',
    name: '',
    life: '',
    strength: '',
    intelligence: '',
    constitution: '',
    image: '',
  };
  let mockInitialState = {
    users: {
      user: {
        name: '',
        email: '',
        password: '',
        role: '',
        characters: [mockCharacter],
        games: [],
      },
      token: '',
    },
    characters: {
      characters: [
        {
          _id: '1',
          name: '',
          life: '',
          strength: '',
          intelligence: '',
          constitution: '',
        },
      ],
    },
    games: {
      games: [
        {
          _id: '1',
          title: '',
          creator: '',
          description: '',
          image: '',
          characters: [],
          template: {},
        },
      ],
    },
  };
  let initialState = mockInitialState;
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [CharacterDetailComponent],
      providers: [
        CharacterDetailComponent,
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

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    component.character = {
      _id: '1',
      name: '',
      life: '',
      strength: '',
      intelligence: '',
      constitution: '',
      image: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('When character detail page is loaded', () => {
    it('Should called getOneCharacter method from apiCharacter', () => {
      const fixture = TestBed.createComponent(CharacterDetailComponent);
      const component = fixture.componentInstance;
      spyOn(component.apiCharacter, 'getOneCharacter').and.returnValue(
        of(mockCharacter)
      );
      fixture.detectChanges();
    });
  });
  describe('When handleDelete is called', () => {
    it('Should be called Swal.fire', () => {
      spyOn(component.apiCharacter, 'deleteCharacter').and.returnValue(
        of(mockCharacter)
      );
      spyOn(Swal, 'fire');
      fixture.detectChanges();
      component.handleDelete();
      expect(Swal.fire).toHaveBeenCalled();
    });
  });
  describe('When handleUpdate is called', () => {
    it('Should navigate to edit-character page', () => {
      spyOn(component.router, 'navigate');
      fixture.detectChanges();
      component.handleUpdate();
      expect(component.router.navigate).toHaveBeenCalled();
    });
  });
});
