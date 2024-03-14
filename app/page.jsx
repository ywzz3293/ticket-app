import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5 ">
      <div className="">
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
