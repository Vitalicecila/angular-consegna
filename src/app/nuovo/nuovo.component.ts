import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})
export class NuovoComponent {
  @Output() newPostEvent = new EventEmitter<Object>();

  createPost(titolo: string, corpo: string, imp: boolean) {
    if (titolo != '') {
      this.newPostEvent.emit({ titolo, corpo, imp });
    } else {
      alert('Il titolo non può essere vuoto');
    }
  }
}
