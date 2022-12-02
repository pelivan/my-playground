function DeleteAnimals() {
  const deleteFromLocalStorage = () => {
    localStorage.removeItem("mammal"),
      localStorage.removeItem("fish"),
      localStorage.removeItem("birds");
  };
  return (
    <div className="mt-10">
      <button
        onClick={() => {
          console.log("Im clicked.");
          deleteFromLocalStorage();
        }}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Delete All Animals
        </span>
      </button>
    </div>
  );
}

export default DeleteAnimals;
