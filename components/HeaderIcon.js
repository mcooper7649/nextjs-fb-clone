function HeaderIcon({ Icon, active }) {
  return (
    <div
      className="flex rounded-xl items-center cursor-pointer
     md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active: border-blue-500 group"
    >
      <Icon
        className={`text-gray-500 h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
