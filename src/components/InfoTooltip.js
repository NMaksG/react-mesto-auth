import ok from '../images/ok.png';
import error from '../images/error.png';
import './InfoTooltip.css';

export default function InfoTooltip({ isOpen, onClose, isInfoTooltip }) {
  return(
  <div className={`popup ${isOpen ? 'popup_active' : ''}`}>
    <div className="popup__content popup__content_form">
      <button className="popup__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      <img className="popup__pic" src={isInfoTooltip ? ok : error} alt='' />
      <p className="popup__title popup__title_form">{
        isInfoTooltip ? 
        'Вы успешно зарегистрировались!' : 
        'Что-то пошло не так! Попробуйте ещё раз.'}</p>
    </div>
  </div>
  );
}