interface TagsCollectionProps {
    tagsList: string[];
    deleteTag: (index: number) => void;
}

const TagsCollection: React.FC<TagsCollectionProps> = ({ tagsList, deleteTag }) => {
    return (
        <ul className='containerNote'>
            {tagsList.length > 0 ? tagsList.map((item, index)=>
                <div key={index} className='tags'>
                    <li className='someTag'>{item}</li>
                    <button onClick={() => deleteTag(index)} className='delTag'>Удалить тег</button>
                </div>
            )
            : 
            null}
        </ul>
    );
};
  
export default TagsCollection;