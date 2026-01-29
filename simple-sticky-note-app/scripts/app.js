//CREATE NOTE FUNCTION
let collectData=[];
const createNote=function(){
  //CREATING ALL ELEMENTS
  const noteContainer=document.createElement('div');
  const headerSection=document.createElement('div');
  const saveIcon=document.createElement('i');
  const trashIcon=document.createElement('i');
  const contentSection=document.createElement('div');
  const textArea=document.createElement('textarea');
  //ADD ALL CLASSES
  noteContainer.className='note-container';
  headerSection.className='header-section';
  saveIcon.classList.add('fa-solid','fa-floppy-disk','save-btn');
  trashIcon.classList.add('fa-solid','fa-trash','delete-btn');
  contentSection.className='content-section';
  textArea.setAttribute('name','noteText');
  textArea.setAttribute('id','text-area');
  //PUSH ALL CONTAINERS IN DOM
  noteContainer.append(headerSection,contentSection);
  headerSection.append(saveIcon,trashIcon);
  contentSection.append(textArea);
  //RETURN NOTE CONTAINER
  return noteContainer;
}
// ADD NOTES IN DOM
const addNote=function(currentNote){
  const mainSection=document.querySelector('.main-section');
  mainSection.appendChild(currentNote);
  deleteElement(currentNote);
  saveElement(currentNote);
}

const addBtn=document.querySelector('.add-btn button');
addBtn.addEventListener('click',function(){
  addNote(createNote());
},false);

// DELETE NOTE
const deleteElement=function(addedNote){
  const deleteBtn=addedNote.querySelector('.delete-btn');
  deleteBtn.addEventListener('click',function(){
    addedNote.remove();
  },false);
}

// SAVE ELEMENT
const saveElement=function(addedNote){
  const saveBtn=addedNote.querySelector('.save-btn');
  saveBtn.addEventListener('click',function(){
    const content=addedNote.querySelector('#text-area').value;
    if(content===''){
      alert('Write A Note!')
    }else{
      collectData.push(content);
    }
  },false);
}