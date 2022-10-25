function Select({ datas, onChange }) {
    return (
        <select name="select" id="select" onChange={onChange}>
            {datas.map((data, index) => (
                <option key={index} value={data.value}>
                    {data.display}
                </option>
            ))}
        </select>
    );
}

export default Select;
