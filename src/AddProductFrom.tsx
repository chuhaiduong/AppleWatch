import {useState} from 'react'

type TProps ={
    onAddProduct:(product: {name:string}) =>void;
};
const AddProductFrom = (props:TProps) => {
    const [valueInput,setValueInput] = useState<string>("");

    const onHandleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setValueInput(e.target.value);
    };

    const onHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onAddProduct({name:valueInput});
    };

    return (
        <form onSubmit = {onHandleSubmit}>
            {valueInput}
            <input type="text" onChange={onHandleChange} />
            <button type="submit">ADD</button>
        </form>   
    );
};

export default AddProductFrom;
