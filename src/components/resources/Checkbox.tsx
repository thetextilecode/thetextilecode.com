export interface ICheckbox {
  filters?: { checked?: boolean; name?: string; value: string }[];
  handleCheckBox?: any;
  heading?: string;
}

const CheckBox = ({ filters, handleCheckBox }: ICheckbox) => {
  return (
    <>
      {filters.map((item, id) => (
        <>
          <input
            type="checkbox"
            className="form-check-input"
            name={item.name}
            value={item.value}
            checked={item.checked}
            onChange={(e) => handleCheckBox(e)}
            id={item.value}
          />
          <label
            className="form-check-label"
            htmlFor={item.value}
            style={{ textTransform: 'capitalize' }}
          >
            {' '}
            {item.value}
          </label>
          <br />
        </>
      ))}
    </>
  );
};

export default CheckBox;
