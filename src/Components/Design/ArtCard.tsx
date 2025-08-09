import './Design.scss'

interface ArtCardProps {
  imgSrc: string;
  imgCaption: string;
}

const ArtCard = ({ imgSrc, imgCaption }: ArtCardProps) => {
  return (
    <div className="artCard">
      <img src={imgSrc}></img>
      <p>{imgCaption}</p>
    </div>
  );
};

export default ArtCard;
