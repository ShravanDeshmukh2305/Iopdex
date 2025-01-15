const InputField = ({ label, type = "text", value, onChange }) => {
    return (
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>
    );
  };
  
  export default InputField;
  