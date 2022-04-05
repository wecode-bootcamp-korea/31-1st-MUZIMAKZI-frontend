import './SliderButton.scss';

export default function SlideButton({ direction, onClick }) {
  return <button onClick={onClick} className={`btn${direction}`} />;
}
