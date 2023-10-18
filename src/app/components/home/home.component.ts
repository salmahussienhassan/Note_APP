import { NoteService } from './../../core/services/notes/note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  
notes:any=[]
searchInput:string=''
addNoteForm=this._FormBuilder.group({
  title:[''],
  content:['']
})

updatedNoteForm=this._FormBuilder.group({
  _id:[''],
  title:[''],
  content:['']
})

constructor(private _NoteService:NoteService,private _FormBuilder:FormBuilder){}


ngOnInit(): void {
this.handleGetNote()
  
}

handleGetNote(){
this._NoteService.getUserNotes().subscribe({
  next:(res)=>{
    this.notes=res.notes
console.log(res)
  },
  error:(err)=>{
    console.log(err)
  }

})
}

handleAddNote(form:any){
  this._NoteService.addNote(form.value).subscribe({
    next:(r)=>{
console.log(r)
this.handleGetNote()
this.addNoteForm.reset()
$('#exampleModal').modal('hide')

    },
    error:(err)=>{
      console.log(err)
    }
  })
}

handleDelete(id:any){
  this._NoteService.deleteNotes(id).subscribe({
    next:()=>{
      this.handleGetNote()
      $('#exampleModal').modal('hide')

    },
    error:(err)=>{
      console.log(err)
    }
  })
}

setupUpdateNote(form:any){
this.updatedNoteForm.patchValue(form)

}

handleUpdateNote(){
const {_id,title,content}=this.updatedNoteForm.value

  this._NoteService.updateNote({title,content},_id).subscribe({
    next:(r)=>{
      $('#updatednote').modal('hide')
      this.handleGetNote()
console.log(r)
    }
  })

}

}
