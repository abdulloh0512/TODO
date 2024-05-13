const Filter = () => {
  return (
    <select className="select select-bordered w-[150px] max-w-xs text-2xl bg-gray-300">
      <option>All</option>
      <option>Checked</option>
      <option>Unchecked</option>
    </select>
  );
};

export default Filter;
