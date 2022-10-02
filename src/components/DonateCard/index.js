import Button from '../Button';
import './DonateCard.scss';

function DonateCard() {
    return (
        <div className="donate-card">
            <span className='donate-card__title'>To donate?</span>
            <p className='donate-card__content'>Buy us a cup of coffee</p>
            <Button text='Donate'></Button>
        </div>
    );
}

export default DonateCard;
