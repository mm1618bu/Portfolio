// src/app/add-note/add-note.component.ts

import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note: Note = { id: 0, title: '', content: '' };

  constructor(private noteService: NoteService) { }

  addNote() {
    if (this.note.title && this.note.content) {
      this.noteService.addNote({ ...this.note, id: Date.now() });
      this.note = { id: 0, title: '', content: '' };
    }
  }
}
