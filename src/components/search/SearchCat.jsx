const SearchCat = () => {
  return (
    <select
      required
      className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
    >
      <option value="" disabled selected>
        Select a option
      </option>
      <option value="option1">HTML</option>
      <option value="option2">JavaScript</option>
      <option value="option3">Tailwind CSS</option>
    </select>
  );
};

export default SearchCat;
