const FriendsCard = ({ friends }) => {
  const {
    name,
    picture,
  
    days_since_contact,
    status,
    tags,
    
  } = friends;

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white px-14 py-8 rounded-lg text-center space-y-2">

<div className="w-[200px] h-[200px] rounded-full">
        <img src={picture} alt={name,`image`} />

</div>

        <span className="font-bold text-xl  text-black text-center">{name}</span>
        <p className="font-semibold text-gray-400 text-center">
          {days_since_contact}d ago
        </p>

      <div className="flex gap-3">
        { tags.map((tag,ind)=> <p key={ind} className="font-semibold text-gray-600 text-center text-sm bg-green-200 px-3 rounded-2xl py-[1px]">{tag}</p>)
        }
      </div>
        <p
          className={`font-semibold text-white text-center text-xl bg-red-500 px-3 rounded-2xl py-[1px] ${status === "overdue" ? "bg-amber-300" : ""}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default FriendsCard;
