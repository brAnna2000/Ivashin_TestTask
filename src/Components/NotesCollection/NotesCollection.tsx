interface NotesCollectionProps {
    notesList: string[];
    change: boolean[];
    valueChange: string;
    setValueChange: (e: string) => void;
    editNote: (index: number, valueChange: string) => void;
    deleteNote: (index: number) => void;
}

const NotesCollection: React.FC<NotesCollectionProps> = ({ notesList, change, valueChange, setValueChange, editNote, deleteNote }) => {
    return (
        <ul className='listBox'>
            {notesList.length > 0 ? notesList.map((item, index) =>
                <div key={index} className='notes'>
                    {change[index] === true ? 
                    <form>
                        <textarea className='change' value={valueChange} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValueChange(e.target.value)}></textarea>
                    </form> 
                    : 
                    <li className='someNote'>{item}</li>}
                    <button onClick={() => editNote(index, valueChange)} className='changeNote'>Изменить</button>
                    <button onClick={() => deleteNote(index)} className='delNote'>Удалить</button>
                </div>                    
            ) 
            : 
            null}
        </ul>
    );
};
  
export default NotesCollection;