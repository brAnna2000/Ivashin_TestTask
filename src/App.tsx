import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import TagsSearch from './Components/TagsSearch/TagsSeacrh';
import NotesCollection from './Components/NotesCollection/NotesCollection';
import TagsCollection from './Components/TagsCollection/TagsCollection';
import {useState} from 'react';

const App = () => {
  const [notesList, setNotesList] = useState<string[]>([]);
  const [tagsList, setTagsList] = useState<string[]>([]);
  const [change, setChange] = useState<boolean[]>([]);
  const [valueChange, setValueChange] = useState<string>('');

  function handleSubmit(e: React.FormEvent, inputValue: string){
      e.preventDefault();
      let data = [...notesList].concat(inputValue);
      let tags = [...tagsList];

      if(inputValue.indexOf('#') !== -1 && !tags.includes(inputValue.slice(inputValue.indexOf('#'),inputValue.length))){
        tags.push(inputValue.slice(inputValue.indexOf('#'),inputValue.length))
        setTagsList(tags);
      }

      setNotesList(data);
      setChange(Array(data.length).fill(false));
  }

  function searchTag(e: React.FormEvent, tagValue: string, setError: any){
      e.preventDefault();
      setError('');
      if(tagsList.indexOf(tagValue) !== -1){
          let data = [...notesList];
          let tagIndexes = data.filter(i => i.indexOf(tagValue) !== -1);

          for (let i = 0; i <= tagIndexes.length-1; i++){
              let indx = data.indexOf(tagIndexes[i]);
              data.unshift(data[indx]);
              data.splice(indx+1,1);
          }

          setNotesList(data);
      }
      else{
          setError('тег не найден');
      }  
  }

  function deleteTag (index: number){
      let tags = [...tagsList];
      tags.splice(index,1);
      setTagsList(tags);
  };

  function editNote (index: number, valueChange: string){        
    let changeArr = [...change];
    let value = valueChange;
    let data = [...notesList];
    let tags = [...tagsList];

    if(changeArr[index] === true){

        if (value.indexOf('#') !== -1 && !tags.includes(value.slice(value.indexOf('#'),value.length))){
            let newTag = value.slice(value.indexOf('#'),value.length);
            tags.push(newTag)
            setTagsList(tags);
        }

        data[index] = value;

        setNotesList(data);
        setChange(changeArr.fill(false));
        setValueChange('');
    }
    else{
        changeArr.fill(true, index, index+1);
        setChange(changeArr);
    } 
  };

  function deleteNote (index: number){
      let posts = [...notesList];
      posts.splice(index,1);
      setNotesList(posts);
      setChange(Array(posts.length).fill(false));
  };

  return (
    <div className="App container Post">
      <Searchbar handleSubmit = {handleSubmit}/>
      <TagsSearch searchTag = {searchTag}/>
      <NotesCollection 
        notesList = {notesList} 
        change = {change} 
        valueChange = {valueChange}
        setValueChange = {setValueChange}  
        editNote = {editNote} 
        deleteNote = {deleteNote}
      />
      <TagsCollection tagsList = {tagsList} deleteTag={deleteTag}/>
    </div>
  );
}

export default App;
