// eslint-disable-next-line react/prop-types
export default function TicketType({ price, type, date }) {
  return (
    <div className="p-3 bg-darkgreen rounded-xl flex flex-col gap-3 w-[161px] border-2 border-deepgreen">
      <p className="text-white font-roboto text-2xl leading-[110%]">{price}</p>
      <div>
        <p className="font-roboto leading-[150%] text-base text-grey">{type}</p>
        <p className="font-roboto leading-[150%] text-base text-grey">{date}</p>
      </div>
    </div>
  );
}
