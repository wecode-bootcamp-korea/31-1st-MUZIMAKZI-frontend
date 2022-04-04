// import { ReactComponent as ArrowIcon } from '../../assets/icons/ic_arrow.svg';
import './SliderButton.scss';

export default function SlideButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
      {/* width="16" height="16" fill="#333" /> */}
    </button>
  );
}
