import React, { useEffect, useState } from 'react';
import './Service.css';

export default function Service() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState();
    const [searchData, setSearchData] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    // const [indexOfLastRecord, setIageNumber] = useState(1);
    const [itemsInOnePage, setItemsInOnePage] = useState(10);

    useEffect(() => {
        setLoading(true)
        fetch('https://dummyapi.online/api/pokemon')
            .then((response) => response.json())
            .then((data) => {
                // setData(data);
                setData(data)
                setSearchData(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    function searchInp(event) {
        const searchString = event.target.value;
        const result = data.filter(({ type }) => type.toLowerCase().includes(searchString));
        setSearchData(result ? result : data);
    }

    const getRecords = () => {
        const indexOfLastRecord = pageNumber * itemsInOnePage;
        const indexOfFirstRecord = indexOfLastRecord - itemsInOnePage;
        return searchData?.slice(indexOfFirstRecord, indexOfLastRecord) || [];
    }
    const allPages = () => {
        return Math.ceil(data?.length / itemsInOnePage) || [];
    }

    const pageBtn = () => {
        const pageBtn = []
        for (let index = 1; index <= allPages(); index++) {
            pageBtn.push(index);
        }
        return pageBtn;
    }


    function prev() {
        setPageNumber(pageNumber - 1)
    }

    function next() {
        setPageNumber(pageNumber + 1)
    }

    // console.log(error);
    // console.log(data);
    return (
        <div>
            {loading ? <p>Loading...</p> : ""}
            <input type='text' id='search' className='search' onChange={searchInp} />

            <div className="allCard">
                {getRecords().map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.image_url} height={100} width={100} alt={item.type} />
                        <h3>Name: {item.type}</h3>
                        <div>Id: {item.id}</div>
                        <div>Hitpoints: {item.hitpoints}</div>
                    </div>
                ))}
            </div>

            <div className='pagination'>
                <select id='select' onChange={(e) => setItemsInOnePage(e.target.value)}>
                    <option value="5" key="5" >5</option>
                    <option value="10" key="10" selected="selected">10</option>
                    <option value="15" key="15">15</option>
                    <option value="20" key="20">20</option>
                </select>
                <button onClick={prev} disabled={pageNumber === 1}>Prev</button>
                {pageBtn().map((pageBtn) =>
                    <button onClick={() => setPageNumber(pageBtn)} key={pageBtn} className={pageNumber === pageBtn ? "active" : ''}>{pageBtn}</button>
                )}
                <button onClick={next} disabled={pageNumber === allPages}>Next</button>
            </div>

        </div>
    );
}
