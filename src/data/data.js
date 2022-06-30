import React,{useState, useEffect} from 'react';

const Data = () =>{
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:80/ico/vypsani.php")
        .then(res => res.json())
        .then(
            (result) => {
                setItem(result);
            }
         )
    },[])
    return (
        <div className="row">
                <table class="table table-striped table-dark">
                    <thead className='thead-dark'>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">IČO</th>
                    <th scope="col">Název</th>
                    <th scope="col">Město</th>
                    <th scope="col">Ulice</th>
                    <th scope="col">Číslo Domovní</th>
                    <th scope="col">Číslo Orientační</th>
                    <th scope="col">Datum uložení</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            item.map(item=>(
                                <tr key={item.ID}>
                                    <td>{item.ID}</td>
                                    <td>{item.ico}</td>
                                    <td>{item.nazev}</td>
                                    <td>{item.mesto}</td>
                                    <td>{item.ulice}</td>
                                    <td>{item.cisloDomovni}</td>
                                    <td>{item.cisloOrientacni}</td>
                                    <td>{item.datum}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default Data;