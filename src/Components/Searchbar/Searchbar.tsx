import {useState} from 'react';

interface SearchBarProps {
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>, inputValue:string) => void;
}

const Searchbar: React.FC<SearchBarProps> = ({ handleSubmit }) => {
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <form className="someText">
            <textarea className='form' value={inputValue} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)} placeholder="Введите текст"></textarea>
            <button className="save" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {handleSubmit(e, inputValue); setInputValue('')}}>Сохранить</button>
        </form>
    );
};
  
export default Searchbar;