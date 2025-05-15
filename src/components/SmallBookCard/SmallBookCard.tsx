import "./SmallBookCard.scss";

type SmallBookCardProps = {
  img: string;
  name: string;
};

function BookCard({ img, name }: SmallBookCardProps) {
  return (
    <div className="small-book-card">
      <img src={img} alt={name} className="small-book-card-image" />
      <div className="small-book-card-info">
        <h3 className="small-book-card-name">{name}</h3>
      </div>
      {/* <button className="delete-icon">
        delete
      </button> */}
    </div>
  );
}

export default BookCard;