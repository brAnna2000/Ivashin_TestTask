import {useState} from 'react';

interface TagsSearchProps {
    searchTag: (e: React.MouseEvent<HTMLButtonElement>, tagValue: string, setError: any) => void;
}

const TagsSearch: React.FC<TagsSearchProps> = ({ searchTag }) => {
    const [tagValue, setTagValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    return (
        <>
            <form className="searchTag">
                <input placeholder="Искать заметку по тегу" value={tagValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTagValue(e.target.value)} />
                <button className="tagButton" onClick={(e: React.MouseEvent<HTMLButtonElement>) => searchTag(e, tagValue, setError)}>Искать</button>
            </form>
            <p>{error}</p>
        </>
    );
};
  
export default TagsSearch;