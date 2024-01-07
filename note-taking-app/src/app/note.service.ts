// src/app/note.service.ts

import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private notesSubject = new BehaviorSubject<Note[]>([]);

  constructor() { }

  getNotes() {
    return this.notesSubject.asObservable();
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesSubject.next([...this.notes]);
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.notesSubject.next([...this.notes]);
  }
}
