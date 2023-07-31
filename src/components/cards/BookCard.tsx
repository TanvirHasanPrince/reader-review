export interface IBook {
  title: string;
  author: string;
  genre: string;
  publication_data: string;
  image: string;
  reviews: string[];
}
export interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const { title, author, image } = book;
  return (
    <div className="py-10">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
        <div className="h-96 w-full ">
          <img
            className="h-full w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">
            {title}
          </h1>
          <p className="mb-3 md:text-lg lg:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-ellipsis">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
